// Card Data - 12 Sports Events
const cardsData = [
    {
        title: "BGMI",
        subtitle: "Online Battle Royale",
        tagline: "Every drop brings a new chance to conquer the battleground",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop",
        theme: "pink"
    },
    {
        title: "GYM",
        subtitle: "Fitness Training",
        tagline: "Transform your body, elevate your mind, achieve greatness",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
        theme: "gold"
    },
    {
        title: "LAWN TENNIS",
        subtitle: "Court Sports",
        tagline: "Master the court with precision, power, and passion",
        image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=800&h=600&fit=crop",
        theme: "green"
    },
    {
        title: "VALORANT",
        subtitle: "Online FPS",
        tagline: "Strategic warfare meets tactical brilliance in every round",
        image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&h=600&fit=crop",
        theme: "pink"
    },
    {
        title: "BODY BUILDING",
        subtitle: "Strength Sports",
        tagline: "Sculpt your physique, build your legacy, one rep at a time",
        image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&h=600&fit=crop",
        theme: "gold"
    },
    {
        title: "KHO KHO",
        subtitle: "Traditional Sport",
        tagline: "Speed, strategy, and teamwork define this ancient sport",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop",
        theme: "blue"
    },
    {
        title: "BASKETBALL",
        subtitle: "Team Sport",
        tagline: "Shoot your shot, dominate the court, win the game",
        image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=600&fit=crop",
        theme: "pink"
    },
    {
        title: "CHESS",
        subtitle: "Mind Sport",
        tagline: "Master strategy and outsmart your opponent move by move",
        image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&h=600&fit=crop",
        theme: "gold"
    },
    {
        title: "SWIMMING",
        subtitle: "Aquatic Sport",
        tagline: "Dive deep, swim fast, and make waves in the pool",
        image: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=800&h=600&fit=crop",
        theme: "blue"
    },
    {
        title: "CRICKET",
        subtitle: "Team Sport",
        tagline: "Hit boundaries, take wickets, and lead your team to victory",
        image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&h=600&fit=crop",
        theme: "green"
    },
    {
        title: "ESPORTS",
        subtitle: "Online Gaming",
        tagline: "Compete globally, showcase skills, dominate the leaderboard",
        image: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=800&h=600&fit=crop",
        theme: "pink"
    },
    {
        title: "BOXING",
        subtitle: "Combat Sport",
        tagline: "Train hard, fight harder, become the champion",
        image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&h=600&fit=crop",
        theme: "gold"
    }
];

let currentIndex = 0;
let autoPlayInterval;

// Initialize the carousel
function initCarousel() {
    const track = document.getElementById('carouselTrack');

    cardsData.forEach((data, index) => {
        const card = document.createElement('div');
        card.className = `card ${data.theme}`;
        card.setAttribute('data-index', index);
        
        card.innerHTML = `
            <div class="card-image" style="background-image: url('${data.image}')">
                <div class="card-overlay"></div>
            </div>
            <div class="card-content">
                <div class="card-text">
                    <h3 class="card-title">${data.title}</h3>
                    <p class="card-subtitle">${data.subtitle}</p>
                    <p class="card-tagline">${data.tagline}</p>
                </div>
                <button class="card-button">LIVE SCORE</button>
            </div>
        `;

        const LIVESCOREBtn = card.querySelector('.card-button');
        LIVESCOREBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            showLIVESCOREModal(data.title);
        });

        track.appendChild(card);
    });

    updateCarousel();
    startAutoPlay();
}

// Update carousel positions
function updateCarousel() {
    const cards = document.querySelectorAll('.card');
    const total = cards.length;

    cards.forEach((card, index) => {
        // Remove all position classes
        card.classList.remove('active', 'left-1', 'left-2', 'left-3', 'right-1', 'right-2', 'right-3', 'hidden');

        // Calculate relative position
        let position = (index - currentIndex + total) % total;
        if (position > total / 2) {
            position = position - total;
        }

        // Apply position-based classes
        if (position === 0) {
            card.classList.add('active');
        } else if (position === -1) {
            card.classList.add('left-1');
        } else if (position === -2) {
            card.classList.add('left-2');
        } else if (position === -3) {
            card.classList.add('left-3');
        } else if (position === 1) {
            card.classList.add('right-1');
        } else if (position === 2) {
            card.classList.add('right-2');
        } else if (position === 3) {
            card.classList.add('right-3');
        } else {
            card.classList.add('hidden');
        }
    });
}

// Navigation functions
function nextSlide() {
    currentIndex = (currentIndex + 1) % cardsData.length;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + cardsData.length) % cardsData.length;
    updateCarousel();
}

// Auto-play controls
function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, 3500);
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

function restartAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
}

// Registration modal
function showLIVESCOREModal(sportName) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <h2>LIVESCORE for ${sportName}</h2>
            <p>Thank you for your interest in ${sportName}!</p>
            <p>LIVE SCORE functionality will be available soon.</p>
            <button class="modal-btn">Close</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    setTimeout(() => modal.classList.add('show'), 10);
    
    const closeModal = () => {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300);
    };
    
    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    modal.querySelector('.modal-btn').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

// Scroll Animation Observer
function initScrollAnimations() {
    const scrollElements = document.querySelectorAll('.scroll-reveal');
    
    const elementInView = (el, percentageScroll = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= 
            (window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100)
        );
    };
    
    const displayScrollElement = (element) => {
        element.classList.add('active');
    };
    
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 80)) {
                displayScrollElement(el);
            }
        });
    };
    
    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation(); // Initial check
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    initCarousel();
    initScrollAnimations();

    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const carouselContainer = document.querySelector('.carousel-container');

    // Button controls
    nextBtn.addEventListener('click', () => {
        nextSlide();
        restartAutoPlay();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        restartAutoPlay();
    });

    // Mouse hover pause
    carouselContainer.addEventListener('mouseenter', stopAutoPlay);
    carouselContainer.addEventListener('mouseleave', startAutoPlay);

    // Keyboard controls
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
            restartAutoPlay();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            restartAutoPlay();
        }
    });

    // Card click navigation
    document.addEventListener('click', (e) => {
        const card = e.target.closest('.card');
        if (!card) return;

        if (card.classList.contains('right-1') || 
            card.classList.contains('right-2') || 
            card.classList.contains('right-3')) {
            nextSlide();
            restartAutoPlay();
        } else if (card.classList.contains('left-1') || 
                   card.classList.contains('left-2') || 
                   card.classList.contains('left-3')) {
            prevSlide();
            restartAutoPlay();
        }
    });
});

// Touch support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            nextSlide();
        } else {
            prevSlide();
        }
        restartAutoPlay();
    }
}