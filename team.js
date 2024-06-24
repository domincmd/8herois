const reserva1 = ["Domin", "Zagueiro", "placeholder.jpg", "Descrição do Domin"];
const reserva2 = ["Thomas", "Zagueiro", "placeholder.jpg", "Descrição do Thomas"];
const reserva3 = ["Joe", "Meia", "placeholder.jpg", "Descrição do Joe"];
const goleiro = ["Fred", "Goleiro", "placeholder.jpg", "Descrição do Fred"];
const zagueiro1 = ["Thomas", "Zagueiro", "placeholder.jpg", "Descrição do Thomas"];
const zagueiro2 = ["Joe", "Zagueiro", "placeholder.jpg", "Descrição do Joe"];
const meio1 = ["Bertero", "Meia", "placeholder.jpg", "Descrição do Bertero"];
const meio2 = ["Murilo", "Meia", "placeholder.jpg", "Descrição do Murilo"];
const ala1 = ["Castro", "Ala", "placeholder.jpg", "Descrição do Castro"];
const ala2 = ["Oti", "Ala", "placeholder.jpg", "Descrição do Oti"];
const atacante = ["Baracat", "Atacante", "placeholder.jpg", "Descrição do Baracat"];

const playersData = {
    reserva1,
    reserva2,
    reserva3,
    goleiro,
    zagueiro1,
    zagueiro2,
    meio1,
    meio2,
    ala1,
    ala2,
    atacante
};

const players = document.querySelectorAll(".player");

const cardh1 = document.querySelector(".card>h1")
const cardpos = document.querySelector(".card>h4")
const cardimg = document.querySelector(".card>img")
const carddesc = document.querySelector(".card>p")

players.forEach((player) => {
    player.addEventListener("mouseover", e => {
        const className = player.className.split(" ")[1]; // Assuming the class name structure is like "player goleiro"
        if (playersData[className]) {
            console.log("HOVER " + playersData[className]);

            cardh1.innerHTML = playersData[className][0]
            cardpos.innerHTML = playersData[className][1]
            cardimg.src = "images/players/" + playersData[className][2]
            carddesc.innerHTML = playersData[className][3]
        } else {
            console.log("HOVER player data not found");
        }
    });
});
