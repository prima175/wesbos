//length
//a[a.length]
//a.push(.....)

const print1 = arr => {
    for (let i = 0; i < arr.length; i++) {
        console.log(i, '-> ', arr[i])
    }
}

print1([2, 5, 3, 10])

const print2 = arr => {
    for (const x of arr) {
        console.log('-> ', x)
    }
}

print2([2, 5, 3, 10])

// ===============================================================

const square = arr => {
    const result = [];
    for ( var i=0 ;i<= arr.length;i++){
       result.push(arr[i]*arr[i]);
    }
    return result;
}

console.log('square', square([2, 5, 2, 7])) // [4, 25, 4, 49]
console.log('square', square([3, 9, 10])) // [9, 81, 100]

const buchan = { name: { first: 'Christiano', last: 'Buchan' }, age: 16, height: 180, weight: 65 };

const heightEasy = (person) => {
    return (buchan.height);
}

console.log('heightEasy', heightEasy(buchan)) // 180

const persons = [
    buchan,
    { name: { first: 'Prima', last: 'Dhar' }, age: 25, height: 160, weight: 54 },
    { name: { first: 'Tahsin', last: 'Mutki' }, age: 28, height: 150, weight: 82 }
];

const heightHard = persons => {
    var height = [];
    for( var j=0; j<persons.length;j++){
      height.push(persons[j].height);
    }
    return height;

}

console.log('heightHard', heightHard(persons)) // [180, 160, 150]

const name = persons => {
    var fullName =[];
    for ( var k=0;k<persons.length;k++){
        const1 = (persons[k].name.first);
        const2 =(persons[k].name.last);
        fullName.push(const1+" "+const2);

    }
    return fullName;
};

console.log('name', name(persons)) // ['Christiano Buchan', 'Prima Dhar', 'Tahsin Mutki']

const totalAge = persons => {

    let sum = 0;
    for ( var k=0;k<persons.length;k++){
      sum+=((persons[k].age));
    }
        return sum;

};

console.log('totalAge', totalAge(persons)) // 69

const numbers = [2, 3, 4, 1, 10, 8, 9, 7]

const isEven = number => {
    return number % 2 === 0
}

console.log('isEven(2)', isEven(2))
console.log('isEven(5)', isEven(5))
console.log('isEven(8)', isEven(8))

const even = (numbers) => {
    var array = [];
    for ( var i=0;i<numbers.length;i++){
        if( i % 2 === 0){
         array.push(numbers[i]) ;
        }

    }
    return array;

}

console.log('even', even(numbers)) // [2, 4, 10,8]
