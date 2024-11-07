function sumArray (arr: number[]):number {
    let sum: number = 0;
    arr.map(element=>sum+=element)
    console.log(sum);
    return sum;
}