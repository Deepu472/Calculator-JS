//1. display numbers on screen
function displayNum(num){
    console.log(num);
    result.value+=num;

}

//2. clear the screen

function screenClear(){
    result.value="";
}

//3. evaluate operations
function evaluateExp(){
    result.value= eval(result.value) ;
}

//4. clear last digit by digit

function lastDigit(){
    exp=result.value ;
    result.value= exp.slice(0,-1) ;
}