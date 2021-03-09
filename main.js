
function simplefunction() {

    // Select the HTML DOM elements
    const country = document.querySelector("#input1");
    const currency = document.querySelector("#input2");
	const locale = document.querySelector("#input3");
    const originplace = document.querySelector("#input4");
	const destinationplace = document.querySelector("#input5");
    const outboundpartialdate = document.querySelector("#input6");
	const inboundpartialdate = document.querySelector("#input7");

// create a query variable that forms the url that will be used to fetch API with the variables that the user entered   
var query = ("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/" + country.value + "/" + currency.value + "/" + 
            locale.value + "/" + originplace.value + "/" + destinationplace.value + "/" + outboundpartialdate.value + "/" + inboundpartialdate.value);

//fetch the query with the key (probably should not have this public but I had some issues importing)			
fetch(query, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "1e1f691c76msh409ed6dc7433307p1450a5jsn01eea2b244c0",
		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
	}
})

// record the json data response and display to console
.then(response => response.json())
.then(response => {
	displayResponse(response);
	console.log(response.content);
})
.catch(err => {
	console.error(err);
});
}

//function to display data to the page
function displayResponse(data){
	const responseDisplay = document.querySelector("#Outputs");
	 console.log(data);
	 // Used the JSON data to find the elements in the array that I would need to output the necessary information
	 responseDisplay.textContent=("Cheapest flight: $" + data.Quotes[0].MinPrice + "\r\nOutbound Departure Date: " + data.Quotes[0].OutboundLeg.DepartureDate + 
	 "\r\nInbound Departure Date: " + data.Quotes[0].InboundLeg.DepartureDate)
	 // Tried to get more information such as the carrier but had some troubles. Will like to do that in the future

}

