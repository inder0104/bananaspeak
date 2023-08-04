

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");

var outputDiv = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text) {
    return serverUrl + "?" + "text=" + text
    
}

btnTranslate.addEventListener("click" ,function clickEventHandler () {
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
    .then(Response=>Response.json())
    .then(json=> {
        var translatedText = json.contents.translated;
        outputDiv.innerText =translatedText;
    })
       
    } )
