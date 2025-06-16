const sites = {
    "aladin_slo_950_850_cc_danas": {
        "name": "Aladin SLO 950/850/Cloud Cover danas",
        "site_names": [
            "Aladin SLO 925hPa",
            "Aladin SLO 850hPa",
            "Aladin SLO Cloud Cover"
        ],
        start_index: 12,
    },
    "aladin_slo_950_850_cc_sutra": {
        "name": "Aladin SLO 950/850/Cloud Cover +1d",
        "site_names": [
            "Aladin SLO 925hPa",
            "Aladin SLO 850hPa",
            "Aladin SLO Cloud Cover"
        ],
        start_index: 36,
    },
    "aladin_slo_950_850_cc_prekosutra": {
        "name": "Aladin SLO 950/850/Cloud Cover +2d",
        "site_names": [
            "Aladin SLO 925hPa",
            "Aladin SLO 850hPa",
            "Aladin SLO Cloud Cover"
        ],
        start_index: 60,
    },
    "aladin_hr": {
        "name": "Aladin HR",
        "url": "https://prognoza.hr/aladinHR/web_uv10_HRv8_%hour%.png",
        "min": 0,
        "max": 72,
        "indexes": [4, 28, 52],
        "increments": 1,
    },
    "aladin_hr_kvarner": {
        "name": "Aladin HR Istra i Kvarner",
        "url": "https://prognoza.hr/aladinHR/web_uv10_SENJ_%hour%.png",
        "min": 0,
        "max": 72,
        "indexes": [4, 28, 52],
        "increments": 1,
    },
    "aladin_hr_naoblaka": {
        "name": "Aladin HR naoblaka",
        "url": "https://prognoza.hr/aladinHR/web_naob_%hour%.png",
        "min": 0,
        "max": 72,
        "indexes": [4, 28, 52],
        "increments": 1,
    },
    "hr_satelit": {
        "name": "Eumetsat Kompozit HR",
        "url": "https://vrijeme.hr/satelit/MSG4-%hour%00.jpg",
        "min": 0,
        "max": 23,
        "indexes": 'current-time-utc',
        "increments": 1,
    },
    "sat24_satelit": {
        "name": "SAT24 Croatia",
        "url": "https://imn-rust-lb.infoplaza.io/v4/nowcast/tiles/satellite-europe/%hour%/7/43/67/50/72?outputtype=jpeg",
        "min": 0,
        "max": 300000000000,
        "indexes": 'current-date-time-utc',
        "increments": 5,
    },
    "aladin_slo_tlo": {
        "name": "Aladin SLO 10m",
        "url": "https://meteo.arso.gov.si/uploads/probase/www/model/aladin/field/ad_%yyyymmdd%-0000_vm-va10m_si_0%hour%.png",
        "min": 3,
        "max": 72,
        "indexes": [12, 36, 60],
        "increments": 3,
    },
    "aladin_slo_925": {
        "name": "Aladin SLO 925hPa",
        "url": "https://meteo.arso.gov.si/uploads/probase/www/model/aladin/field/as_%yyyymmdd%-0000_vf925hPa_si-neighbours_0%hour%.png",
        "min": 3,
        "max": 72,
        "indexes": [12, 36, 60],
        "increments": 3,
    },
    "aladin_slo_850": {
        "name": "Aladin SLO 850hPa",
        "url": "https://meteo.arso.gov.si/uploads/probase/www/model/aladin/field/as_%yyyymmdd%-0000_r-t-vf850hPa_si-neighbours_0%hour%.png",
        "min": 3,
        "max": 72,
        "indexes": [12, 36, 60],
        "increments": 3,
    },
    "aladin_slo_cloud": {
        "name": "Aladin SLO Cloud Cover",
        "url": "https://meteo.arso.gov.si/uploads/probase/www/model/aladin/field/as_%yyyymmdd%-0000_tcc-rr_si-neighbours_0%hour%.png",
        "min": 3,
        "max": 72,
        "indexes": [12, 36, 60],
        "increments": 3,
    },
    "skewt-maksimir": {
        "name": "Sondaža Maksimir",
        "url": "https://vrijeme.hr/maksimir.png",
        "min": 0,
        "max": 0,
        "indexes": [0],
        "increments": 0,
    },
    "meteocenter-skewt-zg": {
        "name": "Meteocenter Skewt Zagreb",
        "url": "https://img.meteocentre.com/numerical-weather-prediction/cmc_gdps_par_eur_00/skewt/skewt_Zagreb_0%hour%.png",
        "min": 0,
        "max": 72,
        "indexes": [12],
        "increments": 12,
    },
    "skewt-zg": {
        "name": "Skewt Zagreb",
        "url": "https://gamma.meteoadriatic.net/meteoadriatic/ma2024/skewts/output/45.9-15.8-%hour%.png",
        "url_prep": "https://gamma.meteoadriatic.net/meteoadriatic/ma2024/skewts/return.php?lat=45.9&lon=15.8&hh=%hour%",
        "min": 0,
        "max": 72,
        "indexes": [12],
        "increments": 12,
    },
    "skewt-jap": {
        "name": "Skewt Japetić",
        "url": "https://gamma.meteoadriatic.net/meteoadriatic/ma2024/skewts/output/45.7-15.7-%hour%.png",
        "url_prep": "https://gamma.meteoadriatic.net/meteoadriatic/ma2024/skewts/return.php?lat=45.7&lon=15.7&hh=%hour%",
        "min": 0,
        "max": 72,
        "indexes": [12],
        "increments": 12,
    },
    "skewt-tribalj": {
        "name": "Skewt Tribalj",
        "url": "https://gamma.meteoadriatic.net/meteoadriatic/ma2024/skewts/output/45.2-14.7-%hour%.png",
        "url_prep": "https://gamma.meteoadriatic.net/meteoadriatic/ma2024/skewts/return.php?lat=45.2&lon=14.7&hh=%hour%",
        "min": 0,
        "max": 72,
        "indexes": [12],
        "increments": 12,
    },
    "skewt-ivanec": {
        "name": "Skewt Ivanec",
        "url": "https://gamma.meteoadriatic.net/meteoadriatic/ma2024/skewts/output/46.2-16.1-%hour%.png",
        "url_prep": "https://gamma.meteoadriatic.net/meteoadriatic/ma2024/skewts/return.php?lat=46.2&lon=16.1&hh=%hour%",
        "min": 0,
        "max": 72,
        "indexes": [12],
        "increments": 12,
    },
    "skewt-buzet": {
        "name": "Skewt Buzet",
        "url": "https://gamma.meteoadriatic.net/meteoadriatic/ma2024/skewts/output/46.4-14.0-%hour%.png",
        "url_prep": "https://gamma.meteoadriatic.net/meteoadriatic/ma2024/skewts/return.php?lat=46.4&lon=14.0&hh=%hour%",
        "min": 0,
        "max": 72,
        "indexes": [12],
        "increments": 12,
    },
    "radar-kompozit": {
        "name": "Radar HR kompozit",
        "url": "https://vrijeme.hr/radari/kompozit_%hour%00.png",
        "min": 0,
        "max": 23,
        "indexes": 'current-time-hr',
        "increments": 1,
    },
}

let currentSite = null;
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
    loadImages(siteByName(getCookie('site')) || sites["aladin_slo_950_850_cc_danas"]);
}

function loadImages(site) {
    currentSite = site;
    setCookie('site', site.name);
    if (site.site_names) {
        loadSites(site.site_names);
        return;
    }
    const images = document.getElementById("images");
    images.innerHTML = "";
    let indexes = site.indexes;
    if (indexes === 'current-time-utc') {
        const hour = new Date().getUTCHours();
        indexes = [hour];
    } else if (indexes === 'current-date-time-utc') {
        let hour = getCurrentDateTimeUTC();
        hour = Math.floor(hour / site.increments) * site.increments;
        hour = adjustTime(hour, -15);
        indexes = [hour];
    } else if (indexes === 'current-time-hr') {
        const hour = new Date().getHours();
        indexes = [hour];
    }
    indexes.forEach(hour => {
        if (hour >= site.min && hour <= site.max) {
            const img = document.createElement("img");
            images.appendChild(img);
            img.setAttribute("site", site.name);
            img.addEventListener("click", handleImageClick);
            img.onerror = () => {
                console.error(`Error loading image for ${site.name} at hour ${hour}`);
            };
            loadImage(img, site, hour);
        }
    })
}

function loadSites(site_names) {
    const images = document.getElementById("images");
    images.innerHTML = "";
    site_names.forEach(name => {
        let site = siteByName(name);
        let hour = currentSite.start_index;
        const img = document.createElement("img");
        img.setAttribute("site", site.name);
        img.addEventListener("click", handleImageClick);
        images.appendChild(img);
        loadImage(img, site, hour);
    });
}

function prepImage(urlPrep, hour, done) {
    fetch("https://hpgf.org/prep.php?url=" + encodeURIComponent(urlPrep.replace("%hour%", hour)))
        .then(() => {
            done();
        })
}

function loadImage(img, site, hour) {
    console.log(site.name, hour);
    if (window.location.hostname !== "127.0.0.1")
        log(site.name, hour);
    img.setAttribute("hour", hour);
    img.title = `${site.name} - ${hour}`;
    if (site.url_prep) {
        prepImage(site.url_prep, hour, () => {
            setTimeout((img) => {
                showLoading(img);
                img.src = getImageUrl(site.url, hour);
                img.onload = imgOnLoad;
            }, 1000, img);
        })
        return;
    }
    img.src = getImageUrl(site.url, hour);

    if (img.complete) {
        console.log("Complete", img.src);
        imgOnLoad(img)
        img.onload = null;
    } else {
        showLoading(img);
        img.onload = imgOnLoad;
    }
}

function imgOnLoad(event) {
    let img = event.target || event;
    if (img.loadingBox) {
        document.body.removeChild(img.loadingBox);
        img.loadingBox = null;
    }

    if (animation && !img.src.includes('placeholder.jpg')) {
        setTimeout(nextPrevImage, 500, img)
    }
}

function getImageUrl(url, hour) {
    const date = new Date();
    const formattedDate = date.toISOString().replace(/[-:]/g, "").slice(0, 8);
    const formattedHour = String(hour).padStart(2, '0');
    return url.replace("%yyyymmdd%", formattedDate).replace("%hour%", formattedHour);
}

let clickTimer;
let animation;
function handleImageClick(event) {
    if (event.target.tagName !== "IMG") {
        return;
    }
    const img = event.target;
    const dir = event.clientX < window.innerWidth / 2 ? -1 : 1;
    if (currentSite.site_names) { // next/prev for grouped sites
        event.target.parentNode.querySelectorAll("img").forEach((img) => {
            img.direction = dir;
            nextPrevImage(img);
        })
        return;
    }

    if (animation) {
        animation = false;
        document.querySelectorAll('.loading').forEach(div => {
            div.remove();
        })
        return;
    }
    img.direction = dir;
    const site = siteByName(img.getAttribute("site"));
    if (site.url_prep) {
        nextPrevImage(img);
        return;
    }

    // doubleclick handling
    if (clickTimer) {
        clearTimeout(clickTimer);
        clickTimer = null;
        animation = true;
        nextPrevImage(img);
    } else {
        clickTimer = setTimeout((img) => {
            clickTimer = null;
            nextPrevImage(img);
        }, 300, img);
    }
}

function nextPrevImage(img) {
    const dir = img.direction;
    const site = siteByName(img.getAttribute("site"));
    const hour = parseInt(img.getAttribute("hour"));
    let newHour;
    if (site.indexes === 'current-date-time-utc')
        newHour = adjustTime(hour, dir * site.increments);
    else
        newHour = hour + dir * site.increments;
    if (newHour < site.min || newHour > site.max) {
        if (animation) {
            animation = false;
            document.querySelectorAll('.loading').forEach(div => {
                div.remove();
            })
        }
        return;
    }
    img.setAttribute("hour", newHour);
    loadImage(img, site, newHour);
}

function siteByName(name) {
    return Object.values(sites).find(site => site.name === name);
}

function showLoading(img) {
    if (!img || !img.getBoundingClientRect) return;

    const rect = img.getBoundingClientRect();
    const loadingBox = document.createElement("div");
    loadingBox.innerHTML = '<div class="spinner-border text-primary" role="status"></div>';
    loadingBox.classList.add("loading"); // Apply CSS class
    loadingBox.style.top = `${rect.top + window.scrollY + rect.height / 2}px`;
    loadingBox.style.left = `${rect.left + window.scrollX + rect.width / 2}px`;
    document.body.appendChild(loadingBox);
    img.loadingBox = loadingBox;
    img.onerror = () => {
        if (animation) {
            animation = false;
            img.loadingBox = null;
            document.querySelectorAll('.loading').forEach(div => {
                div.remove();
            })
        }
        img.src = "placeholder.jpg";
        if (img.loadingBox) {
            document.body.removeChild(img.loadingBox);
            img.loadingBox = null;
        }
    }
}

function adjustTime(timestamp, increment) {
    // Parse components from yyyymmddHHMM format
    const year = Math.floor(timestamp / 100000000);
    const month = Math.floor((timestamp % 100000000) / 1000000) - 1; // Months are zero-based in JS
    const day = Math.floor((timestamp % 1000000) / 10000);
    const hours = Math.floor((timestamp % 10000) / 100);
    const minutes = timestamp % 100;

    // Create a Date object
    let date = new Date(year, month, day, hours, minutes);

    // Adjust minutes by 5
    date.setMinutes(date.getMinutes() + increment);

    // Extract updated components
    const newYear = date.getFullYear();
    const newMonth = String(date.getMonth() + 1).padStart(2, "0"); // Convert back to 1-based
    const newDay = String(date.getDate()).padStart(2, "0");
    const newHours = String(date.getHours()).padStart(2, "0");
    const newMinutes = String(date.getMinutes()).padStart(2, "0");

    // Return new yyyymmddHHMM format
    return `${newYear}${newMonth}${newDay}${newHours}${newMinutes}`;
}

function getCurrentDateTimeUTC() {
    const now = new Date();

    const year = now.getUTCFullYear();
    const month = String(now.getUTCMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(now.getUTCDate()).padStart(2, '0');
    const hours = String(now.getUTCHours()).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2, '0');

    return Number(`${year}${month}${day}${hours}${minutes}`);
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

function log(siteName, hour) {
    const i = new Image();
    i.src = "https://hpgf.org/pgv/log.php?i=" + encodeURIComponent(siteName + ' ' + hour);
}

