let submit = document.querySelector("#submit")

submit.addEventListener("click", ()=>{
        apiRequest()
})

 function apiRequest(){
    let apiKey = "OUnvSUo7Ybdy46qlOZF2Zdw5aWdwfazHBTLI6Aun";
    let resposta = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
    let data = await resposta.json()
    apiData(data)
}

function apiData(data){
    document.querySelector('#nasa').innerHTML += data.explanation
    document.querySelector('#nasa').innerHTML += `<img src="${data.url}">`
}