function treasureHunt(arr) {

    let treasureChest = arr.shift().split('|');
    let command = arr.shift();

    while (command != 'Yohoho!') {

        commandAsArr = command.split(' ');
        let operation = commandAsArr.shift();

        if (operation == 'Loot') {
            for (let i = 0; i < commandAsArr.length; i++) {
                let item = commandAsArr[i];
                if (!treasureChest.includes(item)) {
                    treasureChest.unshift(item);
                }

            }
        } else if (operation == 'Drop') {
            let indexToRemove = Number(commandAsArr[0]);
            if (indexToRemove >= 0 && indexToRemove < treasureChest.length) {
                let removed = treasureChest.splice(indexToRemove, 1).join('');
                treasureChest.push(removed);
            }

        } else if (operation == 'Steal') {
            let countToRemove = Number(commandAsArr[0]);
            let stolenItems = treasureChest.splice(-countToRemove);
            console.log(stolenItems.join(', '));
        }
        command = arr.shift();
    }

    if (treasureChest.length < 1) {
        console.log('Failed treasure hunt.');
    } else {
        let sum = 0;
        for (let el of treasureChest) {
            sum += el.length;
        }
        let avgGain = sum / treasureChest.length;
        console.log(`Average treasure gain: ${avgGain.toFixed(2)} pirate credits.`);
    }
}
treasureHunt(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"]);
