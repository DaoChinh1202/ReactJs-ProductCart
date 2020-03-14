import *  as Message from './../contants/Message';
import * as Types from './../contants/ActionType';
var initialState = Message.MSG_WELCOME;

const message = (state = initialState, action) => {

    switch (action.type) {
        case Types.CHANGE_MESSAGE:
            return action.message;
        default: return [...state];
    }
}

export default message;