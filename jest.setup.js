import 'whatwg-fetch'
import 'setimmediate'

// {
//     "import": "whatwg-fetch,setimmediate"
// }

require('dotenv').config({
    path:'.env.test'
})

jest.mock('./src/helpers/getEnvironments', () => ({
    getEnvironments: () => ({...process.env})
}))