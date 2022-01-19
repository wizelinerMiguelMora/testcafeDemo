import dotenv from 'dotenv'
dotenv.config()

export const TESTURL = { URL: process.env.SAUCEDEMO_URL }

export const USERNAMES = {
    STANDARD: process.env.STANDARD_USER,
    PROBLEM: process.env.PROBLEM_USER,
    PERFORM: process.env.PERFORM_USER,
    LOCKED: process.env.LOCKED_USER,
    INVALID: process.env.INVALID_USER,
    NONE: process.env.NONE_USER
}


export const PASSWORDS = {
    CORRECT: process.env.PASSWORD,
    INCORRECT: process.env.INVALID_PASSWORD,
    NONE: process.env.NONE_PASSWORD
}