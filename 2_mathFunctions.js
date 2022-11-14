function factorial(n) {
    let ans = 1;
    for (let i = 2; i <= n; i++) {
        ans *= i;
    }
    return ans;
}
// console.log(factorial(7));

function gcd(num1, num2) {
    let start, rem, ans;
    if (num1 == num2) {
        return num1;
    } else if (num1 > num2) {
        start = num2;
        rem = num1 % num2;
        ans = num2;
    } else {
        start = num1;
        rem = num2 % num1;
        ans = num1;
    }
    while (rem != 0) {
        let x = rem;
        rem = start % rem;
        start = x;
        ans = x;
    }
    return ans;
}

// console.log(gcd(10234, 124));

function hcf(num1, num2) {
    return gcd(num1, num2);
}

// console.log(hcf(1024, 124));

function toHexadecimal(num) {
    let hex = "";
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let ans = "";
    while (num) {
        hex += arr[(num % 16) - 1];
        num = Math.floor(num / 16);
    }
    for (let i = hex.length - 1; i >= 0; i--) {
        ans += hex[i];
    }
    return ans;
}

// console.log(toHexadecimal(3225));

module.exports = {
    factorial,
    gcd,
    hcf,
    toHexadecimal,
};
