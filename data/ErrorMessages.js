import dotenv from 'dotenv'
dotenv.config()

export const INDEXMESSAGES = {
    USERMESSAGE: process.env.ERRORUSER,
    PASSWORDMESSAGE: process.env.ERRORPASSWORD,
    INVALIDLOGIN: process.env.ERRORLOGIN,
    LOCKEDMESSAGE: process.env.ERRORLOCKEDUSER
}

export const CHECKOUTMESSAGES = {
    FIRSTNAMEERROR: process.env.FIRSTNAMEERROR,
    LASTNAMEERROR: process.env.LASTNAMEERROR,
    POSTALCODEERROR: process.env.LASTNAMEERROR
}