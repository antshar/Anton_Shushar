function count_sum_pairs(arr, target){
    let count = 0
    let pairs = arr.map( (v, i) => arr.slice(i + 1).map(w => [v, w]) ).flat();
    for(p of pairs){
        if(eval(p.join('+')) == target) count++;
    }
    return count || "No pairs found that add up to "+target
}

count_sum_pairs([1, 3, 6, 2, 2, 0, 4, 5], 5) // 4
count_sum_pairs([1, 3, 6, 2, 2, 0, 4, 5], 1) // 1
count_sum_pairs([1, 3, 6, 2, 2, 0, 4, 5], 0) // "No pairs found that add up to 0"
