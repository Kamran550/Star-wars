function isPrime(x){
    if(x % x === 1 && x % 1 === x){
    return true
    }else{
        return false
    }
}


var a = isPrime(5)
console.log(a)