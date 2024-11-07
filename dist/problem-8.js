"use strict";
{
    //
    function validateKeys(obj, keys) {
        for (let key of keys) {
            if (!(key in obj)) {
                return false;
            }
        }
        return true;
    }
    //
}
