const citySelect = document.getElementById('city');
        const novaPoshtaSelect = document.getElementById('nova-poshta');
        const orderForm = document.getElementById('order-form');
        const orderDetails = document.getElementById('order-details');
        const errorMessage = document.getElementById('error-message');
        const buyButton = document.getElementById('buy-button');
        const orderTitle = document.getElementById('order-title');

        buyButton.addEventListener('click', function () {
            orderForm.style.display = 'block';
            orderTitle.style.display = 'block';
        });

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

        const nameInput = document.getElementById('name');
        const phoneInput = document.getElementById('phone');
        const emailInput = document.getElementById('email');
        const nameRegex = /^[А-ЯҐЄІЇ][а-яґєії]+\s[А-ЯҐЄІЇ][а-яґєії]+\s[А-ЯҐЄІЇ][а-яґєії]+$/;
        const phoneRegex = /^[+()0-9-]{10,20}$/;
        const emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

        function validateName() {
            if (!nameRegex.test(nameInput.value)) {
                errorMessage.textContent = 'Некоректне ПІБ';
                return false;
            }
            return true;
        }

        function validatePhone() {
            if (!phoneRegex.test(phoneInput.value)) {
                errorMessage.textContent = 'Некоректний номер телефону';
                return false;
            }
            return true;
        }

        function validateEmail() {
            if (!emailRegex.test(emailInput.value)) {
                errorMessage.textContent = 'Некоректний email';
                return false;
            }
            return true;
        }

        orderForm.addEventListener('submit', function (event) {
            event.preventDefault();

            if (!validateName() || !validatePhone() || !validateEmail()) {
                return;
            }

            const name = nameInput.value;
            const phone = phoneInput.value;
            const email = emailInput.value;
            const city = citySelect.value;
            const novaPoshta = novaPoshtaSelect.value;
            const payment = document.querySelector('input[name="payment"]:checked').value;
            const quantity = document.getElementById('quantity').value;
            const comment = document.getElementById('comment').value;

            errorMessage.textContent = '';

            orderDetails.innerHTML = `
                <h2>Інформація про замовлення:</h2>
                <p><strong>ПІБ покупця:</strong> ${name}</p>
                <p><strong>Телефон:</strong> ${phone}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Місто:</strong> ${city}</p>
                <p><strong>Склад Нової пошти:</strong> ${novaPoshta}</p>
                <p><strong>Оплата:</strong> ${payment}</p>
                <p><strong>Кількість продукції:</strong> ${quantity}</p>
                <p><strong>Коментар:</strong> ${comment}</p>
            `;

            orderDetails.style.display = 'block';
        });