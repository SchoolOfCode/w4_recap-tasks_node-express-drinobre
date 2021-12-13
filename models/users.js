import users from "../data/users.js";

// GET ALL USERS
// return all user users from users array
export function getUsers() {
    return users;
}
//console.log(getUsers());


// GET A USER BY ID
// find user id on the array
// return array for the specific user id - Done
export function getUserByID(id){
    let result = users.find(function isUserIdFound(user){
    return user.id === id;
});
return result;
}

//Note: if the id is not found on the array the result will be undefined;

console.log(getUserByID(3));


//CREATE A USER
export function createUser(newUser) {
    users.push(newUser);
    return users;
}

// console.log(createUser({
//     first_name: "Adriana",
//     last_name: "Nobre",
//   }));

// UPDATE A USER BY ID
export function updateUserByID(id, updatedUser) {
   
    // Find index of specific object using findIndex method.
    let userIndex = users.findIndex(function isUseridFound(user){
        return user.id === id;
    })
    
    // return array with update
    return users[userIndex] = updatedUser;
}

// console.log(updateUserByID(1,{
//     id: 2,
//     first_name: "Adriana",
//     last_name: "Semechik",
//     email: "psemechik1@gizmodo.com",
//     catchphrase: "Intuitive national approach",
//   },))

//   console.log(users);


// DELETE A USER BY ID
export function deleteUserByID(id) {
    // Filter out the userbyId using the filter method
    let userIndex = users.filter(function isUseridFound(user){
        return user.id !== id;
    })
    //return the variable after filter out
    return userIndex;
}

console.log(deleteUserByID(50));