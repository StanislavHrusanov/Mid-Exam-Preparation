function shootForTheWin(input) {
    let index = 0;
    let sequence = input[index++].split(' ').map(Number);
    let command = input[index++];
    let shotTargets = 0;

    while (command != 'End') {
        let indexOfTarget = Number(command);

        if (indexOfTarget > sequence.length - 1 || indexOfTarget < 0 || sequence[indexOfTarget] == -1) {
            command = input[index++];
            continue;
        }

        for (let i = 0; i < sequence.length; i++) {
            if (indexOfTarget == i || sequence[i] == -1) {
                continue;
            }
            if (sequence[i] > sequence[indexOfTarget]) {
                sequence[i] -= sequence[indexOfTarget];
            } else {
                sequence[i] += sequence[indexOfTarget];
            }
        }
        shotTargets++;
        sequence[indexOfTarget] = -1;
        command = input[index++];
    }
    console.log(`Shot targets: ${shotTargets} -> ${sequence.join(' ')}`);
}
shootForTheWin(["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"]);