// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// http://localhost:3000/api/getblog?slug=how-to-learn-javascript

// Import the fs module to read files
import * as fs from 'fs';

// Define the handler function with two parameters: req and res
export default function handler(req, res) {

    // Read the contents of the JSON file with the given slug from the blogdata directory
    fs.readFile(`blogdata/${req.query.slug}.json`, 'utf-8', (error, data) => {

        // If there was an error reading the file, return a 500 Internal Server Error response
        if (error) {
            res.status(500).json({ error: "Internal Server Error" })
        }

        // If the file was read successfully, return a 200 OK response with the contents of the file as a JSON object
        res.status(200).json(JSON.parse(data))
    })

}

