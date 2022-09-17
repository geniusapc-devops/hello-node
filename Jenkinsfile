pipeline {
  agent any
  stages {
    stage('Checkout code') {
      steps {
        echo 'hello checkout'
        git(url: 'https://github.com/geniusapc-devops/hello-node', branch: 'main')
      }
    }

  }
}