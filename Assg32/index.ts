// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username. 

// a. Make a list of five or more usernames called current_users.

var current_users: string[] = ["Kashif", "Ahmed", "Ali", "Taha", "Meer"]

// b. Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

var new_users: string[] = ["Zaheer", "Ahmed", "Jahnazaib", "Asad", "Kashif", "Meer"]

// c. Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

for (var i = 0; i < new_users.length; i++) {

    if (current_users.includes(new_users[i])) {
        console.log(new_users[i], "Sorry, the username is already in use.");
    } else {
        console.log(new_users[i], "Congratulations! The username is available.");
    }
}