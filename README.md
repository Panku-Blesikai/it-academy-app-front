# Angular and Heroku/TravisCI demo

## Intro

This project was created to show best practises of running a development/testing/deployment pipeline of Angular application using Heroku and Travis CI. Part of Swedbank IT Academy 2019.

The project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.1.

## Production server

When in production, application can be launched via `yarn start`. It will use the `server.js` to launch a standalone server to handle proxying and static file serving.

### Environment variables

`API_HOST` - the URL of the backend API. _Required_

## Development server

Run `ng serve --proxy-config proxy.conf.json` for a dev server (or you can just run `yarn serve`). Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

The file `proxy.conf.json` should be the same as `proxy.conf.example.json` but contain URL to your backend. This is done in order to avoid dealing with CORS (Read more: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS).

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
