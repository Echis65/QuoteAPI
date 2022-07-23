import express from "express"
import quoteRoutes from "./Routes/quotes.js"

const app = express();


const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.use('/api', quoteRoutes)

app.listen(PORT, () => {
    console.log(`Server runnig on port ${PORT}`)
})