document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // 1. DATA STRUCTURES
  // ==========================================
  const menuData = {
    id: 'root',
    items: [
      { type: 'header', title: 'Login / Register', icon: 'user' },
      { type: 'link', title: 'Promotions', isRed: true },
      {
        type: 'category',
        title: 'Brands',
        id: 'brands',
        children: { title: 'Brands', items: [{ type: 'search-link', title: 'View all Brands' }] }
      },
      {
        type: 'category',
        title: 'Services',
        id: 'services',
        children: { title: 'Services', items: [{ type: 'search-link', title: 'View all Services' }] }
      },
      {
        type: 'category',
        title: 'IT & Gadgets',
        id: 'it-gadgets',
        children: {
          title: 'IT & Gadgets',
          items: [
            { type: 'search-link', title: 'View all IT & Gadgets' },
            {
              type: 'category', title: 'Laptops & Desktops', id: 'laptops', isDarkGray: true,
              children: { title: 'Laptops & Desktops', items: [{ type: 'search-link', title: 'View all Laptops & Desktops' }] }
            },
            {
              type: 'category', title: 'Smartphones & Tablets', id: 'smart-tabs', isDarkGray: true,
              children: {
                title: 'Smartphones & Tablets',
                items: [
                  { type: 'search-link', title: 'View all Smartphones & Tablets' },
                  { type: 'product', title: 'AI Enabled', img: 'https://raw.githubusercontent.com/michaellyf95/project-diamond/refs/heads/main/Img/ai_enabled.webp' },
                  { type: 'product', title: 'Smartphones', img: 'https://raw.githubusercontent.com/michaellyf95/project-diamond/refs/heads/main/Img/smartphones.webp' },
                  { type: 'product', title: 'iPhone', img: 'https://raw.githubusercontent.com/michaellyf95/project-diamond/refs/heads/main/Img/iphone.webp' },
                  { type: 'product', title: 'iPad', img: 'https://raw.githubusercontent.com/michaellyf95/project-diamond/refs/heads/main/Img/ipad.webp' },
                  { type: 'product', title: 'Tablet', img: 'https://raw.githubusercontent.com/michaellyf95/project-diamond/refs/heads/main/Img/tablets.webp' }
                ]
              }
            },
            {
              type: 'category', title: 'Audio & Headphones', id: 'audio', isDarkGray: true,
              children: { title: 'Audio & Headphones', items: [{ type: 'search-link', title: 'View all Audio & Headphones' }] }
            },
            {
              type: 'category', title: 'Monitors', id: 'monitors', isDarkGray: true,
              children: { title: 'Monitors', items: [{ type: 'search-link', title: 'View all Monitors' }] }
            },
            {
              type: 'category', title: 'Gaming', id: 'gaming', isDarkGray: true,
              children: { title: 'Gaming', items: [{ type: 'search-link', title: 'View all Gaming' }] }
            },
            {
              type: 'category', title: 'Smart Wearables', id: 'wearables', isDarkGray: true,
              children: { title: 'Smart Wearables', items: [{ type: 'search-link', title: 'View all Smart Wearables' }] }
            },
            {
              type: 'category', title: 'Storage Devices', id: 'storage', isDarkGray: true,
              children: { title: 'Storage Devices', items: [{ type: 'search-link', title: 'View all Storage Devices' }] }
            },
            {
              type: 'category', title: 'Smart Home', id: 'smart-home', isDarkGray: true,
              children: { title: 'Smart Home', items: [{ type: 'search-link', title: 'View all Smart Home' }] }
            },
            {
              type: 'category', title: 'Cameras & Drones', id: 'cameras', isDarkGray: true,
              children: { title: 'Cameras & Drones', items: [{ type: 'search-link', title: 'View all Cameras & Drones' }] }
            }
          ]
        }
      },
      {
        type: 'category', title: 'Home Appliances', id: 'home-app',
        children: { title: 'Home Appliances', items: [{ type: 'search-link', title: 'View all Home Appliances' }] }
      },
      {
        type: 'category', title: 'Bedding', id: 'bedding',
        children: { title: 'Bedding', items: [{ type: 'search-link', title: 'View all Bedding' }] }
      },
      {
        type: 'category', title: 'Furniture', id: 'furniture',
        children: { title: 'Furniture', items: [{ type: 'search-link', title: 'View all Furniture' }] }
      },
      { type: 'spacer' },

      // Utilities
      { type: 'utility', title: 'Stores Finder', icon: 'map-pin' },
      { type: 'utility', title: 'Wishlist', icon: 'heart' },
      { type: 'utility', title: 'Compare', icon: 'git-compare' },
      { 
        type: 'utility', 
        title: 'Contact Us', 
        id: 'contact-us',
        icon: 'headphones',
        children: {
          title: 'Contact Us',
          items: [
            { type: 'link', title: 'General Enquiries' },
            { type: 'link', title: 'Customer Service' },
            { type: 'link', title: 'Furniture & Bedding Customer Service' },
            { type: 'link', title: 'Locate Us' }
          ]
        }
      }
    ]
  };

  const searchData = {
    promotions: [
      {
        date: '12 Mar - 31 Mar 2026',
        title: 'Microsoft Surface March Promotions',
        img: 'https://s3-ap-southeast-1.amazonaws.com/hnsgsfp/9/images/Surface_Raya_Promotion_2025/Surface-Raya-Promo-Landingpage_Mobile.png'
      },
      {
        date: '19 Mar - 31 Mar 2026',
        title: 'Top Next Gen AI Laptop Picks',
        img: 'https://s3-ap-southeast-1.amazonaws.com/hnsgsfp/9/images/2025/NGAI_Take_Charge_Landingpage_Mobile.png'
      }
    ],
    products: [
      {
        title: 'Microsoft Surface Laptop - Copilot+ PC 13" LCD Touchscreen (Snapdragon X Plus, 16GB/512GB) - Platinum',
        originalPrice: 'RM5,299',
        discountPrice: null,
        img: 'https://raw.githubusercontent.com/michaellyf95/project-diamond/refs/heads/main/Img/surface.webp'
      },
      {
        title: 'Microsoft Surface Laptop - Copilot+ PC 13" LCD Touchscreen (Snapdragon X Plus, 16GB/512GB) - Platinum',
        originalPrice: 'RM5,299',
        discountPrice: 'RM3,299',
        img: 'https://raw.githubusercontent.com/michaellyf95/project-diamond/refs/heads/main/Img/surface.webp'
      }
    ]
  };

  // ==========================================
  // 2. DOM ELEMENTS
  // ==========================================
  const mobileNavbar = document.getElementById('mobileNavbar') || document.querySelector('.mobile-navbar');

  const menuToggleBtn = document.getElementById('menuToggleBtn');
  const iconHamburger = document.querySelector('.icon-hamburger');
  const iconClose = document.querySelector('.icon-close');
  const navOverlay = document.getElementById('navOverlay');
  const navDrawerWrapper = document.getElementById('navDrawerWrapper');
  const navDrawerSlider = document.getElementById('navDrawerSlider');

  const searchInput = document.querySelector('.search-input');
  const searchBackdrop = document.getElementById('searchBackdrop');
  const searchOverlayWrapper = document.getElementById('searchOverlayWrapper');
  const searchOverlayContent = document.getElementById('searchOverlayContent');
  const searchClearBtn = document.getElementById('searchClearBtn');

  let historyStack = [menuData];

  // ==========================================
  // 3. SVG HELPERS
  // ==========================================
  const getSvg = (name) => {
    const svgs = {
      'user': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>',
      'fire': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.8324 21.8013C15.9583 21.1747 20 18.926 20 13.1112C20 7.8196 16.1267 4.29593 13.3415 2.67685C12.7235 2.31757 12 2.79006 12 3.50492V5.3334C12 6.77526 11.3938 9.40711 9.70932 10.5018C8.84932 11.0607 7.92052 10.2242 7.816 9.20388L7.73017 8.36604C7.6304 7.39203 6.63841 6.80075 5.85996 7.3946C4.46147 8.46144 3 10.3296 3 13.1112C3 20.2223 8.28889 22.0001 10.9333 22.0001C11.0871 22.0001 11.2488 21.9955 11.4171 21.9858C10.1113 21.8742 8 21.064 8 18.4442C8 16.3949 9.49507 15.0085 10.631 14.3346C10.9365 14.1533 11.2941 14.3887 11.2941 14.7439V15.3331C11.2941 15.784 11.4685 16.4889 11.8836 16.9714C12.3534 17.5174 13.0429 16.9454 13.0985 16.2273C13.1161 16.0008 13.3439 15.8564 13.5401 15.9711C14.1814 16.3459 15 17.1465 15 18.4442C15 20.4922 13.871 21.4343 12.8324 21.8013Z" fill="#f50000"></path> </g></svg>',
      'chevron-right': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>',
      'chevron-left': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>',
      'search': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
      'map-pin': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
      'heart': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>',
      'git-compare': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line></svg>',
      'headphones': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>'
    };
    return svgs[name] || '';
  };

  // ==========================================
  // 4. RENDERING ENGINE (MENU)
  // ==========================================
  const renderPanel = (dataObj, isRoot = false) => {
    const panel = document.createElement('div');
    panel.className = 'nav-panel';

    let html = '';

    if (isRoot) {
      html += `<div class="nav-header login-header">${getSvg('user')} <span>Login / Register</span> ${getSvg('chevron-right')}</div>`;
    } else {
      html += `
                <div class="nav-header back-header" onclick="goBack()">
                    <div class="back-left">${getSvg('chevron-left')} Back</div>
                    <div class="back-title">${dataObj.title}</div>
                </div>
            `;
    }

    html += `<ul class="nav-list">`;

    dataObj.items.forEach(item => {
      if (item.type === 'spacer') {
        html += `</ul><ul class="nav-list utility-links">`;
        return;
      }

      html += `<li>`;

      // Check if this item should have dark gray text
      const textStyle = item.isDarkGray ? 'style="color: #4a4a4a;"' : '';
      const redClass = item.isRed ? 'red-text' : '';

      if (item.type === 'category' && item.children) {
        html += `<button onclick="drillDown('${item.id}')" class="${redClass}">
                            <span ${textStyle}>${item.title}</span> <span class="icon-right">${getSvg('chevron-right')}</span>
                         </button>`;
      } else if (item.type === 'category' || item.type === 'link') {
        html += `<a href="#" class="${redClass}">
                            <span ${textStyle}>${item.title}</span><span class="fire-right">${getSvg('fire')}</span>
                         </a>`;
      } else if (item.type === 'search-link') {
        html += `<a href="#"><span>${item.title}</span> <span class="search-right">${getSvg('search')}</span></a>`;
      } else if (item.type === 'product') {
        html += `<a href="#" class="product-link">
                            <img src="${item.img}" alt="${item.title}"> <span>${item.title}</span>
                         </a>`;
      } else if (item.type === 'utility') {
        // NEW: Check if utility has children to render as a drilldown button
        if (item.children) {
          html += `<button onclick="drillDown('${item.id}')" style="justify-content: flex-start; gap: 16px; color: #004378; font-weight: bold;">
                      ${getSvg(item.icon)} <span>${item.title}</span> <span class="icon-right" style="margin-left:auto">${getSvg('chevron-right')}</span>
                   </button>`;
        } else {
          html += `<a href="#">${getSvg(item.icon)} <span>${item.title}</span></a>`;
        }
      }

      html += `</li>`;
    });

    html += `</ul>`;
    panel.innerHTML = html;
    return panel;
  };

  const updateSliderUI = () => {
    navDrawerSlider.innerHTML = '';

    historyStack.forEach((dataNode, index) => {
      const panel = renderPanel(dataNode, index === 0);
      navDrawerSlider.appendChild(panel);
    });

    const offset = (historyStack.length - 1) * 100;
    navDrawerSlider.style.transform = `translateX(-${offset}%)`;
  };

  // ==========================================
  // 5. RENDERING ENGINE (SEARCH)
  // ==========================================
  const renderSearchResults = () => {
    let html = '';

    if (searchData.promotions.length > 0) {
      html += `<h3 class="search-section-title">Promotions</h3><ul class="result-list">`;
      searchData.promotions.forEach(promo => {
        html += `
                    <li class="promo-item">
                        <a href="#">
                            <img src="${promo.img}" alt="${promo.title}">
                            <div class="promo-info">
                                <div class="promo-date">${promo.date}</div>
                                <div class="promo-title">${promo.title}</div>
                            </div>
                        </a>
                    </li>`;
      });
      html += `</ul>`;
    }

    if (searchData.products.length > 0) {
      html += `<h3 class="search-section-title">Products</h3><ul class="result-list">`;
      searchData.products.forEach(product => {
        let priceHtml = product.discountPrice
          ? `<span class="price-old">${product.originalPrice}</span><span class="price-new">${product.discountPrice}</span>`
          : `<span class="price-old" style="text-decoration:none;">${product.originalPrice}</span>`;

        html += `
                    <li class="product-item">
                        <a href="#">
                            <img src="${product.img}" alt="Product">
                            <div class="product-info">
                                <div class="product-title">${product.title}</div>
                                <div class="product-price-row">${priceHtml}</div>
                            </div>
                        </a>
                    </li>`;
      });
      html += `</ul>`;
    }

    html += `<button class="btn-more-results">More Results</button>`;
    searchOverlayContent.innerHTML = html;
  };

  // ==========================================
  // 6. LAYOUT & POSITIONING SYNC
  // ==========================================
  const syncLayoutPositions = () => {
    if (!mobileNavbar) return;

    const headerHeight = mobileNavbar.offsetHeight;
    const viewportHeight = window.innerHeight;
    const availableHeight = `${viewportHeight - headerHeight}px`;

    navDrawerWrapper.style.top = `${headerHeight}px`;
    navDrawerWrapper.style.height = availableHeight;
    navOverlay.style.top = `${headerHeight}px`;
    navOverlay.style.height = availableHeight;

    searchOverlayWrapper.style.top = `${headerHeight}px`;
    searchOverlayWrapper.style.height = availableHeight;
    searchBackdrop.style.top = `${headerHeight}px`;
    searchBackdrop.style.height = availableHeight;
  };

  // ==========================================
  // 7. INTERACTION LOGIC
  // ==========================================

  window.drillDown = (categoryId) => {
    const findNode = (nodes, id) => {
      for (let node of nodes) {
        if (node.id === id && node.children) return node.children;
        if (node.children && node.children.items) {
          const result = findNode(node.children.items, id);
          if (result) return result;
        }
      }
      return null;
    };

    const targetData = findNode(menuData.items, categoryId);
    if (targetData) {
      historyStack.push(targetData);
      updateSliderUI();
    }
  };

  window.goBack = () => {
    if (historyStack.length > 1) {
      historyStack.pop();
      updateSliderUI();
    }
  };

  const toggleMenu = () => {
    const isActive = navDrawerWrapper.classList.contains('is-active');

    if (searchOverlayWrapper.classList.contains('is-active')) {
      closeSearch();
    }

    if (isActive) {
      navDrawerWrapper.classList.remove('is-active');
      navOverlay.classList.remove('is-active');
      menuToggleBtn.classList.remove('is-active');
      document.body.style.overflow = '';

      setTimeout(() => {
        historyStack = [menuData];
        updateSliderUI();
      }, 300);
    } else {
      syncLayoutPositions();
      navDrawerWrapper.classList.add('is-active');
      navOverlay.classList.add('is-active');
      menuToggleBtn.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    }
  };

  const openSearch = () => {
    if (navDrawerWrapper.classList.contains('is-active')) {
      navDrawerWrapper.classList.remove('is-active');
      navOverlay.classList.remove('is-active');
      menuToggleBtn.classList.remove('is-active');
    }

    document.body.style.overflow = 'hidden';
    syncLayoutPositions();
    renderSearchResults();
    searchOverlayWrapper.classList.add('is-active');
    searchBackdrop.classList.add('is-active');
    searchClearBtn.classList.add('is-active');
  };

  const closeSearch = () => {
    searchOverlayWrapper.classList.remove('is-active');
    searchBackdrop.classList.remove('is-active');
    document.body.style.overflow = '';
    searchInput.blur();
    searchClearBtn.classList.remove('is-active');
  };

  // ==========================================
  // 8. EVENT LISTENERS & INIT
  // ==========================================
  menuToggleBtn.addEventListener('click', toggleMenu);
  navOverlay.addEventListener('click', toggleMenu);
  searchInput.addEventListener('focus', openSearch);
  searchBackdrop.addEventListener('click', closeSearch);

  searchClearBtn.addEventListener('click', () => {
    searchInput.value = '';
    closeSearch();
  });

  window.addEventListener('resize', syncLayoutPositions);

  updateSliderUI();

  // ==========================================
  // 9. TYPEWRITER PLACEHOLDER ANIMATION
  // ==========================================
  const initTypewriterPlaceholder = () => {
    if (!searchInput) return;

    const text = "What are you looking for?";
    const typingSpeed = 100;
    const repeatInterval = 5000;

    const type = () => {
      if (searchInput.value.length > 0) return;

      let i = 0;
      searchInput.setAttribute('placeholder', '');

      const interval = setInterval(() => {
        if (document.activeElement === searchInput || searchInput.value.length > 0) {
          clearInterval(interval);
          searchInput.setAttribute('placeholder', text);
          return;
        }

        searchInput.setAttribute('placeholder', searchInput.getAttribute('placeholder') + text.charAt(i));
        i++;

        if (i >= text.length) {
          clearInterval(interval);
        }
      }, typingSpeed);
    };

    type();
    setInterval(type, repeatInterval);
  };

  initTypewriterPlaceholder();
});

// Accordion Logic
document.addEventListener('DOMContentLoaded', () => {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const currentItem = header.parentElement;
      const isActive = currentItem.classList.contains('is-active');

      document.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('is-active');
      });

      if (!isActive) {
        currentItem.classList.add('is-active');
      }
    });
  });
});