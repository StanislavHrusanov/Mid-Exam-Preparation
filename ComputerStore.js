function computerStore(input) {
    let sumWithoutTaxes = 0;
    let typeOfCustomer;
    let isValidOrder = true;

    for (let i = 0; i < input.length; i++) {
        let command = input[i];

        if (command != 'special' && command != 'regular') {
            let partPrice = Number(command);
            if (partPrice < 0) {
                console.log('Invalid price!');
                continue;
            }
            sumWithoutTaxes += partPrice;
        } else {
            typeOfCustomer = command;
            break;
        }
    }
    if (sumWithoutTaxes == 0) {
        console.log('Invalid order!');
    } else {
        let taxes = sumWithoutTaxes * 0.20;
        let totalPrice = sumWithoutTaxes + taxes;
        if (typeOfCustomer == 'special') {
            totalPrice = totalPrice * 0.90;
        }

        console.log(`Congratulations you've just bought a new computer!\nPrice without taxes: ${sumWithoutTaxes.toFixed(2)}$\nTaxes: ${taxes.toFixed(2)}$\n-----------\nTotal price: ${totalPrice.toFixed(2)}$`);
    }
}
computerStore([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
]);