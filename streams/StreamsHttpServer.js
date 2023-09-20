import http from "node:http";
import {Transform} from "node:stream"

class InverseNumbersStreams extends Transform {
  _transform(chunck, encoding, callback) {
    const transformed = Number(chunck.toString()) * -1
    
    console.log(transformed)
    
    callback(null, Buffer.from(String(transformed)))
  }
}
const server = http.createServer((req, res) => {
  reuturn req.pipe(new InverseNumbersStreams()).pipe(res)
})

server.listen(3334)