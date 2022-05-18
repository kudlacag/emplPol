 const logger = (store) => (next) => (action) => {
    console.group(action);
     console.log('the Action: ', action.type);
     const returnValue = next(action);
     console.log('the New State ', store.getState());
    console.groupEnd();
    return returnValue;

}

export default logger;