async function  fetchUser(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log("pefour response:", response);
        const data =await response.json();
        // console.log(data);
        console.log("after user data:", data);
    }    catch (error) {
        console.error("Error fetching user data:", error);

    }
}
fetchUser();