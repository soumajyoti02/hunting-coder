// Import the Node.js File System (fs) module
import * as fs from 'fs';

// Define the API route handler
export default async function handler(req, res) {

	/* Read the list of files in the "blogdata" directory
	These line uses the readdir function from the fs module to read the list of files in the "blogdata" 
	directory. The await keyword is used to wait for the operation to complete before continuing with 
	the rest of the code.
	*/
	let data = await fs.promises.readdir("blogdata");

	// Initialize variables for the current file and the list of all blogs
	let myfile;
	let allBlogs = [];

	// Loop through each file in the directory
	for (let index = 0; index < data.length; index++) {

		// Get the name of the current file
		const item = data[index];

		/* Read the contents of the current file as a string
		This Line uses the readFile function from the fs module to read the contents of the current file
		as a string. The await keyword is used to wait for the operation to complete before continuing 
		with the rest of the code.
		*/
		myfile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')

		// Parse the JSON string into a JavaScript object and add it to the list of all blogs
		allBlogs.push(JSON.parse(myfile))
	}

	// Send the list of all blogs as a JSON response
	res.status(200).json(allBlogs)
}
