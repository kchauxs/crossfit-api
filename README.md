# CrossFit Api 🤸‍♂️ ⚡

REST API for a CrossFit Training App

This API is a personal workout where users (who will own a gym) can register members, workout plans and maintain their own workouts within one app. In addition to that, they can also add some important training tips for each workout.

## Feactures

MongoDB:

- Soft deletion of documents
- Document pagination
- Document seed

## Environment Variables

- `API_PORT` the http server port. By default is `4044`
- `JWT_SECURE_REFRESH`, hash to refresh the token
- `JWT_SECURE`, hashes for the token
- `MONGODB_URI_TEST`, the mongodb test database test uri
- `MONGODB_URI`, the mongodb database uri
- `NODE_ENV`, to indicate the execution of the api in development or production mode. By default is `developer`

## Install ⚡

1. Clone project
2. `npm install`
3. Clone the `.env.template` file and rename it to `.env`
4. Change environment variables (optional)
5. Running the app `npm run start` or `npm run start` in development mode

## Install with docker-compose 🐳 ✅

1. Clone project
2. Clone the `.env.template` file and rename it to `.env`
3. Change environment variables (optional)
4. Run the following command:

```bash
docker compose -f "docker-compose.yml" up -d
```

## Run Seed 🥜

```bash
curl -X 'GET' 'http://localhost:4044/api/v1/seed' -H 'accept: */*'
```
