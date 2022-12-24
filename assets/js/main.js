var hoje = new Date().toISOString().split('T')[0];
document.getElementById('checkin').setAttribute('min', hoje);
document.getElementById('checkout').setAttribute('disabled', true);

document.getElementById("checkin").addEventListener("change", inputHabilitar);

function inputHabilitar() {
    if ((document.getElementById('checkin').valueAsDate != null) || (document.getElementById('checkin').value !== "")) {
        document.getElementById('checkout').removeAttribute("disabled");
        var vInicio = document.getElementById('checkin').value;
        document.getElementById('checkout').setAttribute('min', vInicio);
    } else {
        document.getElementById('checkout').setAttribute('disabled', true);
    }
}

pannellum.viewer('tour-quarto', {
    "type": "equirectangular",
    "panorama": "./assets/images/tour-quarto-luxo.jpeg"
});

