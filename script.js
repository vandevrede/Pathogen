document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded!"); // Debugging log
    document.querySelectorAll('.accordion-header').forEach(header => {
        console.log("Accordion header found:", header); // Debugging log
        header.addEventListener('click', function () {
            let content = this.nextElementSibling;
            console.log("Clicked! Current maxHeight:", content.style.maxHeight); // Debugging log

            if (content.style.maxHeight) {
                content.style.maxHeight = null; // Close the section
            } else {
                content.style.maxHeight = content.scrollHeight + "px"; // Open the section
            }
        });
    });
});
