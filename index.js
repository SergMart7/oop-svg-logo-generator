//   SETS THE FILES/DEPENDENCIES WE WILL REQUIRE FOR THIS APPLICATION

const inquirer = require('inquirer');
const fs = require('fs');

//   PULLS OUR MODULE EXPORTS FROM OUR SHAPES.JS FILE

const { Square, Circle, Triangle } = require('./lib/shapes');

//  OUR ARRAY OF QUESTIONS TO ANSWER TO FULLFILL THEIR DESIGN CONCEPT

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter text for your logo. Inputs must be at the most 3 characters long',
        validate: input => input.length <= 3 || 'Text must be 3 characters or less',
    },
    {
        type: 'input',
        name: 'fontColour',
        message: 'Enter the font colour (either keyword or hexadecimal value, please include #):',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select a shape for your logo:',
        choices: ['Square', 'Circle', 'Triangle'],
    },
    {
        type: 'input',
        name: 'shapeColour',
        message: 'Enter the shape (background colour) colour (keyword or haxadecimal value, please include #);',
    },
];

inquirer.prompt(questions).then(answers => {
    let shape;
    switch (answers.shape) {
        case 'Circle':
            shape = new Circle();
            break;
        case 'Triangle':
            shape = new Triangle();
            break;
        case 'Square':
            shape = new Square();
            break;
    }
    shape.setColor(answers.shapeColour);

    const svgContent = `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.fontColour}">${answers.text}</text>
</svg>
    `;
    fs.writeFileSync('logo.svg', svgContent.trim());
    console.log('Generated logo.svg');
});
