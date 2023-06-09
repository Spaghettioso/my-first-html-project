let usersName = prompt ("Hello, user! my name is HAL 9000. what's yours?");
let yearOfBirth = prompt ("What year were you born?");
let hadBirthday = prompt ("Have you had your birthday yet? please type yes or no");
let currentYear = 2023;
let age = currentYear -yearOfBirth;
if (hadBirthday === "yes"){
    alert ("By my calculations, you are " + age + " years old!");
}
else if (hadBirthday === "no"){
    alert ("By my calculations, you are " + (age - 1) + " years old!");
}
if (hadBirthday === "no" && (age >= 30)){
    alert ( "I'm sorry, " + usersName + " you are too old to view this website :( You cant be over 30 to view this website");
}