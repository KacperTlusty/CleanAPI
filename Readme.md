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

## Endpoints

### POST /movies
Creates new movie or returns existing one. Fetches missing infos from omdbapi. Title in body is required.

#### Request body
```json
{
	"title": "Lord of the rings"
}
```

#### Response body
```json
{
    "id": "ck0kmnqtd00003cr4bxx3a687",
    "actors": "Alan Howard, Noel Appleby, Sean Astin, Sala Baker",
    "country": "New Zealand, USA",
    "director": "Peter Jackson",
    "genre": "Adventure, Drama, Fantasy",
    "hash": "ee789ec3b581d36f901d10f28046db68",
    "language": "English, Sindarin",
    "rated": "PG-13",
    "released": "19 Dec 2001",
    "runtime": "178 min",
    "title": "Lord of the rings",
    "writer": "J.R.R. Tolkien (novel), Fran Walsh (screenplay), Philippa Boyens (screenplay), Peter Jackson (screenplay)",
    "year": "2001"
}
```

### GET /movies
Returns array of all movies present in database.
Currently quering is not supported (but may be in the future).
#### Response body
```json
[
    {
        "id": "ck0kmnqtd00003cr4bxx3a687",
        "actors": "Alan Howard, Noel Appleby, Sean Astin, Sala Baker",
        "country": "New Zealand, USA",
        "director": "Peter Jackson",
        "genre": "Adventure, Drama, Fantasy",
        "hash": "ee789ec3b581d36f901d10f28046db68",
        "language": "English, Sindarin",
        "rated": "PG-13",
        "released": "19 Dec 2001",
        "runtime": "178 min",
        "title": "Lord of the rings",
        "writer": "J.R.R. Tolkien (novel), Fran Walsh (screenplay), Philippa Boyens (screenplay), Peter Jackson (screenplay)",
        "year": "2001"
    },
    {
        "id": "ck0kz8w4y00003cvq00ohfm9l",
        "actors": "Mike Myers, Eddie Murphy, Cameron Diaz, John Lithgow",
        "country": "USA",
        "director": "Andrew Adamson, Vicky Jenson",
        "genre": "Animation, Adventure, Comedy, Family, Fantasy",
        "hash": "353c42243a70e8e6e875baecd0f29e00",
        "language": "English",
        "rated": "PG",
        "released": "18 May 2001",
        "runtime": "90 min",
        "title": "Shrek",
        "writer": "William Steig (based upon the book by), Ted Elliott, Terry Rossio, Joe Stillman, Roger S.H. Schulman, Cody Cameron (additional dialogue), Chris Miller (additional dialogue), Conrad Vernon (additional dialogue)",
        "year": "2001"
    }
]
```

### POST /comments
Creates new comment or returns existing one. Requires: author and text in request's body.

#### Request body

```json
{
	"author": "John Doe",
	"text": "Hello world!"
}
```

#### Response body

```json
{
    "id": "ck0kzat7k00013cvq3jsk697a",
    "author": "John Doe",
    "text": "Hello world!",
    "date": 1568551896416,
    "hash": "425270d2124e63c6a12d9025beaa4b7a"
}
```

### GET /comments
Returns array of all comments present in database.

#### Response body
```json
[
    {
        "id": "ck0kzat7k00013cvq3jsk697a",
        "author": "John Doe",
        "text": "Hello world!",
        "date": 1568551896416,
        "hash": "425270d2124e63c6a12d9025beaa4b7a"
    },
    {
        "id": "ck0kzc84l00023cvqdgt8f41d",
        "author": "Joe Dohn",
        "text": "Hello universe!",
        "date": 1568551962405,
        "hash": "a9a2659e209c4aa53769db1c5062e150"
    }
]