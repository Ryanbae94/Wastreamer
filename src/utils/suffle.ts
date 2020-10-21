export function shuffle(a: number[]) { 
    let j :number, x: number, i: number
    for (i = a.length; i; i -= 1) 
    { j = Math.floor(Math.random() * i) 
    x = a[i - 1]; a[i - 1] = a[j]; a[j] = x 
} 
    }