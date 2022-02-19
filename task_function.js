

function minPos(num1, num2){
    return Math.min(num1, num2);
}

function compare(minPos, num3){
    console.log(Math.min(minPos, num3));
}

//compare(minPos(2, 5), 3);
//compare(minPos(600, 342), 123);
//compare(minPos(25, 21), 4);

function sum(num1, num2){
    return num1 + num2;
}

function subtract(sum, num){
    console.log(sum - num);
}

//subtract(sum(23, 6), 10);
//subtract(sum(1, 17), 30);
//subtract(sum(42, 58),100);


function matrix(num){
    let s = "";
    for(let i = 0; i < num; i++){
        s += num + " ";
    }
    for(let i = 0; i < num; i++){
        console.log(s);
    }
}

//matrix(3);
//matrix(7);
//matrix(2);

function progressBar(num){
    var loading = "[" + '%'.repeat(num/10) + '.'.repeat(10-num/10) + "]";

    if(num == 100){
        console.log(`${num}% Complete!`);
        console.log(loading);
    }
    else{
        if(num % 10 == 0){
            console.log(`${num}%`, loading);
            console.log("Still loading...");
        }
    }
}

//progressBar(30);
//progressBar(50);
//progressBar(100);