import { Photon } from "@prisma/photon";
export interface Context {
    photon: Photon;
}
export declare function createContext(): Context;
