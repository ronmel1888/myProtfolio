import { AppState } from "./appState";
import { AnyAction } from "redux";
import { ActionType } from "./actionType";
export function reducer(oldAppState: AppState | undefined, action: AnyAction): AppState {
    if (!oldAppState) {
        return new AppState();
    }
    const newAppState = { ...oldAppState };
    switch (action.type) {
        case ActionType.setEmail:
            newAppState.contactMe = action.payload;
            break;
    }

    return newAppState;
}