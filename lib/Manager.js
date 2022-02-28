class Manager {
    constructor(name, id, email, office) {
        this.office = office;
        this.email = email;
        this.id = id;
        this.name = name;
    }
    getRole() {
        return `Manager`
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
    getOffice() {
        return `Office: ${this.office}`
    }

}

module.exports = Manager;