import {collapsedReducer} from "./CollapsedReducer";

test("reducer  should change value to opposite value", ()=>{
    const state= true

    const newState= collapsedReducer (state, {type:"TOGGLE_COLLAPSED"})

    expect(newState).toBe(false)
        })