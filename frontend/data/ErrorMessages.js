import dotenv from 'dotenv'
dotenv.config()

export const INDEXMESSAGES = {
    LOCKEDMESSAGE: process.env.ERRORLOCKEDUSER,
    USERMESSAGE: process.env.ERRORUSER,
    EMPTYUSER: process.env.EMPTYUSER,
    PASSWORDMESSAGE: process.env.ERRORPASSWORD,
    INVALIDLOGIN: process.env.ERRORLOGIN,
}

export const CHECKOUTMESSAGES = {
    FIRSTNAMEERROR: process.env.FIRSTNAMEERROR,
    LASTNAMEERROR: process.env.LASTNAMEERROR,
    POSTALCODEERROR: process.env.LASTNAMEERROR
}