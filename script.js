function convertText() {
    const inputText = document.getElementById('inputText').value;
    const smallCapsMap = {
        'a': 'ᴀ', 'b': 'ʙ', 'c': 'ᴄ', 'd': 'ᴅ', 'e': 'ᴇ', 'f': 'ꜰ', 'g': 'ɢ', 'h': 'ʜ', 'i': 'ɪ', 
        'j': 'ᴊ', 'k': 'ᴋ', 'l': 'ʟ', 'm': 'ᴍ', 'n': 'ɴ', 'o': 'ᴏ', 'p': 'ᴘ', 'q': 'ꞯ', 'r': 'ʀ', 
        's': 's', 't': 'ᴛ', 'u': 'ᴜ', 'v': 'ᴠ', 'w': 'ᴡ', 'x': 'x', 'y': 'ʏ', 'z': 'ᴢ'
    };

    let outputText = '';
    for (let char of inputText) {
        if (smallCapsMap[char.toLowerCase()]) {
            outputText += smallCapsMap[char.toLowerCase()];
        } else {
            outputText += char;
        }
    }

    document.getElementById('outputText').value = outputText;
}

// Rechtsklick deaktivieren
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Entwicklertools deaktivieren
document.addEventListener('keydown', function(e) {
    if (e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) || 
        (e.ctrlKey && e.key === 'U')) {
        e.preventDefault();
    }
});
