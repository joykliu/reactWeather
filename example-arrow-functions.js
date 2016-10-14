var names = ['Joy', 'Jen', 'Lindsie', 'Hanna'];
//
// names.forEach(function(name, i) {
//     console.log('forEach', name)
// });
//
// names.forEach((name, i) => console.log('singleLine', name, i));
//
// names.forEach((name) => {
//     var mySock = 'not smelly';
// })

var returnMe = (name) => name + '!'
console.log(returnMe('JEB'))

var person ={
    name: 'Joy',
    greet: function() {
        names.forEach(name => {
            // here uses arrow function to push this up a level
            console.log(`sup ${this.name} this is ${name}`)
        })
    }
}

person.greet();


var addStatement = (a, b) => {
    return a + 7
}
function add(a,b) {
    return a + b
}

console.log (add(1,3))
console.log(add(2,6))

function challenge()
