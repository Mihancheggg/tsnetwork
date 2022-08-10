export type AuthStateType = {
    userID: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

let initialState: AuthStateType = {
    userID: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: AuthStateType = initialState, action: any): AuthStateType => {
    switch (action.type) {
        case 'SET-AUTH-USER-DATA':
            return {...state, ...action.payload, isAuth: true}
        default:
            return state
    }
}

export const setAuthUserData = (userID: number, email: string, login: string) => {
    return {
        type: 'SET-AUTH-USER-DATA',
        payload: {
            userID, email, login
        }
    } as const
}