let usernames: string[] = ["Admin", "Eric", "Ella", "Alice", "Jen"];

if (usernames.length === 0) {
    console.log("We need to find some users!");
} else {
    for (let username of usernames) {
        if (username.toLowerCase() === "Admin") {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}
usernames = []

if (usernames.length===0){

console.log("We need to find some users.")
}