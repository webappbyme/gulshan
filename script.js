document.getElementById('mortgage-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const loanAmount = parseFloat(document.getElementById('loan-amount').value);
    const interestRate = parseFloat(document.getElementById('interest-rate').value) / 100 / 12;
    const loanTerm = parseFloat(document.getElementById('loan-term').value) * 12;

    const monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));
    document.getElementById('result').innerText = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
});

// Function for scroll animations
const animatedSections = document.querySelectorAll('.animated-section');
window.addEventListener('scroll', () => {
    animatedSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight - 100) {
            section.classList.add('fade-in');
        }
    });
});
