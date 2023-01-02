¿Qué veremos en esta sección?

	1. Profundizando en pruebas
	2. Pruebas en Firebase y Firestore
	3. Pruebas con reducers
	4. Variables de entorno de desarrollo, test y producción
	5. Pruebas en tareas asíncronas

-----------------------------------------------------------------------------------------

# Instalación y configuracion de Jest + React Testing Library (ambiente de pruebas )

## Comandos:

    |   -npm add --dev jest babel-jest @babel/preset-env @babel/preset-react
    |   -npm add --dev @testing-library/react @types/jest jest-environment-jsdom
    |   -npm add prop-types
    |   -npm run test (para correr las pruebas)

## Si se usa Fetch API en el proyeto:
    
    |   -npm add --dev whatwg-fetch

## Luego, actualizar scripts de package.json
    
    |   "scripts: {
    |       ...
    |       "test": "jest --watchAll"
    |       ...
    |   }

## Crear archivo babel.config.json

    |    {
    |        "presets": [
    |            [
    |                "@babel/preset-env",
    |                {
    |                    "targets": {
    |                        "esmodules": true
    |                    }
    |                }
    |            ],
    |            [
    |                "@babel/react",
    |                {
    |                    "runtime": "automatic",
    |                    "jsx": "react-jsx"
    |                }
    |            ]
    |        ]
    |    }

## crear archivo Jest.config.json

    |    {
    |        "testEnvironment": "jest-environment-jsdom",
    |        "setupFiles": [
    |            "./jest.setup.json"
    |        ]
    |    }

## crear archivo jest.setup.json

    |    {
    |        "import": "whatwg-fetch"
    |    }   