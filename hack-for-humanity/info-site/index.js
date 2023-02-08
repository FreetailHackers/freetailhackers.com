var down = false;
function pullDownSchedule() {
    var targetDiv = document.getElementById("map-div");
    var targetDivmobile = document.getElementById("map-div-mobile");
    if (!down) {
        targetDiv.classList.remove("div-animation-up");
        targetDiv.classList.add("div-animation-down");
        targetDivmobile.classList.remove("div-animation-up");
        targetDivmobile.classList.add("div-animation-down");
    } else {
        targetDiv.classList.remove("div-animation-down");
        targetDiv.classList.add("div-animation-up");
        targetDivmobile.classList.remove("div-animation-down");
        targetDivmobile.classList.add("div-animation-up");
    }
    down = !down;
}