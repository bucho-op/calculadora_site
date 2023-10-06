function calculaTudo(numMax, aulasSem, numFaltas, numSem){
    let numFaltasFinal = numMax - numFaltas; // quantas vezes ainda posso faltar

    let numFaltasSem = Math.floor(numFaltasFinal/numSem); // quantas vezes posso faltar por semana

    let propFaltas = (numFaltasSem/aulasSem)*100; // que é um total de y% das aulas restantes
    propFaltas = propFaltas.toFixed(2);

    return [numFaltasFinal, numFaltasSem, propFaltas];
}    
    
document.getElementById("enviaValor").onclick = function(){
    let numSerie = document.getElementById("numSerie").value;
    let numFaltas = document.getElementById("numFaltas").value;
    let numSem = document.getElementById("numSemanas").value;
    console.log("Oi")
    
    
    numFaltas = parseInt(numFaltas);
    numSem = parseInt(numSem);
    let makeSwitch = true


    if (isNaN(numFaltas) || isNaN(numSem)){
        document.getElementById("output").innerHTML = `Você escreveu um valor inválido :(`;
        makeSwitch = false
    }
    


    if (makeSwitch == true){

    
        switch(numSerie){
            case "1":
                const numMaximo1 = 310;
                const aulasSemanais1 = 31;
            
                const resultado1 = calculaTudo(numMaximo1, aulasSemanais1, numFaltas, numSem)
                const r11 = resultado1[0];
                const r21 = resultado1[1];
                const r31 = resultado1[2];
            


                if (numFaltas> numMaximo1){
                    document.getElementById("output").innerHTML = `Você está reprovado :(`
                }
                else if (r21 > aulasSemanais1) {
                    document.getElementById("output").innerHTML = `Você ainda pode faltar ${r11} vezes.
                Você pode faltar o quanto quiser que não vai reprovar :)`
                } else {
                    document.getElementById("output").innerHTML = `Você ainda pode faltar ${r11} vezes.
                Você pode faltar em ${r21} aulas por semana, o que dá um total de ${r31}% das aulas restantes.`
                }
            


            
            
                break;

            case "2":
                const numMaximo2 = 300;
                const aulasSemanais2 = 29;

                const resultado2 = calculaTudo(numMaximo2, aulasSemanais2, numFaltas, numSem)
                const r12 = resultado2[0];
                const r22 = resultado2[1];
                const r32 = resultado2[2];
            

                if (numFaltas > numMaximo2){
                    document.getElementById("output").innerHTML = `Você está reprovado :(`
                }
                else if (r22 > aulasSemanais2) {
                    document.getElementById("output").innerHTML = `Você ainda pode faltar ${r12} vezes.
                Você pode faltar o quanto quiser que não vai reprovar :)`
                } else {
                    document.getElementById("output").innerHTML = `Você ainda pode faltar ${r12} vezes.
                Você pode faltar em ${r22} aulas por semana, o que dá um total de ${r32}% das aulas restantes.`
                }

                break;

            case "3":
                const numMaximo3 = 310;
                const aulasSemanais3 = 30;


                const resultado3 = calculaTudo(numMaximo3, aulasSemanais3, numFaltas, numSem)
                const r13 = resultado3[0];
                const r23 = resultado3[1];
                const r33 = resultado3[2];
                
                if (numFaltas> numMaximo3){
                    document.getElementById("output").innerHTML = `Você está reprovado :(`
                }

                else if (r23 > aulasSemanais3) {
                    document.getElementById("output").innerHTML = `Você ainda pode faltar ${r13} vezes.
                Você pode faltar o quanto quiser que não vai reprovar :)`
                } else {
                    document.getElementById("output").innerHTML = `Você ainda pode faltar ${r13} vezes.
                Você pode faltar em ${r23} aulas por semana, o que dá um total de ${r33}% das aulas restantes.`
                }

                break;
            default:
                document.getElementById("output").innerHTML = `Você escreveu um valor inválido :(`
        }
    }
}