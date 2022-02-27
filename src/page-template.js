const createTeam = team => {
    // create manager index.html
    const createManager = manager => {
        return `<div class="card employee-card">
        <div class="card-header bg-primary text-white">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.getOffice()}</li>
            </ul>
        </div>
    </div>`;
    };

    // create the index for engineers
    const createEngineer = engineer => {
        return `
<div class="card employee-card">
    <div class="card-header bg-primary text-white">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
        </ul>
    </div>
</div>
        `;
    };
    // create intern for html
    const createIntern = intern => {
        return `
<div class="card employee-card">
    <div class="card-header bg-primary text-white">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
        `;
    };
const index = [];
index.push(team.filter(manager.getRole() === "Manager")
.map(manager => createManager(manager)));

index.push(team.filter(engineer.getRole() === "Engineer")
.map(engineer => createEngineer(engineer))
.join(""));

index.push(team.filter(intern => intern.getRole() === "Intern")
.map(intern => createIntern(intern))
.join("")
);
return index.join("")
 }


module.exports = generatePage => {
    console.log(generatePage);
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
            <title>My Team</title>
        </head>
        <body>
            <header>
            <h1 class="text-center">My Team</h1>
            </header>
            
           
            ${createTeam(generatePage)}
        </body>
        </html>    
        `
}
