function toggleNavbar(){ 
    var x = document.getElementById("myNav");
    var y = document.getElementById("myMenuIcon");
    if (x.className === "navbar") {
      x.className += " open";
      y.src ="images/Kreuz.png";
    } else {
      x.className = "navbar";
      y.src="images/icon.png";
    }
  }



/**
Durchsuche eine Tabelle nach Worten und Wortteilen
 */
function searchTable() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    //search in first column
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
  for (i = 0; i < tr.length; i++) {
    //search in second column, show those who match the search query, but dont hide those who dont match the search query
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } 
    }
  }
  for (i = 0; i < tr.length; i++) {
     //search in second column, show those who match the search query, but dont hide those who dont match the search query
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } 
    }
  }
}



/**
 *Sortiert eine Spalte in einer Tabelle. Nach Abschluss der Vorgangs wird dem Sortierbutton die Funktion sortTableReverse(spalte, button) zugewiesen.
 *
 * @param {*} spalte
 * @param {*} button
 */
function sortTable(spalte, button) {
  var table, rows, switching, i, x, y, shouldSwitch, functionName;
  table = document.getElementById("myTable");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[spalte];
      y = rows[i + 1].getElementsByTagName("TD")[spalte];
      // Check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        // If so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
  functionName="sortTableReverse("+spalte+", '"+button+"')";
  document.getElementById(button).setAttribute("onclick", functionName);
}




/**
 *Sortiert eine Spalte (alphabetisch rückwärts/von groß nach klein) in einer Tabelle. Nach Abschluss der Vorgangs wird dem Sortierbutton die Funktion sortTable(spalte, button) zugewiesen.
 *
 * @param {*} spalte
 * @param {*} button
 */
function sortTableReverse(spalte, button) {
  var table, rows, switching, i, x, y, shouldSwitch, functionName; 
  table = document.getElementById("myTable");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[spalte];
      y = rows[i + 1].getElementsByTagName("TD")[spalte];
      // Check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
        // If so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
  functionName="sortTable("+spalte+", '"+button+"')";
  document.getElementById(button).setAttribute("onclick", functionName);
}