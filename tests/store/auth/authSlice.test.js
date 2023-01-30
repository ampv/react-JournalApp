import { authSlice, chekingCredentials, login, logout } from "../../../src/store/auth/authSlice"
import { authenticatedState, demoUser, initialState } from "../../fixture/authFixtures"

describe('Pruebas en el authSlice', () => {

    test('debe de regresar el estado inicial y llamarse auth', () => {

        const state = authSlice.reducer(initialState, {})
        expect(state).toEqual(initialState)
        expect(authSlice.name).toBe('auth')
    })

    test('debe realizar la autenticación', () => {

        const state = authSlice.reducer(initialState, login(demoUser))

        expect(state).toEqual({
            status: 'authenticated',
            uid: demoUser.uid,
            errorMessage: null,
            email: demoUser.email,
            photoURL: demoUser.photoURL,
            displayName: demoUser.displayName,
        })
    })

    test('debe de realizar el logout', () => {

        const state = authSlice.reducer(authenticatedState, logout())

        expect(state).toEqual({
            status: 'not-authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: undefined
        })
    })

    test('should debe de realizar el logout y mostrar un mensaje de error', () => {

        const errorMesssage = 'credenciales no son correctas'
        const state = authSlice.reducer(authenticatedState, logout({ errorMesssage }))

        expect(state).toEqual({
            status: 'not-authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: undefined
        })
    })

    test('debe de cambiar el estado a cheking', () => {

        const state = authSlice.reducer(authenticatedState, chekingCredentials())
        expect(state.status).toBe('Cheking')
    })
})