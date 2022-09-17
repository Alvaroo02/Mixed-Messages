const horoscopo = {
    signo: ["Aries", "Tauro", "Géminis", "Cáncer", "Leo", "Virgo", "Libra", "Escorpio", "Sagitario", "Capricornio", "Acuario", "Piscis"],
    frase: ["persigue tus sueños", "alcanza la excelencia a través del hábito", "Vive y sueña", "este mes conocerás la desgracia", "te va a ir muy bien en el amor", "creerás que todo es posible", "sigue luchando, no pares", "se avecinan malos tiempos", "es hora de dejar lo malo ir", "si la vida de te da la espalda tírate por un acantilado", "este mes te traicionará un ser querido", "no confíes en nadie"]
}

const frase = (horoscopo) => {
    let random = Math.floor(Math.random() * 12);
    let randomSign = Math.floor(Math.random() * 12);
    let sign = "";
    let oracion = "";
    let sign2 = "";
   for(let key in horoscopo) {
    if(key === "signo") {
        sign += horoscopo[key][random];
        sign2 += horoscopo[key][randomSign];
    } else if(key === "frase") {
        oracion += horoscopo[key][random];
    }
   }
   return "Eres " + sign + " y tu frase del mes es: " + oracion + ", además eres ascendente de " + sign2;
}

frase(horoscopo);