function getApiData() {
  const xhr = new XMLHttpRequest()
  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
          const data = JSON.parse(xhr.responseText);

          const rers = data.result.rers.length

        }
      }

      xhr.open('GET', 'https://gateway.marvel.com:443/v1/public/characters/hulk?apikey=');
      xhr.send()
  }