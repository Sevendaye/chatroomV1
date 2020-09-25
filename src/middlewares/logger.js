const debug = (store) => (next) => (action) => {
  console.log('DEBUG_MIDDLEWARE:', action);

  next(action);
};

export default debug;
