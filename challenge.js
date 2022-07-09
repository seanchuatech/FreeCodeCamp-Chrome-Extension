// const player
// const opponent
// const game
// let points
// let hasWon


// `${player} got ${points} points and won the ${game} game!`
// `The winner is ${opponent}! ${player} lost the game`

// let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"];

// function courses(course) {
//     for (let i = 0; i < course.length; i++) {
//         console.log(course[i]);
//     }
// }

// courses(myCourses);

// localStorage.setItem("banana", "banana pie");
// console.log(localStorage.getItem("banana"));

// let data = [
//     {
//         player: "Jane",
//         score: 52
//     },
//     {
//         player: "Mark",
//         score: 55
//     }
// ]
// const janeBtn = document.getElementById("jane-btn");
// // console.log(janeBtn);

// janeBtn.addEventListener("click", function() {
//     console.log(data[0].score);
// });

// let fruits = ['APPLE', 'BANANA', 'ORANGE'];
// let description = "fruits";
// function generateSentence(desc, arr) {

//     // let items = '';
//     // for (let i = 0; i < arr.length; i++) {
//     //     items += `${arr[i]}, `;
//     // }
//     // let sentence = `The ${arr.length} best ${desc} are ${items}`;
//     // console.log(sentence);

//     let baseString = `The ${arr.length} ${desc} are `
//     const lastIndex = arr.length -1
//     for (let i = 0; i < arr.length; i++) {
//         if (i === lastIndex) {
//             baseString += arr[i] + "."
//         } else {
//             baseString += arr[i] + ", "
//         }
//     }
//     return baseString;
// }

// const sentence = generateSentence(description, fruits);

// console.log(sentence);

const images = [
    "JOHN",
    "SEAN",
    "FRANCE",
]
const container = document.getElementById("container");
// console.log(container);
function displayImages() {
    let displayImage = ''; 
    for(let i = 0; i < images.length; i++) {
        displayImage += images[i] + ' ';
    }
    container.innerHTML = displayImage;
}

displayImages();

// ES6 IS NEXT!