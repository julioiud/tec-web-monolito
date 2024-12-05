pipeline {
  agent any

  stages {
    
    stage('Clonar repositorio') {
      steps {
        git branch: 'main', url: 'https://github.com/julioiud/tec-web-monolito.git'
      }
    }

    stage('Desplegar contenedor Docker') {
      steps {
        script {
            withCredentials([
              string(credentialsId: 'MONGO_URI', variable: 'MONGO_URI')
            ]) {
             sh 'docker-compose up -d'
            }
        }
      }
    }
  }
  post {
        always {
            // Paso para enviar el correo electrónico después del build
            emailext (
                subject: "Estado del build: ${currentBuild.currentResult}",
                body: "Se ha completado el build exitosamente. Puedes acceder a los detalles en ${env.BUILD_URL}",
                to: 'mateoperezbaena@gmail.com',
                from: 'jenkins@iudigital.edu.co'
            )
        }
  }
}