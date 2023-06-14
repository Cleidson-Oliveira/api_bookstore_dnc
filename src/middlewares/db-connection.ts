import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";

export async function DbConnection (req: Request, res: Response, next: NextFunction) {
    try {
        await mongoose.connect(process.env.MONGODB_URL_CONNECTION!);
        
        if (next) next();
    } catch (error) {
        console.error(error)
    }
}