let row = "row" + 0;
row = parseInt(document.getElementById(row).value);
let current_row = "row" + 0;
current_row = parseInt(document.getElementById(current_row).value);
function add_row() {
    // alert(row);
    adding_row = row++;
    let new_input = document.createElement('div');
    if (current_row != row) {
        // alert("in if");
        new_input.innerHTML = "<input type='text' value='" + row + "' class='row' id='row" + row + "'>";
        document.getElementById("main_div").appendChild(new_input);
    } else {
        return false;
    }
};
