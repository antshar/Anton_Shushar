function print_sorted_names(str){
    let arr = str.split(';').map(e => e.split(':').reverse())
    arr.sort((a,b) => {
            return a[0].localeCompare(b[0]) || a[1].localeCompare(b[1])
        })
    return '('+arr.join(')(')+')'
}


print_sorted_names("Fired:Corwill;Wilfred:Corwill;Barney:TornBull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill")

// "(Corwill,Alfred)(Corwill,Fired)(Corwill,Raphael)(Corwill,Wilfred)(Tornbull,Betty)(Tornbull,Bjon)(TornBull,Barney)"
