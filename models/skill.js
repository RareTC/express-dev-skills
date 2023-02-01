const skills = [
    {id:123464, skill: 'HTML', fluent: false},
    {id:143423, skill: 'CSS', fluent: false}, 
    {id:143579, skill: 'Javascript', fluent: false},
];

module.exports = {
    getAll, 
    getOne
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function getAll() {
    return skills;
}
