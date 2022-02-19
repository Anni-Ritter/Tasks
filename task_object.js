function staff(employeeName) {
    employeeName.forEach(element => {
        let obj = {employeeName: element, personalNum: element.length};
        console.log('Name: ' + obj.employeeName + ' - Personal Number: ' + obj.personalNum);
    });
}
//staff(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);

function towns(town) {
    town.forEach(element => {
        let item = element.split(' | ');
        console.log({town: item[0], latitude: parseFloat(item[1]).toFixed(2), longitude: parseFloat(item[2]).toFixed(2)});
    });
}
//towns(['Moscow | 55.7522 | 37.6156', 'Beijing | 39.913818 | 116.363625']);

function store(storeProduct, orderProduct){
    var resultProduct = new Array();
    for (let i = 0; i < storeProduct.length; i += 2){
        resultProduct.push({product: storeProduct[i], quantity: storeProduct[i + 1]});
    }
    for (let i = 0; i < orderProduct.length; i += 2) {
        let index = resultProduct.findIndex(el => el.product === orderProduct[i]);

        if (index != -1){
            resultProduct[index].quantity = Number.parseInt(resultProduct[index].quantity) + Number.parseInt(orderProduct[i + 1]);
        }
        else {
            resultProduct.push({product: orderProduct[i], quantity: orderProduct[i + 1]});
        }
    }
    resultProduct.forEach(element => {
        console.log(element.product + ' -> ' + element.quantity);
    });
}
//store(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'], 
//['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);

function movies(command) {
    let result = new Array();

    command.forEach(element => {
        if (element.indexOf('addMovie') != -1) {
            let elements = element.split('addMovie ');
            if (!result.find(el => el.name === elements[1])) {
                result.push({name: elements[1], date: '', director: ''});
            }
        }

        if (element.indexOf('directedBy') != -1) {
            let elements = element.split(' directedBy ');
            let index = result.findIndex(el => el.name === elements[0]);
            if (index != -1) {
                result[index].director = elements[1];
            }
        }

        if (element.indexOf('onDate') != -1) {
            let elements = element.split(' onDate ');
            let index = result.findIndex(el => el.name === elements[0]);
            if (index != -1) {
                result[index].date = elements[1];
            }
        }
    });

    console.log(JSON.stringify(result));
}

//movies(['addMovie Fast and Furious', 'addMovie Godfather', 'Inception directedBy Christopher Nolan', 
//'Godfather directedBy Francis Ford Coppola', 'Godfather onDate 29.07.2018', 'Fast and Furious onDate 30.07.2018', 
//'Batman onDate 01.08.2018', 'Fast and Furious directedBy Rob Cohen']);