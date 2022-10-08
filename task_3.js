function digital_root(num){
    return String(num).length > 1 ? digital_root(eval(Array.from(String(num)).join('+'))) : num
}

digital_root(16) // 7
digital_root(132189) // 6
digital_root(493193) // 2
