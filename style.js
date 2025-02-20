// Function to calculate the numerology number of a name
function calculateNumerology() {
    let name = document.getElementById("nameInput").value.toUpperCase().replace(/[^A-Z]/g, '');
    
    if (name === "") {
        document.getElementById("result").innerText = "Please enter a valid name.";
        return;
    }

    // Mapping letters to numbers
    const letterValues = {
        'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 8, 'G': 7, 'H': 8, 'I': 9,
        'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5, 'O': 6, 'P': 7, 'Q': 8, 'R': 9,
        'S': 1, 'T': 2, 'U': 3, 'V': 4, 'W': 5, 'X': 6, 'Y': 7, 'Z': 8
    };

    let sum = 0;

    // Convert name to corresponding number values
    for (let char of name) {
        sum += letterValues[char] || 0;
    }

    // Reduce sum to a single digit
    while (sum > 9 && sum !== 11 && sum !== 22) {
        sum = sum.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }

    // Display result
    document.getElementById("result").innerText = `Your Number Name is:' ${sum}`;
}
