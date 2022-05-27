function inventory(arr) {
    let myInventory = arr.shift().split(', ');

    for (let el of arr) {
        el = el.split(' - ');
        let command = el[0];
        let item = el[1];

        collect(command, item, myInventory);

        drop(command, item, myInventory);

        combineItems(command, item, myInventory);

        renew(command, item, myInventory);

        printMyInventory(command, myInventory);

    }

    function collect(command, item, myInventory) {
        if (command == 'Collect') {
            let indexOfItem = myInventory.indexOf(item);
            if (indexOfItem == -1) {
                myInventory.push(item);
            }
        }
        return myInventory;
    }

    function drop(command, item, myInventory) {
        if (command == 'Drop') {
            let indexOfItem = myInventory.indexOf(item);
            if (indexOfItem != -1) {
                myInventory.splice(indexOfItem, 1);
            }
        }
        return myInventory;
    }

    function combineItems(command, item, myInventory) {
        if (command == 'Combine Items') {
            let [oldItem, newItem] = item.split(':');
            let indexOfOldItem = myInventory.indexOf(oldItem);
            if (indexOfOldItem != -1) {
                myInventory.splice(indexOfOldItem + 1, 0, newItem);
            }
        }
        return myInventory;
    }

    function renew(command, item, myInventory) {
        if (command == 'Renew') {
            let indexOfItem = myInventory.indexOf(item);
            if (indexOfItem != -1) {
                let renewed = myInventory.splice(indexOfItem, 1);
                myInventory.push(renewed);
            }
        }
        return myInventory;
    }

    function printMyInventory(command, myInventory) {
        if (command == 'Craft!') {
            return console.log(myInventory.join(', '));
        }
    }
}

inventory([
    'Iron, Wood, Sword',
    'Collect - Gold',
    'Drop - Wood',
    'Craft!'
]);