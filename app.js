const users = new LoadData;
// users.get("https://jsonplaceholder.typicode.com/users").then(data => {
//     data.forEach(user => {
//         document.body.innerHTML += `<li>${user.name}</li>`
        
//     });
// })

data = {
    username : "VIRAL",
    email : "ashiik@gmail.com",
    name : "Ashik144",
    id : '12'
}
// users.post("https://jsonplaceholder.typicode.com/users",data)
// .then(data => {
//     document.body.innerHTML = `<li> ${data.username} ${data.email}</li>`
// })
// users.put("https://jsonplaceholder.typicode.com/users/3",data)
// .then(data => {
//     // document.body.innerHTML = `<li> ${data.username} ${data.email}</li>`
//     console.log(data)
// })
users.delete("https://jsonplaceholder.typicode.com/users/3")
.then(data => {
    // document.body.innerHTML = `<li> ${data.username} ${data.email}</li>`
    console.log(data)
})