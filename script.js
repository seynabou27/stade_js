


var container = document.createElement('div');
container.id = "haut";

var haut = document.getElementById('haut');
var gauche = document.getElementById('gauche');
var droite = document.getElementById('droite');


let nbrChaise1 =34;
let nbrChaise2 =18;
let nbrChaise3 =18;


let myvalue = haut.getAttribute("value");
let myvalue2 = gauche.getAttribute("value");
let myvalue3 = droite.getAttribute("value");
let myvalue4 = bas.getAttribute("value");


stade(myvalue , haut , nbrChaise1 )
stade(myvalue2 , gauche , nbrChaise2)
stade(myvalue3 , droite , nbrChaise3)
stade(myvalue4 , bas , nbrChaise1)



function stade(params , element , nbr){

        for (let i = 0; i < params; i++) {
            let div = document.createElement("div")
            div.classList.add('tribune' , 'tribune'+i)
            if (nbr > 30) {
                div.setAttribute('value',nbr - (5*i))
            }else{
                div.setAttribute('value',nbr - (2*i))
            }

            element.appendChild(div); 
            
        }

        
}
    const tribune = document.querySelectorAll('.tribune');
    let tot = 0
    for (let index = 0; index < tribune.length; index++) {

        let val = tribune[index].getAttribute('value')
        tot+= +val
        for (let i = 0 ; i < val ; i++) {
            let div = document.createElement("div")
            div.classList.add('chaise')
                
            tribune[index].appendChild(div); 
            
        }
    }
    const chaise = document.querySelectorAll('.chaise');

    for (let j = 0; j < chaise.length; j++) {
        chaise[j].innerHTML = j + 1
        
    }

