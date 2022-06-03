// Убираем повторение
const array = [
    {color: 'white', id: 2},
    {color: 'black', id: 3},
    {color: 'white', id: 9},
    // {color: 'white'},
    // {id: 12}
]

// ===№1===
// function colorFromArray(arr) {
//     const res = arr.reduce((acc, item) => {
//         acc[item.color] = {
//             [item.id]: item
//         }
//         return acc
//     }, {})
//     return res
// }

// let output = colorFromArray(array)
// console.log(output);
// console.table(output);


// ===№2===
// function colorFromArray(arr) {
//     let output = {}
//     arr.forEach(item => {
//         let color = item.color
//         let id = item.id
//         if (!('id' in item && 'color' in item)) return                  //  Выкидываем не полные записи
//         if (!(color in output)) output[color] = {}
//         output[color][id] = item
//     })
//     return output
// }

// let output = colorFromArray(array)
// console.log(output);
// console.table(output);

// ===№3===

// function colorFromArray(arr) {
//     return arr.reduce( (accum, item) => {
//         if ('id' in item && 'color' in item) {
//             if (!(item.color in accum)) accum[item.color] = {}
//             accum[item.color][item.id] = item
//         } return accum
//     }, {})
// }

// let output = colorFromArray(array)
// console.log(output);
// console.table(output);

// ===№4===
// В одну строку

function colorFromArray(arr) {
    return arr.reduce( (accum, item) =>({  accum, [item['color']] : {   accum, [item['color']] : [item['id']] , item    } }),{})
}

let output = colorFromArray(array)
console.log(output);
console.table(output);


