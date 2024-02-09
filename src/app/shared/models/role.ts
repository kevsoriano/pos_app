import { Authority } from "./authority";

export interface Role {
    name: string;
    authorities: Authority[];
}
