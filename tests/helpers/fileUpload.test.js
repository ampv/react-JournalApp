import { fileUpload } from "../../src/helpers/fileUpload"
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
    cloud_name: 'diecfxsaw',
    api_key: '714643142865691',
    api_secret: 'Qc3Vfrx1TF1yW9FHdZbc2UbW1ao',
    secure: true
})

describe('Pruebas en fileUpload', () => {

    test('debe de subir el archivo correctamente a cloudinary', async () => {

        const imageURL = 'https://i.pinimg.com/564x/0b/6c/82/0b6c825322e9be821895cdeabb9e0a01.jpg'
        const resp = await fetch(imageURL)
        const blob = await resp.blob()
        const file = new File([blob], 'foto.jpg')
        const url = await fileUpload(file)

        expect(typeof url).toBe('string')
        console.log(url);

        const segments = url.split('/')
        console.log(segments);

        const imageId = segments[segments.length - 1].replace('.jpg', '')
        console.log({ imageId });

        const cloudResp = await cloudinary.api.delete_all_resources(['journal/' + imageId])
        console.log({ cloudResp })
    })

    test('debe de retornar un null', async () => {

        const file = new File([], 'foto.jpg')
        const url = await fileUpload(file)

        expect(url).toBe(null)
    })
})