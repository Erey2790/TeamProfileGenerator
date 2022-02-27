class Intern {
    constructor(name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }
    getGithub() {
        return `Github: ${this.github}`
    }
    getEmail() {
        return `Email: ${this.email}`
    }
    getId() {
        return `Id: ${this.id}`
    }
    getName() {
        return `Name: ${this.name}`
    }
    getRole() {
        return `Intern`
    }
}

module.exports = Intern;