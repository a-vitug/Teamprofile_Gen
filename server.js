const fs = require('fs');
const inquirer = require('inquirer');
const generateHtml = require('./src/index')

const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

const team = [];

// manager prompt
const createTeam = () => {
    return inquirer
        .prompt ([
            {
                type: 'input',
                name: 'name',
                message: 'Enter the team member\'s name.'
            },
            {
                type: 'input',
                name: 'id',
                message: 'Enter the team member\'s ID'
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter the team member\'s email',
            },
            {
                type: 'list',
                name: 'role',
                message: 'Select the role of team member',
                choices: [
                    'Manager',
                    'Engineer',
                    'Intern'
                ]
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'Enter the team member\'s office number',
                when: (input) => input.role === 'Manager'
            },
            {
                type: 'input',
                name: 'github',
                message: 'Enter the team member\'s github',
                when: (input) => input.role === 'Engineer'
            },
            {
                type: 'input',
                name: 'school',
                message: 'Enter the team member\'s school',
                when: (input) => input.role === 'Intern'
            },
            {
                type: 'confirm',
                name: 'addMember',
                message: 'Would you like to add a team member?',
                default: false
            }

        ])

        .then(memberData => {
            let { name, id, email, role, github, school, officeNumber, addMember } = memberData;
            let employee;

            if (role === 'Manager') {
                employee = new Manager (name, id, email, officeNumber);
            } else if (role === 'Engineer') {
                employee = new Engineer (name, id, email, github);
            } else if (role === 'Intern') {
                employee = new Intern (name, id, email, school);
            }

            team.push(employee);

            if(addMember) {
                return createTeam(team);
            } else {
                return team;
            }

        })
};

const createData = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Successfully created team profile!')
        }
    })
}

createTeam()
    .then(createTeam)
    .then(team => {
        return generateHtml(team);
    }) .then(createPage => {
        return createData(createPage);
    }) .catch(err => {
        console.log(err);
    });