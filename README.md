<h1 align="center">Welcome to winkelzoeker-front 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://hub.docker.com/repository/docker/winkelzoeker/winkelzoeker.front" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/docker/image-size/winkelzoeker/winkelzoeker.front?label=DockerHub" />
  </a>
</p>

> WinkelZoeker Front end!

## Build Status

![Build](https://github.com/WinkelZoeker/winkelzoeker-front/workflows/Build%20image%20via%20multi%20staged%20docker/badge.svg)


This is a small front end developed for consuming [winkelzoeker-api](https://github.com/WinkelZoeker/winkelzoeker-api).


## Build Setup

First, clone locally this repository, then follow the instructions for running it from source or via docker-compose, along with the front end.

```sh
$ git clone https://github.com/WinkelZoeker/winkelzoeker-front.git
$ cd ./winkelzoeker-front
$ npm install
```

### Compiles and hot-reloads for development

Before starting the web application, be sure that the API service is running on port 3000.


```
npm run serve
```

Then point your broser to

> http://localhost:8080/


### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Practical info/ References used during development

* Mock API: https://run.mocky.io/v3/8bd5bc4b-4cd7-43d4-8e1f-1b5f4bbd2b08 (SUCCESS)
* If docker 'dies' between sessions, run 'sudo dockerd'
* https://www.taniarascia.com/getting-started-with-vue/
* https://auralinna.blog/post/2018/how-to-build-a-complete-form-with-vue-js/
* Env Variables, Docker and stuff: https://stackoverflow.com/questions/59722631/passing-environment-variables-at-runtime-to-vue-js-application-with-docker-compo


## Author

👤 **Rodrigo de Souza <rsouza01@gmail.com>**


## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
