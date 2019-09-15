# API
API handle GET/POST for movies and comments. It's my attempt to implement [clean architecture created](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) by Robert C. Martin (Uncle Bob)

## Features

* Fetches all missing informations from omdbapi.com

## How to run it

### By docker-compose

#### Prerequisities
* [Node.JS](http://nodejs.org)
* [Docker](https://www.docker.com/)
* [docker-compose](https://docs.docker.com/compose/install/)

#### 1. Clone the repo.
#### 2. Change file name from `env.example` to `.env` and provide `OMDB_APIKEY`
#### 3. Run command
```bash
docker-compose up
```

### Running locally

#### Prerequisities
* [Node.JS](http://nodejs.org)
* [MongoDB](https://www.mongodb.com/)

#### 1. Clone the repo.
#### 2. Run command to install dependencies
```bash
npm install
```
#### 3. Specify configuration in `env.example` and then change it's name to `.env`
#### 4. Run 
```bash
npm start
```

You can always run the code in development mode.
```bash
npm run dev
```