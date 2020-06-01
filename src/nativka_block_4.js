// атрибут async
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="vievport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Javascript</title>
    <script async src="nativka_block_4.js" type="text/javascript">333</script>
            /////
</head>
<body>
    <h1>Javascript extra</h1>

</body>
</html>
 */
// используется для того, чтобы наш скрипт загружался в фоновом режиме, а не по мере его прочтения
// это дает нам возможность подгружать страницу дальще и не прерывать контент

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// атрибут defer
// работает практически так же как и async, за исключением:
// он сохраняет порядок выполнения скриптов, если даже другие скрипты легче чем предыдущие, то порядок именно запуска скриптов сохранится
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="vievport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Javascript</title>
    <script async src="nativka_block_4.js" type="text/javascript">333</script>
            /////
</head>
<body>
    <h1>Javascript extra</h1>
    <script defer src="nativka_block_4.js" type="text/javascript">333</script>
    <script defer src="nativka_block_5.js" type="text/javascript">333</script>
    <script defer src="nativka_block_6.js" type="text/javascript">333</script>
    <script defer src="nativka_block_7.js" type="text/javascript">333</script>

</body>
</html>
 */

// в итоге мы получаем, что сначала отработает блок 4, потом 5, потом 6, потом 7
// даже если 5 6 7 подгрузятся быстрее порядок не изменится
// данный атрибут крайне полезен для сохранения порядка и для наличия структуры у функциональности проекта

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// взаимодействие с пользователем

// метод Alert // метод Alert // метод Alert // метод Alert // метод Alert // метод Alert // метод Alert // метод Alert // метод Alert // метод Alert // метод Alert
// создаем кнопку alert, вешаем на нее id для доступа по id и теперь мы хотим получить всплывающее окно

let alert2 = document.querySelector('#alert').addEventListener('click', () => {
    alert ('Выуспешно кликнули')
})
console.log(alert2)

// данная метод полностью блокирует выполнение кода

// метод confirm  // метод confirm  // метод confirm  // метод confirm  // метод confirm  // метод confirm  // метод confirm  // метод confirm  // метод confirm  // метод confirm  // метод confirm  // метод confirm  // метод confirm  // метод confirm

let confirm2 = document.querySelector('#confirm').addEventListener('click', () => {
    let decision = confirm ('Вы уверены в том, что хотите нажать на кнопку')
    if (decision) {
        alert ('Выуспешно кликнули')
    } else {
        alert ('Отменил сука')
    }
    console.log(decision)
})
console.log(confirm2)

// метод конфирм отличается от алерт тем, что он не выводит всплывающее окно, он выводит призыв к действию, как бы спрашивая или дает выбор
// тем самым есть уже две кнопки, вместо 1 как у алерта - ОК и ОТМЕНА.
// если добавить переменную decision, при это не важно как ты ее назовешь
// в консоль будет выводиться значение TRUE(OK) и FALSE(отмена)
// если мы выполняем проверку через if
// то всегда в проверке сначала проверяется на true (если правда), то выведи мне алерт успешно кликнули
// если false(ложь), если не так, иначе - выведи мне отменил сука на кнопку отмена

// метод prompt // метод prompt // метод prompt // метод prompt // метод prompt // метод prompt // метод prompt // метод prompt // метод prompt // метод prompt // метод prompt // метод prompt // метод prompt

let prompt2 = document.querySelector('#prompt').addEventListener('click', () => {
    let age = prompt ('Сколько тебе лет?', 18) // вторым параметром будет выводиться дефолтное значение как например value, только его возможно изменить
    if (age>=18) {
        alert ('Вы можете пройти')
    } else {
        alert ('Вы еще слишком молоды')
    }
})
console.log(prompt2)

// метод prompt выводит окно, в котором есть инпут. например можно  выввести окно с вопросом сколько тебе лет?
// и в инпуте указать свою цифру и через проверку через if можно выводить различные ответы

// console // console // console // console // console // console // console // console // console // console // console // console // console // console // console // console // console // console // console

//console.log ('LOG') // поговорим про консоль, ты уже умеешь пользоваться таким методом как console.log () - он выводит все логи в консоль.
//console.warn('Console.warn') //warn выводит какие либо предупреждения в консоль
//console.info('console.info') // info выводит какую либо информацию в консоль, очень схоже с консоль лог
//console.error('console.error') // error показывает сообщение об ошибки в консоле, как уведомление

// так же ошибки можно выводить с помощью конструкции
//throw new Error ('Error')
// отличается тем, что он не просто выкидывает уведомление об ошибке,
// он действительно выкидывает ошибку, которая останавливает выполнение кода и показывает на какой строке это произошло

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Методы массивов // Методы массивов // Методы массивов // Методы массивов // Методы массивов // Методы массивов // Методы массивов // Методы массивов // Методы массивов // Методы массивов // Методы массивов // Методы массивов

// чтобы разделить массив .split
let str = '1,2,3,4,5,6,7,8'
let array = str.split(',') // разделяет массив через ,
console.log(array) // ["1", "2", "3", "4", "5", "6", "7", "8"]

// чтобы соеденить массив .join
console.log(array.join(';')) // 1;2;3;4;5;6;7;8 // соединяет массив при помощи сепоратора - ;

// поменять порядок массива на обратный .reverse
console.log (array.reverse()) // ["8", "7", "6", "5", "4", "3", "2", "1"]

// метод .splice() удаляет необходимые элементы по индексам
// например
console.log (array.splice(1,4)) // ["7", "6", "5", "4"]
// удали мне все, кроме - и пошло (1 - стратовое значение, 4 - по какое значение)
// удали мне все кроме, индекса 1 (это 7, потому что 8 это 0) по индекс 4 включительно (соответственно 7 6 5 4), а остальное удали.
// так же метод splice может за место удаленных элементов вставлять новые элементы
// например:

let str1 = ["1", "2", "3", "4", "5", "6", "7", "8"]
str1.splice (0, 1, '11') //удали мне 1 элемент и вставь заместо него 11
console.log(str1) //(8) ["11", "2", "3", "4", "5", "6", "7", "8"]

// если мы не хотим удалять элементы, а хотим просто вставить например на индекс 1 то:
str1.splice (1, 0, '11')
console.log(str1) // (9) ["11", "11", "2", "3", "4", "5", "6", "7", "8"]

// если мы не хотим удалять элементы, а хотим просто вставить например на индекс 1, а вдруг еще и не одно значение а 2 и больше, то:
let str2 = ["1", "2", "3", "4", "5", "6", "7", "8"]
str2.splice (1, 0, '11', '22')
console.log(str2) // ["1", "11", "22", "2", "3", "4", "5", "6", "7", "8"]

// метод .concat() - он создает копию данного массива, либо вы можете создавать новый массив

let array2 = ["5", "6", "7", "8"]
let newArray = array2.concat([6, 7])
console.log(newArray) // ["5", "6", "7", "8", 6, 7]
// при том он может объеденить массив строк и массив чисел в один массив
// важно что метод конкат не переписывает старый массив, а именно клонирует новый массив
// поэтому при помощи данного мтеода можно просто склонировать новый массив:

let array3 = ["5", "6", "7", "8"]
let newArray1 = array3.concat()
console.log(newArray1) // ["5", "6", "7", "8"] получаем идентичный массив

// метод .find()  метод .find()  метод .find()  метод .find()  метод .find()  метод .find()
// поиск нужного элемента в массиве

let objArr = [ // создадим массив с элементами
    {name: 'Max', age: 27},
    {name: 'Elena', age: 18},
    {name: 'Victor', age: 20}
];

let foundPerson = objArr.find(function(person) {
    /*  console.log(person)  {name: "Max", age: 27}
                             {name: "Elena", age: 18}
                             {name: "Victor", age: 20} */
    return person.age === 20

})
console.log(objArr) // [{…}, {…}, {…}]
console.log(foundPerson) // {name: "Victor", age: 20}
// при использовании метода find мы ему говорим найди мне в массиве objArr.find определенное значение
// чтобы найти определенное значение, нужно передать в метод функцию и в этой функции задать определенные параметры
/*
let foundPerson = objArr.find(function(person) {
    return person.age === 20 }) */
// после этого метод find пробегается по всем значениям в массиве, а массив у нас состоит из объектов, соответсвенно
// пробегая по всем объектам он сравнивает полученные значения в age и если условие дает true, то он его выводит в консоль лог
// console.log(foundPerson) // {name: "Victor", age: 20}

// метод .filter() метод .filter() метод .filter() метод .filter() метод .filter() метод .filter() метод .filter()

let oddArray = [1,2,3,4,5,6,7,8,9].filter(function (i) {
    return i % 2 !== 0 // условие - верни мне те числа, которые деляться на 2 и остаток не равен 0
})

console.log(oddArray) // [1, 3, 5, 7, 9]

let oddArray1 = [1,2,3,4,5,6,7,8,9].filter(function (i) {
    return i % 2 === 0 // условие - верни мне те числа, которые деляться на 2 без остатка
})

console.log(oddArray1) // [2, 4, 6, 8]
// метод .filter создает новый отфильтрованный массив данных, который отвечает новым условиям

// метод .map () метод .map () метод .map () метод .map () метод .map () метод .map () метод .map () метод .map () метод .map () метод .map () метод .map ()
// метод .map возвращает новый массив с преобразованными значениями

let mapArray = ["1", "11", "22", "2", "3", "4", "5", "6", "7", "8"];
let numMapArray = mapArray.map( (i) => {
    return parseInt(i) // каждое значение преобразуй мне в число
})
console.log(numMapArray) //  [1, 11, 22, 2, 3, 4, 5, 6, 7, 8]

// метод мап берет каждый элемент старого массива и приобразует его в число и затем складывает эти значения в новый массив, при этом не изменяя старый массив

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// объект Math объект Math объект Math объект Math объект Math объект Math объект Math объект Math объект Math объект Math объект Math объект Math объект Math объект Math

// отвечает за работу с числами, у него миллиард объектов через .
// например в консоли Math. и там хуевокукуево методов
// перечислим некоторые из них

let num = 2.5
console.log(Math.random()) // верни мне рандомное число - 0.9059997597749372
console.log(Math.floor(num)) // 2. floor округляет до целого числа, в меньшую сторону
console.log(Math.ceil(num)) // 3. ceil округляет до целого числа, в большую сторону
console.log(Math.E) // 2.718281828459045
console.log(Math.PI) // 3.141592653589793

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// объект JSON объект JSON объект JSON объект JSON объект JSON объект JSON объект JSON объект JSON объект JSON объект JSON объект JSON объект JSON объект JSON объект JSON

// чтобы отправлять данные на сервер, нужно эти данные привести к строке
// допустим у нас есть переменная newPerson с объектов из разных свойств

let newPerson = {
    name: 'Anna',
    age: 25,
    car: 'Ford',
    job: 'Frontend',
    friends: ['Elena', 'Igor']
}

// чтобы привести к строке
let stroka = JSON.stringify(newPerson) // получаем нужную нам строку в формате JSON {"name":"Anna","age":25,"car":"Ford","job":"Frontend","friends":["Elena","Igor"]}
console.log(stroka)
// метод JSON.parse(stroka)  - он позволяет парсить строки JSON в javascript объекты
console.log(JSON.parse(stroka)) // {name: "Anna", age: 25, car: "Ford", job: "Frontend", friends: Array(2)}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Дата и время с Date, Дата и время с Date, Дата и время с Date, Дата и время с Date, Дата и время с Date, Дата и время с Date, Дата и время с Date, Дата и время с Date

// на mgn пишем Data и смотрим все методы и действия

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// хранение данных в localStorage хранение данных в localStorage хранение данных в localStorage хранение данных в localStorage хранение данных в localStorage хранение данных в localStorage

//document.cookie // javascript может работать и с куками, но обычно для этого используют библиотеку, т.к. данный метод не работает корректно

// Напишем небольшое приложение, которое с инпута будет сохранять значения в локалсторедж
// при перезагрузке страницы, будем смотреть есть ли что то в локалСторедж и если там что то есть то будем это перезаписывать в заголовок H1


/*
    <!DOCTYPE html>
    <html lang="ru">
        <head>
        <meta charset="UTF-8">
        <meta name="vievport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Javascript</title>
    </head>
    <body>
        <h1>Javascript extra</h1>

        <input type="text">
        <button id="">Save</button>

        <script defer src="nativka_block_4.js" type="text/javascript">333</script>
    </body>
    </html>
*/

/*
    document.querySelector('button').addEventListener('click', function (event) { // находим кнопку, при клике отдаем функцию, которая сначала считывает значение с инпута и сохраняем его в локал сторедж
        let value = document.querySelector('input').value // считывает значение из инпута

        localStorage.setItem('headerText', value) // чтобы сохранить какое либо значение используется метод setItem (первым параметром в данную функцию мы передаем название этого параметра 'headerText', вторым параметром мы передаем значение - value, в строковом формате

    })

    // переходим в консоль и заходим во вкладку Application, там находится LocalStorage и если мы его раскукоживаем то там будут храгнится значения, которые мы сохранили
    // чтобы использовать данные значения:

    document.addEventListener('DomContentLoaded', function() { // добавляем прослушку события, которая называется DomContentLoaded. ДАнное событие вызывается тогда, когда прогружается полностью дом дерево
        console.log('Loaded') // Loaded // вызывается тогда, когда полностью загрузилось дом дерево
        let text = localStorage.getItem ('headerText') // text равняется значению, которое мы забираем из локалСторедж localStorage, .getItem для того чтобы забирать какой либо объект по ключу 'headerText'
        if (text && text.trim ()) { // если text(если там вообще что либо есть == строка не пустая) и text (дополнительная проверка: если в тексте что либо если и при помощи метода трим мы удаляем все проблемы и всеравно что либо остается) без пробелов метод .trim() - удаляет лишние пробелы   --- то выполни действие ниже
            document.querySelector('h1').textContent = text // получаем заголовок h1 через document.querySelector и напишем его что его textContent будет равняться какому либо тексту = text;
        }
    })

*/

// теперь мы хотим хранить не просто строку, а именно объекты в локалСторедж

/*

    document.querySelector('button').addEventListener('click', function (event) { // находим кнопку, при клике отдаем функцию, которая сначала считывает значение с инпута и сохраняем его в локал сторедж
        let value = document.querySelector('input').value // считывает значение из инпута

        let obj = {
            text: value
        }
        // просто так объект мы не можем кидать в метод setItem
        // нам надо сохранить его через метод JSON.stringify(obj)) чтобы записать объект как строку
            //localStorage.setItem('headerText', value)
        localStorage.setItem('headerText', JSON.stringify(obj))
    })

    document.addEventListener('DomContentLoaded', function() { // добавляем прослушку события, которая называется DomContentLoaded. ДАнное событие вызывается тогда, когда прогружается полностью дом дерево
        console.log('Loaded')

        let obj = {}
        try {
            // нам нужно распарсить данную строку в объект при помощи метода JSON.parse
            obj = JSON.parse(localStorage.getItem ('headerText'))
        } catch (e) {}

        if (obj && obj.text && obj.text.trim ()) {
            document.querySelector('h1').textContent = obj.text
        }
    })

*/

