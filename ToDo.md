Entregas:

- [x] Projeto Dockerizado
- [x] Arquivo YAML com a aplicação API
- [x] Arquivo YAML com o Service da API com o type NodePort
- [ ] Arquivo YAMl para criação da base de dados com volume



// Atalhos ----------------------------------------------------

// Cria a imagem e o container
docker build -t joohnsro/kubernetes-2-desafio:1.0 .
docker run -d --name kubernetes-2-desafio -p 3000:3000 joohnsro/kubernetes-2-desafio:1.0
docker push joohnsro/kubernetes-2-desafio:1.0

// Cria um túnel para exibir o serviço de dentro do Docker Desktop
minikube service kubernetes-2-desafio-service url

// Delete objetos
kubectl delete pod/kubernetes-2-desafio-db
kubectl delete service/kubernetes-2-desafio-service-mongo
kubectl delete persistentvolumeclaim/kubernetes-2-desafio-pvc-mongo
kubectl delete persistentvolume/kubernetes-2-desafio-pv-mongo

// Cria objetos
kubectl apply -f db-pv.yaml
kubectl apply -f db-pvc.yaml
kubectl apply -f db-pod.yaml
kubectl apply -f db-service.yaml