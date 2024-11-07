"use strict";
{
    //
    function removeDuplicates(arr) {
        const newArray = [];
        arr.map((element) => {
            if (!newArray.includes(element)) {
                newArray.push(element);
            }
        });
        console.log(newArray);
        return newArray;
    }
    //
}
