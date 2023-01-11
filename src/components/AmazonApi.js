const AmazonApi = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '134b77b3c3mshb683944cdc9676cp13f571jsnd571b4793182',
		'X-RapidAPI-Host': 'amazon-product-search2.p.rapidapi.com'
	}
};
console.log('https://amazon-product-search2.p.rapidapi.com/product/?asin=B08FC5L3RG');
fetch('https://amazon-product-search2.p.rapidapi.com/product/?asin=B08FC5L3RG', AmazonApi)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));




export default AmazonApi