// Import the fs module to perform file system operations
import * as fs from 'fs';

// Define an asynchronous function called "handler" that takes a request and response object as arguments
export default async function handler(req, res) {
    // Check if the request method is POST
    if (req.method === 'POST') {
        // Log the string "req.body" to the console
        console.log('req.body')

        // Read the contents of the "contactdata" directory and store the result in the "data" variable
        const data = await fs.promises.readdir('contactdata')

        // Write the request body to a new file in the "contactdata" directory with a filename based on the length of the "data" array
        fs.promises.writeFile(`contactdata/${data.length + 1}.json`, JSON.stringify(req.body))

        // Set the response status code to 200 and send the request body as the response payload in JSON format
        res.status(200).json(req.body)
    }
    // If the request method is not POST
    else {
        // Set the response status code to 200 and send an array containing the string "All Blogs" as the response payload in JSON format
        res.status(200).json(["All Blogs"])
    }
}
