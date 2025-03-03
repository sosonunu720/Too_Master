document.addEventListener('DOMContentLoaded', function() {
    const birthDateInput = document.getElementById('birth-date');
    const calculateDateInput = document.getElementById('calculate-date');
    const calculateBtn = document.getElementById('calculate-btn');
    const resultCard = document.getElementById('result-card');
    const yearsResult = document.getElementById('years-result');
    const monthsResult = document.getElementById('months-result');
    const daysResult = document.getElementById('days-result');

    function calculateAge(birthDate, calculateDate) {
        let years = calculateDate.getFullYear() - birthDate.getFullYear();
        let months = calculateDate.getMonth() - birthDate.getMonth();
        let days = calculateDate.getDate() - birthDate.getDate();

        if (days < 0) {
            months--;
            const lastMonth = new Date(calculateDate.getFullYear(), calculateDate.getMonth(), 0);
            days += lastMonth.getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        return { years, months, days };
    }

    calculateBtn.addEventListener('click', function() {
        const birthDate = new Date(birthDateInput.value);
        const calculateDate = calculateDateInput.value ? new Date(calculateDateInput.value) : new Date();

        if (isNaN(birthDate.getTime())) {
            alert('Please enter a valid birth date');
            return;
        }

        if (birthDate > calculateDate) {
            alert('Birth date cannot be in the future');
            return;
        }

        const age = calculateAge(birthDate, calculateDate);
        
        yearsResult.textContent = age.years;
        monthsResult.textContent = age.months;
        daysResult.textContent = age.days;

        resultCard.classList.add('show');
    });
}));