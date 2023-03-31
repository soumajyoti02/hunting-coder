// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// http://localhost:3000/api/getblog?slug=how-to-learn-javascript

import * as fs from 'fs';

export default function handler(req, res) {

    fs.readFile(`blogdata/${req.query.slug}.json`, 'utf-8', (error, data) => {
        if (error) {
            res.status(500).json({ error: "Internal Server Error" })
        }
        res.status(200).json(JSON.parse(data))
    })

}
