export interface Driver {
    id: number,
    last_name: string,
    first_name: string,
    dob: Date,
    address: string,
    phone: Uint16Array,
    city: string
}