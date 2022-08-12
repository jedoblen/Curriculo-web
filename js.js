function contar(){
    let texto = document.querySelectorAll('.main')[0].innerText.replace(/\n/gi, " ")
    let palavras = texto.split(' ').filter(e => String(e).trim());
    let naocaracteres = ["[", "^", "\\", "w", "À", "-", "'", "]" , "+", ""]
    naocaracteres.forEach(naoe => {
      palavras.forEach(e => {
        if(naoe == e) palavras.splice(e.indexOf(), 1)
      })
    })
   document.querySelectorAll(".quantidade")[0].innerText = palavras.length
    
    
    }
let href = window.location.href;
let qrcode = document.getElementById("qrcode");
let url = document.getElementById("url");

new QRCode(qrcode, {
	text: href,
	width: 100,
	height: 100
});

url.textContent = href;
url.href = href;