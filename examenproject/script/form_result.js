window.addEventListener("load", init);



function init() {

    document.querySelector("#voornaam").innerHTML = getParam("voornaam");
    document.querySelector("#achternaam").innerHTML = getParam("achternaam");
    document.querySelector("#geboortedatum").innerHTML = getParam("geboortedatum");
    document.querySelector("#gsmnr").innerHTML = getParam("gsmnr");
    document.querySelector("#email").innerHTML = getParam("email");
    document.querySelector("#straatnaam").innerHTML = getParam("straat");
    document.querySelector("#huisnr").innerHTML = getParam("huisnr");
    document.querySelector("#postcode").innerHTML = getParam("postcode");
    document.querySelector("#plaats").innerHTML = getParam("plaats");
    document.querySelector("#provincie").innerHTML = getParam("provincie");
    document.querySelector("#productkeuze").innerHTML = getParam("productkeuze");
    document.querySelector("#personaliseringkleur").innerHTML = getParam("personaliseringkleur");
    document.querySelector("#personaliseringtekst").innerHTML = getParam("personaliseringtekst");
    document.querySelector("#personaliseringlettertype").innerHTML = getParam("personaliseringlettertype");
}

function getParam(name) {
    let queryString = decodeURIComponent(window.location.search.slice(1));
    let params = queryString.split("&");
    let value = "";
    for (let i = 0; i < params.length; i++) {
        let parts = params[i].split("=");
        if (parts[0] === name) {
            value = parts[1];
            break;
        }
    }
    return value.replace(/\+/g, " ");
}

