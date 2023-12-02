function createTable() {
    //Write your code here
      
      // Prompt for the number of rows
    var rowCount = prompt("Input number of rows");
    var colCount = prompt("Input number of columns");

    // Validate input
    if (!rowCount || isNaN(rowCount) || rowCount <= 0 || !colCount || isNaN(colCount) || colCount <= 0) {
      alert("Please enter valid numbers for rows and columns.");
      return;
    }

    // Get the table element
    var table = document.getElementById("myTable");

    // Clear any existing rows and columns
    table.innerHTML = '';

    // Create the table header row with column names
    var headerRow = table.insertRow();
   

    // Create the specified number of rows with cells
    for (var i = 0; i < rowCount; i++) {
      var row = table.insertRow();
      for (var j = 0; j < colCount; j++) {
        var cell = row.insertCell(j);
        cell.innerHTML = `Row-${i} Column-${j}`;
      }
    }
}
