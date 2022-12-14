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
  }
}
def getDockerTag(){
    def tag = sh script: 'git rev-parse HEAD', returnStdout: true
    return tag
}
