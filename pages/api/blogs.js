// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';

export default function handler(req, res) {

  fs.readdir("blogdata", (error, data) => {
    data.forEach((item) => {
      console.log(item)
    })
    res.status(200).json(data)
  })
}
