const currentURL = window.location.href;

let risk = 0;

if (currentURL.startsWith("http://")) {
    risk += 30;
}

if (
    currentURL.includes("free-money") ||
    currentURL.includes("casino") ||
    currentURL.includes("hack")
) {
    risk += 40;
}

if (risk >= 50) {

    const warning = document.createElement("div");

    warning.innerHTML = `
        ⚠ Dangerous Website Detected
        <br>
        Risk Score: ${risk}%
    `;

    warning.style.position = "fixed";
    warning.style.top = "0";
    warning.style.left = "0";
    warning.style.width = "100%";
    warning.style.background = "red";
    warning.style.color = "white";
    warning.style.padding = "15px";
    warning.style.zIndex = "999999";
    warning.style.fontSize = "20px";
    warning.style.textAlign = "center";

    document.body.appendChild(warning);
}