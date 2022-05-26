function inventory(arr) {
    let myInventory = arr.shift().split(', ');

    for (let el of arr) {
        el = el.split(' - ');
        let command = el[0];
        let item = el[1];

        if (command == 'Collect') {
            let indexOfItem = myInventory.indexOf(item);
            if (indexOfItem != -1) {
                continue;
            }
            myInventory.push(item);

        } else if (command == 'Drop') {
            let indexOfItem = myInventory.indexOf(item);
            if (indexOfItem == -1) {
                continue;
            }
            myInventory.splice(indexOfItem, 1);

        } else if (command == 'Combine Items') {
            let [oldItem, newItem] = item.split(':');
            let indexOfOldItem = myInventory.indexOf(oldItem);
            if (indexOfOldItem == -1) {
                continue;
            }
            myInventory.splice(indexOfOldItem + 1, 0, newItem);

        } else if (command == 'Renew') {
            let indexOfItem = myInventory.indexOf(item);
            if (indexOfItem == -1) {
                continue;
            }
            let renewed = myInventory.splice(indexOfItem, 1);
            myInventory.push(renewed);

        } else if (command == 'Craft!') {
            console.log(myInventory.join(', '));
            break;
        }
    }
}
inventory([
    'Iron, Wood, Sword',
    'Collect - Gold',
    'Drop - Wood',
    'Craft!'
]);