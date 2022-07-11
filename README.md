# CrossFit-Api 🤸‍♂️ ⚡

REST API for a CrossFit Training App

This api is a personal exercise where users (who will be gym owners) can create training plans and maintain their own workouts within a single application. In addition to that, they can also add some important training tips for each workout.

## Environment Variables

- `NODE_ENV`, to indicate the execution of the api in development or production mode. By default is `developer`
- `API_PORT` the http server port. By default is `3000`
- `MONGODB_URI`, the mongodb database uri
- `MONGODB_URI_TEST`, the mongodb test database test uri

- `ADMIN_NAME`, the admin username
- `ADMIN_EMAIL`, the admin user's email
- `ADMIN_PASSWORD`, the password of the admin user

- `JWT_SECURE`, hashes for the token
- `JWT_SECURE_REFRESH`, hash to refresh the token
- `JWT_LIFETIME`, tiempo de vida del token
- `JWT_REFRESH_LIFETIME`, the password of the admin user

## Installation

```
npm install
```

## Running the app

```
npm run start
```

Development:

```
npm run dev
```

## Installation with docker-compose

```
docker-compose up
```

Improvements for the Future

- [] 🔹 Documentation on Swagger
- [] 🔹 Docker Compose
- [] 🔹 Unit tests
