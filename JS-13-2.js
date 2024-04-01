const screenWidth = window.screen.width;
        const screenHeight = window.screen.height;
        const screenSizeElement = document.getElementById('screenSize');
        screenSizeElement.textContent = `Screen Size: ${screenWidth}px x ${screenHeight}px`;

        const backButton = document.getElementById('backButton');
        backButton.addEventListener('click', () => {
            window.location.href = 'https://github.com/PaprikaPap/JS-task/blob/main/JS-13-1.html';

        });

        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                const locationElement = document.getElementById('location');
                locationElement.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
                
                const apiKey = 'YOUR_API_KEY_HERE';
                fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`)
                    .then(response => response.json())
                    .then(data => {
                        const address = data.results[0].formatted_address;
                        locationElement.textContent += `, Address: ${address}`;
                    })
                    .catch(error => console.error(error));
            }, (error) => {
                console.error(error);
            });
        } else {
            console.error('Geolocation is not available');
        }