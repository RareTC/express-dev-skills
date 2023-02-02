// const { update } = require("../controllers/skills");

const skills = [
    {id:123464, skill: 'HTML', fluent: false},
    {id:143423, skill: 'CSS', fluent: false}, 
    {id:143579, skill: 'Javascript', fluent: false},
];

module.exports = {
    getAll, 
    getOne,
    create,
    deleteOne,
    update
};

function update(id, updatedSkill) {
    id= parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, updatedSkill);
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.fluent = false;
    skills.push(skill);
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function getAll() {
    return skills;
}
