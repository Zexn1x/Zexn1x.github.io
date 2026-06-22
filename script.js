// Select the element
const firstObject = document.querySelector('.first-object');
const secondObject = document.querySelector('.second-object');
const vw = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const vh = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

// Listen for the user scrolling
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Change these numbers to your desired scroll range
    const startY1 = vh * 0.5;
    const endY1 = vh * 3;
    const startY2 = vh * 5;
    const endY2 = vh * 7.5;

    // Check if current scroll position is within the range
    if (scrollY >= startY1 && scrollY <= endY1) {
        firstObject.classList.add('active');
    } else {
        firstObject.classList.remove('active');
    }

    if (scrollY >= startY2 && scrollY <= endY2) {
        secondObject.classList.add('active');
    } else {
        secondObject.classList.remove('active');
    }
});
