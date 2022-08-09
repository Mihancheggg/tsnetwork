export type AuthStateType = {
    userID: number | null,
    email: string | null,
    login: string | null,
    isFetching: boolean
}

let initialState: AuthStateType = {
    userID: null,
    email: null,
    login: null,
    isFetching: false
}

export const authReducer = (state: AuthStateType = initialState, action: any): AuthStateType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {...state, ...action.payload.data}
        default:
            return state
    }
}

const setUserData = (userID: number, email: string, login: string) => {
    return {
        type: 'SET-USER-DATA',
        payload: {
            data: {
                userID, email, login
            }
        }
    } as const
}