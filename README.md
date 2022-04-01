# Dockerify

## Commands

- docker build -t <docker_userid>/<project_name>:<version_or_latest> .
- docker build -f <docker_file_name> .
- docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app <image_id> --> Docker volumes and bookmarking volumes.
- docker run -p <localmachine_port>:<container_port> [-d] <docker_userid>/<project_name>:<version_or_latest> --> Port mapping
- docker commit -c '<startup_command>' <running_or_stopped_docker_id>
- docker login
- docker push <docker_image_tag>

- docker-compose build
- docker-compose up [-d]
- docker-compose up --build
- docker-compose down
- docker-compose ps

- minikube start
- minikube status
- minikube version
- minikube ip

- kubectl version
- kubectl cluster-info
- kubectl apply -f client-pod.yml --> To create an kubernetes object
- kubectl delete -f client-pod.yml --> To delete a running kubernetes object
- kubectl apply -f client-node-port.yml
- kubectl get <object_type> --> get the info about a running object
- kubectl get pods
- kubectl get services
- kubectl get deployments
- kubectl describe <object_type> [<object_name>]
- kubectl describe pod client-pod
- kubectl describe service client-node-port
- kubectl set image <object_type>/<object_name> <container_name>=<new_image_to_use> --> Imperative command to update docker image in the container.
- kubectl set image deployment/client-deployment client=anuprshetty/multi-client:v5

### Connect current local terminal to docker server which is running inside the minikube vm

- minikube docker-env
- eval $(minikube -p minikube docker-env) --> Temporarily connects current local terminal to docker server which is running inside the minikube vm
- docker ps
- Advantages: (Why mess with Docker inside the minikube vm?)
    - Use all the same debugging techniques we learned with docker cli. [NOTE: Many of these commands are available through kubectl]
    - Manually kill containers to test Kubernetes ability to 'self-heal'.
    - Delete cached images in the node.

## docker-compose

- Restart policies --> "no" (default. NOTE: it should be in quotes because in yml file no is interpreted as false.), always, on-failure, unless-stopped
