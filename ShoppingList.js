function shoppingList(input) {

    let list = input.shift().split('!');
    let index = 0;
    let command = input[index++];

    while (command != 'Go Shopping!') {
        let commandAsArr = command.split(' ');
        let isExist = false;
        let indexOfExistItem;
        for (let i = 0; i < list.length; i++) {

            if (commandAsArr[1] == list[i]) {
                isExist = true;
                indexOfExistItem = i;
                break;
            }

        }

        if (commandAsArr[0] == 'Urgent' && isExist == false) {
            list.unshift(commandAsArr[1]);
        } else if (commandAsArr[0] == 'Unnecessary' && isExist == true) {
            let removed = list.splice(indexOfExistItem, 1);
        } else if (commandAsArr[0] == 'Correct' && isExist == true) {
            let removed = list.splice(indexOfExistItem, 1, commandAsArr[2]);
        } else if (commandAsArr[0] == 'Rearrange' && isExist == true) {
            let removed = list.splice(indexOfExistItem, 1);
            list.push(commandAsArr[1]);
        }

        command = input[index++];
    }

    console.log(list.join(', '));
}

shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"]);

