import { ObjectId } from "mongodb";

export const isValidDate = (d: Date) => d instanceof Date && !isNaN(d.getTime());
export const objectIdWithTimestamp = (timestamp: Date) => new ObjectId((Math.round(timestamp.getTime() / 1000).toString(16)) + "0000000000000000");
