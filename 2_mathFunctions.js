function factorial(n) {
    if (n <= 2) {
        return n;
    } else {
        let ans = 1;
        for (let i = 2; i <= n; i++) {
            ans *= i;
        }
        return ans;
    }
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

// console.log(gcd(4, 124));

function lcm(num1, num2) {
    return (num1 * num2) / gcd(num1, num2);
}

// console.log(lcm(1024, 124));

function toHexadecimal(num) {
    let hex = "";
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let ans = "";
    while (num) {
        hex += arr[num % 16];
        num = Math.floor(num / 16);
    }
    for (let i = hex.length - 1; i >= 0; i--) {
        ans += hex[i];
    }
    return ans;
}

// console.log(toHexadecimal(10000));

module.exports = {
    factorial,
    gcd,
    lcm,
    toHexadecimal,
};
