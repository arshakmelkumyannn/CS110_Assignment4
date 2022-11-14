function printFigure(n) {
    let space = " ";
    let figure = "+";
    for (let i = 1; i <= n; i++) {
        space += space;
        figure += figure;
    }
    for (let i = n; i >= 1; i--) {
        let prtLine = space.slice(0, i) + figure.slice(i - 1, n);
        console.log(prtLine);
    }
}
printFigure(8);
