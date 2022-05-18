# Dockerify

## Commands

### docker commands

- NOTE: Container-based application design encourages certain principles. One of these principles is that there should just be one process running in a container. That is to say, a Docker container should have just one program running inside it.
- .dockerignore file
- docker build -t <docker_userid>/<project_name>:<version_or_latest> .
- docker build -f <docker_file_name> .
- docker create <image_name> [<startup_command>] --> create new container.
- docker start -a <container_id> --> start a container
- docker run = docker create + docker start
- docker run -it <image_name> [<startup_command>]
- docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app <image_id> --> Docker volumes and bookmarking volumes.
- docker run -p <localmachine_port>:<container_port> [-d] <docker_userid>/<project_name>:<version_or_latest> --> Port mapping
- docker commit -c '<startup_command>' <running_or_stopped_docker_id>
- docker logs <container_id>
- docker stop <container_id> --> 10 sec of cleanup time before shutting down. After the timeout kill.
- docker kill <container_id> --> no cleanup time, immediate shutdown.
- docker exec -it <container_id> <command> --> execute an additional command in a container like sh, bash, etc.
- docker exec -it <container_id> sh/bash --> for debugging inside a container.
- docker attach <container_id> --> It will always attach the terminal to primary/parent process in the container not the secondary/child process which is created by primary/parent process.
- docker kill $(docker ps -q) --> Stop all the running containers.
- docker rm -vf $(docker ps -aq) --> Delete all containers including its volumes.
- docker rmi -f $(docker images -aq) --> Delete all the images.
- docker login
- docker push <docker_image_tag>
- docker ps --> view running containers
- docker ps [--all] --> view all (both running and stopped) containers
- docker images --all
- **docker system prune**
  - WARNING! This will remove:
  - all stopped containers
  - all networks not used by at least one container
  - all dangling images
  - all dangling build cache
- 

### docker-compose commands

- docker-compose build
- docker-compose up [-d]
- docker-compose up --build
- docker-compose down
- docker-compose ps

### minikube commands

- minikube start
- minikube stop
- minikube delete
- minikube status
- minikube version
- minikube ip
- minikube addons enable ingress
- minikube dashboard
- minikube addons enable metrics-server

### kubectl commands

- sudo snap install kubectl --classic
- cd ~/.kube
- cat config --> Minikube will configure minikube cluster automatically in this config file when the minikube is started. Otherwise configure the custom cluster yourself from the custom config. (Ex: cluster configuration of Azure, GCP, AWS, etc.)
- kubectl config view
- kubectl config get-contexts
- kubectl config use-context <context_name>
- kubectl version
- kubectl cluster-info
- kubectl apply -f client-pod.yml --> To create an kubernetes object
- kubectl apply -f k8s --> To apply all the kubernetes configurations inside a directory.
- kubectl delete -f client-pod.yml --> To delete a running kubernetes object
- kubectl delete deployment client-deployment
- kubectl apply -f client-node-port.yml
- kubectl get <object_type> --> get the info about a running object
- kubectl get all
- kubectl get nodes
- kubectl get namespaces OR kubectl get ns
- kubectl get pods
- kubectl get services OR kubectl get svc
- kubectl get deployments OR kubectl get deploy
- kubectl get cm --> To get the ConfigMap
- kubectl get secrets OR kubectl get secret
- kubectl get apiservices
- kubectl describe <object_type> [<object_name>]
- kubectl describe pod client-pod
- kubectl describe service client-node-port
- kubectl set image <object_type>/<object_name> <container_name>=<new_image_to_use> --> Imperative command to update docker image in the container.
- kubectl set image deployment/client-deployment client=anuprshetty/multi-client:v5
- kubectl get storageclass
- kubectl describe storageclass
- kubectl get pv --> Persistent Volume
- kubectl get pvc --> Persistent Volume Claim
- kubectl create secret <secret_type> <secret_name> --from-literal key=value
- kubectl create secret generic pgpassword --from-literal PGPASSWORD=postgres
- kubectl get secrets
- kubectl get deploy <deployment_name> -o yaml
- kubectl edit deploy <deployment_name> -o yaml

### kubectl commands use cases

- kubectl config use-context <context_name>
- kubectl get ns
- kubectl get pods -n default
- kubectl get deploy -n default
- kubectl get service -n default
- kubectl edit deploy <deployment_name> -n <namespace_name> -o yaml
- kubectl logs -f -l component=server -n default
- kubectl top pods -n default --> Display Resource (CPU/Memory) usage. The top command allows you to see the resource consumption for nodes or pods.
- kubectl top nodes -n default
- kubectl scale deploy --replicas=1  <deployment_name> -n <namespace>

### helm commands

- helm create <helm_chart_name>
- .helmignore file
- helm template <chart_name> <chart_directory>
- helm template multi-client-app multi-client-app --> it generates one single yml from the templates, values and other dependency charts. It also validates syntax of yml files.
- helm install <chart_name> <chart_directory> --> helm will install the chart into kubernetes cluster.
- helm upgrade <chart_name> <chart_directory>
- helm uninstall <chart_name> <chart_directory>
- helm list --> To see the helm release revision.

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

## postgres PVC

- PVC - Persistent Volume claim
