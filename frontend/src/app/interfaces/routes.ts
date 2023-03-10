import { Driver } from "./drivers";
import { Vehicle } from "./vehicle";

export interface Route {
    id: number,
    description: string,
    driver_id: Driver,
    vehicle_id: Vehicle
}