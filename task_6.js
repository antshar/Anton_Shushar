function permutations(x){
    return x[0] ? x.reduce((a, n) => (permutations(x.filter(m => m!=n)).forEach(y => a.push([n,...y])), a), []) : [[]]
}

function nextBigger(num){
    arr = Array.from(String(num))
    for(e of permutations(arr)){
        if(+e.join('') > num) return +e.join('')
    }
    return -1
}

nextBigger(12) // 21
nextBigger(513) // 531 
nextBigger(2017) // 2071

nextBigger(9) // -1
nextBigger(111) // -1
nextBigger(531) // -1
