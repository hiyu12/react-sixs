pipeline {
    agent any
    environment {
      DOCKER_TAG = getDockerTag()
    }
    stages {
        stage("Build Docker Image"){
            steps {
                sh "docker build . -t akash5791/nodeapp:${DOCKER_TAG}" 
            }
        }
        stage("Push Image DockerHub") {
            steps{
                withCredentials([string(credentialsId: 'dockerhub', variable: 'dockerhubPass')]) {
                    sh "docker login -u akash5791 -p ${dockerhubPass}"
                    sh "docker push akash5791/nodeapp:${DOCKER_TAG}"
                }
            }
        }
        stage("Deploy On K8s"){
            steps {
                sh "chmod +x changeversion.sh"
                sh "./changeversion.sh ${DOCKER_TAG}"
                sshagent(['sshk8s']) {
                    sh "scp -o strictHostKeyChecking=no node-app.yaml hiyu@35.200.238.205:/home/hiyu/"
                    script {
                        try { 
                        sh "ssh hiyu@35.200.238.205 kubectl apply -f ."
                        } catch(error){
                            sh " ssh hiyu@35.200.238.205 kubectl create -f ."
                        }
                    }
                }
            }
        }
    }
    post{
        always {
            sh 'docker rmi -f ${docker images -q}'
        }
    }
}
def getDockerTag(){
    def tag = sh script: 'git rev-parse HEAD', returnStdout: true
    return tag
}
