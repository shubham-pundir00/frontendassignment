
document.addEventListener('DOMContentLoaded', () => {
    const units = document.querySelectorAll('input[name="unit"]');
    const totalPrice = document.getElementById('total-price');

    units.forEach(unit => {
        unit.addEventListener('change', (event) => {
            const selected = event.target.id;

            switch (selected) {
                case 'one-unit':
                    totalPrice.textContent = '$10.00 USD';
                    break;
                case 'two-unit':
                    totalPrice.textContent = '$18.00 USD';
                    break;
                case 'three-unit':
                    totalPrice.textContent = '$24.00 USD';
                    break;
            }
        });
    });
});
