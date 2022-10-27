function team(employees) {
    return`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Team</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3">
                <h1 class="text-center" id="team-header">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="row col-12 d-flex justify-content-center">
                ${employees}
            </div>
        </div>
    </div>
</body>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
  </html>
`;
}

function managerCard(manager) {
    return `
    <div class="col-4 mt-3">
        <div class="card h-100">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4>
            </div>

            <ul class="card-body list-group list-group-flush">
                <p class="id list-group-item">ID: ${manager.id}</p>
                <p class="email list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office list-group-item">Office Number: ${manager.officeNum}</p>
            </div>
        </div>
    </div>
    `
}

function engineerCard(engineer) {
    return `
    <div class="col-4 mt-3">
        <div class="card h-100">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4>
            </div>

            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="office">Github Profile: ${engineer.github}</p>
            </div>
        </div>
    </div>
    `
}

function internCard(intern) {
    return `
    <div class="col-4 mt-3">
        <div class="card h-100">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4>
            </div>

            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="office">School: ${intern.school}</p>
            </div>
        </div>
    </div>
    `
}

function generateTemplate(data) {
    const html = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const manager = managerCard(employee);
            html.push(manager);
        } 

        if (role === 'Engineer') {
            const engineer = engineerCard(employee);
            html.push(engineer);
        }

        if (role === 'Intern') {
            const intern = internCard(employee);
            html.push(intern);
        }
    }

    const employees = html.join('');

    const generateTeam = team(employees);
    return generateTeam;
}

module.exports = generateTemplate;