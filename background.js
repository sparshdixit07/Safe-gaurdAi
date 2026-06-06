const API_KEY = "271dc17ecae6e4b1c9ca7740aad317157c4c3ace22b69924250e624cee1fa5a3";

async function scanURL(url) {

    const response = await fetch(
        "https://www.virustotal.com/api/v3/urls",
        {
            method: "POST",
            headers: {
                "x-apikey": API_KEY,
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "url=" + encodeURIComponent(url)
        }
    );

    const data = await response.json();

    console.log("VirusTotal Response:", data);
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {

    if (changeInfo.status === "complete" && tab.url) {

        console.log("Scanning:", tab.url);

        scanURL(tab.url);

    }

});