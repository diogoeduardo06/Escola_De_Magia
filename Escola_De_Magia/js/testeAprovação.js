function criterios(){
    let magia = document.getElementById("magia").value;
    console.log(magia)

    let habilidade = document.getElementById("habilidade").value;
    console.log(habilidade)

    let GrauRespeito = document.getElementById("respeito").value;
    console.log(GrauRespeito)

    let etica = document.getElementById("etica").value;
    console.log(etica)

    let equipe = document.getElementById("equipe").value;
    console.log(equipe)

    let aprender = document.getElementById("aprender").value;
    console.log(aprender)

    let respeito = Number(GrauRespeito)

    if (magia == "Fogo" && habilidade == "Controle de Elemento"){
        alert("Parabens, você foi aprovado.")
    }else if(magia == "Cura" && habilidade == "Feitiços de Proteção"){
        alert("Parabens, você foi aprovado.")
    }else if(magia == "Transformação" && respeito >= 8){
        alert("Parabens, você foi aprovado.")
    }else if(magia == "Ilusão" && etica == "Sim"){
        alert("Parabens, você foi aprovado.")
    }else{
        alert("Sinto muito, você foi reprovado.")
    }
}
