const textContainer = document.querySelector('.i-love-u');   // Target <h1> with class
const yesBtn = document.querySelector('.yes');               // Target "Yes" button
const noBtn = document.querySelector('.no');                 // Target "No" button
const buttons = document.querySelector('.buttons');          // Target the buttons container
const image = document.querySelector('#image');              // Target the image by ID

// Add event listener for the Yes button
yesBtn.addEventListener('click', function() {
    textContainer.textContent = 'thank u pal';            // Update text content
    image.src = "./emoticon-sunglasses-22756566__1_-removebg-preview.png";                           // Change image source
    buttons.style.display = 'none';                          // Hide the buttons container
});

// Add event listener for hovering over the No button
noBtn.addEventListener('mouseover', function() {
    const container = document.querySelector('.container-ily');
    const containerHeight = container.clientHeight;
    const containerWidth = container.clientWidth;
    
    const randomTop = Math.random() * (containerHeight - noBtn.clientHeight);
    const randomLeft = Math.random() * (containerWidth - noBtn.clientWidth);
    
    noBtn.style.position = 'absolute';
    noBtn.style.top = `${randomTop}px`;
    noBtn.style.left = `${randomLeft}px`;
});
