module.exports = function(teamMembers) {
  if(teamMembers.length === 0) return;

  let manager_card = "";
  let engineer_card = "";
  let intern_card = "";

  for(member of teamMembers) {
    switch(member.getRole()) {
      case "Manager":
        manager_card += `<div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${member.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${ member.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${member.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:{{ email }}">${member.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${ member.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>`;
        break;
      case "Engineer":
        engineer_card += `<div class="card employee-card mx-2">
        <div class="card-header">
            <h2 class="card-title">${member.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${ member.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${member.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:{{ email }}">${member.getEmail()}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${member.getGithub()}" target="_blank" rel="noopener noreferrer">${member.getGithub()}</a></li>
            </ul>
        </div>
    </div>`;
        break;
      case "Intern":
        intern_card += `<div class="card employee-card mx-2">
        <div class="card-header">
            <h2 class="card-title">${member.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${member.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${member.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:{{ email }}">${member.getEmail()}</a></li>
                <li class="list-group-item">School: ${member.getSchool()}</li>
            </ul>
        </div>
    </div>`;
        break;
    }
  }

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
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 mb-3 d-flex justify-content-center">
                ${manager_card}
            </div>
            <div class="team-area col-12 mb-3 d-flex justify-content-center">
                ${engineer_card}
            </div>
            <div class="team-area col-12 d-flex justify-content-center">
                ${intern_card}
            </div>
        </div>
    </div>
</body>

</html>
  `;
}

