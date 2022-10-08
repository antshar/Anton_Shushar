function first_non_repeating_letter(str){
    for(s of str){
        if(str.toLowerCase().split(s.toLowerCase()).length == 2) return s
    }
    return ""
}

first_non_repeating_letter('stress') // 't'
first_non_repeating_letter('sTreSS') // 'T'
