function sidebarToggle() {
    var sidebar = document.getElementById("sidebar");
    var sidebarDisplay = sidebar.style.display;
    var blur = document.getElementById("blur");

    if (sidebarDisplay == "none") {

        sidebar.style.display = "block";
        blur.style.backgroundColor = "rgba(0, 0, 0, .4)";

        setTimeout(function () {

            sidebar.style.width = "45vw";
           
        }, 10);
        
        
    } else {

        sidebar.style.width = "0px";
        blur.style.backgroundColor = "rgba(0, 0, 0, 0)";
        
        setTimeout(function () {

            sidebar.style.display = "none";

        }, 1000);
    }
}

function screenClick() {

    var sidebar = document.getElementById('sidebar');
    var sidebarDisplay = sidebar.style.display;

    if (sidebarDisplay == "block") {
        sidebarToggle();
    }
}