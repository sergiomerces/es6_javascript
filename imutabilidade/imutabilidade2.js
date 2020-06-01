const students = [
    {
        name: 'Grace',
        grade: 7
    },
    {
        name: 'Jennifer',
        grade: 4
    },
    {
        name: 'Paul',
        grade: 10
    }
];

function getApprovedStudents(studentList) {
    return studentList.filter(student => student.grade >= 7);
}

console.log('Alunos aprovados:');
console.log(getApprovedStudents(students));
console.log('\nLista de alunos:');
console.log(students);