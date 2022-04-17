function comp(array1, array2){
    if (array1 == null || array2 == null){
        console.log("Nop") 
     } else {
      let v = array1.sort( (a,b) => a - b)
      let j = array2.map( (n) => Math.sqrt(n)).sort( (a,b) => a - b)
      for (let i = 0; i < v.length; i++)
        if (v[i] != j[i])
        console.log("Nop")
            console.log("Yep")
   }}

   a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];

comp(a1,a2)
// let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
// let a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];

// let v = function (){
// let n = 10
// for (let i = 0; i < n; i++)
//     if(a1 != a2)
//     console.log("nope")
//         console.log("yep")}
// v()

