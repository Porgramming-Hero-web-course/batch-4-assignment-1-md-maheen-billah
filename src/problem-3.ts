{
    //

    function countWordOccurrences (sentence: string, word: string):number {
        const filtered:string = sentence.split(/[^\w\s]/).join('');
        let count:number = 0;
        const arr:string[] =filtered.split(' ')
        arr.map((element:string)=>{
            if(element.toLocaleLowerCase().includes(word.toLocaleLowerCase())){
                count++;
            }
        })
        console.log(count);
        return count;
    }

    //
}