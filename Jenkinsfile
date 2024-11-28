pipeline {
  agent any

  stages {
    stage('Clonar repositorio') {
      steps {
        git branch: 'main', url: 'https://github.com/julioiud/tec-web-monolito.git'
      }
    }
    stage('Construir imagen de Docker') {
    
    }
    stage('Desplegar contenedor Docker') {
      steps {
        script {
          sh 'docker-compose up -d'
        }
      }
    }
  }
  post {
    always {
       // enviar un email después del build
    }
  }
}