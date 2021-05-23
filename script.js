let url = "http://apilayer.net/api/live?access_key=e40f487a6079002bed8240ce6407171d&currencies=BRL&source=USD&format=1"

function converter(){
    let input = document.getElementById("valor");

    let valor = input.value;

    fetch(url).then((res) => {

        return res.json()
    })
    .then((data) => {
        
        let quote = data.quotes.USDBRL;

        let resultado = `${valor} dolares = ${Math.round(quote*valor)} em reais`;

    document.getElementById("resultado").innerHTML = resultado;

    })

    


}