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
            const selectedSite = Object.values(sites).find(site => site.name === name);
            if (selectedSite) {
                sitesElem.style.display = "none";
                loadImages(selectedSite);
            }
        });
    });
}

function loadImages(site) {
    const images = document.getElementById("images");
    images.innerHTML = "";
    site.indexes.forEach(hour => {
        if (hour >= site.min && hour <= site.max) {
            const date = new Date();
            const formattedDate = date.toISOString().replace(/[-:]/g, "").slice(0, 8);
            const formattedHour = String(hour).padStart(2, '0');
            const imageUrl = site.url.replace("%yyyymmdd%", formattedDate).replace("%hour%", formattedHour);
            const img = document.createElement("img");
            img.src = imageUrl;
            img.alt = `${site.name} - ${formattedDate} ${formattedHour}`;
            images.appendChild(img);
        }
    })
}