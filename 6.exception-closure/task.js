function parseCount(argument){
    if( isNaN(Number.parseFloat(argument)) === true){
       throw new Error("Невалидное значение");
   }
   return (Number.parseFloat(argument));
}
function validateCount(needParse){
    try{
    parseCount(needParse)
    } catch(error){
    return error;
    }
}
class Triangle{
    constructor(a,b,c){
        if((a + b) < c || (a + c) < b || (b + c ) < a){
         throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
        
    }
    
    get perimeter(){
        return this.a + this.b + this.c;
    }
    get area(){
        let halfPerimeter= this.perimeter/2;
        let square = Math.sqrt(halfPerimeter * (halfPerimeter - this.a) * (halfPerimeter - this.b) * (halfPerimeter- this.c)).toFixed(3);
        return Number(square);
    }
    
}
function getTriangle (a, b, c){
    try{
        // console.log(new Triangle(a, b, c));
            return new Triangle(a, b, c);
        } catch (e){
        return { 
        get area() { return "Ошибка! Треугольник не существует" },
        get perimeter() { return "Ошибка! Треугольник не существует" }
        
        }
    }
}
