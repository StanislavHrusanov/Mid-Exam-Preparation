function memoryGame(input) {
    let sequence = input.shift().split(' ');
    let index = 0;
    let command = input[index++];
    let moves = 0;

    while (command != 'end') {
        let positions = command.split(' ').map(Number);
        let positionOne = positions[0];
        let positionTwo = positions[1];

        moves++;

        if (positionOne == positionTwo || (positionOne || positionTwo) > sequence.length - 1 || (positionOne || positionTwo) < 0) {
            console.log('Invalid input! Adding additional elements to the board');
            sequence.splice(sequence.length / 2, 0, `-${moves}a`, `-${moves}a`);
            command = input[index++];
            continue;
        }

        if (sequence[positionOne] != sequence[positionTwo]) {
            console.log('Try again!');
        } else {
            console.log(`Congrats! You have found matching elements - ${sequence[positionOne]}!`);
            sequence.splice(Math.max(positionOne, positionTwo), 1);
            sequence.splice(Math.min(positionOne, positionTwo), 1);
        }

        if (sequence.length == 0) {
            console.log(`You have won in ${moves} turns!`);
            break;
        }
        command = input[index++];
    }
    if (sequence.length > 0) {
        console.log(`Sorry you lose :(\n${sequence.join(' ')}`);
    }
}
memoryGame([
    "a 2 4 a 2 4",
    "4 0",
    "0 2",
    "0 1",
    "0 1",
    "end"
]);