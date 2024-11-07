"use strict";
{
    //
    function countWordOccurrences(sentence, word) {
        const filtered = sentence.split(/[^\w\s]/).join('');
        let count = 0;
        const arr = filtered.split(' ');
        arr.map((element) => {
            if (element.toLocaleLowerCase().includes(word.toLocaleLowerCase())) {
                count++;
            }
        });
        console.log(count);
        return count;
    }
    //
}
