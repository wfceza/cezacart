let slideIndex = 1;
        showSlides(slideIndex)

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function currentSlide(n) {
            showSlides(slideIndex = n);
        }
        
        function showSlides(n) {
            let i;
            let slides = document.getElementsByClassName("product-container");
            if (n > slides.length) {slideIndex = 1}
            if (n < 1) {slideIndex = slides.Length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[slideIndex-1].style.display = "block";
        }