function isMobile() {
    console.log("wsp ")
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}

const formulario = document.querySelector('#formulario');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const telefonoVendedor = '56982029354';

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit.disabled = true
    setTimeout(() => {
        let nombre = document.querySelector('#nombre').value
        let telefono = document.querySelector('#telefono').value
        let comuna = document.querySelector('#comuna').value
        let direccion = document.querySelector('#direccion').value
        let producto = document.querySelector('#producto').value
        let comentario = document.querySelector('#comentario').value
        let mensaje = 'send?phone=' + telefonoVendedor + '&text=*_Pagina Web Agua Ngenko - Reserva clientes*%0A*¿Cual es tu nombre?*%0A' + nombre + '%0A*Numero celular cliente*%0A' + telefono + '%0A*Comuna del cliente*%0A' + comuna + '%0A*Dirección del cliente*%0A' + direccion + '%0A*Producto pedido por el cliente*%0A' + producto + '%0A*Comentario*%0A' + comentario + ''
        if (isMobile()) {
            window.open(urlMobile + mensaje, '_blank')
        } else {
            window.open(urlDesktop + mensaje, '_blank')
        }
        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
        buttonSubmit.disabled = false
    }, 3000);
});