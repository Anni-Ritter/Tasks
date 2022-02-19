function task1(arr){
    let sum_1 = 0;
    let sum_2 = 0;
    for(let num of arr){
        sum_1 += num;
    }

    for(let i = 0; i < arr.length; i++){
        if(arr[i]%2 == 0){
            arr[i] = arr[i]+i;
        }
        else{
            arr[i] = arr[i]-i;
        }
    }
    for(let num of arr){
        sum_2 += num;
    }
    console.log(`[${arr.join(', ')}]`);
    console.log(sum_1);
    console.log(sum_2);
}

//task1([5, 15, 23, 56, 35]);
//task1([-5, 11, 3, 0, 2]);

function task2(arr1, arr2){
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(arr1[i] === arr2[j]){
                console.log(arr1[i]);
            }
        }
    }
}
//task2(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);
//task2(['R', 'u', 's', 's', 'i', 'a'], ['R', 'u', 't']);

function task3(arr, num){
    for(let i = 0; i < num; i++){
        const el = arr.shift();
        arr = arr.concat(el);
    }
    console.log(arr.join(' '));
}
//task3([51, 47, 32, 61, 21], 2);
//task3([32, 21, 61, 1], 4);
//task3([2, 4, 15, 31], 5);

function task4(matrix){
    let count = 0;
    var rowSum = matrix.map(r => r.reduce((a, b) => a + b));
    var colSum = matrix.reduce((a, b) => a.map((x, i) => x + b[i]));

    for(let i = 0; i < rowSum.length + colSum.length; i++){     
        if(rowSum[i] == colSum[i]){
            count++;
        }      
    }
    
    if(count == rowSum.length + colSum.length){
        console.log("true");
    }
    else{
        console.log("false");
    }
}
    
task4([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]);
task4([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]);
task4([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]);