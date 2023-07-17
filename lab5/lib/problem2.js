function readInput() {
    let list = [];
    let input = prompt("Enter an integer (a negative to quit):");

    while (parseInt(input) >= 0) {
        if (!isNaN(parseInt(input)) && parseInt(input) > 0) {
            list.push(parseInt(input));
            
        }
        input = prompt("Enter an integer (a negative to quit):");
    }
    return list;
}

function displayStats(list) {
    let sum = list.reduce((a, b) => a + b, 0);
    let average = list.length > 0 ? (sum / list.length).toFixed(2) : 0;
    let min = list.length > 0 ? Math.min(...list) : 0;
    let max = list.length > 0 ? Math.max(...list) : 0;

    alert("For the list " + list + ", the average is " + average
        + ", the minimum is " + min + ", and the maximum is " + max)
}

let inputList = readInput();
displayStats(inputList);