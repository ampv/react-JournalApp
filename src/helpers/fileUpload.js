export const fileUpload = async (file) => {

    // if (!file) {
    //     throw new error('No tenemos ningún archivo a subir.')
    // }

    if (!file) {
        return null
    }

    const cloudUrl = 'https://api.cloudinary.com/v1_1/crjapp/upload'
    const formData = new FormData()

    formData.append('upload_preset', 'react-journual')
    formData.append('file', file)

    try {

        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        })

        if (!resp.ok) {
            throw new error('No se pudo subir los archivos seleccionados.')
        }

        const cloudResp = await resp.json()

        return cloudResp.secure_url

    } catch (error) {
        // throw new error(error.message)
        return null
    }
}