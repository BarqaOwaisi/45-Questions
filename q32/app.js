// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
let current_users = ["Ella", "Alex", "John", "Aish", "Jen"];
let new_users = ["Mark", "Aish", "Ella", "Aria", "Any"];
// Convert all current usernames to lowercase for case-insensitive comparison
let current_usersLower = current_users.map((user) => user.toLowerCase());
// Loop through newUsers to check availability
new_users.forEach((new_user) => {
    let new_userLower = new_user.toLowerCase();
    if (current_usersLower.includes(new_userLower)) {
        console.log(`This username ${new_user} is not available. `);
    }
    else {
        console.log(`The username ${new_user} is avaialable`);
    }
});
export {};
