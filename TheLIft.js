function theLift(input) {
    let peopleInTheQueue = Number(input.shift());
    let lift = input.shift().split(' ').map(Number);

    let peopleInTheLiftBeforeStart = 0;
    for (let people of lift) {
        peopleInTheLiftBeforeStart += people;
    }
    let freeSeatsBeforeStart = (lift.length * 4) - peopleInTheLiftBeforeStart;

    let wagon = 0;
    let newPassengers = 0;

    for (let i = 0; i < peopleInTheQueue; i++) {
        if (lift[wagon] == 4 && wagon < lift.length - 1) {
            wagon++;
        }
        if (lift[wagon] < 4 && wagon <= lift.length - 1) {
            lift[wagon] += 1;
            newPassengers++;
        }
    }

    if (peopleInTheQueue > freeSeatsBeforeStart) {
        console.log(`There isn't enough space! ${peopleInTheQueue - freeSeatsBeforeStart} people in a queue!\n${lift.join(' ')}`);
    } else if (peopleInTheQueue == freeSeatsBeforeStart) {
        console.log(lift.join(' '));
    } else if (peopleInTheQueue < freeSeatsBeforeStart) {
        console.log(`The lift has empty spots!\n${lift.join(' ')}`);
    }
}
theLift([
    "20",
    "0 2 0"
]
);