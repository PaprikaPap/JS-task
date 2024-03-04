let birthYear = prompt("Введіть свій рік народження:");

if (birthYear === null) 
{
    alert("Шкода, що Ви не захотіли ввести свій рік народження.");
} else 
{
    let city = prompt("Введіть місто, де ви живете:");
    
    if (city === null) 
    {
        alert("Шкода, що Ви не захотіли ввести своє місто проживання.");
    } else 
    {
        let sport = prompt("Який ваш улюблений вид спорту?");
        
        if (sport === null) 
        {
            alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту.");
        } else 
        {
            let currentYear = new Date().getFullYear();
            let age = currentYear - birthYear;

            let capitalCities = ["Київ", "Вашингтон", "Лондон"];
            let message;
            if (capitalCities.includes(city)) 
            {
                let country = city === "Київ" ? "України" : city === "Вашингтон" ? "США" : "Великої Британії";
                message = `Ти живеш у столиці ${country}`;
            } else 
            {
                message = `Ти живеш у місті ${city}`;
            }

            let sportsChampions = {
                "футбол": "Ліонель Мессі",
                "баскетбол": "Леброн Джеймс",
                "теніс": "Рафаель Надаль"
            };
            let championMessage = sportsChampions[sport.toLowerCase()] ?
                `Круто! Хочеш стати ${sportsChampions[sport.toLowerCase()]}?` :
                "";

            alert(`Ваш вік: ${age}\n${message}\n${championMessage}`);
        }
    }
}
