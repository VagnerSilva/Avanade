export const counterReducer = ( status = 0,  action) => {
    switch (action.type) {
        case 'INCREMENT':
            return status + 1;
        case 'DECREMENT':
            return status - 1;
        default:
            return status;
    }
}
