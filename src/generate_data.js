const faker = require('faker');
const fs = require('fs');

let projects = [];
for (let i = 0; i < 9; i++) {
  const newProject = {
    id: i,
    title: faker.lorem.words(5),
    description: faker.lorem.paragraphs(),
    img: `http://placeimg.com/461/346/${faker.lorem.word()}`,
    raised: faker.finance.amount(),
    goal: faker.finance.amount(),
  };
  projects.push(newProject);
}

fs.writeFileSync('data.json', JSON.stringify(projects, null, '\t'));
