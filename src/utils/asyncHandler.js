// A utility function to handle async route errors in Express
// It prevents repetitive try...catch blocks in every route handler

const asyncHandler = (func) => async (req, res, next) => {
  try {
    // Execute the passed async function safely
    await func(req, res, next);
  } catch (err) {
    // If any error occurs, send a proper JSON response
    res.status(err.code || 500).json({
      success: false,
      message: err.message,
    });
  }
};

// Export the asyncHandler to wrap controllers in other files
export { asyncHandler };


// ----------------------------
// Alternative Promise-based version
// (Does the same thing but uses Promise syntax instead of async/await)

// const asyncHandler2 = (requestHandler) => {
//   return (req, res, next) => {
//     Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
//   };
// };
