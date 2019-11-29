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
                response.json().then(
                    data => this.LoadThePlanets(data)
                );
            }.bind(this)
        )
    }

    
    this.LoadThePlanets = function(data)
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
                        data => this.LoadThePlanets(data)
                    );
                }.bind(this)
            )
        }
    }
}

function Planet(thePlanet)
{
    this.name = thePlanet.name;
    output.innerHTML += "<p class='names'>" + thePlanet.name + "</p>";
}
 