# UFOs
## Purpose
The purpose of this analysis was to use JS to create, populate and filter a table through an HTML webpage. This was achieved by adding text fields to filter the table and having our app.js file listen for the event that a text field was changed which initiated the functions we wrote in our file (```updateFilters(), filterTable(), buildTable()```).

## Results

After making the input fields for the user to filter the data table we needed a way to store the fields they changed along with the values they entered. The following code was used to accomplish this:

```
var filters = {};

function updateFilters(){

  let changedElement = d3.select(this);
  let elementValue = changedElement.property("value");
  let filterId = changedElement.attr("id");

  if(elementValue) {
    filters[filterId] = elementValue;
  }
  else {
    delete filters[filterId];
  }
  
  filterTable();
}
```
This takes all the changed input fields from our HTML webpage and stores them in the filters dictionary. For example, if the user changed the city value to 'El Cajon', our dictionary would look like this: ```filters = {'city': 'El Cajon'}```. This way of storing the input fields along with their values into a dictionary makes it very easy to loop through them and filter out the uneccessary data in the other function which is responsible for actually filtering the table itself. Using ```Object.entries()``` and ```.forEach()``` we can accomplish this. 

```
function FilterTable(){
  let filteredData = tableData;
  
  Object.entries(filters).forEach(([key,value]) => {
    filteredData = filteredData.filter(row => row[key]===value);
  });
  
  buildTable(filteredData);
}
```
Below is an image to demonstrate how the filter works by entering the city 'el cajon' into the city input field:

![TheTruthIsOutThere](https://github.com/brand0j/UFOs/blob/main/Resources/TheTruthIsOutThere.PNG)

## Summary

One of the major drawbacks with the current webpage is that entering something like: 'elcajon' or 'El Cajon' will result in a table with zero entries. In addition, another drawback is that if the user accidentally enteres black space after their entry it will not recognize what was entered even if it is correct. Both of these would be recommendations if the webpage were to be improved further. Another thing that might be useful would be to implement a range of dates instead of just one specific date (this would let users search for the amount of UFO sightings within a given week for a specific city/stat/etc.).
