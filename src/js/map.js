(function () {




    let myMap;
    let myPlacemark;


    const init = () => {

        myMap = new ymaps.Map("map", {
            center: [55.752004, 37.576133],
            zoom: 14,
            controls: []
        });

        myMap.behaviors.disable('scrollZoom');
        //на мобильных устройствах... (проверяем по userAgent браузера)
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            //... отключаем перетаскивание карты
            myMap.behaviors.disable('drag');
        }

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader:
                '<span class="description">Профессиональные доски</br> для серфинга</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="img/baloon.png" height="200" width="267"> <br/> ' +
                '<a href="tel:+78009039090">8 800 903 90 90</a><br/>' + 'Москва, ул.Новый Арбат, д.31/12<br/>' +
                'Для детей и взрослых<br/>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '<a href=:"https://romanovmichael.github.io/surfproject">romanovmichael.github.io/surfproject</a>'

        }, {

            iconLayout: 'default#image',
            iconImageHref: 'img/marker.gif',
            iconImageSize: [58, 73],
            iconImageOffset: [-5, -38]
        }),




            myMap.geoObjects.add(myPlacemark);

    };
    ymaps.ready(init);
}())