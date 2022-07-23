import express from "express"
import { getQuotes, getRandomQuote, createQuote } from "../Controller/quotes.js"

const router = express.Router();


router.get('/quotes', getQuotes)
router.get("/quotes/random", getRandomQuote)
router.post("/quotes", createQuote)


export default router;
