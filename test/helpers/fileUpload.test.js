import { fileUpload } from "../../src/helpers/"

describe('Pruebasen fileUpload', () => {

    test('debe subir el archivo correctamente a cloudinary', async () => {

        const imageUrl = 'url'
        const resp = await fetch(imageUrl)
        const blob = await resp.blob()
        const file = new File([blob], 'foto.jpg')
        const url = await fileUpload(file)

        expect(typeof url).toBe('string')
    })
})