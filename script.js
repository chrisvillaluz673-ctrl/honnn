/* ==========================================
   1. ROMANTIC MESSAGES DATABASE array
   ========================================== */
// Pwede mong palitan o dagdagan ang mga text sa loob nito
const LOVE_MESSAGES = [
    "Salamat dahil ikaw ang nagbibigay ng kulay at saya sa bawat araw ko. Sobra kitang mahal! ❤️",
    "Ikaw ang aking pahinga sa magulong mundo. Sa piling mo lang ako nakakaramdam ng tunay na kaligtasan at kapayapaan. 🥰",
    "Kung may isang bagay man na hinding-hindi ko pagsisihan, yun ay ang piliin at mahalin ka araw-araw. ✨",
    "Ikaw ang paborito kong notification, paborito kong kausap, at ang paborito kong alaala. I love you to the moon and back! 🌌",
    "Kahit gaano kalawak ang karagatan, hinding-hindi maliligaw ang puso ko pabalik sa iyo. Ikaw ang aking tahanan. 🏡",
    "Isang mabilis na paalala lang mula sa lalaking laging nag-iisip sa'yo: Sobrang ganda mo ngayon at lagi kitang ipagmamalaki. 😘",
    "Salamat sa pag-unawa, sa paggabay, at sa pagmamahal sa akin nang buong-buo—kasama ang lahat ng aking flaws. 🍀",
    "Araw-araw kitang pipiliin. Sa hirap man o sa ginhawa, laging tandaan na magkahawak ang kamay natin. 🥂",
    "Ikaw ang sagot sa mga pangarap ko na hindi ko akalaing matutupad. Napakaswerte ko sa iyo, aking sinta. 💖"
];

/* ==========================================
   2. INITIALIZATION ENGINE
   ========================================== */
window.addEventListener('DOMContentLoaded', () => {
    generateFloatingBottles(6); // Nagse-set kung ilang bote ang lulutang
    setupModalEvents();
});

/* ==========================================
   3. BOTTLE GENERATION FACTORY
   ========================================== */
function generateFloatingBottles(count) {
    const container = document.getElementById('bottle-container');
    
    for (let i = 0; i < count; i++) {
        const bottle = document.createElement('div');
        bottle.className = 'bottle';
        
        // Coordinates para kumalat sila sa space
        const randomLeft = Math.random() * 80 + 10;  // 10% to 90% width
        const randomTop = Math.random() * 50 + 15;  // 15% to 65% height
        
        bottle.style.left = `${randomLeft}%`;
        bottle.style.top = `${randomTop}%`;
        
        // Random duration para hindi sabay-sabay ang float cycle
        const animDuration = Math.random() * 4 + 5; // 5s to 9s
        const animName = Math.random() > 0.5 ? 'floatX1' : 'floatX2';
        bottle.style.animation = `${animName} ${animDuration}s ease-in-out infinite alternate`;
        
        // Click action handler
        bottle.addEventListener('click', () => openBottleMessage());
        
        container.appendChild(bottle);
    }
}

/* ==========================================
   4. MODAL INTERACTIONS HANDLING
   ========================================== */
const modal = document.getElementById('scroll-modal');
const messageText = document.getElementById('message-text');
const closeModalBtn = document.getElementById('close-modal');

function openBottleMessage() {
    // Random selector para sa mga messages
    const randomIndex = Math.floor(Math.random() * LOVE_MESSAGES.length);
    const selectedMessage = LOVE_MESSAGES[randomIndex];
    
    messageText.innerText = selectedMessage;
    
    modal.classList.remove('hidden');
    modal.style.opacity = '1';
}

function closeModal() {
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

function setupModalEvents() {
    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}