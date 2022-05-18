function bonusScoringSystem(input) {
    let numberOfTheStudents = Number(input.shift());
    let numberOfTheLectures = Number(input.shift());
    let addBonus = Number(input.shift());
    let studentsAttendance = [];

    if (numberOfTheStudents == 0 || numberOfTheLectures == 0) {
        console.log(`Max Bonus: 0.`);
        console.log(`The student has attended 0 lectures.`)
    } else {

        for (let i = 0; i < numberOfTheStudents; i++) {
            studentsAttendance.push(Number(input[i]));
        }

        studentsAttendance.sort((a, b) => b - a);

        let maxStudentAttendance = studentsAttendance[0];

        let maxBonus = Math.ceil(maxStudentAttendance / numberOfTheLectures * (5 + addBonus));

        console.log(`Max Bonus: ${maxBonus}.`);
        console.log(`The student has attended ${maxStudentAttendance} lectures.`);
    }
}
bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
]);