import dotenv from "dotenv";
dotenv.config();

if(!process.env.MONGO_URI){
    throw new Error("MONGO_URI is not defined in environment variables");
}
if(!process.env.JWT_SECRET){
    throw new Error("JWT Secret is not defined in enviroment variables");
}
if(!process.env.GOOGLE_CLIENT_ID){
    throw new Error("Google Client ID is not defined in enviroment variables")
}
if(!process.env.GOOGLE_CLIENT_SECRET){
    throw new Error("Google Client SECRET is not defined in enviroment variables")
}
if(!process.env.IMAGE_KIT_KEY){
    throw new Error("Image Kit KEY is not defined in enviroment variables")
}
export const config = {
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET : process.env.JWT_SECRET,
    GOOGLE_CLIENT_ID : process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET : process.env.GOOGLE_CLIENT_SECRET,
    IMAGE_KIT_KEY : process.env.IMAGE_KIT_KEY,
}

