const generatePage = team => {

    // create the manager html
    const createManager = manager => {
        return `
<div class="card employee-card">
    <div class="card-header bg-info text-white">
        <h2 class="card-title">${manager.getName()}</h2>
        <h3 class="card-title"><i class="fa-solid fa-chalkboard-user"></i>${manager.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">${manager.getId()}</li>
            <li class="list-group-item"><a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">${manager.getOffice()}</li>
        </ul>
    </div>
</div>
        `;
    };

    const createEngineer = engineer => {
        return `
<div class="card employee-card">
    <div class="card-header bg-info text-white">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title"><i class="fa-solid fa-clipboard"></i>${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">${engineer.getId()}</li>
            <li class="list-group-item"><a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item"><a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
        </ul>
    </div>
</div>
        `;
    };
    const createIntern = intern => {
        return `
<div class="card employee-card">
    <div class="card-header bg-info text-white">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title"><i class="fa-solid fa-egg"></i>${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">${intern.getId()}</li>
            <li class="list-group-item"><a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">${intern.getSchool()}</li>
        </ul>
    </div>
</div>
        `;
    };
    const index = [];

    index.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => createManager(manager))
    );
    index.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => createEngineer(engineer))
        .join("")
    );
    index.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => createIntern(intern))
        .join("")
    );

    return index.join("");
}


module.exports = team => {

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading bg-secondary">
                <h1 class="text-center text-white">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="row team-area col-12 d-flex justify-content-center">
                ${generatePage(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};