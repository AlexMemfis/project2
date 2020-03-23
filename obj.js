// let askName = prompt('Как тебя зовут?'),
//     askSourname = prompt('Какая у тебяфамилия??'),
//     askAge = prompt('Сколько тебе лет?'),
//     askSex = prompt('Мужчина или женщина?');

// let profle = {
//     name: askName,
//     sourname: askSourname,
//     age: askAge,
//     sex: askSex
// };

// console.log(profile);

let arr = ['first', 2, 3, 'four', 5];
arr.forEach(function(pos, i){
    console.log((i+1) + ':' + pos);
});

for (let key of arr) {
    console.log(key);
};

