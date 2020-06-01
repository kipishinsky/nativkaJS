
/*  кнопка старт
то что начинается через $ является Node
(тоесть мы забираем ее с помощью функции querySelector,
в нее мы ложим id через # - start. start id берем из html файла,
который прикручен к кнопке (button)
 */
let $start = document.querySelector('#start')
/* Div элемент,
то что начинается через $ является Node,
(тоесть мы забираем ее с помощью функции querySelector,
в нее мы ложим id через # - game. game id берем из html файла,
который прикручен к диву (div)
 */
let $game = document.querySelector('#game')
/* span элемент,
то что начинается через $ является Node,
(тоесть мы забираем ее с помощью функции querySelector,
в нее мы ложим id через # - time. time id берем из html файла,
который прикручен к h1 span (span)
 */
let $time = document.querySelector('#time')


/* h1 span элемент,
то что начинается через $ является Node,
(тоесть мы забираем ее с помощью функции querySelector,
в нее мы ложим id через # - time-header.  time-header id берем из html файла,
который прикручен к h1 span (span)
 */
let $timeHeader = document.querySelector('#time-header')
/* h1 span элемент,
то что начинается через $ является Node,
(тоесть мы забираем ее с помощью функции querySelector,
в нее мы ложим id через # - result-header.  result-header id берем из html файла,
который прикручен к h1 span (span)
 */
let $resultHeader = document.querySelector('#result-header')
/* span элемент,
то что начинается через $ является Node,
(тоесть мы забираем ее с помощью функции querySelector,
в нее мы ложим id через # - result. result id берем из html файла,
который прикручен к h1 span (span)
 */
let $result = document.querySelector('#result')
/* input элемент, находящийся в div
то что начинается через $ является Node,
(тоесть мы забираем ее с помощью функции querySelector,
в нее мы ложим id через # - game-time. game-time id берем из html файла,
который прикручен к div input (input)
 */
let $gameTime = document.querySelector('#game-time')


/*
вешаем прослушку на клик (  (addEventListener) 'click'.
как только по кнопке кликнули, мы запускаем функцию startGame
*/
$start.addEventListener('click', startGame)
/*
отлавливаем клик непосредственно по нажимаемому квадрату.
вешаем прослушку addEventListener на клик на div game.
если в общем блоке гейм фокус будет попадать на нужный квадрат,
то будем запускать функцию handBoxClick ( кликнул рукой на квадрат )
*/
$game.addEventListener('click',handBoxClick)
/*
вешает прослушку на инпут. прослушка срабатывает тогда, когда
в инпуте меняется значение в value. и после срабатывания вызываем функцию setGameTime
*/
$gameTime.addEventListener('input',setGameTime)


/*
тут будем хранить значение, равное тому, сколько раз мы кликнули на квадрат
 */
let score = 0;
let isGameStarted = false; /*
   фиксим игру, чтобы она запускалась только при старте таймера
   по умолчанию будет false
   тоесть поле не активное, при запуске в функции startGame(),
   будет запускатся игра и поле будет true
   isGameStarted = true
 */

/* функция которая показывает */
function show ($el) {
    $el.classList.remove('hide')
}

/* функция которая прячет */
function hide ($el) {
    $el.classList.add('hide')
}


/*
функция которая запускается на клике при прослушке $start.addEventListener('click', startGame)
*/
function startGame() { /*
при запуске функции свойства ниже подменяются при
помощи js и css свойства видны по новому
*/
    score = 0 /*
        зануляем счет для начала новый игры
     */
    $gameTime.setAttribute ('disabled', 'true') /*
        заблокируем инпут, чтобы во время
        игры не менялось выставленное время игры
     */
    $timeHeader.classList.remove('hide') /*
        при старте игры показываем  time list со временем игры
    */
    $resultHeader.classList.add('hide') /*
     и скрываем  результаты resultHeader
     */

    isGameStarted = true /*
      при запуске будет активным поле
     */
    $game.style.backgroundColor = '#fff' /*
    меняем фон при запуске на белый,
    путем подмены квадратов
    */
    $start.classList.add('hide') /*
    скрываем кнопку старт при запуске игры с помощью добавления
    класса hide (hide описан в css файле)
    */

    /*
     пропишем интервал времени для игры.
     */
    let interval = setInterval( () => { /*
     Мы можем вызвать функцию не в данный момент,
     а позже, через заданный интервал времени.
     Это называется «планирование вызова».

     Для этого существуют два метода:
        setTimeout позволяет вызвать функцию один раз через определённый
        интервал времени.
        setInterval позволяет вызывать функцию регулярно, повторяя вызов
        через определённый интервал времени.
         */
        let time = parseFloat($time.textContent) /*
        parseFloat переводим в чиловое значение с точкой

        textContent подкапотная хуйня, которая достает
        текстовый контент указанного узла и всех его потомков
        */
        if(time <= 0) { /*
        если значение тайм <=0 то
        */
            clearInterval(interval) /*
                Функция clearInterval() отменяет многократные повторения действий,
                установленные вызовом функции setInterval().
             */
            endGame() /*
                закончит игру // false
             */
        } else { /* */
            $time.textContent = (time - 0.1).toFixed(1) /*
             toFixed выдает после запятой 1 число
             */
        }
    }, 100) /*
    повторить с интервалом в 0.1 сек
    */

    setGameTime() /*
        вызов функции, которая по умолчанию ставит 5 в таймер
     */
    renderBox() /*
    при старте игры будем вызывать дополнительно
    функцию(без параметров)  в нашу функцию
    */

}

/*
 функция настройки времени
 */
function setGameTime () {
    let time = +$gameTime.value; /*
        теперь значние инпута будет хранится в переменной gameTime
        приводит это значение к числу либо через parseInt,
        либо через +
    */
    $time.textContent = time.toFixed(1) /*
        показывать 1 символ после точки целого числа
    */
}


/*
 функция, которая генерирует квадрат с определенными параметрами
*/
function renderBox() {

    $game.innerHTML = '' /*

    https://innerhtml.ru/

    innerHTML именно так, а не innerHtml

    чтобы не дублировать нажатия по квадрату в консоли,
    после каждого нажатия на квадрат, каждое последующее
    значение мы будем удалять, по средствам полного
    удаления содержимое контейнера game
    */

    let boxSize = getRandom (20,100) /*
    указали в этой переменной диапазон значений для
    генерации размеров квадратов и положили генерируемое значение
    в  box.style.height = box.style.width = boxSize + 'px'
    */
    let gameSize = $game.getBoundingClientRect () /*

    вычисляем размеры игрового поля

    Метод Element.getBoundingClientRect() возвращает
    размер элемента и его позицию относительно viewport
    (часть страницы, показанная на экране, и которую мы видим).

    */
    let maxTop = gameSize.height - boxSize /*
    вычисляем динамическое значение для top,
    чтобы потом указать это в топ
    */
    let maxLeft = gameSize.width - boxSize /*
     вычисляем динамическое значение для left,
    чтобы потом указать это в left
    */


    let box = document.createElement('div') // создаем новый тег div в нашей функции, который как раз будет появляться в виде квадрата

    //ниже указаны стили для квадрата (box)

    box.style.height = box.style.width = boxSize + 'px' // высота = ширине = генерится из случайного числа, которое лежит в boxSize
    box.style.position = 'absolute' /*
    не выбегает из границ основного квадрата.
    (положение квадрата box будет вычислять относительно квадрата (div елемента) let $game )
    Свойство position — позволяет установить или изменить положение элемента
    */
    box.style.backgroundColor = '#000' // квадрат будет черного цвета

    // положение блока относительно родительского блока
    box.style.top = getRandom (3, maxTop) + 'px' /*
    динамическое значение для top
    */
    box.style.left = getRandom (3, maxLeft) + 'px' /*
    динамическое значение для left
    */

    /* добавляем динамики курсору,
    чтобы при наведении стрелка сменялась на руку (наведение),
    чтобы пользователь понимал, что по нему можно кликнуть
    */
    box.style.cursor = 'pointer'

    box.setAttribute('data-box', true) /*
     вешает на каждый новый сгенерированный квадрат свой атрибут data-box = 'true'
     */

  /*  создаем функцию, которая будет передавать созданный нами элемент в DOM дерево
    первым параметром мы передаем позицию, в данном случае передаем после основного блока
    вторым параметром мы указываем что передаем
    - а передаем мы новый блок созданный нами внутри функции этой функции под названием box
   */
    $game.insertAdjacentElement('afterbegin', box)

}


/*
вызываем функцию, которая вызывается при клике на генерируемый квадрат
* */
function handBoxClick (event) { /*
event - отлавливает значение квадрата (data-box = 'true') из функции renderBox(),
при помощи дата атрибута box.setAttribute('data-box', true),
который вешает на каждый новый сгенерированный квадрат свой
атрибут data-box = 'true'( при том в консоле data уже отбрасыватся и в свойствах висит
так: box: true
*/
    if (!isGameStarted) { /*
        если игра не стартовала и там false
    */
        return /*
         пустой return ничего не возвращает
          */
    }
    if (event.target.dataset.box) { /*

          если в дата поле присутствует объект у которого есть ключ бокс, то
          это означает, что мы сделали клик именно по квадрату

          тема делегирования событий
          использовать event.target чтобы получить элемент, на котором произошло событие
          Чтобы получить data-атрибут можно взять свойство объекта dataset с именем,
          равным части имени атрибута после data- ( event.dataset.box )
          */
      score++ /*
       увеличить счет на 1
       */
      renderBox()/*
       запустить функцию, чтобы занова сгенерировать новый квадрат
       */
    }
}


/*
функция для динамического указания размеров квадратов и их положений

просто возвращает рандомное число, формула хз откуда

*/
function getRandom (min, max) {
    return Math.floor(Math.random() * (max-min) + min)
}

/*
функция, которая заканчивает игру
*/
function endGame () {
    isGameStarted = false /*
        деактивирует поле
    */
    setGameScore() /*
        вызываем функцию, которая показывает счет
    */
    $start.classList.remove('hide') /*
        показываем снова кнопку старт, после окончания игры
    */
    $game.innerHTML = '' /*
        очищаем квадраты
     */
    $game.style.backgroundColor = '#1849c6' /*
        меняем фон когда игра завершится, итоговый фон аля
    */
    $timeHeader.classList.add('hide') /*
        по завершению игры скрываем time list со временем
    */
    $resultHeader.classList.remove('hide') /*
     и показываем вместо timeHeader результат resultHeader
     */
    $gameTime.removeAttribute ('disabled') /*
        во время игры инпут заблокирован, но как только она
        закончена, мы разблокироваем инпут
     */
}

/*
функция, которая устанавливает в спан счет завершившейся игры
 */
function setGameScore () {
    $result.textContent = score.toString() /* */
}


