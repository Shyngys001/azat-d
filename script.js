// Увеличение количества гостей
function incrementGuests() {
    const guestInput = document.getElementById("guests");
    let currentValue = parseInt(guestInput.value);
    if (!isNaN(currentValue)) {
        guestInput.value = currentValue + 1;
    } else {
        guestInput.value = 1; // Если текущее значение некорректно, сбросить на 1
    }
}

// Уменьшение количества гостей
function decrementGuests() {
    const guestInput = document.getElementById("guests");
    let currentValue = parseInt(guestInput.value);
    if (!isNaN(currentValue) && currentValue > 1) {
        guestInput.value = currentValue - 1;
    } else {
        guestInput.value = 1; // Минимальное значение - 1
    }
}

// Указанная дата для обратного отсчета
const eventDate = new Date("2024-12-23T17:00:00").getTime();

// Функция для обновления таймера
function startCountdown() {
    const now = new Date().getTime(); // Текущее время
    const distance = eventDate - now; // Разница между текущим временем и датой события

    if (distance <= 0) {
        // Если событие уже прошло
        document.querySelector(".countdown").innerHTML = "<p>Мереке басталды!</p>";
        return;
    }

    // Расчет времени
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Обновление значений на странице
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours < 10 ? `0${hours}` : hours;
    document.getElementById("minutes").textContent = minutes < 10 ? `0${minutes}` : minutes;
    document.getElementById("seconds").textContent = seconds < 10 ? `0${seconds}` : seconds;
}

// Запуск таймера каждую секунду
setInterval(startCountdown, 1000);

// Переключение языков
const texts = {
    ru: {
        title: "Уважаемые коллеги, партнеры, друзья!",
        subtitle: "В преддверии нового года мы приглашаем отметить с Вами 25-летие нашего ТОО «Азат и Д»",
        date: "<strong>Дата проведения:</strong> 23 декабря 2024",
        time: "<strong>Время:</strong> 17:00",
        location: "<strong>Место проведения:</strong> г.Костанай, ул.5 Апреля, 64, Ресторан «Тобыл»",
        nameLabel: "Ваше имя",
        phoneLabel: "Телефон",
        guestsLabel: "Сколько гостей?",
        submitButton: "ОТПРАВИТЬ"
    },
    kz: {
        title: "Құрметті әріптестер, серіктестер, достар!",
        subtitle: "Жаңа жыл қарсаңында біз Сіздерді біздің ТОО «Азат и Д»-ның 25 жылдығын атап өтуге шақырамыз",
        date: "<strong>Өтетін күні:</strong> 23 желтоқсан 2024",
        time: "<strong>Уақыты:</strong> 17:00",
        location: "<strong>Өтетін орны:</strong> Қостанай қ., 5 Сәуір көшесі, 64, «Тобыл» мейрамханасы",
        nameLabel: "Есіміңіз",
        phoneLabel: "Телефон",
        guestsLabel: "Қанша адам келесіздер?",
        submitButton: "ЖІБЕРУ"
    }
};

function switchLanguage(lang) {
    document.getElementById("main-title").innerHTML = texts[lang].title;
    document.getElementById("subtitle").innerHTML = texts[lang].subtitle;
    document.getElementById("event-date").innerHTML = texts[lang].date;
    document.getElementById("event-time").innerHTML = texts[lang].time;
    document.getElementById("event-location").innerHTML = texts[lang].location;
    document.getElementById("name-label").innerHTML = texts[lang].nameLabel;
    document.getElementById("phone-label").innerHTML = texts[lang].phoneLabel;
    document.getElementById("guests-label").innerHTML = texts[lang].guestsLabel;
    document.getElementById("submit-btn").innerHTML = texts[lang].submitButton;

    // Переключение активной кнопки
    document.querySelectorAll(".lang-btn").forEach((btn) => btn.classList.remove("active"));
    document.getElementById(`lang-${lang}`).classList.add("active");
}

// Инициализация
switchLanguage("kz");
startCountdown();