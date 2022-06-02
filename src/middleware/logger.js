const logger = (store) => (next) => (action) => {
  console.group(action);
  console.info("the Action: ", action.type);
  const returnValue = next(action);
  console.info("the New State ", store.getState());
  console.groupEnd();
  return returnValue;
};

export default logger;
