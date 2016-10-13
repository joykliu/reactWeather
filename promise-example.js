function addpromise(a, b) {
    return new Promise(function(resolve, reject) {
        if(typeof a === 'number' && typeof b === 'number'){
            resolve(a + b);
        } else{
            reject('result is not a number')
        }
    })
}

addpromise(2, 6).then(function(result){
    console.log('yayyyyy', result)
}, function(err) {
    console.log('error', err)
})

addpromise('yo', 6).then(function(result){
    console.log('yayyyyy')
}, function(err) {
    console.log('error', err)
})
