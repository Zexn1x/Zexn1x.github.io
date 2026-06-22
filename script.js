// Select the element
const scrollObject = document.querySelector('.scroll-object');
const vw = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const vh = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

// Listen for the user scrolling
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Change these numbers to your desired scroll range
    const startY = vh * 0.5;
    const endY = vh * 3.5;

    // Check if current scroll position is within the range
    if (scrollY >= startY && scrollY <= endY) {
        scrollObject.classList.add('active');
    } else {
        scrollObject.classList.remove('active');
    }
});
