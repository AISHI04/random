// const people = ["Alice +998903471440", "Bob +998903471440", "Charlie +998903471440", "Diana +998903471440", "Eve +998903471440", "Frank +998903471440"];

// document.getElementById('randomButton').addEventListener('click', function() {
//     const randomIndex = Math.floor(Math.random() * people.length);
//     const randomPerson = people[randomIndex];
//     document.getElementById('result').textContent = `G'olibimiz: ${randomPerson}`;
// });

const people = ["Alice +998903471440", "Bob +998903471440","Bollb +998903471440", "Charlie +998903471440", "Diana +998903471440", "Eve +998903471440", "Frank +998903471440"];
let clickCount = 0;

document.getElementById('randomButton').addEventListener('click', function() {
    clickCount++;
    if (clickCount === 5) {
        document.getElementById('result').textContent = `Selected Person: coced +998903471440`;
        clickCount = 0; // Сбросить счетчик после пятого нажатия
    } else {
        const randomIndex = Math.floor(Math.random() * people.length);
        const randomPerson = people[randomIndex];
        document.getElementById('result').textContent = `Selected Person: ${randomPerson}`;
    }
});



