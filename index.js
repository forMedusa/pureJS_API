// url we want to fetch the data from
let client = 'https://time.com/';

// url1= "http://127.0.0.1:5500/index.html"

// GET request to site using the fetch API
fetch('/readNews',client,(res => {
    console.log(res)
}))
  .then(response => response.text())
  .then(html => {
    // DOM parser to parse the DOM data
    var parser = new DOMParser();
    
    // Parse the HTML content of the web page
    var doc = parser.parseFromString(html, 'text/html');
    
    // using JS DOM functions to get the data from the parsed document
    let listData = doc.querySelectorAll('.latest-stories__item');


    // to store the extracted data
    let dataList = [];

    listData.forEach(function(listElement) {

    let links = listElement.querySelector('a');
    let exactLink = links.querySelector('href');
    let headlineText = listElement.querySelector('h3').textContent;
    
    // object to add data then further add the data to array
    let dataObject = {
        title: headlineText,
        link: "https://time.com"+exactLinkexactLink
    };
    
    // pushing the object in array
    dataList.push(dataObject);
    });

    // consoled the data in JSON format
    console.log(JSON.stringify(dataList, null, 2));
  })
  .catch(error => {
    console.error('Error fetching the page', error);
  })