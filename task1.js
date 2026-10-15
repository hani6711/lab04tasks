function tipAmount(bill, percent) {
    return bill * percent / 100;
}

function splitBill(bill, people, percent) {
    if (bill <= 0 || people < 1) {
        return "Invalid input";
    }

    const tip = tipAmount(bill, percent);
    const total = bill + tip;
    const eachPerson = total / people;

    return eachPerson;
}

function tipRating(percent) {
    if (percent < 10) {
        return "Low";
    } else if (percent <= 20) {
        return "Standard";
    } else {
        return "Generous";
    }
}

function summary(bill, people, percent) {
    const eachPerson = splitBill(bill, people, percent);

    if (eachPerson === "Invalid input") {
        return eachPerson;
    }

    const rating = tipRating(percent);

    return `${people} people pay Rs ${eachPerson} each (${rating} tip).`;
}

console.log(tipAmount(2000, 10));
console.log(tipAmount(1000, 15));
console.log(splitBill(3000, 3, 10));
console.log(splitBill(2000, 2, 20));
console.log(tipRating(5));
console.log(tipRating(25));
console.log(summary(3000, 3, 10));
console.log(splitBill(0, 3, 10));
console.log(splitBill(3000, 0, 10));
console.log(splitBill(3000, -2, 10));