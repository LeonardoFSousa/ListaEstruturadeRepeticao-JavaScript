function exe1(){
    let conta1 = 1
        while (conta1 <= 5) {
            let A = Number(prompt('Informe valor de A'))
            let B = Number(prompt('Informe valor de B'))
            let C = Number(prompt('Informe valor de C'))
            let D = Number(prompt('Informe valor de D'))
            let conta2 = 1
            while (conta2 <= 3){
                if (A > B ){
                    let AUX; AUX = A; A = B; B = AUX;
                }
                if (B > C){
                    let AUX; AUX = B; B = C; C = AUX;
                }
                if (C > D){
                    let AUX; AUX = C; C = D; D = AUX;
                }
                conta2++
            }
            alert(`Ordenação crescente ${A} ${B} ${C} ${D}`)
            alert(`Ordenação decrescente ${D} ${C} ${B} ${A}`)
            conta1++
        }
}

function exe2(){
    var overlay = document.getElementById("tabela");
    overlay.style.display = "flex";

    overlay.onclick = function() {
        overlay.style.display = "none";
      }
}

function exe3(){
    let idade
    let f1 = 0; let f2 = 0; let f3 = 0; let f4 = 0; let f5 = 0;
    for(let conta = 1; conta <= 8; conta++){
        idade = prompt(`Informe a idade ${conta}`)
        if ((idade >= 0) && (idade <= 15)){
            f1++
        }
        else if ((idade >= 16) && (idade <= 30)){
                f2++
        }
        else if ((idade >= 31) && (idade <= 45)){
                f3++
        } 
        else if ((idade >= 46) && (idade <= 60)){
                f4++
        }
        else if ((idade >= 61) && (idade <= 120)){
                f5++
        }
        else alert(`Idade inválida`)
    }
    let pf1 = f1 / 8 * 100
    let pf5 = f5 / 8 * 100
    alert(`F1: ${f1} F2: ${f2} F3: ${f3} F4: ${f4} F5: ${f5} --- F1 ${pf1}% F5 ${pf5}%`)
}

function exe4(){
    let numero = prompt(`Informe o número desejado`)    
    let saida = ""
    for(let conta = 0; conta <= 10; conta++){
        saida = saida + "\n " + `${numero} x ${conta} = ${numero * conta}`
    }   
    alert(saida)
}

function exe5(){

    let conta1 = 1
    while (conta1 <= 10){
        let conta2 = 0
        let saida = ""
        while(conta2 <= 10){
            saida = saida + `\n ${conta1} x ${conta2} = ${conta1*conta2}` 
            conta2++
        }
        alert(saida)
        conta1++
    }
}

function exe6(){
    let codigo;
    let valor;
    let totalAvista = 0;
    let totalPrazo = 0;
    let conta = 1;
  
    while (conta <= 15) {
      codigo = prompt("Informe P para transação a prazo ou V para transação à vista").toUpperCase();
      valor = parseFloat(prompt("Informe o valor da transação"));
  
      if (codigo === "P") {
        totalPrazo += valor;
      } else if (codigo === "V") {
        totalAvista += valor;
      } else {
        alert("Código Inválido, o valor não será contabilizado");
        continue;
      }
      conta++;
    }
  
    let total = totalAvista + totalPrazo;
    let primeiraPrestacao = totalPrazo / 3;
  
    alert(`Total das compras à vista: R$${totalAvista.toFixed(2)}
Total das compras a prazo: R$${totalPrazo.toFixed(2)}
Total das compras efetuadas: R$${total.toFixed(2)}
Valor da primeira prestação das compras a prazo: R$${primeiraPrestacao.toFixed(2)}`);
}

function exe7(){
    let idade, altura, peso
    let item1 = 0, item2 = 0, qtdeItem2 = 0, item3 = 0
    for (let conta = 1; conta<= 5;conta++){
        idade = Number(prompt(`Informe a idade ${conta}`))
        altura = Number(prompt(`Informe a altura ${conta}`))
        peso = Number(prompt(`Informe o peso ${conta}`))
       
        if (idade > 50){
            item1++ 
        }        
        
        if ((idade >= 10) && (idade <= 20)){
            item2 += altura 
            qtdeItem2++ 
        }
        if (peso < 40){
            item3++
        }
    }

    alert(`Qtde pessoas idade > 50 = ${item1}`)
    if (qtdeItem2 != 0){
        alert(`Média alturas com idade entre 10 e 20 = ${(item2/qtdeItem2).toFixed(2)}`)
    }
    alert(`% com peso < 40 = ${item3/5*100}%`) 

}

function exe8(){
    let idade, altura, peso, olhos, cabelos;
    let item1 = 0;
    let item2soma=0; let item2conta = 0;
    let item3 = 0; let item4 = 0;

    for(let conta = 1; conta <= 6; conta++){
        idade = Number (prompt(`informe idade`))
        altura = Number (prompt(`informe altura`))
        peso = Number (prompt(`informe peso`))
        olhos = prompt(`informe cor dos olhos (A,P,V e C)`).toLocaleUpperCase()
        cabelos = prompt(`informe cor dos cabelos (P,C,L e R)`).toUpperCase
        if((idade > 50) && (peso < 60)){
            item1++
        }
        if((altura <= 1.50)){
             item2conta++
            item2soma = item2soma + idade
        }
        if (olhos === `A`){
            item3++
        }
        if((cabelos === `R`) && (olhos !== `A`)){
        item4++
        }
}
    alert (`valor do item 1: ${item1}`)
    alert (`valor do item 2: ${item2soma/item2conta}`)
    alert (`valor do item 3: ${item3/6*100}`)
    alert (`valor do item 4: ${item4}`)

}

function exe9(){
    let pessoa = 1
    let var1 = 0
    let var2 = 0
    let acm1 = 0
    while (pessoa <= 10) {
        let idade = Number(prompt(`Informe a idade da ${pessoa}° pessoa`))
        let altura = Number(prompt(`Informe a altura da ${pessoa}° pessoa`))
        let peso = Number(prompt(`Informe o peso da ${pessoa}° pessoa`))
        pessoa++
        acm1 = acm1 + idade

        if ((peso > 90) && (altura < 1.50)) {
            var1++
        }

        if ((altura > 1.90) && (idade >= 10) && (idade <= 30)) {
            var2++
        }

    }

    alert(`Média das idades das pessoas: ${acm1 / pessoa}`)
    alert(`Quantidade de pessoas com peso superior a 90 kg e altura inferior a 1,50: ${var1}`)
    alert(`Porcentagem pessoas entre 10 e 30 anos que medem mais de 1,90: ${((var2 / pessoa) * 100)}%`)

}

function exe10() {
    let somaPares = 0;
    let somaPrimos = 0;
    let contadorPrimos;
  
    
    for (let conta1 = 1; conta1 <= 10; conta1++) {
      let num = Number(prompt(`Informe o ${conta1}° número:`));
  
      
      if (num % 2 === 0) {
        somaPares += num;
      }
  
      
      contadorPrimos = 0;
      for (let conta2 = 1; conta2 <= num; conta2++) {
        if (num % conta2 === 0) {
          contadorPrimos++;
        }
      }
      if (contadorPrimos === 2) {
        somaPrimos += num;
      }
    }
  
    alert(`Soma dos números pares: ${somaPares}`);
    alert(`Soma dos números primos: ${somaPrimos}`);
}
  
function exe20(){

    let opcao; let nota1, nota2, nota3; let peso1, peso2, peso3

    do{
        opcao = Number (prompt("\n 1. Média Aritmética \n 2. Média Ponderada \n 3. Sair"))

        switch(opcao) {
            case 1 :
                nota1 = Number (prompt('Informe a 1° Nota'))
                nota2 = Number (prompt('Informe a 2° Nota'))
                nota3 = Number (prompt('Informe a 3° Nota'))

                let mediaA
                mediaA = (nota1 + nota2 + nota3) / 3
                alert(`A média aritmética das notas é: ${mediaA}`)
        
            break
            case 2 :
                nota1 = Number (prompt('Informe a 1° Nota'))
                peso1 = Number (prompt('Informe o peso da 1° Nota'))
                nota2 = Number (prompt('Informe a 2° Nota'))
                peso2 = Number (prompt('Informe o peso da 2° Nota'))
                nota3 = Number (prompt('Informe a 3° Nota'))
                peso3 = Number (prompt('Informe o peso da 3° Nota'))
                
                let somapesos = peso1 + peso2 + peso3
                    if (somapesos != 0){

                    let mediaP

                    mediaP = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)) / somapesos
                    alert(`A média ponderada das notas é: ${mediaP}`)
                    }
                    else{
                        alert("A soma dos pesos da 0, portanto, é impossível fazer a conta!")
                    }

            break
            case 3: alert("Programa será encerrado")

            break

            default : alert("Opção Inválida")
        }
    }
    while (opcao != 3)
}

function exe21(){

    let opcao
    let C1 = 0
    let C2 = 0
    let C3 = 0
    let C4 = 0
    let C5 = 0
    let C6 = 0
    let total = 0

    do{
        opcao = Number (prompt(" Escolha a sua opção de voto \n 1. Candidato 1 \n 2. Candidato 2 \n 3. Candidato 3 \n 4. Candidato 4 \n 5. Voto Nulo \n 6. Voto Branco \n 0. Para encerrar"))

        switch(opcao){

            case 1: C1++

            break

            case 2: C2++

            break

            case 3: C3++

            break

            case 4: C4++

            break

            case 5: C5++

            break

            case 6: C6++

            break

            case 0: alert("Votação encerrada, verifique o resultado")
                    
            break

            default: alert.apply("Opção Inválida")

        }
    }
    while (opcao != 0)

    alert(`Total de Votos do Canditado 1: ${C1}`)
    alert(`Total de Votos do Canditado 2: ${C2}`)
    alert(`Total de Votos do Canditado 3: ${C3}`)
    alert(`Total de Votos do Canditado 4: ${C4}`)
    alert(`Total de Votos Nulos: ${C5}`)
    alert(`Total de Votos Branco: ${C6}`)


    total = C1 + C2 + C3 + C4 + C5 + C6
    alert(`% de votos nulos: ${C5 / total * 100}%`)
    alert(`% de votos brancos: ${C6 / total * 100}%`)
}

function exe23(){
    let opcao
    let salario, novo, meses, ferias

    do
    {
        opcao = Number (prompt(" Escolha uma opção \n 1. Novo Salário \n 2. Férias \n 3. 13° Salário \n 4. Sair"))
        switch(opcao){
            case 1: salario = Number (prompt("Informe Salário"))
                    if ((salario >=0) && (salario < 210)){
                        novo = salario + (salario *15/100)
                    }
                    else if ((salario >=210) && (salario < 660)){
                        novo = salario + (salario *10/100)
                    }
                    else if (salario > 600){
                        novo = salario + (salario *5/100)
                    }
                    else{
                        alert("Salário Negativo")
                        break
                    }
                    alert(`Novo salário: R$${novo}`)
                    break

            case 2: salario = Number (prompt("Informe Salário"))
                    ferias = salario + (salario / 3)
                    alert(`Valor das férias: $${(ferias).toFixed(2)}`)
                    break

            case 3: salario = Number (prompt("Informe Salário"))
                    meses = Number (prompt("Informe a Quantidade de Meses Trabalhado"))
                    if ((meses >= 0) && (meses <= 12)){
                        decimoterceiro = (salario * (meses/12))
                        alert(`Seu décimo terceiro é: R$${(decimoterceiro).toFixed(2)}`)
                    }
                    else {
                        alert(`Valor negativo ou maior que 12`)
                        break
                    }
            break

            case 4: alert("O programa será encerrado")
            break

            default: alert("Opção inválida")
        }
    }
    while(opcao != 4)
}