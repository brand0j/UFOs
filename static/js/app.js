// import the data from data.js

const tableData = data;
var tbody = d3.select("tbody");


function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");

    data.forEach((dataRow) => {

        // Append a row to the table body
        let row = tbody.append("tr");
        
        //Loop through each field in the dataRow and 
        //add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
};


function handleClick() {

    // Select the very first element that matches our selector string #datetime
    // .property is to grab the information and hold it in the "date" variable
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // apply the `filter` to the table data to only keep the 
    // rows where the `datetime` value matches the filter value
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    }

    // rebuild the table using the filtered date
    // NOTE: If no date was entered, then filteredData will
    // just be the original tableData.

    buildTable(filteredData);
}

// We're linking our code directly to the filter button. Also, by adding .on("click", handleClick)
// we're telling d3 to execute our handleClick() function when the button with an id of `filter-btn` is clicked
d3.selectAll('#filter-btn').on("click", handleClick);

buildTable(tableData);