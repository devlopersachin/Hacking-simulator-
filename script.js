const loadingText = document.getElementById('loading-text');
const enterButton = document.getElementById('enter-button');
const consoleDiv = document.getElementById('console');
const loadingScreen = document.getElementById('loading-screen');
const inputField = document.getElementById('input');
const outputDiv = document.getElementById('output');
const typingSound = document.getElementById('typingSound');

const technicalWords = [
    "access", "secure", "protocol", "encryption", "firewall", "server",
    "database", "injection", "analyze", "compress", "decrypt", "bypass",
    "scanning", "network", "hacking", "vulnerability", "authentication",
    "cryptography", "phishing", "flooding", "synack", "trojan", "worm",
    "malware", "exploit", "rat", "debugging", "patching", "forensics",
    "enclave", "virtualization", "proxy", "honeypot", "spoofing", 
    "ddos", "syn", "ssl", "tls", "asynchronous", "microsoft", 
    "linux", "javascript", "html", "css", "php", "python", 
    "java", "c++", "ruby", "swift", "kernel", "osint", 
    "vpn", "ids", "ips", "ratelimit", "connection", "script", 
    "instance", "automation", "cluster", "loadbalancing", "serverless", 
    "api", "microservice", "container", "docker", "kubernetes", 
    "repository", "github", "git", "versioning", "ci/cd", 
    "agile", "scrum", "devops", "testing", "deployment", 
    "fingerprinting", "keylogger", "backdoor", "sandwich", "synthesis", 
    "cross-site", "scripting", "ransomware", "enhanced", "multifactor",
    "dynamic", "static", "exploration", "investigation", "logging",
    "compliance", "audit", "monitoring", "anomaly", "logic",
    "data", "analytics", "evaluation", "performance", "threat",
    "risk", "cost", "benefit", "alignment", "infrastructure"
];

let index = 0;
const text = "Made by Sachin";
let hasTyped = false;

function typeText() {
    if (index < text.length) {
        loadingText.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 100); // Adjust speed of typing here
    }
}

enterButton.addEventListener('click', function () {
    loadingScreen.style.display = 'none'; // Hide loading screen
    consoleDiv.style.display = 'flex'; // Show the console
    focusInput(); // Focus on the input field
});

inputField.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default form submission behavior

        // Only display the predefined format if it's the first input
        if (!hasTyped) {
            displayPredefinedFormat(); // Call to display the format
            hasTyped = true; // Prevent this from happening again
        } else {
            // Play typing sound
            typingSound.currentTime = 0;
            typingSound.play();

            // Clear the input value for new text
            inputField.value = ''; // Do not show real-time input
        }
    }
});

function displayPredefinedFormat() {
    outputDiv.innerHTML += `
    \n\nDevice Info - **********
    Password - ******

    Connecting to Mobile...(3)\n`;

    // Countdown logic
    let countdown = 3;
    const countdownInterval = setInterval(() => {
        countdown--;
        outputDiv.innerHTML = `
        \n\nDevice Info - **********
        Password - ******

        Connecting to Mobile...(${countdown})\n`;

        if (countdown === 0) {
            clearInterval(countdownInterval);
            outputDiv.innerHTML += `\n\nSuccessfully connected\n\nAll files of the mobile are accessible\n\n`; // Two lines after format

            // Enable input for further commands
            inputField.disabled = false; // Allow typing after countdown
            focusInput(); // Focus on the input field
        }
    }, 1000); // Countdown updates every second
}

inputField.addEventListener('input', function () {
    typingSound.currentTime = 0; // Reset sound to start
    typingSound.play(); // Play typing sound

    // Generate a random technical word to display
    const randomWord = technicalWords[Math.floor(Math.random() * technicalWords.length)];
    
    // Choose a random color: green
    const randomColor = 'green';
    
    // Update the output on the same line with the random color
    const currentOutput = outputDiv.innerHTML;
    outputDiv.innerHTML = currentOutput + `<span style="color: ${randomColor};">${randomWord}</span> `;

    // Scroll to the bottom of the output
    outputDiv.scrollTop = outputDiv.scrollHeight;
});

// Function to focus the input field
function focusInput() {
    inputField.focus(); // Focus on the input field
}

// Start typing effect on load
window.onload = function () {
    typeText();
};