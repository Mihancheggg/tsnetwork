let initialState: SidebarStateType = {
    sidebar: null
}

export type SidebarReducerActionsType = {
    type: 'YO'
}

export const sidebarReducer = (state: SidebarStateType = initialState, action: SidebarReducerActionsType): SidebarStateType => {
    return state;
};

export type SidebarStateType = {
    sidebar: number | null
}