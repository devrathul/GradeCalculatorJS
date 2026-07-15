let subject_1 = Number(prompt("Enter First Subject Mark"));
let subject_2 = Number(prompt("Enter Second Subject Mark"));
let subject_3 = Number(prompt("Enter Third Subject Mark"));
let subject_4 = Number(prompt("Enter Four Subject Mark"));
let subject_5 = Number(prompt("Enter Five Subject Mark"));

let totalMark = subject_1 + subject_2 + subject_3 + subject_4 + subject_5;

let avg = (totalMark / 5);

if (avg >= 90) {
    alert(`Total Mark : ${totalMark} Average : ${avg} Grade : A+`);
} else if (avg >= 80 && avg <= 89) {
    alert(`Total Mark : ${totalMark} Average : ${avg} Grade : A`);
} else if (avg >= 70 && avg <= 79) {
    alert(`Total Mark : ${totalMark} Average : ${avg} Grade : B`);
} else if (avg >= 60 && avg <= 69) {
    alert(`Total Mark : ${totalMark} Average : ${avg} Grade : C`);
} else if (avg >= 50 && avg <= 59) {
    alert(`Total Mark : ${totalMark} Average : ${avg} Grade : D`);
} else if (avg < 50) {
    alert(`Total Mark : ${totalMark} Average : ${avg} Grade : F`);
}