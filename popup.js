chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {

    const url = tabs[0].url;

    document.getElementById("website").innerText = url;

    let risk = 0;
    let reasons = [];

    // HTTP check
    if (url.startsWith("http://")) {
        risk += 30;
        reasons.push("❌ Website is not secure (HTTP)");
    }

    // Suspicious keywords
    const suspiciousWords = [
        "free-money",
        "crypto-win",
        "hack",
        "bonus",
        "adult",
        "casino",
        "earn-fast"
    ];

    suspiciousWords.forEach(word => {
        if (url.includes(word)) {
            risk += 15;
            reasons.push("⚠ Suspicious keyword found: " + word);
        }
    });

    // Fake login patterns
    if (
        url.includes("login-free") ||
        url.includes("verify-account") ||
        url.includes("paypal-secure")
    ) {
        risk += 40;
        reasons.push("🚨 Possible phishing website");
    }

    // Limit max risk
    if (risk > 100) {
        risk = 100;
    }

    // Display risk
    const riskText = document.getElementById("riskText");

    riskText.innerText = "Risk: " + risk + "%";

    if (risk <= 30) {
        riskText.className = "safe";
    }
    else if (risk <= 60) {
        riskText.className = "medium";
    }
    else {
        riskText.className = "danger";
    }

    // Show reasons
    const reasonsList = document.getElementById("reasons");

    if (reasons.length === 0) {
        reasonsList.innerHTML = "<li>✅ Website looks safe</li>";
    } else {
        reasons.forEach(reason => {
            const li = document.createElement("li");
            li.innerText = reason;
            reasonsList.appendChild(li);
        });
    }

});