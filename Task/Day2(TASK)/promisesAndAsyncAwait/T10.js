// Use multiple awaits.
async function fetchData() {
    const firstResponse = await new Promise((resolve) => {
        resolve("Data from source 1")
    }
    );
    console.log(firstResponse);

    const secondResponse = await new Promise((resolve) => {
        resolve("Data from source 2")
    }
    );
    console.log(secondResponse);
}

fetchData();
