import { Application } from "express";
import { TEST } from "./TEST";

export const initApp = async (app: Application) => {
    TEST();
}


