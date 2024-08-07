const turnOnOff = document.getElementById ('turnOnOff');

/*const turnOff = document.getElementById ('turnOff');*/

const lamp = document.getElementById ('lamp')


function lampOn () {
    if (!islampBroken ()) {
    lamp.src = 'img/ligada.jpg';
    }
}

function lampOff () {
    if (!islampBroken ()) {
    lamp.src = 'img/desligada.jpg'
    }
}

function lampBroken () {
    lamp.src = 'img/quebrada.jpg'
}

function islampBroken () {
    return lamp.src.indexOf ('quebrada') > -1
}

function lampOnOff () {
    if (turnOnOff.textContent == 'Ligar') {
        lampOn()
        turnOnOff.textContent = 'Desligar'
    } else {
        lampOff()
        turnOnOff.textContent = 'Ligar'
    }
}

turnOnOff.addEventListener ( 'click', lampOnOff );


lamp.addEventListener ('mouseover', lampOn)
lamp.addEventListener ('mouseleave', lampOff)

lamp.addEventListener ('dblclick', lampBroken)
