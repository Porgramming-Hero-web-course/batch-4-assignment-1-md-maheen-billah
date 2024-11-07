"use strict";
{
    const calculateShapeArea = (area) => {
        if (area.shape === "circle") {
            const result = parseFloat((Math.PI * area.radius * area.radius).toFixed(2));
            console.log(result);
            return result;
        }
        else {
            const result = parseFloat((area.width * area.height).toFixed(2));
            console.log(result);
            return result;
        }
    };
    //
}
