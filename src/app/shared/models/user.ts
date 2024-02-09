import { Address } from "./address";
import { Role } from "./role";

export interface User {
    userId: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    addresses: Address[];
    roles: Role[];
}
