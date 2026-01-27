// Try using undefined function.
try {
    // Attempting to call a function that is not defined
    console.log(undefinedFun());
} catch (error) {
    console.error("Caught an error: " + error.message);
}