/*  Escola de Magia 2.0
    Diogo Eduardo Fernandes Barbosa
    Data: 29/07/2023
    Escola Senai Nadir dias de Figueiredo
*/

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
        location.href = "aprovado.html";
    }else if(magia == "Cura" && habilidade == "Feitiço de Proteção"){
        location.href = "aprovado.html";
    }else if(magia == "Transformação" && respeito >= 8){
        location.href = "aprovado.html";
    }else if(magia == "Ilusão" && etica == "Sim"){
        location.href = "aprovado.html";
    }else{
        location.href = "reprovado.html";
    }
}