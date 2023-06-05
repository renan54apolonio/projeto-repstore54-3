const slider = document.querySelector('.slider');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
});

slider.addEventListener('mouseup', () => {
    isDown = false;
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; // Adjust scrolling speed here
    slider.scrollLeft = scrollLeft - walk;
});

// Touch Events for Mobile Devices
slider.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].clientX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('touchend', () => {
    isDown = false;
});

slider.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    const x = e.touches[0].clientX - slider.offsetLeft;
    const walk = (x - startX) * 3; // Adjust scrolling speed here
    slider.scrollLeft = scrollLeft - walk;
});

const slider2 = document.querySelector('.slider2');
let isDown2 = false;
let startX2;
let scrollLeft2;

slider2.addEventListener('mousedown', (e) => {
    isDown2 = true;
    startX2 = e.pageX - slider2.offsetLeft;
    scrollLeft2 = slider2.scrollLeft;
});

slider2.addEventListener('mouseleave', () => {
    isDown2 = false;
});

slider2.addEventListener('mouseup', () => {
    isDown2 = false;
});

slider2.addEventListener('mousemove', (e) => {
    if (!isDown2) return;
    e.preventDefault();
    const x = e.pageX - slider2.offsetLeft;
    const walk = (x - startX2) * 3; // Adjust scrolling speed here
    slider2.scrollLeft = scrollLeft2 - walk;
});

// Touch Events for Mobile Devices
slider2.addEventListener('touchstart', (e) => {
    isDown2 = true;
    startX2 = e.touches[0].clientX - slider2.offsetLeft;
    scrollLeft2 = slider2.scrollLeft;
});

slider2.addEventListener('touchend', () => {
    isDown2 = false;
});

slider2.addEventListener('touchmove', (e) => {
    if (!isDown2) return;
    const x = e.touches[0].clientX - slider2.offsetLeft;
    const walk = (x - startX2) * 3; // Adjust scrolling speed here
    slider2.scrollLeft = scrollLeft2 - walk;
});

