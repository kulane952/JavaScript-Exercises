

function fetchUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; // Simulate success or failure
            if (success) {
                resolve({ id: 1, name: 'John Doe' });
            } else {
                reject(new Error('Failed to fetch user'));
            }
        }, 2000);
    });
}

fetchUser().then(users =>{
    console.log("Users:", users);
})
.catch(error =>{
    console.error("Error:", error);
})
