document.addEventListener("DOMContentLoaded", function() {

	var next = document.getElementById("nextPicture");
    var prev = document.getElementById("prevPicture");
    //tablica z odnośników
    var pictures = document.querySelectorAll("li"); //pictures[i]
    // nadaję liście klasę
    var picList = document.querySelector("ul");
    picList.classList.add("slider");
    //nadaję pierwszemu zdjęciu klasę visible, aby było widoczne
    pictures[0].classList.add("visible");
    //licznik 
    var indexOfPicture = 1
    show(indexOfPicture)

    function plus(n) {
        show(indexOfPicture += n);
    }

    function show(n) {
        var i;

        if (n > pictures.length) {
            indexOfPicture = 1;
        }
      
        if (n < 1) {
            indexOfPicture = pictures.length;
        }
        //iteruje po tablicy zmieniając widoczność el.
        for (i = 0; i < pictures.length; i++) {
            pictures[i].style.display = "none";
        }
        	pictures[indexOfPicture - 1].style.display = "block";
    }

    next.addEventListener("click", function() {
        next.classList.add(plus(1));
    })

    prev.addEventListener("click", function() {
        prev.classList.add(plus(-1));
    })
});