import quotes from "../data.js";
// import quotes from "../data.js";
import getRandomElement from "../utils.js";

export const getQuotes = (req,res) => {
    if(Object.keys(req.query).length === 0){
        try {
            res.status(200).send({quotes})
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }else{
        try {
            const author = req.query;
            let quote = [];
            quotes.forEach(elm => {
                if(author.hasOwnProperty("person") && elm.person === author.person){
                    quote.push(elm) ;
                }
            })
            if(Object.values(quote).length === 0){
                throw new Error
            }else{

                res.status(200).send({quotes: quote})
            }
        } catch (error) {
            console.log(error)
            res.status(404).send("Author not found")
        }
    }
}

export const getRandomQuote = (req,res) => {
    const quote = getRandomElement(quotes)
    try {
        res.status(200).json({quote})
    } catch (error) {
        res.status(400).send({message: error.message})
    }
}

export const createQuote = async(req, res) => {
    const newQuote = req.query;
    try {
        if(newQuote.hasOwnProperty("person") && newQuote.hasOwnProperty("quote")){
            quotes.push(newQuote)
            res.status(201).send({quote: newQuote})
        }else{
            throw new Error;
        }
    } catch (error) {
        res.status(400).send("Bad request")
    }
}