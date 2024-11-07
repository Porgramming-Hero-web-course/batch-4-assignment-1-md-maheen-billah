{
    //

    type Circle = {
        shape: "circle";
        radius: number;
    }
    
    type Rectangle = {
        shape: "rectangle";
        width: number;
        height: number;
    }
    
    type Area = Circle | Rectangle;
    
    const calculateShapeArea = (area: Area)=>{
        if(area.shape === "circle") {
            const result = parseFloat((Math.PI*area.radius*area.radius).toFixed(2));
            console.log(result);
            return result;
        }
        else{
            const result = parseFloat((area.width*area.height).toFixed(2));
            console.log(result);
            return result;
        }
    }

    //
}