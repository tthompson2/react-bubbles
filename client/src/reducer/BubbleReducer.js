const initialState = {
    friend: [],
}

const BubbleReducer = (state = initialState, action) => {

    console.log("FriendReducer", state, action);

    switch (action.type) {
        case "ADD_FRIEND":

            return {
                ...state,
            }

        default:
            return state;
    }

};

export default BubbleReducer;