// Chain promises.
const fetchData = (step, delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Completed: ${step}`);
            resolve(`Result from ${step}`);
        }, delay);
    });
};

fetchData("Step 1", 1000)
    .then((res1) => {
        console.log(res1);
        return fetchData("Step 2", 1000);
    })
    .then((res2) => {
        console.log(res2);
        return fetchData("Step 3", 1000);
    })
    .then((res3) => {
        console.log(res3);
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });
