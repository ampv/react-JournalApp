import { loginWithEmailPassword, logoutFirebase, singInWithGoogle } from "../../../src/firebase"
import { chekingCredentials, login, logout, startGoogleSignIn, startLoginWithEmailPassword, startLogout } from "../../../src/store/auth"
import { clearNotesLogout } from "../../../src/store/journal"
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

    test('startLoginWithEmailPassword debe de llamar chekingCredentials y login -Exito', async () => {

        const loginData = { ok: true, ...demoUser }
        const formData = { email: demoUser.email, password: '123456' }

        await loginWithEmailPassword.mockResolveValue(loginData)
        await startLoginWithEmailPassword(formData)(dispatch)

        expect(dispatch).toHaveBeenCalledWith(chekingCredentials())
        expect(dispatch).toHaveBeenCalledWith(login(formData))
    })

    test('startLogout debe de llamar logoutFirebase, clearnotes y logout', async () => {

        await startLogout()(dispatch)

        expect(logoutFirebase).toHaveBeenCalledWith(clearNotesLogout())
        expect(logoutFirebase).toHaveBeenCalledWith(logout())
    })
})