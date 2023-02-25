let lower_limit = 100;
for (i = 0; i < 5; i++) {
    let randumnumber = Math.floor(Math.random() * 900) + lower_limit;
    console.log("Random Number '" + (
        i + 1
    ) + "' : " + randumnumber);
    if (i == 0) {
        min = max = randumnumber;
    }
    if (randumnumber > max) {
        max = randumnumber;
    }
    if (randumnumber < min) {
        min = randumnumber;
    }
}
console.log("Maximum of 5 Random Numbers : " + max);
console.log("Minimum of 5 Random Numbers : " + min);