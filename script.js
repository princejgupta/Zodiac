const zodiac = document.getElementById("zodiac");
const body = document.body;

const changeBackground = () => {
    switch (zodiac.value) {
        case "aries":
            body.style.backgroundColor = "blue";
            break;
        case "tauras":
            body.style.backgroundColor = "red";
            break;
        case "gemini":
            body.style.backgroundColor = "green";
            break;
        case "cancer":
            body.style.backgroundColor = "pink";
            break;
        case "leo":
            body.style.backgroundColor = "orange";
            break;
        case "virgo":
            body.style.backgroundColor = "black";
            break;
        case "libra":
            body.style.backgroundColor = "yellow";
            break;
        case "scorpio":
            body.style.backgroundColor = "brown";
            break;
        case "sagittarius":
            body.style.backgroundColor = "chocolate";
            break;
        case "aquaris":
            body.style.backgroundColor = "wheat";
            break;
        case "capricorn":
            body.style.backgroundColor = "cyan";
            break;
        case "pisces":
            body.style.backgroundColor = "#949fc3";
            break;

        default:
            body.style.backgroundColor = "white";
            break;
    }
}