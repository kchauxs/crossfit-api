# CrossFit Api 🤸‍♂️ ⚡

REST API for a CrossFit Training App

This API is a personal workout where users (who will own a gym) can register members, workout plans and maintain their own workouts within one app. In addition to that, they can also add some important training tips for each workout.

## Feactures

MongoDB:

- Soft deletion of documents
- Document pagination

## Environment Variables

- `NODE_ENV`, to indicate the execution of the api in development or production mode. By default is `developer`
- `API_PORT` the http server port. By default is `4044`
- `MONGODB_URI`, the mongodb database uri
- `MONGODB_URI_TEST`, the mongodb test database test uri
- `ADMIN_NAME`, the admin username
- `ADMIN_EMAIL`, the admin user's email
- `ADMIN_PASSWORD`, the password of the admin user
- `JWT_SECURE`, hashes for the token
- `JWT_SECURE_REFRESH`, hash to refresh the token

## Install

1. Clone project
2. `npm install`
3. Clone the `.env.template` file and rename it to `.env`
4. Change environment variables (optional)
5. Running the app `npm run start` or `npm run start` in development mode


## Installation with docker-compose

```bash
docker compose -f "docker-compose.yml" up -d
```
