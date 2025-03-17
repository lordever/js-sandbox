function func(x, y) {
    if(x < y) {
        var temp = x;
        x = y
        y = temp
    }

    return x - y
}

console.log(func(2, 5));

