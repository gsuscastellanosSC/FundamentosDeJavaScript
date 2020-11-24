var name = ' Jesús', lastName = ' Castellanos', age = 29, weight = ' 70 KG';

console.log('Variables: ');
    console.log('\n    Hello World.\n    I\'am' + name + lastName + '\n    I have ' + age + ' years old.' + '\n    with a weight of:' + weight);

console.log('\nStrings: ');
    name = name.toUpperCase();
    lastName = lastName.toLowerCase();
    weight = weight.toLowerCase();
    console.log('\n    Hello World.\n    I\'am' + name + lastName + '\n    I have ' + age + ' years old.' + '\n    with a weight of:' + weight);
    firstLetterOfName = name.charAt(0);
    console.log('    The first Letter in ' + name + ' is ' + firstLetterOfName);
    console.log('    The length of' + name + ' is ' + name.length);
    console.log('    Concatenate:');
        console.log('    With + :');
            console.log('       The full name is ' + name + lastName);
        console.log('    With `` :');
            console.log(`       The full name is${name.substr(0,2) + name.toLowerCase().substr(2,name.length-1)}${ lastName.charAt(0) + lastName.charAt(1).toUpperCase() + lastName.toLowerCase().substr(2, lastName.length-1)}`);
            
console.log('\nNumbers:');
    console.log('    Increase ++:  ');
        console.log(`           age = ${age}  \n           age + 1 = ${++age}` );
    console.log('    Decrease --:  ');
        console.log(`           age = ${age}  \n           age - 1 = ${--age}` );
    console.log('    Sum +:  ');
    console.log(`           age = ${age}  \n           age + 20 = ${age+20}` );
    console.log('    Subtract -:  ');
    console.log(`           age = ${age}  \n           age - 20 = ${age-20}` );
    console.log('    round:  ');
    console.log(`           age = ${age=age+0.3*0.333}  \n           Math.round(age) = ${Math.round(age)}` );
    console.log(`           age = ${age=age+0.3*0.333}  \n           age.toFixed(3) = ${age.toFixed(3)}` );
    console.log(`           age = ${age=age+0.3*0.333}  \n           parseFloat(age) = ${parseFloat(age)}` );
    console.log('    division /:  ');
    console.log(`           age = ${age}  \n           age/2 = ${(age/2).toFixed(100)}` );