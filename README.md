# PracticeNgrx

This is a small angular app using ngrx, rxjs & angular-material.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Docker

Check you have docker installed.

1. Build Image `docker build -t practice-ngrx-docker .`
2. Run Container `docker run --rm -it -p 8000:80 --name practice-ngrx-container practice-ngrx-docker`
- Can use docker compose to run multiple services (containers) at once with ease: `docker-compose -f "docker-compose.yml" up -d --build`

Alternatively you can use the docker vs code extension to run all and more...
