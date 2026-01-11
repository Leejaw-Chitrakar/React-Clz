// Use await inside async function.
async function fetchData() {
    const promise = new Promise((resolve) => {
        resolve("Data fetched successfully!");
    });

    const result = await promise;
    console.log(result);
}

fetchData();
