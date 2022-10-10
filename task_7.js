function getIP(num){
    let binary = "0".repeat(32) + num.toString(2);
    let arr = binary.slice(-32).match(/.{8}/g);
    return arr.map(e => parseInt(e, 2)).join('.')
}

getIP(2149583361) // "128.32.10.1"
getIP(32) // "0.0.0.32"
getIP(0) // "0.0.0.0"
