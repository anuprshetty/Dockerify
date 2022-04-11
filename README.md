# Dockerify

## Commands

### docker commands

- .dockerignore file
- docker build -t <docker_userid>/<project_name>:<version_or_latest> .
- docker build -f <docker_file_name> .
- docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app <image_id> --> Docker volumes and bookmarking volumes.
- docker run -p <localmachine_port>:<container_port> [-d] <docker_userid>/<project_name>:<version_or_latest> --> Port mapping
- docker commit -c '<startup_command>' <running_or_stopped_docker_id>
- docker login
- docker push <docker_image_tag>

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
- kubectl config view

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
