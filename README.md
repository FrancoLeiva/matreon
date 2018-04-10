# Matreon [![Build Status](https://travis-ci.org/Sjors/matreon.svg?branch=master)](https://travis-ci.org/Sjors/matreon) [![Coverage Status](https://coveralls.io/repos/github/Sjors/matreon/badge.svg?branch=master)](https://coveralls.io/github/Sjors/matreon?branch=master)


Current status: extremely experimental!

Recurring invoices actually haven't been implemented yet; I still have a month for that :-)

Live instance: [matreon.sprovoost.nl](https://matreon.sprovoost.nl/)

## Prerequisites

You need to run [c-lightning](https://github.com/ElementsProject/lightning) and [Lightning Charge](https://github.com/ElementsProject/lightning-charge) somewhere.

## Deploy to Heroku

Create a new Heroku app `app-name` and add the Sendgrid Add-On.

Clone this repo and:

```sh
heroku git:remote -a app-name
heroku config:add HOSTNAME=app-name.herokuapp.com # Must be HTTPS
heroku config:add LIGHTNING_CHARGE_URL=https://charge.example.com
heroku config:add LIGHTNING_CHARGE_API_TOKEN=...
heroku config:add FROM_EMAIL='"My Matreon" <you@example.com>'
git push heroku
heroku run db:migrate
```

It's free to use your own domain with Heroku. SSL for your own domain is also easy to setup, but not free.

## Development

Install [RVM](https://rvm.io) (Ruby Version Manager) and `rvm install` the right [Ruby version](Gemfile#L1). Install [NVM](https://github.com/creationix/nvm#install-script) (Node Version Manager) and `nvm install` the right NodeJS version, see `{engines: {node: ...}}` in [package.json](package.json).

Clone this repo and create a file `.env` with:

```
LIGHTNING_CHARGE_URL=...
LIGHTNING_CHARGE_API_TOKEN=...
```

Install dependencies, create database and start server:

```sh
bundle install --without production
rake db:migrate
rails s
```
