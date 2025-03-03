document.addEventListener('DOMContentLoaded', function() {
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const calculateBtn = document.getElementById('calculate-btn');
    const resultCard = document.getElementById('result-card');
    const bmiResult = document.getElementById('bmi-result');
    const categoryResult = document.getElementById('category-result');

    function calculateBMI(weight, height) {
        return (weight / ((height / 100) ** 2)).toFixed(1);
    }

    function getBMICategory(bmi) {
        if (bmi < 18.5) return 'Underweight';
        if (bmi < 25) return 'Normal weight';
        if (bmi < 30) return 'Overweight';
        return 'Obese';
    }

    calculateBtn.addEventListener('click', function() {
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value);

        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            alert('Please enter valid weight and height values');
            return;
        }

        const bmi = calculateBMI(weight, height);
        const category = getBMICategory(bmi);

        bmiResult.textContent = bmi;
        categoryResult.textContent = category;
        resultCard.classList.add('show');
    });
}));