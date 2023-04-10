
import express from "express"
import cors from "cors"
import { readFile, writeFile, appendData} from "./helper.js"

const PORT = 6969
const app = express()

app.use(express.json())
app.use(cors())

app.get("/api/v1/getData", (req,res) => {
    readFile()
    .then((data) => res.json(data))
    .catch((err) => res.end(err))
    //res.end("hallo")
})


app.post("/api/v1/getData", (req,res)=> {
    const newEntry = req.body
    //entweder req.body in writeFile ( eintragen) oder als const newENtry

    appendData(newEntry)
    .then((data) => res.json(data))
    .catch((err) => res.end(err))
   
})






app.listen(PORT, () => console.log("Höre auf Port,", PORT))

    