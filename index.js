function rankedCalculator(victories, defeats) {
    let media = victories - defeats

    if (media < 10) {
        return {media: media, rank: 'Ferro'}
    } else if(media <= 20){
        return {media: media, rank: 'Bronze'}
    } else if (media <= 50) {
        return {media: media, rank: 'Prata'}
    } else if (media <= 80) {
        return {media: media, rank: 'Ouro'}
    } else if (media <= 90) {
        return {media: media, rank: 'Diamante'}
    } else if (media <= 100) {
        return {media: media, rank: 'Lendário'}
    } else if (media >= 101) {
        return {media: media, rank: 'Imortal'}
    }
}

let vic = 500
let def = 412

let rankLevel = rankedCalculator(vic, def)

console.log("O Herói tem de saldo de " + rankLevel.media + " e está no nível " + rankLevel.rank)