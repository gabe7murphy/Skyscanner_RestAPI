
function simplefunction() {

    // Select the HTML DOM elements
    const country = document.querySelector("#input1");
    const currency = document.querySelector("#input2");
	const locale = document.querySelector("#input3");
    const originplace = document.querySelector("#input4");
	const destinationplace = document.querySelector("#input5");
    const outboundpartialdate = document.querySelector("#input6");
	const inboundpartialdate = document.querySelector("#input7");
    
var query = ("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/" + country.value + "/" + currency.value + "/" + 
            locale.value + "/" + originplace.value + "/" + destinationplace.value + "/" + outboundpartialdate.value + "/" + inboundpartialdate.value);

fetch(query, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "1e1f691c76msh409ed6dc7433307p1450a5jsn01eea2b244c0",
		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
	}
})

.then(response => response.json())
.then(response => {
	displayResponse(response);
	console.log(response.content);

})
.catch(err => {
	console.error(err);
});
}

function displayResponse(data){

	const responseDisplay = document.querySelector("#Outputs");
	 console.log(data);
	 responseDisplay.textContent=data.Quotes[0].MinPrice 


}

