pipeline {
  agent any

  stages {
    stage('Clonar repositorio') {
      steps {
        git 'https://github.com/julioiud/tec-web-monolito.git'
      }
    }
    stage('Construir imagen de Docker') {
      steps {
        script {
          docker.build('monolito', '.')
        }
      }
    }
    stage('Desplegar contenedor Docker') {
      steps {
        script {
          sh 'docker-compose up -d'
        }
      }
    }
  }
}