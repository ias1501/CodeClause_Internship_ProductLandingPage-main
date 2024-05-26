gsap.from('nav', {opacity:0, delay:1.6, duration:2.5, ease: "elastic.out(1,0.3)", y:-100});

gsap.from('.search', {opacity:0, delay:1.8, duration:2.8, ease: "elastic.out(1,0.3)", y:-100});

gsap.from('.brand_type', {opacity:0, delay:2.2, duration:3, ease: "elastic.out(1,0.3)", y:-100});

gsap.from('.discount', {opacity:0, delay:1, scale:.1, duration:2.4, rotation:180,
 ease: "expo.inOut", x:100});

gsap.from('.bottom_shoes_card', {opacity:0, delay:2.6, duration:3.5, ease: "elastic.out(1,0.3)", x:100});

gsap.from('.selected_product_img', {opacity:0, delay:3, duration:4, ease:"elastic.out(1,0.3)", y:100});

gsap.from('.size_product', {opacity:0, delay:3.5, duration:0.5, ease:"Expo.In", y:100});

gsap.from('.circle1', {opacity:0, delay:4.5, scale:.1, duration:.7, ease:"expo.In"});

gsap.from('.circle2', {opacity:0, delay:4.8, scale:.1, duration:.7, ease:"expo.In"});

// JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.bottom_shoes_slider');
    const sliderContainer = slider.querySelector('.bottom_shoes_card');
    const slides = sliderContainer.querySelectorAll('.card_shoe');
    const slideWidth = slides[0].offsetWidth;
    let currentIndex = 0;

    function slide(direction) {
        if (direction === 'next') {
            currentIndex++;
        } else {
            currentIndex--;
        }

        if (currentIndex < 0) {
            currentIndex = slides.length - 1;
        } else if (currentIndex >= slides.length) {
            currentIndex = 0;
        }

        const offset = -currentIndex * slideWidth;
        sliderContainer.style.transform = `translateX(${offset}px)`;

        // Enable/disable buttons based on currentIndex
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === slides.length - 1;
    }

    const prevButton = document.querySelector('.slider_btn:first-of-type');
    const nextButton = document.querySelector('.slider_btn:last-of-type');

    prevButton.addEventListener('click', () => slide('prev'));
    nextButton.addEventListener('click', () => slide('next'));

    // Initially disable the previous button
    prevButton.disabled = true;
});

document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.querySelector('.search_btn');
    const searchInput = document.querySelector('.search_input');
    const itemList = document.querySelector('.bottom_shoes_card');

    searchButton.addEventListener('click', function() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        const filteredItems = items.filter(item =>
            item.name.toLowerCase().includes(searchTerm)
        );
        
        displayItems(filteredItems);
    });

    function displayItems(items) {
        itemList.innerHTML = '';
        items.forEach(item => {
            const li = document.createElement('li');
            li.classList.add('card_shoe');
            li.innerHTML = `
                <div class="shoe_content">
                    <!-- Image goes here -->
                </div>
                <div class="desc_product">
                    <!-- Product details go here -->
                </div>
            `;
            itemList.appendChild(li);
        });
    }
});
