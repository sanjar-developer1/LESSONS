// //////////////1
// let a = [1, 2, 3, 4, 5];
// let b = [2, 4];

// let result = a.filter(e => b.includes(e) == false);
// console.log(result);


// /////////////////3
// let text = "Tez jigarrang tulki dangasa it ustidan sakrab o'tadi qwcxyzhmpvf".toLowerCase();
// let alfavit = 'qwertyuiopadsfghjklzcxvbnm'.split('').sort();

// let result = alfavit.map(e => {
//     if(text.includes(e)){
//         return true;
//     } else {
//         console.log(e);
//         return false;

//     }
// });
// if(result.includes(false)){
//     console.log(false);
// }else{
//     console.log(true)
// }

// ///////////////4
// let arr = [1, 1, 2, 3, 4, 4, 5, 6, 6];
// let arr2 = arr.join('');
// let result = [];
// arr.forEach(e => {
//     if(arr2.replace(e) == arr2.replaceAll(e)){
//         result.push(e);
//     }
// });
// console.log(result);

//////////////5

// let arr = ["a", "b", "d", "e", "f"];
// let alfavit = 'qwertyuiopadsfghjklzcxvbnm'.split('').sort();

// let index1 = alfavit.findIndex(e => e == arr[0]);
// let index2 = alfavit.findIndex(e => e == arr[arr.length - 1]);

// let result = alfavit.slice(index1, index2 + 1);
// console.log(result);