import {Readable} from "node:stream"

class OneToHundredStream extends Readable {
    //construtor implicito
    index = 1
    _read () {
    const i = this.index++

    setTimeout(() => {
        if (i > 100) {
            //usa o **push** passando como argumento null fazendo com que eu não tenha maia nenhuma informação para ser enviada de dentro dessa stream
            this.push(null)
        } else {
            const buf = Buffer.from(String(i));
            // sw o **i** não chegou a 100 ainda eu vou enviar **i**
            this.push(buf)
        }
      
    
    }, 1000) 
}
    
}

fetch("http://localhost:3334", {
  method: "POST",
  body: new OneToHundredStream()
})