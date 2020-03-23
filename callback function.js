// function js(lang, callback) {
//     console.log('Я учу ' + lang);
//     callback();
// }

// js('JavaScript', function() {
//     console.log('Я прошел третий урок');
// } );

let askName = prompt('Как тебя зовут?'),
    askSourname = prompt('Какая у тебя фамилия?'),
    askAge = prompt('Сколько тебе лет?'),
    askSex = prompt('Мужчина или женщина?'),
    askBoat = prompt('У Вас есть яхта?');
    



let profile = {
    name: askName,
    sourname: askSourname,
    age: askAge,
    sex: askSex,
    boat: askBoat
    

};

if (askBoat == 'да') {
         profile.length = prompt('Сколько футов Ваша яхта?', ''),
         profile.year = prompt('Какого года?', ''),
         profile.question = prompt('Готовы идти с нами в путешествие?', '');
} else {
    alert('Купи себе яхту!');
}

console.log(profile);
