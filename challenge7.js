// Challenge 7

// Objects

const mark = {
    fullName: 'Mark Miller',
    weight: 78,
    height: 169,

    // Method

    calcMarkBMI: function () {
        return (this.weight / this.height) ** 2
    }
};

const john = {
    fullName: 'John Smith',
    weight: 92,
    height: 195,

    // Method

    calcJohnBMI: function () {
        return (this.weight / this.height) ** 2;
    }
};

// Condition

if (mark.calcMarkBMI(this) > john.calcJohnBMI(this)) {

    console.log(`${john.fullName}'s BMI is ${john.calcJohnBMI(this)} and is higher than ${mark.fullName}'s ${mark.calcMarkBMI(this)} BMI`);

} else {

    console.log(`${mark.fullName}'s BMI is ${mark.calcMarkBMI(this)} and is higher than ${john.fullName}'s ${john.calcJohnBMI(this)} BMI`);
}
