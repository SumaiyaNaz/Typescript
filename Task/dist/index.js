console.log('Hi user');
let button = document.getElementById('btn');
// console.log(button);
let input = document.getElementById('userNumber');
// console.log(input);
button.addEventListener('click', () => {
    let UserNumber = Number(input.value);
    //  console.log(UserNumber);
    let checking = UserNumber % 2;
    if (UserNumber) {
        if (checking == 0) {
            console.log(UserNumber);
            console.log('Even number');
            alert('Even number');
        }
        else {
            console.log(UserNumber);
            console.log('Odd number');
            alert('Odd number');
        }
    }
    else {
        console.log('Enter a number');
        alert('Enter a number');
    }
    ;
});
export {};
//# sourceMappingURL=index.js.map