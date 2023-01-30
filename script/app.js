const containerboxEl = document.querySelector(".container__box")
const formEl = document.querySelector("form")
const inputEl = document.querySelector("#input")


    formEl.addEventListener("submit",(event)=>{
        event.preventDefault();
        let inputValue = inputEl.value
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`)
        .then(response => response.json())
        .then(data => renderData(data))
        .catch(err => console.error(err))
        if(inputValue.trim().length >= 2){
        function renderData(postData){
            postData.forEach(p => {
         containerboxEl.innerHTML = `
            <h1 class="first-word">${p.word} -  ${p.phonetic}</h1>
            <p class="definition">${p.meanings.definition}</p>
            <p class="example">Example:  ${p.definition}</p>
                <div class="audio">
                <audio src="${p.audio}" controls>
                <source src="${p.sourceUrl}" type="">
                </audio>
            </div>
         `
        })
         }
        }
        
    })