class User {
    constructor(name, email, age, password) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.password = password;
    }
}

module.exports = { User };

exports.users = [
    {
        name: "theo",
        email: "theo@theo.com",
        age: 20,
        password: "senhadotheo"
    },
    {
        name: "milka",
        email: "milka@milka.com",
        age: 25,
        password: "senhadamilka"
    },
    {
        name: "oreo",
        email: "oreo@oreo.com",
        age: 30,
        password: "senhadooreo"
    },
]