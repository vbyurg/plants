function nbDig(n, d) {
    var result = '';
    for (var i = 0; i <= n; i++) {
        result += Math.pow(i, 2);
    }
    return result.split(d).length - 1
}