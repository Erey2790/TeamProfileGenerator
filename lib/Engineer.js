class Engineer {
    constructor(name, id, email, github) {
        this.github = github;
        this.email = email;
        this.id = id;
        this.name = name;
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
        return `Engineer`
    }
}

module.exports = Engineer;