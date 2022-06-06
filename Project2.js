function bodyMassIndex(height, weight) {
    return weight / (height * height);
}

function bodyState(bmi) {
    if (bmi < 18.5) {
        return "underweight";
    } else if (18.5 <= bmi && bmi <= 25) {
        return "normal weight";
    } else if (25 < bmi && bmi < 30) {
        return "overweight";
    } else {
        return "obese";
    }
}

function personGender(gender) {
    if (gender === "male") {
        return "M";
    } else return "F";
}

function returnClientInfo(name, gender, height, weight) {
    var bmi = bodyMassIndex(height, weight);
    var state = bodyState(bmi);
    var gender1 = personGender(gender);
    console.log(name + " | " + gender1 + " | BMI: " + bmi + " | " + state);
}

returnClientInfo("John Doe", "male", 1.95, 91.5);
returnClientInfo("Mary Anne", "female", 1.50, 67.5);