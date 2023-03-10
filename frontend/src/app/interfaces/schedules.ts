import { Route } from "./routes";

export interface Schedule {
    id: number,
    route_id: Route,
    week_num: Uint16Array,
    from: Date,
    to: Date,
}