// ===== Menu Data =====
const menuData = [
    // ===== MAKANAN =====
    {
        id: 1,
        name: 'Nasi Goreng Spesial',
        category: 'makanan',
        price: 'Rp 35.000',
        description: 'Nasi goreng dengan telur, ayam, udang, dan sayuran pilihan',
        image: 'https://images.unsplash.com/photo-1603894416879-e10db00930e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 2,
        name: 'Soto Ayam Premium',
        category: 'makanan',
        price: 'Rp 28.000',
        description: 'Soto ayam tradisional dengan kuah yang nikmat',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 3,
        name: 'Rendang Daging',
        category: 'makanan',
        price: 'Rp 42.000',
        description: 'Daging sapi dalam kuah rendang yang kental dan lezat',
        image: 'https://images.unsplash.com/photo-1586190203519-2fc2d8c517fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 4,
        name: 'Gado-gado',
        category: 'makanan',
        price: 'Rp 22.000',
        description: 'Sayuran dengan bumbu kacang yang kaya rasa',
        image: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 5,
        name: 'Ikan Bakar',
        category: 'makanan',
        price: 'Rp 45.000',
        description: 'Ikan segar yang dibakar dengan rempah pilihan',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 6,
        name: 'Lumpia Goreng',
        category: 'makanan',
        price: 'Rp 18.000',
        description: 'Lumpia gurih dengan isian daging dan sayuran',
        image: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 7,
        name: 'Sate Ayam',
        category: 'makanan',
        price: 'Rp 32.000',
        description: 'Daging ayam tusuk dengan bumbu kacang kental',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 8,
        name: 'Mie Goreng Spesial',
        category: 'makanan',
        price: 'Rp 30.000',
        description: 'Mie goreng dengan cita rasa yang autentik',
        image: 'https://images.unsplash.com/photo-1603894416879-e10db00930e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },

    // ===== MINUMAN =====
    {
        id: 9,
        name: 'Es Cendol',
        category: 'minuman',
        price: 'Rp 12.000',
        description: 'Minuman segar dengan cendol, santan, dan gula merah',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 10,
        name: 'Jus Buah Segar',
        category: 'minuman',
        price: 'Rp 15.000',
        description: 'Jus buah segar pilihan tanpa pengawet',
        image: 'https://images.unsplash.com/photo-1575852376587-180db130f935?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 11,
        name: 'Teh Tarik',
        category: 'minuman',
        price: 'Rp 10.000',
        description: 'Teh tarik dengan susu yang kental dan lezat',
        image: 'https://images.unsplash.com/photo-1597318372298-6f8ee2ce9f64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 12,
        name: 'Iced Coffee Premium',
        category: 'minuman',
        price: 'Rp 18.000',
        description: 'Kopi premium dingin dengan es krim vanilla',
        image: 'https://images.unsplash.com/photo-1517668808822-9ebb02ae2a0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 13,
        name: 'Es Jeruk Murni',
        category: 'minuman',
        price: 'Rp 8.000',
        description: 'Es jeruk segar dari buah jeruk pilihan',
        image: 'https://images.unsplash.com/photo-1600271886742-f049cd1223d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 14,
        name: 'Smoothie Mangga',
        category: 'minuman',
        price: 'Rp 16.000',
        description: 'Smoothie mangga dengan yogurt dan madu',
        image: 'https://images.unsplash.com/photo-1575852376587-180db130f935?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 15,
        name: 'Chaï Latte',
        category: 'minuman',
        price: 'Rp 14.000',
        description: 'Minuman tradisional dengan rempah-rempah pilihan',
        image: 'https://images.unsplash.com/photo-1597318372298-6f8ee2ce9f64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 16,
        name: 'Avocado Juice',
        category: 'minuman',
        price: 'Rp 20.000',
        description: 'Jus alpukat lembut dengan susu kental manis',
        image: 'https://images.unsplash.com/photo-1600271886742-f049cd1223d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },

    // ===== DESSERT =====
    {
        id: 17,
        name: 'Tiramisu',
        category: 'dessert',
        price: 'Rp 25.000',
        description: 'Kue tiramisu Italia yang creamy dan lezat',
        image: 'https://images.unsplash.com/photo-1571115764595-644a007f0a3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 18,
        name: 'Chocolate Cake',
        category: 'dessert',
        price: 'Rp 28.000',
        description: 'Kue cokelat berlapis dengan rasa yang nikmat',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 19,
        name: 'Puding Cokelat',
        category: 'dessert',
        price: 'Rp 18.000',
        description: 'Puding cokelat yang lembut dan gurih',
        image: 'https://images.unsplash.com/photo-1587314167412-5d7e6f3066bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 20,
        name: 'Cheese Cake',
        category: 'dessert',
        price: 'Rp 30.000',
        description: 'Kue keju New York dengan rasa premium',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 21,
        name: 'Panna Cotta',
        category: 'dessert',
        price: 'Rp 22.000',
        description: 'Dessert Italia yang creamy dan halus',
        image: 'https://images.unsplash.com/photo-1587314167412-5d7e6f3066bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 22,
        name: 'Brownies Fudge',
        category: 'dessert',
        price: 'Rp 16.000',
        description: 'Brownies cokelat dengan tekstur yang lembut',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 23,
        name: 'Fruit Salad',
        category: 'dessert',
        price: 'Rp 20.000',
        description: 'Salad buah segar dengan madu alami',
        image: 'https://images.unsplash.com/photo-1587314167412-5d7e6f3066bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 24,
        name: 'Crepes Premium',
        category: 'dessert',
        price: 'Rp 24.000',
        description: 'Crepes lezat dengan berbagai topping pilihan',
        image: 'https://images.unsplash.com/photo-1571115764595-644a007f0a3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    }
];

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🍽️ Restoran Lezat Website Loaded');
    displayMenuItems('all');
    setupFilterButtons();
    setupMobileMenu();
    setupReservationForm();
    setupNewsletterForm();
    setupBackToTopButton();
    setupScrollAnimations();
});

// ===== Display Menu Items =====
function displayMenuItems(category) {
    const menuGrid = document.getElementById('menuGrid');
    
    if (!menuGrid) {
        console.error('❌ Menu grid tidak ditemukan');
        return;
    }
    
    menuGrid.innerHTML = '';

    let filteredItems = [];
    
    if (category === 'all') {
        filteredItems = menuData;
    } else {
        filteredItems = menuData.filter(item => item.category === category);
    }

    console.log(`📋 Menampilkan ${filteredItems.length} item untuk kategori: ${category}`);

    if (filteredItems.length === 0) {
        menuGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #999; padding: 2rem;">Tidak ada menu tersedia</p>';
        return;
    }

    filteredItems.forEach((item, index) => {
        const menuCard = document.createElement('div');
        menuCard.className = 'menu-card';
        menuCard.style.animationDelay = `${index * 0.05}s`;
        menuCard.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="menu-card-image" onerror="this.src='https://via.placeholder.com/500x200?text=${encodeURIComponent(item.name)}'">
            <div class="menu-card-content">
                <span class="menu-card-category">${capitalizeCategory(item.category)}</span>
                <h3 class="menu-card-title">${item.name}</h3>
                <p class="menu-card-description">${item.description}</p>
                <div class="menu-card-price">${item.price}</div>
            </div>
        `;
        menuGrid.appendChild(menuCard);
    });
}

// ===== Setup Filter Buttons =====
function setupFilterButtons() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    console.log(`🔘 Ditemukan ${filterBtns.length} tombol filter`);
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const filterValue = this.getAttribute('data-filter');
            console.log(`🎯 Tombol diklik: ${filterValue}`);
            
            // Remove active class dari semua buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class ke button yang diklik
            this.classList.add('active');
            
            // Display items berdasarkan filter
            displayMenuItems(filterValue);
            
            // Smooth scroll ke menu section
            const menuSection = document.getElementById('menu');
            if (menuSection) {
                menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ===== Setup Mobile Menu =====
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
            console.log('📱 Mobile menu toggled');
        });

        // Close menu ketika link diklik
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = hamburger.contains(event.target) || navMenu.contains(event.target);
            if (!isClickInsideNav && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }
}

// ===== Setup Reservation Form =====
function setupReservationForm() {
    const form = document.getElementById('reservationForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validasi form
            const nama = document.getElementById('nama').value.trim();
            const email = document.getElementById('email').value.trim();
            const telepon = document.getElementById('telepon').value.trim();
            const tanggal = document.getElementById('tanggal').value;
            const waktu = document.getElementById('waktu').value;
            const jumlah = document.getElementById('jumlah').value;
            
            if (!nama || !email || !telepon || !tanggal || !waktu || !jumlah) {
                showNotification('⚠️ Silakan isi semua field yang wajib!', 'error');
                return;
            }
            
            // Validasi tanggal (tidak boleh tanggal yang sudah lewat)
            const selectedDate = new Date(tanggal);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            
            if (selectedDate < today) {
                showNotification('⚠️ Tanggal reservasi tidak boleh di masa lalu!', 'error');
                return;
            }
            
            // Validasi format email
            const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('⚠️ Format email tidak valid!', 'error');
                return;
            }
            
            const formData = {
                nama: nama,
                email: email,
                telepon: telepon,
                tanggal: tanggal,
                waktu: waktu,
                jumlah: jumlah,
                catatan: document.getElementById('catatan').value.trim()
            };
            
            // Simpan ke localStorage
            const reservations = JSON.parse(localStorage.getItem('reservations')) || [];
            reservations.push({
                ...formData,
                id: Date.now(),
                status: 'pending',
                createdAt: new Date().toLocaleString('id-ID')
            });
            localStorage.setItem('reservations', JSON.stringify(reservations));
            
            // Tampilkan notifikasi sukses
            showNotification(
                `✅ Terima kasih ${formData.nama}!\\nReservasi Anda telah berhasil diterima.\\nKami akan menghubungi Anda di ${formData.telepon} untuk konfirmasi.`,
                'success'
            );
            
            // Log ke console
            console.log('✅ Reservasi berhasil disimpan:', formData);
            console.log('📊 Total reservasi:', reservations.length);
            
            // Reset form
            form.reset();
        });
    }
}

// ===== Setup Newsletter Form =====
function setupNewsletterForm() {
    const form = document.getElementById('newsletterForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('newsletter-email').value.trim();
            
            if (!email) {
                showNotification('⚠️ Silakan masukkan email Anda!', 'error');
                return;
            }
            
            // Simpan email ke localStorage
            const subscribers = JSON.parse(localStorage.getItem('newsletter')) || [];
            
            if (subscribers.some(sub => sub.email === email)) {
                showNotification('ℹ️ Email Anda sudah terdaftar!', 'error');
                return;
            }
            
            subscribers.push({
                email: email,
                subscribedAt: new Date().toLocaleString('id-ID')
            });
            localStorage.setItem('newsletter', JSON.stringify(subscribers));
            
            showNotification(`✅ Terima kasih! Email Anda telah berhasil terdaftar.`, 'success');
            form.reset();
            console.log('📧 Subscriber baru:', email);
        });
    }
}

// ===== Setup Back to Top Button =====
function setupBackToTopButton() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (!backToTopBtn) return;
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== Setup Scroll Animations =====
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.menu-card, .feature, .testimoni-card, .kontak-card, .promo-card').forEach(el => {
        observer.observe(el);
    });
}

// ===== Utility Functions =====
function capitalizeCategory(category) {
    const categories = {
        'makanan': '🍜 Makanan',
        'minuman': '🥤 Minuman',
        'dessert': '🍰 Dessert'
    };
    return categories[category] || category;
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: ${type === 'success' ? '#27ae60' : '#c0392b'};
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        z-index: 2000;
        animation: slideInDown 0.3s ease;
        max-width: 400px;
        word-wrap: break-word;
        white-space: pre-line;
        font-size: 14px;
        line-height: 1.5;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideInUp 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

// ===== Smooth scroll untuk navigation links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Console Messages =====
console.log('%c🍽️ Selamat Datang di Restoran Lezat! 🍽️', 'color: #8b6f47; font-size: 18px; font-weight: bold;');
console.log('%cUntuk melihat semua data reservasi, ketik: JSON.parse(localStorage.getItem(\\'reservations\\'))', 'color: #666; font-size: 12px;');
console.log('%cUntuk melihat subscriber newsletter, ketik: JSON.parse(localStorage.getItem(\\'newsletter\\'))', 'color: #666; font-size: 12px;');
