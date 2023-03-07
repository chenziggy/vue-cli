export function errorHandler(fn) {
  try {
    fn && fn();
  } catch (error) {
    errorCaptured(error);
    if (errorCaptured !== defaultErrorCaptured) {
      errorCaptured = defaultErrorCaptured;
    }
  }
}

const defaultErrorCaptured = (error) => {
  console.log("🚀 ~ file: errorHandler.js:10 ~ error:", error);
};

export function registerError(fn) {
  errorCaptured = fn;
}
let errorCaptured = defaultErrorCaptured;
