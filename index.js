const qrText = document.getElementById('qr-text')
const sizes = document.getElementById('sizes')
const downloadBtn = document.getElementById('downloadBtn')
const generateBtn = document.getElementById('generateBtn')
const qrContainer = document.querySelector('.qr-body');


let size = sizes.value;

function isEmpty() {
    if (qrText.value.length > 0) {
        generateQrCode();
    }
    else {
        alert("enter text to generate qr-code")
    }


}

function generateQrCode() {
    qrContainer.innerHTML = '';
    new QRCode(qrContainer, {
        text: qrText.value,
        height: size,
        width: size,
        colorLight: '#fff',
        colorDark: '#000'

    })
}

sizes.addEventListener('change', (e) => {
    size = e.target.value;
    isEmpty();
})



generateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    isEmpty();


})

downloadBtn.addEventListener('click', () => {
    let img = document.querySelector('.qr-body-img');
    if (img !== null) {
        let imgAtrr = img.getAttribute('src');
        downloadBtn.setAttribute('href', imgAtrr);
    }
    else {
        downloadBtn.setAttribute('href', `${document.querySelector('canvas').toDataURL()}`)
    }
})
