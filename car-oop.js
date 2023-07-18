//Part One

class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        return "Beep.";
    }

    toString(){
        return `The vehicle is a ${this.make}, ${this.model} from ${this.year}.`;
    }
 }
//Part Two

 class Car extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 4;
    }
    
 }

 //Part Three

 class Motorcycle extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 2;
    }
 revEngine(){
     return "VROOM!!!";
    }
}

//Part Four

class Garage{
    constructor(capacity){
       this.vehicles = [];
       this.capacity = capacity;// not zero because the value is passed in and accessed.
    } 

 add(newVehicle){ //random parameter/value name that can be passed into the method. newVehicle = type: car, motorcycle, etc
   if(!(newVehicle instanceof Vehicle)){//instanceof test if the propety appears anywhere in the classes
      return "Only vehicles are allowed in here!";
    }
   
    if(this.vehicles.length >= this.capacity){
    return "Sorry we're full.";
   }
   
   else  
   {
    this.vehicles.push(newVehicle);
    return "Vehicle added!" // if the value passed in os not a Vehicle it will return, if the array length of vehicles is equal to the capacity = full, otherwise add vehicle.
   }
 }
}
    