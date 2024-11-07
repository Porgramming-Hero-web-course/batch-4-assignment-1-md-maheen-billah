{
    //

    function removeDuplicates (arr: number[]):number[] {
    const newArray: number [] = [];
    arr.map((element:number)=>{
        if(!newArray.includes(element)){
            newArray.push(element)
        }
    })
    console.log(newArray);
    return newArray
    }

    //
}