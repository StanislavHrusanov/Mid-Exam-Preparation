function blackFlag(arr) {
    let daysOfThePlunder = Number(arr[0]);
    let dailyPlunder = Number(arr[1]);
    let expectedPlunder = Number(arr[2]);

    totalPlunder = 0;

    for (let day = 1; day <= daysOfThePlunder; day++) {

        totalPlunder += dailyPlunder;

        if (day % 3 == 0) {
            totalPlunder += dailyPlunder * 0.50;
        }

        if (day % 5 == 0) {
            totalPlunder = totalPlunder * 0.70;
        }
    }

    if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        let percentage = totalPlunder / expectedPlunder * 100;
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}

blackFlag(["10",
    "20",
    "380"]
);