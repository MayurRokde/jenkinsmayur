pipeline {
  agent {
    docker {
      image 'cypress/base:22.11.0' // Cypress environment with Node.js
    }
  }

  stages {
    stage('Install Dependencies') {
      steps {
        echo 'Installing npm packages...'
        sh 'npm ci'
      }
    }

    stage('Run Cypress Tests on BrowserStack') {
      steps {
        browserstack(credentialsId: '888adf0f-e16f-4ff0-b030-213bdd68da4a') {
          echo 'Starting Cypress tests on BrowserStack...'
          sh './node_modules/.bin/browserstack-cypress run'
          echo 'Finished running Cypress tests.'
        }
      }
    }
  }
}
