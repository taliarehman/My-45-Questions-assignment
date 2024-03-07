import { markAsUntransferable } from "worker_threads";

type car = {
    manufacture: string
    model: string
    [key: string]: any;
};

function createCar(manufacture: string, model: string, optional: Record<string, any>): car {
    return{
        manufacture,
        model,
        ...optional
    };
};

const myCar: car = createCar("Toyota","Corolla", {color : "silver" ,year: "2024"});
console.log(myCar);