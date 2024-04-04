const citySelect = document.getElementById('city');
        const novaPoshtaSelect = document.getElementById('nova-poshta');
        const orderForm = document.getElementById('order-form');
        const orderDetails = document.getElementById('order-details');
        const errorMessage = document.getElementById('error-message');

        citySelect.addEventListener('change', function () {
            const selectedCity = citySelect.value;
            novaPoshtaSelect.innerHTML = '';
            switch (selectedCity) {
                case 'Київ':
                    addOptionsToNovaPoshta([
                        "...",
                        "Київ, вул. Слобожанська,13(до 30 кг)",
                        "Київ, вул. Набережно-Хрещатицька, 33(до 30 кг)",
                        "Київ, вул. Вербова, 24(до 30 кг)",
                        "Київ, вул. Ігоря Брановицького, 4(до 30 кг)",
                        "Київ, вул. Дмитра Луценко, 8(до 30 кг)",
                    ]);
                    break;
                case 'Одеса':
                    addOptionsToNovaPoshta([
                        "...",
                        "Одеса, вул. Академіка Філатова, 24(до 30 кг)",
                        "Одеса, вул. Жуковського, 10(до 30 кг)",
                        "Одеса, вул. Сегедська, 18(до 30 кг)",
                        "Одеса, вул. Владислава Бувалкіна, 28(до 30 кг)",
                        "Одеса, вул. Софіївська, 34(до 30кг)",
                    ]);
                    break;
                case 'Львів':
                    addOptionsToNovaPoshta([
                        "...",
                        "Львів, вул. Данилишина, 6(до 30 кг)",
                        "Львів, вул. Сихівська, 8(до 30 кг)",
                        "Львів, вул. Грінченка, 2а(до 30 кг)",
                        "Львів, вул. Кульпарківська, 142(до 30 кг)",
                        "Львів, вул. Городоцька, 120(до 30 кг)",
                        
                    ]);
                    break;
               
                default:
                    break;
            }
        });

        function addOptionsToNovaPoshta(options) {
            options.forEach(optionText => {
                const option = document.createElement('option');
                option.value = optionText;
                option.textContent = optionText;
                novaPoshtaSelect.appendChild(option);
            });
        }

        orderForm.addEventListener('submit', function (event) {
            event.preventDefault();

            if (!orderForm.checkValidity()) {
                errorMessage.textContent = 'Будь ласка, заповніть всі обов\'язкові поля';
                return;
            }

            const name = document.getElementById('name').value;
            const city = document.getElementById('city').value;
            const novaPoshta = document.getElementById('nova-poshta').value;
            const payment = document.querySelector('input[name="payment"]:checked').value;
            const quantity = document.getElementById('quantity').value;
            const comment = document.getElementById('comment').value;

            errorMessage.textContent = '';

            orderDetails.innerHTML = `
                <h2>Інформація про замовлення:</h2>
                <p><strong>ПІБ покупця:</strong> ${name}</p>
                <p><strong>Місто:</strong> ${city}</p>
                <p><strong>Склад Нової пошти:</strong> ${novaPoshta}</p>
                <p><strong>Оплата:</strong> ${payment}</p>
                <p><strong>Кількість продукції:</strong> ${quantity}</p>
                <p><strong>Коментар:</strong> ${comment}</p>
            `;

            orderDetails.style.display = 'block';
        });