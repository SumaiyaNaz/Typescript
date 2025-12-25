console.log('Hi user');

let button = document.getElementById('btn') as HTMLButtonElement;
// console.log(button);

let input = document.getElementById('userNumber') as HTMLInputElement;
// console.log(input);

button.addEventListener('click',()=> {
    let UserNumber : number = Number(input.value) ;
    //  console.log(UserNumber);

    let checking = UserNumber % 2 ;

    if(UserNumber){
        if(checking == 0){
        console.log(UserNumber);
        console.log('Even number');
        alert('Even number');
    }
        else{
        console.log(UserNumber);
        console.log('Odd number');
        alert('Odd number');
    }
    }
    else{
        console.log('Enter a number');
        alert('Enter a number');
    };
})
