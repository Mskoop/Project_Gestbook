import fs from "fs"

export const readFile = () =>{
    return new Promise ((resolve, reject) => {
        fs.readFile("./data.json", (err, data) => {
            if (err) reject(err)
            else resolve (JSON.parse(data.toString()))
        })
    })
}

export const writeFile = (newEntry) => {
    return new Promise ((resolve, reject) => {
        fs.writeFile("./data.json", JSON.stringify(newEntry), (err) => {
            if (err) reject(err)
                else resolve()
        } 
        )
    })
}

export const appendData = (newEntry) => {
    return new Promise ((resolve, reject) => {
        readFile()
        .then((data) => {
            const allEntries = [...data, newEntry]
            writeFile(allEntries)
            .then((data) => resolve(allEntries))
            .catch((err) => reject(err))
        })
        .catch((err) => console.log(err))
    })
   

}