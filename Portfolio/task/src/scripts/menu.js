/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleBurgerMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " menuItemsVisible";
    } else {
        x.className = "topnav";
    }
}