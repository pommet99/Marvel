const output = document.getElementById("output");
const starWarsAPI = new StarWarsAPI();
starWarsAPI.Initialize();

function StarWarsAPI()
{
    this.planets = new Array();

    this.Initialize = function()
    {
        this.LoadPlanets("https://swapi.co/api/planets");
    }

    this.LoadPlanets = function(theUrl)
    {

        fetch(theUrl).then(
            function (response) 
            {
                if (response.status !== 200) 
                {
                    console.log('Looks like there was a problem. Status Code: ' + response.status);
                    return;
                }

                response.json().then(
                    data => this.LoadPlanetsRecursive(data)
                );
            }.bind(this)
        )
    }

    
    this.LoadPlanetsRecursive = function(data)
    {

        for (let planet of data.results)
        {
            let newPlanet = new Planet(planet);
            this.planets.push(newPlanet);
        }

        if (data.next != null)
        {
            fetch(data.next).then(
                function (response) 
                {
                    response.json().then(
                        data => this.LoadPlanetsRecursive(data)
                    );
                }.bind(this)
            )
        }
    }
}

function Planet(thePlanet)
{
    this.name = thePlanet.name;
    output.innerHTML += "<br><p style="";>" + thePlanet.name;
}
 