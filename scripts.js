const glowingText = (() => {
    const textElement = document.getElementById('glowing_text');
    let coloredText;
    let index = 0;

    const startGlowing = () => {
        setInterval(() => {
            const letters = textElement.textContent.split('');
            if (letters[index] == ' ') {
                index++;
            }
            letters[
                index
            ] = `<span style="color: var(--glowColor); text-shadow: 0 0 .15em var(--shadowColor);">${letters[index]}</span>`;
            coloredText = letters.join('');
            textElement.innerHTML = coloredText;
            index = (index + 1) % letters.length;
        }, 500);
    };

    return startGlowing;
})();

window.addEventListener('load', glowingText, false);
