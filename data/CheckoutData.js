import dotenv from 'dotenv'
dotenv.config()

export const USERINFO = {
    FIRSTNAME: process.env.FIRSTNAME,
    LASTNAME: process.env.LASTNAME,
    POSTALCODE: process.env.POSTALCODE
}