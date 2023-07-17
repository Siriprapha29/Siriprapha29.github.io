function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

function findPrimes() {
    let userInput;
    while (true) {
        userInput = prompt("Enter a positive integer:");
        if (userInput === null) {
            // User clicked cancel, exit the loop
            return;
        }
        const number = parseInt(userInput);
        if (!isNaN(number) && number > 0) {
            const primes = [];
            for (let i = 2; i <= number; i++) {
                if (isPrime(i)) {
                    primes.push(i);
                }
            }
            alert("For n = " + number + " prime numbers are " + primes.join(", "));
            break;
        }
        alert: userInput;
    }
}

findPrimes();