function getApiData() {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            const data = JSON.parse(xhr.responseText);

        }
    }     
    xhr.open('GET', 'https://developer.marvel.com/docs#!/public/getCharacterIndividual_get_1');
    xhr.send()
}