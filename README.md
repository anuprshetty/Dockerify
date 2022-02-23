# Dockerify

## Commands

- docker build -t <docker_userid>/<project_name>:<version_or_latest> .
- docker run -p <localmachine_port>:<container_port> [-d] <docker_userid>/<project_name>:<version_or_latest> --> Port mapping
- docker commit -c '<startup_command>' <running_or_stopped_docker_id>
- docker-compose build
- docker-compose up [-d]
- docker-compose up --build
- docker-compose down
- docker-compose ps

## docker-compose

- Restart policies --> "no" (default. NOTE: it should be in quotes because in yml file no is interpreted as false.), always, on-failure, unless-stopped
