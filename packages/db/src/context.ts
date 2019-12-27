import * as dotenv from "dotenv";
import { Photon } from "@prisma/photon";
dotenv.config();
const photon = new Photon({ debug: false });

export interface Context {
  photon: Photon;
}

export function createContext(): Context {
  return { photon };
}
