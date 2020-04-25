const sliders = () => {
    function slidesGo (itemsSelector, prevSelector, nextSelector, slidesToSlide=1, slidesToShow=1, arrows=true, auto=3000) {
        const slideItems = document.querySelectorAll(itemsSelector);
        let slideIndex = 0,
            paused = false;

        function showSlides(n) {
            // условие перелистывания последнего слайда и первого
            if (n>slideItems.length-slidesToShow) {
                slideIndex = 0;
            }
            if (n<1) {
                slideIndex = slideItems.length - slidesToShow;
            }
            // скрыли все слайды
            slideItems.forEach(slide => {
                slide.style.display = 'none';
            });
            // показываем нужный(-ые)
            for (let i = 0; i<slidesToShow ; ++i) {
                slideItems[slideIndex + i].style.display = 'block';
            }
        }
        // перелистывание слайдов
        function plusSlides(n) {
            showSlides(slideIndex += n);
        };
        function autoShow(time) {
            paused = setInterval(() => {
                plusSlides(slidesToSlide);
            },time);
        };
        if (arrows) {
            const prev = document.querySelector(prevSelector),
                  next = document.querySelector(nextSelector);
            prev.addEventListener('click', () => {
                plusSlides(-slidesToSlide);
            });
            next.addEventListener('click', () => {
                plusSlides(slidesToSlide);
            });
        } 

        if (auto) {
            autoShow(auto);
        //остановка и старт работы слайдера при наведении мыши
        slideItems[0].parentNode.parentNode.addEventListener('mouseenter', () => {
            clearInterval(paused);
        });
        slideItems[0].parentNode.parentNode.addEventListener('mouseleave', () => {
            autoShow(auto);
        });
        }

        showSlides(slidesToShow);
    };

    slidesGo('.slider_item', '.prev_arr', '.next_arr', 1, 1, true, 60000);
};

sliders();