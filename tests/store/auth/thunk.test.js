import { singInWithGoogle } from "../../../src/firebase"
import { chekingCredentials, login, logout, startGoogleSignIn } from "../../../src/store/auth"
import { demoUser } from "../../fixture/authFixtures"

jest.mock('../../../src/firebase/providers')

describe('pruebas sobre authThunks', () => {

    const dispatch = jest.fn()
    beforeEach(() => jest.clearAllMocks())

    test('debe de invocar el chekingcredentials', async () => {

        await chekingCredentials()(dispatch)
        expect(dispatch).toHaveBeenCalledWith(chekingCredentials())
    })

    test('startGoogleSignIn debe de llamar chejing credentials y login -exito', async () => {

        const loginData = { ok: true, ...demoUser }

        await singInWithGoogle.mockResolveValue(loginData)
        await startGoogleSignIn()(dispatch)

        expect(dispatch).toHaveBeenCalledWith(chekingCredentials())
        expect(dispatch).toHaveBeenCalledWith(login())
    })

    test('startGoogleSignIn debe de llamar chejing credentials y logout -error', async () => {

        const loginData = { ok: false, errorMessage: 'un error en google' }

        await singInWithGoogle.mockResolveValue(loginData)
        await startGoogleSignIn()(dispatch)

        expect(dispatch).toHaveBeenCalledWith(chekingCredentials())
        expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage))
    })
})