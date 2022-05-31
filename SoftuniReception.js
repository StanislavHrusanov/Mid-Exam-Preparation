function softuniReception(input) {
    let employeeOneEfficiency = Number(input.shift());
    let employeeTwoEfficiency = Number(input.shift());
    let employeeThreeEficiency = Number(input.shift());
    let numberOfStudents = Number(input.shift());

    let totalEfficiency = employeeOneEfficiency + employeeTwoEfficiency + employeeThreeEficiency;
    let neededHours = 0;

    while (numberOfStudents > 0) {
        neededHours++;
        if (neededHours % 4 === 0) {
            continue;
        }
        numberOfStudents -= totalEfficiency;
    }
    console.log(`Time needed: ${neededHours}h.`);
}
softuniReception(['5', '6', '4', '20']
);