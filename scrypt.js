const listaHerois = [
    ["Shadowblade", 840],
    ["Eldrin Sunstrider", 1250],
    ["Kaelen Fireheart", 3400],
    ["Valkyrie Frost", 5100],
    ["Thorne Ironclad", 6890],
    ["Lyra Nightshade", 8320],
    ["Aurelius Lightbringer", 9750],
    ["Zephyr Stormcaller", 11200],
    ["Ignis Dragonblood", 13600],
    ["Nova Astra", 14850]
];

function classificarHerois(lista) {
    for (const [nome, xp] of lista) {
        let nivel;

        if (xp <= 1000) {
            nivel = "Ferro";
        } else if (xp <= 2000) {
            nivel = "Bronze";
        } else if (xp <= 5000) {
            nivel = "Prata";
        } else if (xp <= 6000) {
            nivel = "Ouro";
        } else if (xp <= 8000) {
            nivel = "Platina";
        } else if (xp <= 9000) {
            nivel = "Ascendente";
        } else if (xp <= 10000) {
            nivel = "Imortal";
        } else {
            nivel = "Radiante";
        }

        console.log(`O herói de nome ${nome} está no nível de ${nivel}.`);
    }
}

classificarHerois(listaHerois);