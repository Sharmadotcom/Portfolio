/* ==========================================================================
   NETFLIX-STYLE PORTFOLIO SPA LOGIC - BY SARVESH SHARMA
   ========================================================================== */

(function () {
  'use strict';

  // Card Database for Dashboard Rows
  const cardDataDb = {
    skills: {
      title: 'Technical Skills',
      category: 'Expertise',
      desc: 'Programming languages, cybersecurity, cloud and databases.',
      hash: '#/skills',
      gif: 'https://i.giphy.com/d3YHWXviXzEvBk6Q.gif',
      gradient: 'linear-gradient(135deg, #1e1b4b 0%, #1e293b 100%)'
    },
    projects: {
      title: 'Projects Grid',
      category: 'Portfolio',
      desc: 'Browse PhishGuard, Passify, and hackathon repository lists.',
      hash: '#/projects',
      gif: 'https://i.giphy.com/zFBj4UsdDKX1uEO05l.gif',
      gradient: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)'
    },
    experience: {
      title: 'Professional History',
      category: 'Timeline',
      desc: 'ET-AI Hackathon semi-finalist & Forage virtual internships.',
      hash: '#/experience',
      gif: 'https://i.giphy.com/QMHoU66sBXqqLqYvGO.gif',
      gradient: 'linear-gradient(135deg, #311013 0%, #1e1b4b 100%)'
    },
    certifications: {
      title: 'Verified Certs',
      category: 'Credentials',
      desc: 'Google Foundations, Networking, and NPTEL achievements.',
      hash: '#/certifications',
      gif: 'https://i.giphy.com/3o72FcJmLzIdYJdmDe.gif',
      gradient: 'linear-gradient(135deg, #1e1b4b 0%, #311013 100%)'
    },
    academic: {
      title: 'Academic Record',
      category: 'VIT Bhopal',
      desc: 'Explore current 8.31 CGPA, classes, and secondary education.',
      hash: '#/academic',
      gif: 'https://i.giphy.com/leTqnzitgo5Unzm5Wd.gif',
      gradient: 'linear-gradient(135deg, #111827 0%, #064e3b 100%)'
    },
    music: {
      title: 'Coding Playlists',
      category: 'Hobbies',
      desc: 'Lo-fi coding loops, dark ambient, and synthwave vibes.',
      hash: '#/music',
      gif: 'https://i.giphy.com/gUrEXjBtEJruo.gif',
      gradient: 'linear-gradient(135deg, #111827 0%, #1e1b4b 100%)'
    },
    reading: {
      title: 'Reading Shelf',
      category: 'Hobbies',
      desc: 'Kevin Mitnick memoirs, habit-building, and spy stories.',
      hash: '#/reading',
      gif: 'https://i.giphy.com/11BDDJSlJZ2uha.gif',
      gradient: 'linear-gradient(135deg, #311013 0%, #022c22 100%)'
    },
    blogs: {
      title: 'Blogs I Suggest',
      category: 'Blogs',
      desc: 'Curated cybersecurity insights, threat intelligence, and security guides.',
      hash: '#/blogs',
      gif: 'https://i.giphy.com/13HgwGsXF0aiGY.gif',
      gradient: 'linear-gradient(135deg, #090d16 0%, #311013 100%)'
    },
    focus: {
      title: 'Current Focus',
      category: 'In Progress',
      desc: 'Microsoft SC-100 certification study and the Passify secure vault project.',
      hash: '#/focus',
      gif: 'https://i.giphy.com/nA7xqFVD1w5A7s69D9.gif',
      gradient: 'linear-gradient(135deg, #111827 0%, #1e1b4b 100%)'
    },
    contact: {
      title: 'Contact Channels',
      category: 'Connect',
      desc: 'Email, LinkedIn profile, GitHub, and phone contact.',
      hash: '#/contact',
      gif: 'https://i.giphy.com/3o7qE1YN7aBOFPRw8E.gif',
      gradient: 'linear-gradient(135deg, #022c22 0%, #0f172a 100%)'
    }
  };

  // Avatars mapping
  const avatars = {
    recruiter: 'assets/avatars/recruiter.png?v=3',
    developer: 'assets/avatars/developer.png?v=3',
    stalker: 'assets/avatars/stalker.png?v=3',
    adventurer: 'assets/avatars/adventurer.png?v=3'
  };

  // Billboard details database
  const billboardData = {
    recruiter: {
      title: 'SARVESH SHARMA (RECRUITER)',
      metaRating: 'VIT Bhopal',
      metaMatch: '99% Match',
      metaYear: '2026',
      desc: 'Featured cybersecurity professional with verified credentials, solid academic standings, and simulation achievements. Perfect match for analyst and junior software positions.',
      playText: 'Technical Skills',
      playHash: '#/skills',
      infoText: 'Contact Me',
      infoHash: '#/contact'
    },
    developer: {
      title: 'SARVESH SHARMA (DEVELOPER)',
      metaRating: 'VIT Bhopal',
      metaMatch: '98% Match',
      metaYear: '2026',
      desc: 'Backend builder constructing AI text classifiers, AES cryptography managers, and security automation scripts. Specializing in Python, Flask, SQL databases, and Git version controls.',
      playText: 'Projects Grid',
      playHash: '#/projects',
      infoText: 'Blogs I Suggest',
      infoHash: '#/blogs'
    },
    stalker: {
      title: 'SARVESH SHARMA (TARGET)',
      metaRating: 'Private',
      metaMatch: '100% Match',
      metaYear: '2026',
      desc: 'Target profile located. Academic stats: 8.31 CGPA, VIT Bhopal undergraduate. Physical location coordinates: Jamshedpur, India. Direct channels of communication available below.',
      playText: 'Academic Records',
      playHash: '#/academic',
      infoText: 'Contact Channels',
      infoHash: '#/contact'
    },
    adventurer: {
      title: 'SARVESH SHARMA (ADVENTURER)',
      metaRating: 'National',
      metaMatch: '95% Match',
      metaYear: '2026',
      desc: 'Semi-finalist in national-level AI hackathons, participant in Adobe software challenges. Ready to explore the limits of backend infrastructure and security operations.',
      playText: 'Experience Timeline',
      playHash: '#/experience',
      infoText: 'Contact Channels',
      infoHash: '#/contact'
    }
  };

  // Cache views
  const navbarWrapper = document.getElementById('navbarWrapper');
  const footer = document.getElementById('footer');
  const currentNavAvatar = document.getElementById('currentNavAvatar');
  const profileDropdown = document.getElementById('profileDropdown');

  const billboardTitle = document.getElementById('billboardTitle');
  const billboardDesc = document.getElementById('billboardDesc');
  const billboardPlayBtn = document.getElementById('billboardCtaPlay');
  const billboardInfoBtn = document.getElementById('billboardCtaInfo');
  
  const billboardMetaRating = document.querySelector('#homeBillboard .billboard-rating');
  const billboardMetaMatch = document.querySelector('#homeBillboard .billboard-match');

  // ========== ROUTING SYSTEM ==========
  function handleRoute() {
    const hash = window.location.hash || '#/browse';
    
    // Split hash routing
    const parts = hash.split('/');
    const mainRoute = parts[1] || 'browse';
    const subRoute = parts[2] || '';

    // Hide all views first
    document.querySelectorAll('.route-view').forEach(view => {
      view.classList.remove('active');
    });

    // Check if route is browse screen
    if (mainRoute === 'browse') {
      navbarWrapper.style.display = 'none';
      footer.style.display = 'none';
      document.body.classList.add('profile-active');
      
      const browseView = document.getElementById('view-browse');
      if (browseView) browseView.classList.add('active');
      return;
    }

    // Otherwise, show header & footer
    navbarWrapper.style.display = 'flex';
    footer.style.display = 'block';
    document.body.classList.remove('profile-active');

    // Retrieve active persona
    let activePersona = sessionStorage.getItem('activeProfile');
    
    // Check path for profile details (e.g. #/profile/developer)
    if (mainRoute === 'profile' && subRoute) {
      activePersona = subRoute;
      sessionStorage.setItem('activeProfile', subRoute);
    }

    // Redirect to browse if no profile is set
    if (!activePersona) {
      window.location.hash = '#/browse';
      return;
    }

    // Set navbar avatar
    if (currentNavAvatar && avatars[activePersona]) {
      currentNavAvatar.src = avatars[activePersona];
    }

    // Highlight navbar menu item
    updateNavbarHighlight(mainRoute);

    // Load active page view
    const targetView = document.getElementById(`view-${mainRoute}`);
    if (targetView) {
      targetView.classList.add('active');
    } else {
      // Default fallback
      const profileView = document.getElementById('view-profile');
      if (profileView) profileView.classList.add('active');
    }

    // Special logic when loading view components
    if (mainRoute === 'profile') {
      applyPersonaDashboard(activePersona);
    } else if (mainRoute === 'skills') {
      animateSkillBars();
    }

    // Scroll back to top
    window.scrollTo(0, 0);
  }

  // ========== PERSONA CONFIGURATION ==========
  function applyPersonaDashboard(persona) {
    const data = billboardData[persona] || billboardData.recruiter;

    // Update Billboard UI
    if (billboardTitle) billboardTitle.textContent = data.title;
    if (billboardDesc) billboardDesc.textContent = data.desc;
    if (billboardMetaRating) billboardMetaRating.textContent = data.metaRating;
    if (billboardMetaMatch) billboardMetaMatch.textContent = data.metaMatch;

    if (billboardPlayBtn) {
      billboardPlayBtn.setAttribute('href', data.playHash);
      billboardPlayBtn.querySelector('span').textContent = data.playText;
    }
    if (billboardInfoBtn) {
      billboardInfoBtn.setAttribute('href', data.infoHash);
      billboardInfoBtn.querySelector('span').textContent = data.infoText;
    }

    // Update Billboard visual background to a funny gif
    const billboardVisualBg = document.querySelector('.billboard-visual-bg');
    const billboardGifs = {
      recruiter: 'https://i.giphy.com/3otWpqBmhRY3K591oA.gif', // Dwight Office dance
      developer: 'https://i.giphy.com/zFBj4UsdDKX1uEO05l.gif', // Matrix typing hacker
      stalker: 'https://i.giphy.com/5htHKiASh8oYtpU1mb.gif', // FBI door breach
      adventurer: 'https://i.giphy.com/QMHoU66sBXqqLqYvGO.gif' // This is fine dog
    };
    if (billboardVisualBg && billboardGifs[persona]) {
      billboardVisualBg.style.backgroundImage = `url('${billboardGifs[persona]}')`;
    }

    // Build dynamic rows
    buildDashboardRows(persona);
  }

  // ========== BUILD CAROUSEL ROWS DYNAMICALLY ==========
  function buildDashboardRows(persona) {
    const container = document.getElementById('dashboardRows');
    if (!container) return;
    container.innerHTML = ''; // Clear prior contents

    const rows = [];
    if (persona === 'recruiter') {
      rows.push({
        title: "Today's Top Picks for Recruiter",
        cards: ['academic', 'skills', 'focus', 'experience', 'certifications', 'projects', 'contact']
      });
      rows.push({
        title: "Continue Watching",
        cards: ['blogs', 'music', 'reading']
      });
    } else if (persona === 'developer') {
      rows.push({
        title: "Today's Top Picks for Developer",
        cards: ['skills', 'focus', 'projects', 'blogs', 'certifications', 'experience', 'contact']
      });
      rows.push({
        title: "Continue Watching",
        cards: ['academic', 'music', 'reading']
      });
    } else if (persona === 'stalker') {
      rows.push({
        title: "Today's Top Picks for Stalker",
        cards: ['academic', 'focus', 'contact', 'blogs', 'music', 'reading']
      });
      rows.push({
        title: "Continue Watching",
        cards: ['projects', 'skills', 'experience', 'certifications']
      });
    } else {
      // adventurer
      rows.push({
        title: "Today's Top Picks for Adventurer",
        cards: ['experience', 'projects', 'focus', 'certifications', 'academic', 'skills', 'contact']
      });
      rows.push({
        title: "Continue Watching",
        cards: ['blogs', 'music', 'reading']
      });
    }

    rows.forEach(rowData => {
      const rowEl = document.createElement('section');
      rowEl.className = 'row-section';
      
      const titleEl = document.createElement('h2');
      titleEl.className = 'row-title';
      titleEl.textContent = rowData.title;
      rowEl.appendChild(titleEl);
      
      const wrapperEl = document.createElement('div');
      wrapperEl.className = 'row-wrapper';
      
      // Left Arrow
      const leftArrow = document.createElement('button');
      leftArrow.className = 'row-arrow left';
      leftArrow.setAttribute('aria-label', 'Scroll left');
      leftArrow.innerHTML = `<svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>`;
      wrapperEl.appendChild(leftArrow);
      
      // Cards container
      const cardsEl = document.createElement('div');
      cardsEl.className = 'row-cards';
      
      rowData.cards.forEach(cardKey => {
        const cardData = cardDataDb[cardKey];
        if (!cardData) return;
        
        const cardItem = document.createElement('a');
        cardItem.href = cardData.hash;
        cardItem.className = 'card-item';
        
        cardItem.innerHTML = `
          <div class="card-image-container">
            <div class="card-visual-placeholder" style="background: ${cardData.gradient}; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; overflow: hidden; user-select: none;">
              <img src="${cardData.gif}" alt="${cardData.title}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="card-details-overlay">
              <span class="card-category">${cardData.category}</span>
              <h3 class="card-title">${cardData.title}</h3>
              <p style="font-size: 0.72rem; color: var(--nf-light-gray); line-height: 1.3;">${cardData.desc}</p>
            </div>
          </div>
        `;
        cardsEl.appendChild(cardItem);
      });
      
      wrapperEl.appendChild(cardsEl);
      
      // Right Arrow
      const rightArrow = document.createElement('button');
      rightArrow.className = 'row-arrow right';
      rightArrow.setAttribute('aria-label', 'Scroll right');
      rightArrow.innerHTML = `<svg viewBox="0 0 24 24"><path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/></svg>`;
      wrapperEl.appendChild(rightArrow);
      
      rowEl.appendChild(wrapperEl);
      container.appendChild(rowEl);
      
      // Arrow scroll behaviors
      leftArrow.addEventListener('click', () => {
        const itemWidth = cardsEl.querySelector('.card-item').clientWidth;
        cardsEl.scrollBy({ left: -itemWidth * 3, behavior: 'smooth' });
      });
      
      rightArrow.addEventListener('click', () => {
        const itemWidth = cardsEl.querySelector('.card-item').clientWidth;
        cardsEl.scrollBy({ left: itemWidth * 3, behavior: 'smooth' });
      });

      // Show/hide arrows dynamically based on scroll position (Netflix style)
      function updateArrowVisibility() {
        const scrollLeft = cardsEl.scrollLeft;
        const maxScroll = cardsEl.scrollWidth - cardsEl.clientWidth;
        
        if (scrollLeft <= 5) {
          leftArrow.style.display = 'none';
        } else {
          leftArrow.style.display = 'flex';
        }
        
        if (scrollLeft >= maxScroll - 5) {
          rightArrow.style.display = 'none';
        } else {
          rightArrow.style.display = 'flex';
        }
      }

      cardsEl.addEventListener('scroll', updateArrowVisibility, { passive: true });
      // Run once layout settles
      setTimeout(updateArrowVisibility, 150);
    });
  }

  // ========== NAVBAR HIGHLIGHT UTILITY ==========
  function updateNavbarHighlight(route) {
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
    });

    // Check specific routing matches
    let matchedId = `navLink-${route}`;
    if (route === 'profile') {
      matchedId = 'navLink-home';
    }
    
    const activeLink = document.getElementById(matchedId);
    if (activeLink) activeLink.classList.add('active');
  }

  // ========== SKILL BARS ANIMATION ==========
  function animateSkillBars() {
    const fills = document.querySelectorAll('.skill-fill');
    fills.forEach(fill => {
      fill.style.width = '0';
      const percent = fill.getAttribute('data-percent');
      
      // Force repaint
      setTimeout(() => {
        fill.style.width = percent;
      }, 50);
    });
  }

  // ========== NAVBAR COLLAPSIBLE TOGGLE ==========
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('open');
      navMenu.classList.toggle('open');
    });

    // Close mobile nav when clicking a link
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navMenu.classList.remove('open');
      });
    });
  }

  // ========== NAVBAR SCROLLED STATUS ==========
  function checkNavbarScrolled() {
    const nav = document.getElementById('navbar');
    if (nav) {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }
  }
  window.addEventListener('scroll', checkNavbarScrolled, { passive: true });

  // ========== SHARED CERTIFICATE MODAL VIEW ==========
  const certCards = document.querySelectorAll('.cert-card-grid');
  const certModal = document.getElementById('certModal');
  const certModalImg = document.getElementById('certModalImg');
  const certModalClose = document.getElementById('certModalClose');

  certCards.forEach(card => {
    card.addEventListener('click', function () {
      const type = this.getAttribute('data-type');
      
      if (type === 'link') {
        const url = this.getAttribute('data-url');
        if (url) {
          window.open(url, '_blank', 'noopener,noreferrer');
        }
      } else if (type === 'modal') {
        const imgSrc = this.getAttribute('data-src');
        const title = this.getAttribute('data-title') || 'Certificate';
        
        if (imgSrc && certModal && certModalImg) {
          certModalImg.src = imgSrc;
          certModalImg.alt = title;
          certModal.classList.add('active');
          document.body.style.overflow = 'hidden'; // Lock scrolling
        }
      }
    });
  });

  function closeCertModal() {
    if (certModal) {
      certModal.classList.remove('active');
      document.body.style.overflow = ''; // Release scroll
    }
  }

  if (certModalClose) certModalClose.addEventListener('click', closeCertModal);
  if (certModal) {
    certModal.addEventListener('click', function (e) {
      if (e.target === certModal) closeCertModal();
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeCertModal();
  });

  // ========== ROUTER BINDINGS ==========
  window.addEventListener('hashchange', () => {
    handleRoute();
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    handleRoute();
    checkNavbarScrolled();

    // Handle avatar click to clear session and return to Who's Watching
    const profileNavBtn = document.getElementById('profileNavBtn');
    if (profileNavBtn) {
      profileNavBtn.addEventListener('click', (e) => {
        e.preventDefault();
        sessionStorage.removeItem('activeProfile');
        window.location.hash = '#/browse';
      });
    }
  });

})();
