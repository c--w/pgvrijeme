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
    "skewt-zg": {
        "name": "Skewt Zagreb",
        "url": "https://gamma.meteoadriatic.net/meteoadriatic/ma2024/skewts/output/45.9-15.8-%hour%.png",
        "url_prep": "https://gamma.meteoadriatic.net/meteoadriatic/ma2024/skewts/return.php?lat=45.9&lon=15.8&hh=%hour%",
        "min": 0,
        "max": 72,
        "indexes": [0],
        "increments": 12,
    },
    "skewt-jap": {
        "name": "Skewt Japetić",
        "url": "https://gamma.meteoadriatic.net/meteoadriatic/ma2024/skewts/output/45.7-15.7-%hour%.png",
        "url_prep": "https://gamma.meteoadriatic.net/meteoadriatic/ma2024/skewts/return.php?lat=45.7&lon=15.7&hh=%hour%",
        "min": 0,
        "max": 72,
        "indexes": [0],
        "increments": 12,
    },
    "skewt-tribalj": {
        "name": "Skewt Tribalj",
        "url": "https://gamma.meteoadriatic.net/meteoadriatic/ma2024/skewts/output/45.2-14.7-%hour%.png",
        "url_prep": "https://gamma.meteoadriatic.net/meteoadriatic/ma2024/skewts/return.php?lat=45.2&lon=14.7&hh=%hour%",
        "min": 0,
        "max": 72,
        "indexes": [0],
        "increments": 12,
    },
    "skewt-ivanec": {
        "name": "Skewt Ivanec",
        "url": "https://gamma.meteoadriatic.net/meteoadriatic/ma2024/skewts/output/46.2-16.1-%hour%.png",
        "url_prep": "https://gamma.meteoadriatic.net/meteoadriatic/ma2024/skewts/return.php?lat=46.2&lon=16.1&hh=%hour%",
        "min": 0,
        "max": 72,
        "indexes": [0],
        "increments": 12,
    },
    "skewt-buzet": {
        "name": "Skewt Buzet",
        "url": "https://gamma.meteoadriatic.net/meteoadriatic/ma2024/skewts/output/46.4-14.0-%hour%.png",
        "url_prep": "https://gamma.meteoadriatic.net/meteoadriatic/ma2024/skewts/return.php?lat=46.4&lon=14.0&hh=%hour%",
        "min": 0,
        "max": 72,
        "indexes": [0],
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
    const imgPrep = new Image();
    imgPrep.src = getImageUrl(urlPrep, hour);
    imgPrep.onload = () => {
        done();
    };
}

let timeout = null;
function loadImage(img, site, hour) {
    log(site.name, hour);
    if (site.url_prep) {
        prepImage(site.url_prep, hour, () => {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
                img.style.display = "block";
                img.src = getImageUrl(site.url, hour);
            }
        })
        timeout = setTimeout((img) => {
            const parent = img.parentNode;
            const newImg = document.createElement("img");
            newImg.src = img.src; // Keep the same source
            newImg.setAttribute("site", site.name);
            newImg.setAttribute("hour", hour);
            newImg.addEventListener("click", handleImageClick);
            parent.replaceChild(newImg, img);
        }, 2000, img);
    }
    img.setAttribute("hour", hour);
    img.title = `${site.name} - ${hour}`;
    img.onload = () => {
        if (timeout) {
            clearTimeout(timeout);
            timeout = null;
        }
    };
    img.onerror = () => {
        img.style.display = "none";
    }
    img.src = getImageUrl(site.url, hour);
}

function getImageUrl(url, hour) {
    const date = new Date();
    const formattedDate = date.toISOString().replace(/[-:]/g, "").slice(0, 8);
    const formattedHour = String(hour).padStart(2, '0');
    return url.replace("%yyyymmdd%", formattedDate).replace("%hour%", formattedHour);
}

let clickTimer;
let clickInterval;
function handleImageClick(event) {
    if (event.target.tagName !== "IMG") {
        return;
    }
    const dir = event.clientX < window.innerWidth / 2 ? -1 : 1;
    if (clickTimer) {
        clearTimeout(clickTimer);
        clickTimer = null;
        if (clickInterval) {
            clearInterval(clickInterval);
            clickInterval = null;
            return;
        }
        const img = event.target;
        const site = siteByName(img.getAttribute("site"));
        if (site.url_prep || currentSite.site_names) // no animation for prep images or grouped sites
            return;
        clickInterval = setInterval((img, dir) => {
            nextPrevImage(img, dir);
        }, 600, img, dir);
    } else {
        if (currentSite.site_names) { // next/prev for grouped sites
            event.target.parentNode.querySelectorAll("img").forEach((img) => {
                nextPrevImage(img, dir);
            })
            return;
        }
        const img = event.target;
        clickTimer = setTimeout((img) => {
            clickTimer = null;
            nextPrevImage(img, dir);
        }, 300, img);
    }
}

function nextPrevImage(img, dir) {
    const site = siteByName(img.getAttribute("site"));
    const hour = parseInt(img.getAttribute("hour"));
    const newHour = hour + dir * site.increments;
    if (newHour < site.min || newHour > site.max) {
        if (clickInterval) {
            clearInterval(clickInterval);
            clickInterval = null;
        }
        return;
    }
    loadImage(img, site, newHour);
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

function log(siteName, hour) {
    const i = new Image();
    i.src = "https://hpgf.org/pgv/log.php?i=" + encodeURIComponent(siteName + ' ' + hour);
}
