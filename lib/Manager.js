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

}

module.exports = Manager;