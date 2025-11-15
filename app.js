// ---------- MOCK PODACI O FILMOVIMA ----------

const movies = [
    {
        id: "neon-skies",
        title: "Neon Skies",
        year: 2024,
        rating: "16+",
        duration: "2h 1m",
        categories: ["trending", "popular", "scifi"],
        type: "movie",
        tagline: "MyFlix Original",
        description:
            "In a city of endless neon, a rogue pilot discovers a secret that can rewrite reality itself.",
        thumb:
            "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=400",
        backdrop:
            "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=1200",
        isNew: true,
    },
    {
        id: "silent-tide",
        title: "Silent Tide",
        year: 2023,
        rating: "13+",
        duration: "1h 48m",
        categories: ["trending", "crime"],
        type: "movie",
        tagline: "",
        description:
            "A detective returns to her coastal hometown to solve a series of mysterious disappearances tied to her own past.",
        thumb:
            "https://images.pexels.com/photos/5255180/pexels-photo-5255180.jpeg?auto=compress&cs=tinysrgb&w=400",
        backdrop:
            "https://images.pexels.com/photos/5255180/pexels-photo-5255180.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
        id: "orbit-9",
        title: "Orbit-9",
        year: 2022,
        rating: "13+",
        duration: "2h 5m",
        categories: ["scifi", "popular"],
        type: "movie",
        tagline: "Beyond the edge of the known universe.",
        description:
            "A small crew aboard a research vessel discovers an anomaly that bends both time and memory.",
        thumb:
            "https://images.pexels.com/photos/2387874/pexels-photo-2387874.jpeg?auto=compress&cs=tinysrgb&w=400",
        backdrop:
            "https://images.pexels.com/photos/2387874/pexels-photo-2387874.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
        id: "shadow-code",
        title: "Shadow Code",
        year: 2024,
        rating: "18+",
        duration: "1h 57m",
        categories: ["crime", "trending"],
        type: "movie",
        tagline: "",
        description:
            "A gifted hacker is pulled into an underground war between syndicates fighting for control of the world’s data.",
        thumb:
            "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=400",
        backdrop:
            "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
        id: "nightfall-avenue",
        title: "Nightfall Avenue",
        year: 2021,
        rating: "16+",
        duration: "2h 9m",
        categories: ["crime", "popular"],
        type: "series",
        tagline: "Every streetlight hides a secret.",
        description:
            "On the city’s most dangerous street, a disgraced cop and a journalist form an uneasy alliance.",
        thumb:
            "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=400",
        backdrop:
            "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
        id: "starlight-echoes",
        title: "Starlight Echoes",
        year: 2020,
        rating: "13+",
        duration: "1h 39m",
        categories: ["scifi"],
        type: "movie",
        tagline: "",
        description:
            "Two astronauts stranded on the far side of a dying star receive a transmission from their future selves.",
        thumb:
            "https://images.pexels.com/photos/2150/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=400",
        backdrop:
            "https://images.pexels.com/photos/2150/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
        id: "urban-heartbeat",
        title: "Urban Heartbeat",
        year: 2019,
        rating: "13+",
        duration: "1h 52m",
        categories: ["trending", "popular"],
        type: "series",
        tagline: "",
        description:
            "Four young artists navigate love, ambition and loyalty in a city that never sleeps.",
        thumb:
            "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=400",
        backdrop:
            "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
        id: "cold-frontier",
        title: "Cold Frontier",
        year: 2021,
        rating: "16+",
        duration: "1h 59m",
        categories: ["crime"],
        type: "movie",
        tagline: "",
        description:
            "On a frozen border outpost, a smuggling operation unravels into a deadly standoff.",
        thumb:
            "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=400",
        backdrop:
            "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
];

// ---------- POMOĆNE FUNKCIJE ZA LOCALSTORAGE (MY LIST / USER) ----------

const STORAGE_KEYS = {
    MY_LIST: "myflix_mylist",
    USER_EMAIL: "myflix_user_email",
};

function loadMyList() {
    try {
        const raw = localStorage.getItem(STORAGE_KEYS.MY_LIST);
        return raw ? JSON.parse(raw) : [];
    } catch {
        return [];
    }
}

function saveMyList(list) {
    localStorage.setItem(STORAGE_KEYS.MY_LIST, JSON.stringify(list));
}

function loadUserEmail() {
    return localStorage.getItem(STORAGE_KEYS.USER_EMAIL) || null;
}

function saveUserEmail(email) {
    if (email) localStorage.setItem(STORAGE_KEYS.USER_EMAIL, email);
}

function clearUserEmail() {
    localStorage.removeItem(STORAGE_KEYS.USER_EMAIL);
}

// ---------- ELEMENTI DOM-a ----------

const headerEl = document.getElementById("header");

// nav
const navToggle = document.getElementById("navToggle");
const navMobile = document.getElementById("navMobile");
const navMenu = document.getElementById("navMenu");
const navProfile = document.getElementById("navProfile");
const profileDropdown = document.getElementById("profileDropdown");
const profileEmail = document.getElementById("profileEmail");
const signoutBtn = document.getElementById("signoutBtn");

// search
const searchInput = document.getElementById("searchInput");
const searchInputMobile = document.getElementById("searchInputMobile");

// hero
const heroTitle = document.getElementById("heroTitle");
const heroTagline = document.getElementById("heroTagline");
const heroYear = document.getElementById("heroYear");
const heroRating = document.getElementById("heroRating");
const heroDuration = document.getElementById("heroDuration");
const heroDescription = document.getElementById("heroDescription");
const heroPlayBtn = document.getElementById("heroPlayBtn");
const heroMoreInfoBtn = document.getElementById("heroMoreInfoBtn");

// rows
const rowWrappers = document.querySelectorAll(".row-wrapper");

// faq
const faqItems = document.querySelectorAll(".faq-item");

// modals & overlay
const overlay = document.getElementById("overlay");
const signinModal = document.getElementById("signinModal");
const movieModal = document.getElementById("movieModal");

const openSigninBtn = document.getElementById("openSignin");
const openSigninMobileBtn = document.getElementById("openSigninMobile");
const signinForm = document.getElementById("signinForm");
const signinEmailInput = document.getElementById("signinEmail");
const signinPasswordInput = document.getElementById("signinPassword");

// movie modal elements
const movieTitleEl = document.getElementById("movieTitle");
const movieYearEl = document.getElementById("movieYear");
const movieRatingEl = document.getElementById("movieRating");
const movieDurationEl = document.getElementById("movieDuration");
const movieGenresEl = document.getElementById("movieGenres");
const movieDescriptionEl = document.getElementById("movieDescription");
const moviePlayBtn = document.getElementById("moviePlayBtn");
const movieMyListBtn = document.getElementById("movieMyListBtn");
const movieBackdropInner = document.querySelector(".movie-backdrop-inner");

// ---------- STATE ----------

let myList = loadMyList();
let currentUserEmail = loadUserEmail();
let currentMovieId = null;

// ---------- HERO INICIJALIZACIJA ----------

function initHero() {
    // Uzet ćemo prvi film kao featured
    const featured = movies[0];
    if (!featured) return;

    headerEl.style.backgroundImage = `url("${featured.backdrop}")`;
    heroTitle.textContent = featured.title;
    heroTagline.textContent = featured.tagline || "MyFlix Original";
    heroYear.textContent = featured.year;
    heroRating.textContent = featured.rating;
    heroDuration.textContent = featured.duration;
    heroDescription.textContent = featured.description;

    heroPlayBtn.onclick = () => {
        openMovieModal(featured.id);
    };
    heroMoreInfoBtn.onclick = () => {
        openMovieModal(featured.id);
    };
}

// ---------- RENDER ROWS ----------

function createRow(rowId, rowTitle, moviesForRow) {
    if (!moviesForRow || moviesForRow.length === 0) return null;

    const block = document.createElement("div");
    block.className = "row-block";

    const title = document.createElement("h2");
    title.className = "row-title";
    title.textContent = rowTitle;
    block.appendChild(title);

    const row = document.createElement("div");
    row.className = "row";

    const btnPrev = document.createElement("button");
    btnPrev.className = "row-btn row-prev";
    btnPrev.innerHTML = `<i class="fa-solid fa-chevron-left"></i>`;

    const btnNext = document.createElement("button");
    btnNext.className = "row-btn row-next";
    btnNext.innerHTML = `<i class="fa-solid fa-chevron-right"></i>`;

    const inner = document.createElement("div");
    inner.className = "row-inner";

    moviesForRow.forEach((m) => {
        const card = document.createElement("div");
        card.className = "card";
        card.dataset.movieId = m.id;
        card.dataset.title = m.title.toLowerCase(); // za search

        const img = document.createElement("img");
        img.src = m.thumb;
        img.alt = m.title;

        const badge = document.createElement("div");
        badge.className = "card-badge";
        badge.textContent = m.type === "series" ? "Series" : "Film";

        card.appendChild(img);
        card.appendChild(badge);

        // indikator ako je u My List
        if (myList.includes(m.id)) {
            const indicator = document.createElement("div");
            indicator.className = "card-mylist-indicator";
            indicator.innerHTML = `<i class="fa-solid fa-bookmark"></i>`;
            card.appendChild(indicator);
        }

        card.addEventListener("click", () => openMovieModal(m.id));
        inner.appendChild(card);
    });

    row.appendChild(btnPrev);
    row.appendChild(inner);
    row.appendChild(btnNext);
    block.appendChild(row);

    // Scroll logika
    const scrollAmount = 300;
    btnPrev.addEventListener("click", (e) => {
        e.stopPropagation();
        inner.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });
    btnNext.addEventListener("click", (e) => {
        e.stopPropagation();
        inner.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });

    return block;
}

function renderRows() {
    rowWrappers.forEach((wrapper) => {
        wrapper.innerHTML = "";
        const rowId = wrapper.dataset.rowId;
        const rowTitle = wrapper.dataset.rowTitle;
        const isMyListRow = wrapper.hasAttribute("data-mylist-row");

        let rowMovies;
        if (isMyListRow) {
            rowMovies = movies.filter((m) => myList.includes(m.id));
        } else {
            rowMovies = movies.filter((m) => m.categories.includes(rowId));
        }

        const rowBlock = createRow(rowId, rowTitle, rowMovies);
        if (rowBlock) wrapper.appendChild(rowBlock);
    });
}

// ---------- MOVIE MODAL ----------

function openMovieModal(movieId) {
    const movie = movies.find((m) => m.id === movieId);
    if (!movie) return;

    currentMovieId = movieId;

    movieTitleEl.textContent = movie.title;
    movieYearEl.textContent = movie.year;
    movieRatingEl.textContent = movie.rating;
    movieDurationEl.textContent = movie.duration;

    movieGenresEl.innerHTML = "";
    const mainCategories = movie.categories || [];
    mainCategories.forEach((cat) => {
        const span = document.createElement("span");
        if (cat === "scifi") span.textContent = "Sci-Fi & Fantasy";
        else if (cat === "crime") span.textContent = "Crime";
        else if (cat === "trending") span.textContent = "Trending";
        else if (cat === "popular") span.textContent = "Popular";
        else span.textContent = cat;
        movieGenresEl.appendChild(span);
    });

    movieDescriptionEl.textContent = movie.description;
    movieBackdropInner.style.backgroundImage = `url("${movie.backdrop}")`;

    // My List button state
    const inList = myList.includes(movie.id);
    updateMyListButton(inList);

    // Fake “Play” akcija
    moviePlayBtn.onclick = () => {
        alert("Demo: ovdje bi pustio video player / trailer.");
    };

    movieMyListBtn.onclick = () => toggleMyList(movie.id);

    openModal(movieModal);
}

// ---------- MODAL HELPERS ----------

function openModal(modalEl) {
    overlay.classList.add("active");
    modalEl.classList.add("active");
}

function closeAllModals() {
    overlay.classList.remove("active");
    [signinModal, movieModal].forEach((m) => m.classList.remove("active"));
}

// ---------- MY LIST ----------

function updateMyListButton(inList) {
    if (!movieMyListBtn) return;
    const icon = movieMyListBtn.querySelector("i");
    if (!icon) return;

    if (inList) {
        movieMyListBtn.classList.add("in-list");
        movieMyListBtn.innerHTML = `<i class="fa-solid fa-bookmark"></i> In My List`;
    } else {
        movieMyListBtn.classList.remove("in-list");
        movieMyListBtn.innerHTML = `<i class="fa-regular fa-bookmark"></i> My List`;
    }
}

function toggleMyList(movieId) {
    const index = myList.indexOf(movieId);
    if (index === -1) {
        myList.push(movieId);
    } else {
        myList.splice(index, 1);
    }
    saveMyList(myList);
    updateMyListButton(myList.includes(movieId));
    renderRows(); // da update-a card indikatore i My List red
}

// ---------- SEARCH ----------

function applySearchFilter(query) {
    const q = query.trim().toLowerCase();
    const allCards = document.querySelectorAll(".card");

    allCards.forEach((card) => {
        const title = card.dataset.title || "";
        if (!q || title.includes(q)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}

// ---------- NAV SECTIONS (Home, Series, Movies, My List) ----------

function setActiveNavSection(section) {
    const navItems = document.querySelectorAll("[data-nav-section]");
    navItems.forEach((item) => {
        item.classList.toggle("active", item.dataset.navSection === section);
    });

    // filtriraj prikaz po tipu
    rowWrappers.forEach((wrapper) => {
        wrapper.style.display = ""; // default

        const rowId = wrapper.dataset.rowId;
        const isMyListRow = wrapper.hasAttribute("data-mylist-row");

        if (section === "mylist" && !isMyListRow) {
            wrapper.style.display = "none";
        } else if (section === "series" || section === "movies") {
            // filtrirat ćemo po tipu serija/film
            const rowBlock = wrapper.querySelector(".row-block");
            if (!rowBlock) return;
            const cards = rowBlock.querySelectorAll(".card");
            cards.forEach((card) => (card.style.display = "")); // reset, pa filter

            cards.forEach((card) => {
                const movieId = card.dataset.movieId;
                const movie = movies.find((m) => m.id === movieId);
                if (!movie) return;
                if (section === "series" && movie.type !== "series") {
                    card.style.display = "none";
                }
                if (section === "movies" && movie.type !== "movie") {
                    card.style.display = "none";
                }
            });
        }
    });
}

// ---------- LOGIN / PROFILE ----------

function updateProfileUI() {
    if (currentUserEmail) {
        profileEmail.textContent = currentUserEmail;
    } else {
        profileEmail.textContent = "Guest";
    }
}

function handleSignIn(email) {
    currentUserEmail = email;
    saveUserEmail(email);
    updateProfileUI();
    closeAllModals();
}

function handleSignOut() {
    currentUserEmail = null;
    clearUserEmail();
    updateProfileUI();
}

// ---------- EVENT LISTENERS ----------

// hamburger
if (navToggle) {
    navToggle.addEventListener("click", () => {
        const isOpen = navMobile.style.display === "block";
        navMobile.style.display = isOpen ? "none" : "block";
        navToggle.classList.toggle("open", !isOpen);
    });
}

// profile dropdown
if (navProfile) {
    navProfile.addEventListener("click", () => {
        profileDropdown.classList.toggle("open");
    });
}

// klik van profila zatvara dropdown
document.addEventListener("click", (e) => {
    if (!navProfile.contains(e.target)) {
        profileDropdown.classList.remove("open");
    }
});

// open sign in
if (openSigninBtn) {
    openSigninBtn.addEventListener("click", () => {
        signinEmailInput.value = "";
        signinPasswordInput.value = "";
        openModal(signinModal);
    });
}
if (openSigninMobileBtn) {
    openSigninMobileBtn.addEventListener("click", () => {
        signinEmailInput.value = "";
        signinPasswordInput.value = "";
        openModal(signinModal);
    });
}

// sign in submit (fake auth)
if (signinForm) {
    signinForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = signinEmailInput.value.trim();
        if (!email) return;
        handleSignIn(email);
    });
}

// sign out
if (signoutBtn) {
    signoutBtn.addEventListener("click", () => {
        handleSignOut();
    });
}

// close modal buttons
document.querySelectorAll("[data-close-modal]").forEach((btn) => {
    btn.addEventListener("click", closeAllModals);
});

// overlay click
if (overlay) {
    overlay.addEventListener("click", closeAllModals);
}

// ESC za zatvaranje modala
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeAllModals();
    }
});

// FAQ accordion
faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
        faqItems.forEach((it) => {
            if (it !== item) it.classList.remove("active");
        });
        item.classList.toggle("active");
    });
});

// search
if (searchInput) {
    searchInput.addEventListener("input", (e) => {
        applySearchFilter(e.target.value);
    });
}
if (searchInputMobile) {
    searchInputMobile.addEventListener("input", (e) => {
        applySearchFilter(e.target.value);
    });
}

// nav sections (desktop + mobile)
document.querySelectorAll("[data-nav-section]").forEach((item) => {
    item.addEventListener("click", () => {
        const section = item.dataset.navSection;
        setActiveNavSection(section);
        // zatvori mobile meni nakon klika
        if (navMobile && window.innerWidth <= 960) {
            navMobile.style.display = "none";
            navToggle.classList.remove("open");
        }
    });
});

// ---------- INIT ----------

function init() {
    updateProfileUI();
    initHero();
    renderRows();
    setActiveNavSection("home");
}

document.addEventListener("DOMContentLoaded", init);
