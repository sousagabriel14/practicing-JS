let valores = []
let soma = 0
let maiorVal = 0
let menorVal = 0

document.getElementById('final').disabled=true

function adicionar(){
    let num = document.getElementById('txtnum')
    let tabela = document.getElementById('tab')
    let option = document.createElement('option')
    n = Number(num.value)
    valores.push(n)
    

    if(num.value > 100 || num.value < 1){
        window.alert('Número inválido! Por favor digite um valor entre 1 e 100.')    
    } else{
        for(let pos in valores) {
            option.text = `Valor ${n} adicionado`
            tabela.add(option)
            num.value = ''
            num.focus() 
        }  
        
        if(valores.length == 2) {
            document.getElementById('final').disabled=false
        }
    }  

}

function finalizar(){
    for(let pos in valores) {
        soma += valores[pos]
    }  

    let somar = document.getElementById('soma')
    let med = document.getElementById('med')
    let maiorVal = document.getElementById('maiorV')
    let menorVal = document.getElementById('menorV')
    
    for(let pos in valores) {
       if(valores[pos] > n) {
           n = valores[pos]
           maiorVal = n
       } else if(valores[pos] < n) {
            n = valores[pos]
            menorVal = n
       }
    }
     
    somar.innerHTML = `A soma dos valores adicionados é ${soma} \u{2714}`
    med.innerHTML = `A média dos valores adicionados é ${soma/2} \u{2714}`
    menorV.innerHTML = `O menor valor que foi encontrado é ${menorVal} \u{2714}`
    maiorV.innerHTML = `O maior valor que foi encontrado é ${maiorVal} \u{2714}`  
}

 
