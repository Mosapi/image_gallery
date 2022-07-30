# Bg-horizon-scrolling
This is horizontal scrolling for a website in pure javascript, without using third-party plugins. In this project, there is a change not of images, but of the background.
Scrolling is done automatically and supports manual change, using the side arrows or controllers at the bottom.

## How to use:

***1. Connect the decolation.js before closing the tag <body>***
```
<script type="text/javascript" src="system/js/decolation.js"></script>
</body>
```

***2. The script works with data selected from the database. We specify them before connecting the script***

```
<script>
// all data select from db (msql or other)
imgs = ["82.jpg", "82b.jpg", "84.jpg", "87b.jpg"];
links = ["Cyberpunk2077", "NierAutomata", "EldenRing", "HorizonFW"];
titlet = ["Cyberpunk 2077", "Nier: Automata", "Elden Ring", "Horizon Forbidden West"];
descr = ["Приключенческая ролевая игра с открытым миром, рассказывающая о киберпанке-наёмнике Ви и борьбе за жизнь в мегаполисе Найт-Сити.", "Nier: Automata (NieR new project) — это непрямой сиквел NIER, действие которого разворачивается на порабощенной боевыми роботами Земле.", "НОВЫЙ ФЭНТЕЗИЙНЫЙ РОЛЕВОЙ БОЕВИК. Восстань, погасшая душа! Междуземье ждёт своего повелителя. Пусть благодать приведёт тебя к Кольцу Элден.", "Отправьтесь вместе с Элой в путешествие по величественному, но опасному миру Запретного запада, который скрывает новые загадочные угрозы."];
</script>
```
***3. The general style of the arrows is set by class="_arr", the direction is indicated by id="_pl" - left arrow and id="_pr" - right arrow***

***4. The lower controllers are set as follows:***
```
<div class='_shiv _flx'>
	<div id='sl0' class='_shblo _acti'></div>
	<div id='sl1' class='_shblo'></div>
	<div id='sl2' class='_shblo'></div>
	<div id='sl3' class='_shblo'></div>
	<div id='sl4' class='_shblo'></div>
</div>
```
The number of blocks is unlimited, but must be 1 more than in the ***imgs[]*** array. The ***_acti*** class points to the initially active controller.

***5. For a better idea of how controllers, arrows, and other elements can be positioned, see example***


## Preview
https://user-images.githubusercontent.com/22084187/174544947-49367ab3-5555-4e17-812e-c8e14ecc5493.mp4

## License
```
The MIT License (MIT)

Copyright (c) 2015 shahral shahral@protonmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```



