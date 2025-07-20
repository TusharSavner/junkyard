function isprime() {
    let num = Number(document.getElementById("input").value);
    if (num === 1) {
        document.getElementById("result").textContent = `1 can't be prime number`;
        return false;
    }
        if (num === 2) {
            document.getElementById("result").textContent = `${num} is a prime number`;
            return true;
        }
        else if (num <= 0){
            document.getElementById("result").textContent = `${num} is not a positive integer, so it can't be prime`

        }
        else {
            if (num % 1 != 0) {
                document.getElementById("result").textContent = `${num} is not an integer, so it can't be prime`;
                return false;
            }
            else {
                let i = 2;
                while (i < Math.sqrt(num) + 1) {
                    
                    let y = num % i ;
                    if (y === 0) {
                        document.getElementById("result").textContent = `${num} is not a prime number, its lowest divisor is ${i}`;
                        return false;
                    }
                    else {
                        i++;
                    }
                }
                document.getElementById("result").textContent = `${num} is a prime number`;
                return true;

            }
        }
    }
