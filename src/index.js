generateHtml = (data) => {
    cards = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();
        
        if (role === 'Manager') {
            const getManager = managerCard(employee);

            cards.push(getManager);
        }

        if(role === 'Engineer') {
            const getEngineer = engineerCard(employee);

            cards.push(getEngineer);
        }

        if(role === 'Intern') {
            const getIntern = internCard(employee);

            cards.push(getIntern);
        }
    }

    const createCard = cards.join('')

    return teamCard(createCard);
}

// creates cards for the whole team
const teamCard = function(createCard) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
    
        <link rel="stylesheet" href="./style.css">
    
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    
    </head>
    
    <body>
        
        <section class="hero header block">
            <div class="hero-body">
                <h1 class="title">My Team</h1>
            </div>
        </section>
        
    
        <section class="columns block">
            <!-- manager and engineer card -->
            ${createCard}
        </section>
    
        <section class="columns block">
            <!-- enginer and intern card -->
        </section>
    
        
    </body>
    
    </html>
    `
}

// creates card for manager
const managerCard = function(manager) {
    return `
        <div class="column block">
            <div class="card">
                <header class="card-header">
                    <div class="card-header-title media-content">
                        <h2 class="title is-4"> ${manager.name} </h2>
                    </div>
                    <div class="card-header-title media-content">
                        <p class="subtitle is-6"> Manager </p>
                    </div>
                    
                </header>
                
                <div class="card-content">
                    <div class="content">
                        <table class="table is-fullwidth">
                            <tbody>
                                <tr>
                                    <th> ID: <td> ${manager.id} </td></th>
                                </tr>
                                <tr>
                                    <th> Email: <td> ${manager.email} </td></th>
                                </tr>
                                <tr>
                                    <th> Office Number: <td> ${manager.officeNumber} </td></th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `;
};

// creates card for engineer
const engineerCard = function(engineer) {
    return  `
        <div class="column block">
            <div class="card">
                <header class="card-header">
                    <div class="card-header-title media-content">
                        <h2 class="title is-4"> ${engineer.name} </h2>
                    </div>
                    <div class="card-header-title media-content">
                        <p class="subtitle is-6"> Engineer </p>
                    </div>
                </header>
                
                <div class="card-content">
                    <div class="content">
                        <table class="table is-fullwidth">
                            <tbody>
                                <tr>
                                    <th> ID: <td> ${engineer.id} </td></th>
                                </tr>
                                <tr>
                                    <th> Email: <td> ${engineer.email} </td></th>
                                </tr>
                                <tr>
                                    <th> Github: <td> ${engineer.github} </td></th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `;
};

// creates card for intern
const internCard = function(intern) {
    return `
        <div class="column block">
            <div class="card">
                <header class="card-header">
                    <div class="card-header-title media-content">
                        <h2 class="title is-4"> ${intern.name} </h2>
                    </div>
                    <div class="card-header-title media-content">
                        <p class="subtitle is-6"> Intern </p>
                    </div>
                </header>
                
                <div class="card-content">
                    <div class="content">
                        <table class="table is-fullwidth">
                            <tbody>
                                <tr>
                                    <th> ID: <td> ${intern.id} </td></th>
                                </tr>
                                <tr>
                                    <th> Email: <td> ${intern.email} </td></th>
                                </tr>
                                <tr>
                                    <th> School: <td> ${intern.school} </td></th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `
}

module.exports = generateHtml;