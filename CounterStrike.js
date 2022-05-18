function counterStrike(input) {

    let index = 0;
    let energy = Number(input[index++]);
    let win = 0;
    let isEnoughEnergy = true;

    for (let battle = 1; battle < input.length; battle++) {
        let command = input[index++];

        if (command == 'End of battle') {
            break;
        }

        let distance = Number(command);

        if (distance > energy) {
            isEnoughEnergy = false;
            console.log(`Not enough energy! Game ends with ${win} won battles and ${energy} energy`);
            break;
        } else {
            energy -= distance;
            win++;
        }
        if (win % 3 == 0) {
            energy += win;
        }
    }
    if (isEnoughEnergy) {
        console.log(`Won battles: ${win}. Energy left: ${energy}`);
    }
}
counterStrike(["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"]);