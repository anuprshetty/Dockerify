# Dockerify

## Commands

- docker build -t <docker_userid>/<project_name>:<version_or_latest> .
- docker run -p <localmachine_port>:<container_port> <docker_userid>/<project_name>:<version_or_latest> --> Port mapping
- docker commit -c '<startup_command>' <running_or_stopped_docker_id>
