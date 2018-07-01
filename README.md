# Scaffold

> ReactJS scaffold for my future projects.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

* create-react-app
* nodejs

## Dependencies

* react-router-dom
* react-redux
* redux
* redux-thunk
* redux-persist

### Installing Dependencies

``` bash
$ npm install # Or yarn install
```

### Running a local server

``` bash
$ npm start
```

### Generating build file

``` bash
$ npm run build
```

## API's
```
const baseUrl = 'http://sample.com/api/v1'
```
```
# login
return axios.post(`${baseUrl}/login`, {
  email: 'testaccount@yopmail.com',
  password: 'iamverified'
})
```

## Built With

* [ReactJS](https://reactjs.org/) - The web framework used
* [NPM](https://www.npmjs.com/) - Package management

## Version Control

We use [Github](https://github.com/) for versioning. For the versions available, see the [tags on this repository](https://github.com/devhermluna/reactjs-scaffold/tags). 
