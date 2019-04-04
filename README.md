# ds_project
Course project for Distributed Systems - course in University of Oulu

Developed with:
- React
- Express (serves React front-end)
- Django Rest Framework
- Docker

## Running instructions

Docker is needed to run the application.

```
docker-compose build
docker-compose up
```

## Project structure and key files

- frontend: the Express front-end server and React client
  - private: the Express server setup and routes
  - src: the React application 
    - containers/AppContainer.js: code for making requests to Express server
- backend: the API for the application
  - db.sqlite3: data store for the application
  - api: django application for the api
    - models.py: the database model for a task
    - views.py: logic for propagating requests to other nodes
- docker-compose.yml: spawns three fronted-backend nodes as containers
  

Files for docker setup are named as Dockerfiles.
