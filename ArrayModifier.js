function arrayModifier(input) {

    let arr = input.shift().split(' ').map(Number);
    let command = (input.shift());

    while (command != 'end') {
        let commandAsArr = (command).split(' ');

        if (commandAsArr[0] == 'swap') {
            let x = Number(commandAsArr[1]);
            let y = Number(commandAsArr[2]);
            let temp = arr[x];
            arr[x] = arr[y];
            arr[y] = temp;
        } else if (commandAsArr[0] == 'multiply') {
            let x = Number(commandAsArr[1]);
            let y = Number(commandAsArr[2]);
            let multiply = arr[x] * arr[y];
            arr[x] = multiply;
        } else if (commandAsArr[0] == 'decrease') {
            for (let i = 0; i < arr.length; i++) {
                arr[i] = arr[i] - 1;
            }
        }
        command = String(input.shift());
    }
    console.log(arr.join(', '));
}
arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]
);