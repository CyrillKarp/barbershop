window.onload = function() {

    document.querySelector(".login").onclick = function() {
        document.querySelector(".modal-content").style.display = "block";
        document.querySelector(".modal-overlay").style.display = "block";
    };
    document.querySelector(".modal-content-close").onclick = function() {
        document.querySelector(".modal-content").style.display = "none";
        document.querySelector(".modal-overlay").style.display = "none";
    };
    
    document.querySelector("#contacts").onclick = function() {
        document.querySelector(".modal-content-map").style.display = "block";
        document.querySelector(".modal-overlay").style.display = "block";
    };
    document.querySelector("#close-map").onclick = function() {
        document.querySelector(".modal-content-map").style.display = "none";
        document.querySelector(".modal-overlay").style.display = "none";
    };
};