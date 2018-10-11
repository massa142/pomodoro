# pomodoro

[![Greenkeeper badge](https://badges.greenkeeper.io/massa142/pomodoro.svg)](https://greenkeeper.io/)

Time application for Pomodoro Technique

## Development

This project uses the following boilerplate.

[Quramy/electron-jsx-babel-boilerplate](https://github.com/Quramy/electron-jsx-babel-boilerplate)

## Install

Clone this repository, so execute the following command.

```bash
cd pomodoro
npm install -g bower gulp electron-prebuilt
npm install
```

## Run application
### With file watch and livereload

```bash
gulp serve
```

### Pre-packaging app

```bash
gulp build;electron dist
```

## Package application

```bash
gulp package
```