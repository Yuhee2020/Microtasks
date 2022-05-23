export type ActionType={
    type:string
}


export const collapsedReducer = (state: boolean, action: ActionType) => {
    switch (action.type) {
        case "TOGGLE_COLLAPSED": {
            return !state
        }
        default:
            return state
    }
}