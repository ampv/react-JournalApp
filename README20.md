# Qué veremos en esta sección? --Sección 20

    - CRUD hacia Firestore
    - Expandiendo nuestro estore añadiendo otros reducers
    - Seleccionar y subir archivos
    - Animaciones adicionales a nuestra aplicación
    - Limpieza en el logout

## Recursos

    1. https://console.firebase.google.com/

    |    1.1 Seleccionar proyecto
    |    1.2 Compilación         -> firestore Database
    |    1.3 Crear base de datos -> modo producción

    2. https://sweetalert2.github.io/ --Para las alertas/ventanas emergentes

    |    2.1 npm install sweetalert2

    3. https://cloudinary.com/ --Hosting para las imagenes

    |    3.1 crear cuenta
    |    3.2 settings -> upload
    |    3.3 upload presets -> add upload preset
    |    3.4 https://cloudinary.com/documentation -> [Documentación]

    4. https://www.npmjs.com/package/react-wavify

    |   4.1 npm install react-wavify

## Definiciones

    1. Cloud Firestore:

    |    -base de datos NO relacional
    |    -base de datos NO Sql
    |    -todo trabaja en base a colecciones y en las colecciones estan los documentos
    |    -las colecciones serian un listado de documentos

    2. Cloudinary:

    |    setvicio que permite subir imagenes, videos y hacer modificaciones de las mismas.

## Notas

    1. Cloud Firestore:

    |    - Al momento de haber creado la base de datos y tratar de hacerle alguina petición, si sale el error 403 se deben de cambiar las reglas en el Cloud Firestore.
    |    - En el apartado de reglas se encuentra algo parecido a lo siguiente:
    |
    |        rules_version = '2';
    |        service cloud.firestore {
    |            match /databases/{database}/documents {
    |                match /{document=\*\*} {
    |                    allow read, write: if false;
    |                }
    |            }
    |        }
    |
    |        Se debe cambiar por lo siguiente, inicandole que recibirá cualquier petición que NO sea nula. Es decir, si la autenticación existe.
    |
    |        rules_version = '2';
    |            service cloud.firestore {
    |                match /databases/{database}/documents {
    |                    match /{document=\*\*} {
    |                        allow read, write: if request.auth != null;
    |                    }
    |                }
    |            }

    2. Cloudinary: cuando se quiere hacer una petición (en postman por ejemplo), este sería el endPoint base:

    |    POST https://api.cloudinary.com/v1_1/demo/image/upload
    |
    |    En lugar de 'demo' se debe cambiar por el nombre del buket. Es decir:
    |        'dashboard -> cloud name
    |
    |    el image se quitaría ya que lo que se desea son subir imagenes, por lo cual el endPoint quedaría de la siguiente manera:
    |
    |    POST https://api.cloudinary.com/v1_1/demo/image/upload
    |
    |    por medio del 'form-data' se le envian 2 parametros que serian:
    |        1. File tipo file y el value seria la imagen
    |        2. upload-preset tipo text y el value seria el nombre del upload preset previamente configurado en el apartado de recursos de este documento.

## Subir repositorio a Github

    1. Desde cero

    |   1.1 git init
    |   1.2 git add README.md                                                  -> opcional
    |   1.3 git commit -m "first commit"
    |   1.4 git branch -M main
    |   1.5 git remote add origin https://github.com/ampv/react-JournalApp.git -> aquí va la url del repositorio.
    |   1.6 git push -u origin main

## Custom scroll bars

    1.  https://www.npmjs.com/package/react-custom-scrollbars-2?activeTab=readme
    |   1.1 npm install react-custom-scrollbars-2 --save
