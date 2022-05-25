function guineaPig(input) {

    let foodInGrams = Number(input.shift()) * 1000;
    let hayInGrams = Number(input.shift()) * 1000;
    let coverInGrams = Number(input.shift()) * 1000;
    let pigsWeightInGrams = Number(input.shift()) * 1000;
    let isEnough = true;

    for (let day = 1; day <= 30; day++) {

        foodInGrams -= 300;

        if (day % 2 === 0) {
            hayInGrams -= 0.05 * foodInGrams;
        }
        if (day % 3 === 0) {
            coverInGrams -= pigsWeightInGrams / 3;
        }

        if (foodInGrams < 0 || hayInGrams < 0 || coverInGrams < 0) {
            isEnough = false;
            break;
        }

    }
    if (isEnough) {
        console.log(`Everything is fine! Puppy is happy! Food: ${(foodInGrams / 1000).toFixed(2)}, Hay: ${(hayInGrams / 1000).toFixed(2)}, Cover: ${(coverInGrams / 1000).toFixed(2)}.`);
    } else {
        console.log("Merry must go to the pet store!");
    }
}
guineaPig(["1", 
"1.5", 
"3", 
"1.5"
])
