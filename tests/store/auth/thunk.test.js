import { chekingCredentials } from "../../../src/store/auth"

jest.mock('../../../src/firebase/providers')

describe('pruebas sobre authThunks', () => {

    const dispatch = jest.fn()
    beforeEach(() => jest.clearAllMocks())

    test('debe de invocar el chekingcredentials', async () => {

        await chekingCredentials()(dispatch)
        expect(dispatch).toHaveBeenCalledWith(chekingCredentials())
    })
})  