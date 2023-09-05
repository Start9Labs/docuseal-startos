FROM ruby:3.2.2-alpine as webpack

ENV RAILS_ENV=production
ENV NODE_ENV=production

WORKDIR /app

RUN apk add --no-cache nodejs yarn git build-base && \
    gem install shakapacker

COPY ./docuseal/package.json ./docuseal/yarn.lock ./

RUN yarn install --network-timeout 1000000

COPY ./docuseal/bin/shakapacker ./bin/shakapacker
COPY ./docuseal/config/webpack ./config/webpack
COPY ./docuseal/config/shakapacker.yml ./config/shakapacker.yml
COPY ./docuseal/postcss.config.js ./docuseal/postcss.config.js ./
COPY ./docuseal/tailwind.config.js ./docuseal/tailwind.config.js ./
COPY ./docuseal/tailwind.form.config.js ./docuseal/tailwind.form.config.js ./
COPY ./docuseal/tailwind.application.config.js ./docuseal/tailwind.application.config.js ./
COPY ./docuseal/app/javascript ./app/javascript
COPY ./docuseal/app/views ./app/views

RUN echo "gem 'shakapacker'" > Gemfile && ./bin/shakapacker

FROM ruby:3.2.2-alpine as app

ENV RAILS_ENV=production
ENV BUNDLE_WITHOUT="development:test"

WORKDIR /app

RUN apk add --no-cache build-base sqlite-dev libpq-dev mariadb-dev vips-dev vips-poppler vips-heif libc6-compat ttf-freefont ttf-liberation && cp /usr/share/fonts/liberation/LiberationSans-Regular.ttf /LiberationSans-Regular.ttf && apk del ttf-liberation

COPY ./docuseal/Gemfile ./docuseal/Gemfile.lock ./

RUN bundle update --bundler && bundle install && rm -rf ~/.bundle

COPY ./docuseal/bin ./bin
COPY ./docuseal/app ./app
COPY ./docuseal/config ./config
COPY ./docuseal/db ./db
COPY ./docuseal/log ./log
COPY ./docuseal/lib ./lib
COPY ./docuseal/public ./public
COPY ./docuseal/tmp ./tmp
COPY ./docuseal/LICENSE ./docuseal/README.md ./docuseal/Rakefile ./docuseal/config.ru ./

COPY --from=webpack /app/public/packs ./public/packs

RUN bundle exec bootsnap precompile --gemfile app/ lib/

WORKDIR /data/docuseal
ENV WORKDIR=/data/docuseal

EXPOSE 3000

ADD docker_entrypoint.sh /usr/local/bin/docker_entrypoint.sh
RUN chmod +x /usr/local/bin/docker_entrypoint.sh

# health check
ADD ./check-web.sh /usr/local/bin/check-web.sh
RUN chmod a+x /usr/local/bin/check-web.sh

CMD ["/app/bin/rails", "server"]
