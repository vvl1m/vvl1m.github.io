const images = [
    'imgs/1656153187_new_preview_Eminem.jpg',
    'imgs/2b5d244d75746b03356cd4001b76f620.jpg',
    'imgs/3349d33fb5d05134b41ec3589ad24a7a.jpg',
    'imgs/3d870be629354eb6f9594daa9afde96f.jpg',
    'imgs/429758e677cb20816bc438a7fdc45d22.jpg',
    'imgs/798405d67a34bf74b7ce62c1d787260bde8ea035_full.jpg',
    'imgs/photo_2023-09-22_19-28-51.jpg',
    'imgs/photo_2023-11-13_18-37-19.jpg',
    'imgs/photo_2025-01-01_18-10-12.jpg',
    'imgs/photo_2026-01-22_16-15-05.jpg',
    'imgs/photo_2026-02-14_23-40-00.jpg',
    'imgs/photo_2026-03-24_15-08-20.jpg'
];

function setRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    const element = document.querySelector('.randomFacPic');
    
    if (element) {
        element.classList.add('fade-out');
        
        setTimeout(() => {
            element.style.backgroundImage = `url('${randomImage}')`;
            element.classList.remove('fade-out');
        }, 700);
    }
}
document.addEventListener('DOMContentLoaded', setRandomImage);
window.addEventListener('load', setRandomImage);
setInterval(setRandomImage, 4000);