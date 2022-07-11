var concertDisplay = document.getElementById("concertDisplay")

const option = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '20d275890emsh80f93ddd6fe099dp1f29ebjsn35ed4dc50b17',
		'X-RapidAPI-Host': 'concerts-artists-events-tracker.p.rapidapi.com'
	}
};

function api(sTerm) {

fetch(`https://concerts-artists-events-tracker.p.rapidapi.com/artist?name=${sTerm}&page=1`, option)

	.then(function(response){
        console.log(response)
        if(!response.ok){
            console.log("error")
        }else{
            return response.json()
        }
    })

    .then(function(data){
        printData(data)
        console.log(data)
    })
    .catch(function(er){
        console.log(er)
    });
}

function printData(data) {
    
    for (let i = 0; i < data.data.length; i++) {
        const concert = data.data[i];

        // create list item
        // create div
        // create an h3-store the name
        // create 4 unique p tags that store specific data
        // append all five to the div 
        // append the div to the list item
        var listItem = document.createElement("li")
        var concertCard = document.createElement("div")
        listItem.append(concertCard)
        var concertTitle = document.createElement("h3")
        concertTitle.textContent = concert.description
        var startHeader = document.createElement("h5")
        startHeader.textContent = "Start Date:"
        var start = document.createElement("p")
        start.textContent = dayjs(concert.startDate).format("MM/DD/YYYY")
        var endHeader = document.createElement("h5")
        endHeader.textContent = "End Date:"
        var end = document.createElement("p")
        end.textContent = dayjs(concert.endDate).format("MM/DD/YYYY")
        var locHeader = document.createElement("h5")
        locHeader.textContent = "Location:"
        var loc = document.createElement("p")
        loc.textContent = concert.location.name
        var perfHeader = document.createElement("h5")
        perfHeader.textContent = "Performer(s):"
        var perf = document.createElement("p")
        perf.textContent = concert.performer[0].name
        concertCard.append(concertTitle, startHeader, start, endHeader, end, locHeader, loc, perfHeader, perf)
        concertDisplay.append(listItem);
    }
}
var sTerm = localStorage.getItem("sTerm")

api(sTerm)
 