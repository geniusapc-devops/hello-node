pipeline {
  agent any
  stages {
    stage('Checkout code') {
      steps {
        echo 'hello checkout'
        git(url: 'https://github.com/geniusapc-devops/hello-node', branch: 'main')
      }
    }

    stage('List dir') {
      steps {
        sh '''ls -al
echo "prince is great"
echo "hello world"
echo "God is good"'''
      }
    }

  }
}