
// ... rest peremetter

// --------------console---------------
/*
console.log('Hi Mahmud!')
console.warn('Hi Mahmud!')
console.error('Hi Mahmud!')
*/

// -----------------DATA TYPE------------------
// 1. Primitive data type & 2. Non Primitive data type!

/*

// Primitive data type!

1. String
2. Number
3. Boolean
4. BigInt '10n'
5. Symbol
6. Undefined
7. Null

Example::
---BigIng()---
let x = 10n;
let x = BigInt(10);
console.log(typeof x)

Boolean all false value : 0, null, undefined, NaN

---Symble()---
let x = Symbol('mamun') symble background e ekti unic key genarate kore, jeta eke oporer sathe omil!
let y = Symbol('shole')




//  Non Primitive data type!
-----------Object-----------
1.Object
2.Function
3.Array


*/
// ===============================The End!===========================


// =================Arithmetic Operators============
/*

1.+
2.-
3.*
4./
5.%
6.** Exponentiation operator
7. preIncrement ++ postIncrement
8.preDecrement -- postDecrement
9.=

let m = 'hasan';
let y = 'mamun';
console.log(m ?? y)


------------string convert to number--------
let x = '21';
let y = '23';
console.log( +x + +y );

-----------------Comparison operator----------------
==
===
< & <=
> & >=
!= & !==
-----------------Logical operator--------------
&&
||
!

*/
// ================The end===================

// =================Object==================
/*



*/

// =================Constructor function or object====================
/*

function Constructor(fname, lname, address){
    if(!new.target){
        return new Constructor(fname, lname, address)
    }

    this.fname = fname;
    this.nickname = lname;
    this.city = address;
}
const x = new Constructor('Mahmud', 'Hasan', 'Jessore')
console.log(x)
let con1 = new Constructor('Sohel','Rana','Benapol')
let con2 = new Constructor('Navil','Thamid','Jhikargacha')
con1.age = 19;
console.log(con1)

let justObj = {
    name:'Mahmud',
    lname:'Hasan'
}
let addObj={
    age:18,
    height:5.4,
    weight:62,
}

let res = Object.assign(justObj,{frndName:'Sohel'},justObj,addObj)



*/





