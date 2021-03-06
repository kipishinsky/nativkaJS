/*
let car = {
    name: 'ford',
    year: 2015,
    person: {
        name: 'Yana',
        age: 29
    }
}
*/
/*
console.log(car)
__proto__: // показывает все методы, которые мы можем вызвать
    constructor: ƒ Object() // самый верхнеуровневый класс, от него все идет
    hasOwnProperty: ƒ hasOwnProperty()
    isPrototypeOf: ƒ isPrototypeOf()
    propertyIsEnumerable: ƒ propertyIsEnumerable()
    toLocaleString: ƒ toLocaleString()
    toString: ƒ toString()
    valueOf: ƒ valueOf()
    __defineGetter__: ƒ __defineGetter__()
    __defineSetter__: ƒ __defineSetter__()
    __lookupGetter__: ƒ __lookupGetter__()
    __lookupSetter__: ƒ __lookupSetter__()
    get __proto__: ƒ __proto__()
    set __proto__: ƒ __proto__()
*/
/*
// car.__proto__  => Object.prototype наследование объекта
    проверка
 > car.__proto__ === Object.prototype
 <- true
*/
/* весь джаваскрипт построен на объектах
    рассмотрим пример
    let arr = [1,2,3]
    console.log(arr)
    // (3) [1, 2, 3]
        //разворачиваем
            0: 1
            1: 2
            2: 3
            length: 3
            > __proto__: Array(0)
            // разворачиваем
                > concat: ƒ concat()
                > constructor: ƒ Array()
                > copyWithin: ƒ copyWithin()
                > entries: ƒ entries()
                > every: ƒ every()
                > fill: ƒ fill()
                > filter: ƒ filter()
                > find: ƒ find()
                > findIndex: ƒ findIndex()
                > flat: ƒ flat()
                > flatMap: ƒ flatMap()
                > forEach: ƒ forEach()
                > includes: ƒ includes()
                > indexOf: ƒ indexOf()
                > join: ƒ join()
                > keys: ƒ keys()
                > lastIndexOf: ƒ lastIndexOf()
                > length: 0
                > map: ƒ map()
                > pop: ƒ pop()
                > push: ƒ push()
                > reduce: ƒ reduce()
                > reduceRight: ƒ reduceRight()
                > reverse: ƒ reverse()
                > shift: ƒ shift()
                > slice: ƒ slice()
                > some: ƒ some()
                > sort: ƒ sort()
                > splice: ƒ splice()
                > toLocaleString: ƒ toLocaleString()
                > toString: ƒ toString()
                > unshift: ƒ unshift()
                > values: ƒ values()
                > Symbol(Symbol.iterator): ƒ values()
                > Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}
                > __proto__: Object  // в конце полюбому получаем объект, потому что все является объектами, даже массивы
                    //разворачиваем
                        constructor: ƒ Object()
                        hasOwnProperty: ƒ hasOwnProperty()
                        isPrototypeOf: ƒ isPrototypeOf()
                        propertyIsEnumerable: ƒ propertyIsEnumerable()
                        toLocaleString: ƒ toLocaleString()
                        toString: ƒ toString()
                        valueOf: ƒ valueOf()
                        __defineGetter__: ƒ __defineGetter__()
                        __defineSetter__: ƒ __defineSetter__()
                        __lookupGetter__: ƒ __lookupGetter__()
                        __lookupSetter__: ƒ __lookupSetter__()
                        get __proto__: ƒ __proto__()
                        set __proto__: ƒ __proto__()
                        // получаем теже методы, что и объекте
 это работает так:
  [] => наследуется от класса Array => а поскольку массивы так же являются объектами, то и наследование происходит от Object
 */
// обычно мы записываем объекты традиционно
/*
let car = {
    name: 'ford',
    year: 2015,
}
*/
// но есть и другой вариант
// можно создать функцию-класс. Функции, которые по факту являются классами, мы называем с большой буквы
/*
function Car (name, year) {
    this.name = name
    this.year = year
}
var ford = new Car ('ford', 2015)
console.log(ford)
   Car {}
    > __proto__: Object
*/
/*
function Car (name, year) {
    this.name = name
    this.year = year
}
var ford = new Car ('ford', 2015)
console.log (ford)
    Car {name: "ford", year: 2015}
        name: "ford"
        year: 2015
        > __proto__:
            > constructor: ƒ Car(name, year)
            > __proto__: Object
*/
/*
function Car (name, year) {
    this.name = name
    this.year = year
}
var ford = new Car ('ford', 2015)
var bmw = new Car ('BMW', 20112)
console.log (ford)
console.log (bmw)
    Car {name: "ford", year: 2015}
        name: "ford"
        year: 2015
        > __proto__:
            > constructor: ƒ Car(name, year)
            > __proto__: Object
    Car {name: "BMW", year: 20112}
        name: "BMW"
        year: 20112
        __proto__:
            constructor: ƒ Car(name, year)
            __proto__: Object
*/
// данные методы написания объектов через функции (методы ES5), схожи с написанием объектов (стандарта ES6), просто пишется через другую конструкцию

// теперь напишем свой прототип для объектов
// плюс прототипов в том, чтоне нужно писать под каждый объект свою фукцию или метод
// пишешь прототип и он работает под все объекты и функции
/*

function Car (name, year) {
    this.name = name
    this.year = year
}

// пишем прототип функцию которая будет высчитывать сколько машине лет
Car.prototype.getAge = function () { // getAge (называй как хочешь, это лишь название метода для которого мы пишем функцию
    return new Date().getFullYear() - this.year // new Date() - создаем новый объект Date, .getFullYear() - получим текущий год и потом нужно вычесть год машины обращаемся через this,year - где this. является обращение к var ford, var bmw по второму параметру функции Car.
}

var ford = new Car ('ford', 2015)
var bmw = new Car ('BMW', 2012)

console.log (ford)
    Car {name: "ford", year: 2015}
        name: "ford"
        year: 2015
        __proto__:
            getAge: ƒ () // наша созданная функция через прототайп
            constructor: ƒ Car(name, year)
            __proto__: Object

console.log (bmw)
    Car {name: "BMW", year: 2012}
        name: "BMW"
        year: 2012
        __proto__:
            getAge: ƒ () наша созданная функция через прототайп
            constructor: ƒ Car(name, year)
            __proto__: Object


// напишем прототип свойство для всех машин, пусть все машины будут черного цвета

Car.prototype.color = 'black'

// ford.color
// <- 'black'
// bmw.color
// <- 'black'

// если мы захотим переопределить значение цвета, то
ford.color = 'red'
     Car {name: "ford", year: 2015}
        color: "red" // появился заданный цвет
         name: "ford"
         year: 2015
         > __proto__:
            color: "black" // но в прототипе всеравно сидит значение black, которое мы задали для всех объектов по умолчанию
            getAge: ƒ () наша созданная функция через прототайп
            constructor: ƒ Car(name, year)
            __proto__: Object


// теперь если вызвать
ford.color
// то в консоле будет показан цвет red, потому что color цепляется сверху вниз, самое высокоуровнее значение
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// создание и настройка объектов
/*var audi = Object.create({
    calculateDistancePerYear: function () {
        //создать новое свойство в объекте
        //  this.distancePerYaer = 33 ( простой способ
        // сложный способ
        Object.defineProperty(this,'distancePerYear', {
            value: Math.ceil (this.distance / this.age),
            enumerable: true,
            writable: false,
            configurable: false
        } ) /!*
                Метод defineProperty - задавать определенные свойства объекту и
            так же их настраивать.
                Первым параметром указываем тот объект,
            которому мы хотим добавить новое свойство, в нашем случае объектом
            является ключевое слово this.
                Вторым параметром указываем название данного ключа, т.е. данного
            свойства которое мы хотим определить - 'distancePerYear'
                Третьим параметром мы указываем в формате объекта ровно тоже самое
            что мы делали до этого, мы создаем такой же объект {value: this.distance / this.age, enumerable: true, writable: false, configurable: false}


        вызовим audi.calculateDistancePerYear()
            получаем возраст
            calculate 3
            undefined
            > audi
                {name: "AUDI", model: "A3", year: 2015, distance: 100210, …}
                    age: (...)
                    distance: 100210
                    distancePerYear: 20042 //получаем в консоли созданный объект с определенными значениями, который еще умеет считать пройденное расстояние автомобиля в год
                    model: "A3"
                    name: "AUDI"
                    year: 2015
                    get age: ƒ ()
                    set age: ƒ ()
                    __proto__: Object

        *!/


        console.log('calculate', 2018 - this.year) /!*
        console.log('calculate')
            {name: "AUDI", model: "A3", year: 2018, distance: 100210}
                    distance: 100210
                    model: "A3"
                    name: "AUDI"
                    year: 2018
                    __proto__:
                            calculateDistancePerYear: ƒ () //созданная нами функция
                            __proto__: Object

        audi.calculateDistancePerYear()
        <- calculate 3

        *!/

    }
}, {
    name: {
        value: 'AUDI', /!* value {value: 'A3'} - является const-антой,
    которое можно в консоле изменить 'здесь и сейчас',
     но нельзя изменить глобально *!/
        enumerable: true, /!*
        область видмости свойств объекта в глобале.
        свойства стали частью объекта
        *!/
        writable: false, /!*
        можно ли изменять value - false (нет)
        *!/
        configurable: false /!*
        данный ключ идет по умолчанию
        (мы не хотим чтобы данные поля у нас удалялись)
        *!/
    },
    model: {
        value: 'A3',
        enumerable: true,
        writable: false,
        configurable: false
    },
    year: {
        value: 2015,
        enumerable: true,
        writable: false,
        configurable: false
    },
    distance: {
        value: 100210,
        enumerable: true,
        writable: true, /!*
        можно ли изменять value - true (да)
        *!/
        configurable: false
    },
    age: {
        enumerable: true, /!*
        область видмости свойств объекта в глобале.
        свойства стали частью объекта
        *!/
        /!*
         функция get будет вызываться в тот момент,
         когда мы будем обращаться к полю age
         *!/
        get: function () {
            console.log('получаем возраст')
            return new Date().getFullYear() - this.year
        },
        /!*
         функция set будет вызываться в тот момент,
         когда мы будем обращаться к полю age
         *!/
        set: function () {
            console.log('устанавливаем значение')
        }
    }
}) /!* object самый глобальный класс в JS,
функция create принимает 2 параметра, первый параметр (object) отвечает за
прототип данного объеекта и описывается он в виде объекта. за второй параметр
отвечает описание свойств объекта из первого параметра (properties - свойства).
описывать можно так же через объект
*!/

console.log(audi) /!*
    {name: "AUDI", model: "A3", year: 2015, distance: 100210}
            age: (...) // если мы его раскроем, то получим 5, потому что new Date().getFullYear() - this.year (создаем новый объект дату, кладем в него текущее время 10.06.2020 и отнимаем от 2020 - 2015 = 5. в консоль выводится сообщение - получаем возраст
            distance: 100210
            model: "A3"
            name: "AUDI"
            year: 2015
            > get age: ƒ ()
            > set age: ƒ ()
            > __proto__: Object

    audi.age
     получаем возраст
     <- 5
    audi.age = 3
     устанавливаем значение // тут уже отрабатывает метод set (установить) и мы присваиваем значение
    <- 3

 *!/*/

/*
    заходим на сайт mdn
    в поиске пишем property descriptor
    читаем
*/

// получаем автоматически все ключи
/*
создаем цикл фор и на каждой итерации создаем значение key
(тоже самое что и i, только название другое

для того, чтобы пробежать именно по ключам объекта audi, нужно воспользоваться
оператором in
*/
/*
for (var key in audi) {
    console.log(key) /!*
        {name: "AUDI", model: "A3", year: 2015, distance: 100210}
        name
        model
        year
        distance
        age
        calculateDistancePerYear // попадает сюда, потому что присутствует в прототипе
     *!/
}
*/

// если не хочешь получать прототипы вместе с полями корневого объекта, то нужна защита

/*
for (var key in audi) {
    if (audi.hasOwnProperty(key)) {
        console.log(key, audi[key]) /!*
            name
            model
            year 2015
            distance 100120
            получаем возраст
            age 5
        *!/
    }
}
*/

/*
 если по каким либо причинам нужно не показывать какое либо свойство,
 то нужно воспользоваться методом  enumerable: true
 (область видмости свойств объекта в глобале. свойства стали частью объекта)
*/

/* благодаря данным методам можно создавать много гибкого и мощного функционала */

/*var person = {
    name: 'Max',
    age: 28,
    job: 'Frontent'
}*/


// при помощи цикла фор, получаем доступ до ключей

/*for (let key in person) { /!*
Цикл for..in перебирает все методы и свойства объекта,
 даже если они находятся не в самом объекте а в прототипе
 *!/
    if (person.hasOwnProperty(key)) /!*
     При создании объектов, у них уже есть некоторые свойства
     (например, toString). Но на самом деле это свойства объекта Object,
      от которого наследуют объекты. С помощью hasOwnProperty
      можно узнать действительно ли свойство принадлежит объекту

      если у объекта person есть собственные свойства,
       то выведи их на экран, без прототипов
     *!/
    console.log(person[key]) /!*
        Max
        28
        Frontent
     *!/
}*/

// более современный способ
/*let keys = Object.keys(person)*/ /*
обращаемся к глобальному объекту Object и вызываем метод у него keys
(ключи) и передаем в этот метод объект из которого нужно
достать ключи (Object.keys.person)
*/
/*console.log(keys) *//*
(3) ["name", "age", "job"]
получаем массив из строк, где каждая строка представляет
отдельный ключ из нашего объекта
*/

// еще более часто встречающийся метод получение ключей из объекта
/*Object.keys(person).forEach( (key) => { // оператор object.keys идет только по собственным ключам, не затрагивая ключи у прототипов
    console.log(person[key]) /!*
        Max
        28
        Frontent
     *!/
})*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//            Как работают замыкания                   Как работают замыкания                   Как работают замыкания                   Как работают замыкания                   Как работают замыкания                   Как работают замыкания                   Как работают замыкания                   Как работают замыкания                   Как работают замыкания

/*
/!*
создадим функцию createCounter которая возвращает функцию.
в этой функции есть переменная counter которой присвоен 0.
Функция возвращает объекты в ретурне:
increment (ключ) который возвращает функцию, которая повышает counter на 1.
decrement (ключ) который возвращает функцию, которая уменьшает counter на 1.
getCounter (ключ) который возвращает функцию, которая возвращает новое
значение counter которое автоматические переприсваивается в
переменной counter

var counterA = createCounter()
var counterB = createCounter()
создаем переменные counterA и counterB, при вызове которых,
запускается функция  createCounter

//вызаваем
counterA.increment() // 1
counterA.increment() // 2
counterA.increment() // 3
    counterA.getCounter() // 3


//вызаваем
counterB.decrement() // -1
counterB.decrement() // -2
    counterB.getCounter() // -2


*!/
var createCounter = function () {
    var counter = 0
    return {
        increment: function () {
            counter++
        },
        decrement: function () {
            counter--
        },
        getCounter: function () {
            return counter
        }
    }
}

var counterA = createCounter()
var counterB = createCounter()

counterA.increment()
counterA.increment()
counterA.increment()

counterB.decrement()
counterB.decrement()
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//           Что такое контекст                     Что такое контекст                     Что такое контекст                     Что такое контекст                     Что такое контекст                     Что такое контекст                     Что такое контекст                     Что такое контекст                     Что такое контекст           Что такое контекст


/*
// создаем переменную с объектом.
var person = {
    age: 28,
    name: 'Max',
    job: 'Frontend',
    displayInfo: function () { // создаем метод displayInfo, который возвращает функцию
        console.log('name: ', this.name ) // name:  Max
        console.log('job: ', this.job ) //  job:  Frontend
        console.log('age: ', this.age ) //  age:  28
    }
}

// вызовим наш метод у персон, дисплейинфо
person.displayInfo() /!*
    name:  Max
    job:  Frontend
    age:  28
*!/
*/

/*

// теперь установим задержку
var person = {
    age: 28,
    name: 'Max',
    job: 'Frontend',
    displayInfo: function (ms) { // создаем метод displayInfo, который возвращает функцию
        setTimeout(function() { // setTimeout - метод который устанавливает задержку
            console.log('name: ', this.name ) // name:  Max
            console.log('job: ', this.job ) //  job:  Frontend
            console.log('age: ', this.age ) //  age:  28
        }, ms)
    }
}

// вызовим наш метод у персон, дисплейинфо
person.displayInfo(2000) /!*
    выводится через задержку в 2 секунды, 100ms = 0.1сек
        name:
        job:  undefined
        age:  undefined

        без метода setTimeout все работало, а при подключении его - не не работает
    причина всему область видимости у this. сейчас область
    видимости ограничивается в методе setTimeout и соответственно this обращается к глабальному объекту window
    1 способ - this там не определяется и чтобы корректно работало, нужно вместо this использовать название родителя person
    2 способ - замкнуть в функции this на новую переменную, которая приходит как this

        var person = {
            age: 28,
            name: 'Max',
            job: 'Frontend',
            displayInfo: function (ms) { // создаем метод displayInfo, который возвращает функцию
                //замыкае this на новую переменную self.
                let self = this
                setTimeout(function() { // setTimeout - метод который устанавливает задержку
                    // применяем self.name, .job, .age
                    console.log('name: ', self.name ) // name:  Max
                    console.log('job: ', self.job ) //  job:  Frontend
                    console.log('age: ', self.age ) //  age:  28
                }, ms)
            }
        }

    3 способ - привязка контекста   методом bind

            setTimeout(function() { // setTimeout - метод который устанавливает задержку
            console.log('name: ', this.name ) // name:  Max
            console.log('job: ', this.job ) //  job:  Frontend
            console.log('age: ', this.age ) //  age:  28
        }.bind(this), ms)
        //
        }.bind(this), ms) // ВАЖНО: после фигурной скобки ставится . потом вызывается метод bind() и потому ставится , и указывается то количество MS которое мы передали в вызов метода person.displayInfo(500)


    *!/*/


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//           Привязка контекста                     Привязка контекста                     Привязка контекста                     Привязка контекста                     Привязка контекста                     Привязка контекста                     Привязка контекста                     Привязка контекста                     Привязка контекста                     Привязка контекста

/*
/!*
 создаем уникальную функцию которая будет работать с ключевым словом this
 привязывая контекст разными способами указанные ниже можно применять данную функцию многократно
*!/
function printObject (objName) { // принимает название объекта а не сам объект
    console.log('printing object: ', objName)
    for (var key in this) {
        if (this.hasOwnProperty(key)) {
            console.log('[' + key + ']', this[key])
        }
    }
}


var person = {
    firstName: 'Max',
    job: 'backEnd',
    age: 29,
    friends: ['elena', 'igor']
}

var car = {
    marka: 'ford',
    model: 'Focus',
    year: 2017
}

var printPerson = printObject.bind(person)
printPerson('Person') /!*
    printing object:  Person
    [firstName] Max
    [job] backEnd
    [age] 29
    [friends] (2) ["elena", "igor"]
*!/

printObject.call(car, 'CaR') /!*
    printing object:  CaR
    [marka] ford
    [model] Focus
    [year] 2017
*!/

printObject.apply(person, ['Person']) /!*
    printing object:  Person
    [firstName] Max
    [job] backEnd
    [age] 29
    [friends] (2) ["elena", "igor"]
*!/

*/


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Тестовое

//   Задача: определить метод для всех массивов       Задача: определить метод для всех массивов       Задача: определить метод для всех массивов       Задача: определить метод для всех массивов       Задача: определить метод для всех массивов       Задача: определить метод для всех массивов       Задача: определить метод для всех массивов       Задача: определить метод для всех массивов

/*
     Реализуйте возможность используя прототип, чтобы у каждого массива был новый метод,
 позволяющий удваивать значение каждого элемента с учетом типа данных
 таким образом, чтобы:
    1. Для чисел это возведение в квадрат
    2. Для строк это удваивание строки
    3. метод не изменял существующий массив и возвращал новый

    пример:
    [1,2,3] => [1,4,9]
    [5, 'Hello', 6] => [25, 'HelloHello', 36]
*/


let a = [1,2,3]
let b = [5, 'Hello', 6]

/* создаем метод double, который возвращает функцию,
которая ретурнит newArray
 */
Array.prototype.double = function () {
    let newArr = this.map( (item) => { //this указывает на текущий массив let a = [1,2,3], let b = [5, 'Hello', 6]
        if (typeof item === 'number') {
            return Math.pow(item, 2) // метод Math.pow возводит число в степень. принимает 2 параметра, 1 параметр это число которое нужно возвести, вторым числом кладется та степень на какую надо умножить
        }

        if (typeof item === 'string') {
            return item += item
        }
    } )
    return newArr
}

let newA = a.double()
let newB = b.double()

console.log('A', newA.double()) // новый метод который мы записали в прототип работает везде
console.log('B', newB)

