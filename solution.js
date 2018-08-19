function solution(N, M, X, Y) {
    const x = [];
    const y = [];

    const numberOfMines = X.length;

    if (numberOfMines % 2 === 1) {
        return 0;
    }

    const halfOfMines = Math.floor(numberOfMines / 2);

    for (let i = 0; i < numberOfMines; i++) {
        const currIndex = X[i] + 1;
        x[currIndex] = (x[currIndex] || 0) + 1;
    }

    for (let i = 0; i < numberOfMines; i++) {
        const currIndex = Y[i] + 1;
        y[currIndex] = (y[currIndex] || 0) + 1;
    }

    x[0] = 0;
    y[0] = 0;

    for (let i = 1; i <= N; i++) {
        x[i] = (x[i] || 0) + x[i - 1];
    }

    for (let i = 1; i <= M; i++) {
        y[i] = (y[i] || 0) + y[i - 1];
    }

    let countOfFairDivisions = 0;

    for (let i = 1; i <= N; i++) {
        if (halfOfMines === x[i]){
            countOfFairDivisions++;
        }
    }

    for (let i = 1; i <= M; i++) {
        if (halfOfMines === y[i]){
            countOfFairDivisions++;
        }
    }

    return countOfFairDivisions;
}

module.exports = solution;
