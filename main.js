function generateDiamond() {
    const diamond = document.getElementById('diamond');
    const size = 5; // Adjust this to change the size of the diamond

    let diamondPattern = '';

    // Generate the top part of the diamond
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size - i - 1; j++) {
            diamondPattern += '&nbsp;'; // Add spaces for the top part
        }

        diamondPattern += '*'; // Add the left star

        if (i != 0) {
            for (let k = 0; k < 2 * i - 1; k++) {
                diamondPattern += '&nbsp;'; // Add spaces between stars for the top part
            }
            diamondPattern += '*'; // Add the right star
        }

        diamondPattern += '<br>'; // Add line break
    }

    // Generate the bottom part of the diamond
    for (let i = size - 2; i >= 0; i--) {
        for (let j = 0; j < size - i - 1; j++) {
            diamondPattern += '&nbsp;'; // Add spaces for the bottom part
        }

        diamondPattern += '*'; // Add the left star

        if (i !== 0) {
            for (let k = 0; k < 2 * i - 1; k++) {
                diamondPattern += '&nbsp;'; // Add spaces between stars for the bottom part
            }
            diamondPattern += '*'; // Add the right star
        }

        diamondPattern += '<br>'; // Add line break
    }

    diamond.innerHTML = diamondPattern;
}
