function printFigure(n) {
    let space = " ".repeat(n);
    let figure = "+".repeat(n);

    for (let i = n; i >= 1; i--) {
        let prtLine = space.slice(0, i) + figure.slice(i - 1, n);
        console.log(prtLine);
    }
}
printFigure(4);
