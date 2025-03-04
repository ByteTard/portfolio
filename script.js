document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    const scrollTopBtn = document.getElementById("scrollTop");
    const themeToggle = document.getElementById("themeToggle");
    const chatInput = document.getElementById("chatInput");
    const chatBody = document.getElementById("chatBody");

    // Shrinking Navbar on Scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("shrink");
        } else {
            navbar.classList.remove("shrink");
        }

        if (window.scrollY > 300) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    });

    // Scroll to Top Button
    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Theme Toggle
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });

    // Chatbot Functionality
    const responses = {
        "who are you": "I am your holographic guide, a ghost in the machine.",
        "what do you do": "I assist you in navigating this cyberpunk dreamscape.",
        "can i commission you": "Absolutely! Reach out via the contact section.",
        "what tools do you use": "Adobe Illustrator, Photoshop, Blender, and more."
    };

    chatInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            let userText = chatInput.value.toLowerCase();
            chatBody.innerHTML += `<p><strong>You:</strong> ${chatInput.value}</p>`;
            chatInput.value = "";

            setTimeout(() => {
                let response = responses[userText] || "I do not understand that.";
                chatBody.innerHTML += `<p><strong>Holo Assistant:</strong> ${response}</p>`;
                chatBody.scrollTop = chatBody.scrollHeight;
            }, 500);
        }
    });
});
