const sites = {
    "aladin_hr": {
        "name": "Aladin HR",
        "url": "https://prognoza.hr/aladinHR/web_uv10_HRv8_%hour%.png",
        "min": 0,
        "max": 72,
        "indexes": [4, 28, 52],
        "increments": 1,
        "crop": null
    },
    "aladin_hr_kvarner": {
        "name": "Aladin HR Istra i Kvarner",
        "url": "https://prognoza.hr/aladinHR/web_uv10_SENJ_%hour%.png",
        "min": 0,
        "max": 72,
        "indexes": [4, 28, 52],
        "increments": 1,
        "crop": null
    },
    "aladin_hr_naoblaka": {
        "name": "Aladin HR naoblaka",
        "url": "https://prognoza.hr/aladinHR/web_naob_%hour%.png",
        "min": 0,
        "max": 72,
        "indexes": [4, 28, 52],
        "increments": 1,
        "crop": null
    },
    "aladin_hr_satelit": {
        "name": "Aladin HR satelit",
        "url": "https://vrijeme.hr/satelit/MSG4-%hour%00.jpg",
        "min": 0,
        "max": 23,
        "indexes": 'current-time-utc',
        "increments": 1,
        "crop": null
    },
    "aladin_slo_tlo": {
        "name": "Aladin SLO 10m",
        "url": "https://meteo.arso.gov.si/uploads/probase/www/model/aladin/field/ad_%yyyymmdd%-0000_vm-va10m_si_0%hour%.png",
        "min": 3,
        "max": 72,
        "indexes": [12, 36, 60],
        "increments": 3,
        "crop": null,
    },
    "aladin_slo_925": {
        "name": "Aladin SLO 925hPa",
        "url": "https://meteo.arso.gov.si/uploads/probase/www/model/aladin/field/as_%yyyymmdd%-0000_vf925hPa_si-neighbours_0%hour%.png",
        "min": 3,
        "max": 72,
        "indexes": [12, 36, 60],
        "increments": 3,
        "crop": null,
    },
    "aladin_slo_850": {
        "name": "Aladin SLO 850hPa",
        "url": "https://meteo.arso.gov.si/uploads/probase/www/model/aladin/field/as_%yyyymmdd%-0000_r-t-vf850hPa_si-neighbours_0%hour%.png",
        "min": 3,
        "max": 72,
        "indexes": [12, 36, 60],
        "increments": 3,
        "crop": null,
    },
    "aladin_slo_cloud": {
        "name": "Aladin SLO Cloud Cover",
        "url": "https://meteo.arso.gov.si/uploads/probase/www/model/aladin/field/as_%yyyymmdd%-0000_tcc-rr_si-neighbours_0%hour%.png",
        "min": 3,
        "max": 72,
        "indexes": [12, 36, 60],
        "increments": 3,
        "crop": null,
    },
}

onload = () => init();

function init() {
    document.getElementById("toggle").onclick = () => {
        const sitesElem = document.getElementById("sites");
        sitesElem.style.display = sitesElem.style.display === "none" ? "block" : "none";
    }
    const sitesElem = document.getElementById("sites");
    let names = Object.values(sites).map(site => site.name);
    names.forEach(name => {
        const option = document.createElement("div");
        option.textContent = name;
        sitesElem.appendChild(option);
        option.addEventListener("click", () => {
            const selectedSite = siteByName(name)
            if (selectedSite) {
                sitesElem.style.display = "none";
                loadImages(selectedSite);
            }
        });
    });
    loadImages(siteByName(getCookie('site') || "Aladin SLO 925hPa"));
}

function loadImages(site) {
    setCookie('site', site.name);
    const images = document.getElementById("images");
    images.innerHTML = "";
    let indexes = site.indexes;
    if (indexes === 'current-time-utc') {
        const date = new Date();
        const utcHour = date.getUTCHours();
        indexes = [utcHour];
    }
    indexes.forEach(hour => {
        if (hour >= site.min && hour <= site.max) {
            const imageUrl = getImageUrl(site, hour);
            const img = document.createElement("img");
            img.src = imageUrl;
            img.alt = `${site.name} - ${hour}`;
            img.setAttribute("index", hour);
            img.setAttribute("site", site.name);
            img.addEventListener("click", handleImageClick);
            images.appendChild(img);
        }
    })
}

function getImageUrl(site, hour) {
    const date = new Date();
    const formattedDate = date.toISOString().replace(/[-:]/g, "").slice(0, 8);
    const formattedHour = String(hour).padStart(2, '0');
    return site.url.replace("%yyyymmdd%", formattedDate).replace("%hour%", formattedHour);
}

let clickTimer;
let clickInterval;
function handleImageClick(event) {
    if (event.target.tagName !== "IMG") {
        return; // Only handle clicks on images
    }
    let dir;
    if (event.clientX < window.innerWidth / 2) {
        dir = -1; // Left click
    } else {
        dir = 1; // Right click
    }
    if (clickTimer) {
        clearTimeout(clickTimer);
        clickTimer = null;
        if (clickInterval) {
            clearInterval(clickInterval);
            clickInterval = null;
            return;
        }
        clickInterval = setInterval(() => {
            const img = event.target;
            nextPrevImage(img, dir);
        }, 600);
    } else {
        clickTimer = setTimeout(() => {
            clickTimer = null;
            const img = event.target;
            nextPrevImage(img, dir);
        }, 300);
    }
}

function nextPrevImage(img, dir) {
    const site = siteByName(img.getAttribute("site"));
    const index = parseInt(img.getAttribute("index"));
    const newIndex = index + dir * site.increments;
    if (newIndex < site.min || newIndex > site.max) {
        clearInterval(clickInterval);
        clickInterval = null;
        return; // Out of bounds
    }
    img.src = getImageUrl(site, newIndex);
    img.setAttribute("index", newIndex);
}

function siteByName(name) {
    return Object.values(sites).find(site => site.name === name);
}

function setCookie(cname, cvalue, exdays = 670) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(";");
    let value = ca.find((c) => c.trim().startsWith(name));
    return value ? value.trim().substring(name.length) : "";
}