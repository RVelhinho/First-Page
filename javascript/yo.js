const li1 = document.getElementById('li1');
const li2 = document.getElementById('li2');
const li3 = document.getElementById('li3');



function main(){
    window.addEventListener('wheel',function(e) {
        if(e.deltaY < 0 && scrollY >= 800 && scrollY < 1600){
            document.getElementById("1").scrollIntoView({ block: 'end',  behavior: 'smooth' });
            document.getElementById('li1').style.fontSize = '2.5vw';
            document.getElementById('li1').style.opacity = '1';
            document.getElementById('li2').style.fontSize = '1.3vw';
            document.getElementById('li2').style.opacity = '.5';
            document.getElementById('li3').style.fontSize = '1.3vw';
            document.getElementById('li3').style.opacity = '.5';
         }
        else if(e.deltaY < 0 && scrollY >= 1600){
            document.getElementById("2").scrollIntoView({ block: 'end',  behavior: 'smooth' });
            document.getElementById('li1').style.fontSize = '1.3vw';
            document.getElementById('li1').style.opacity = '.5';
            document.getElementById('li2').style.fontSize = '2.5vw';
            document.getElementById('li2').style.opacity = '1';
            document.getElementById('li3').style.fontSize = '1.3vw';
            document.getElementById('li3').style.opacity = '.5';
        }
        else if(e.deltaY >= 0 && scrollY < 800){
            document.getElementById("2").scrollIntoView({ block: 'end',  behavior: 'smooth' });
            document.getElementById('li1').style.fontSize = '1.3vw';
            document.getElementById('li1').style.opacity = '.5';
            document.getElementById('li2').style.fontSize = '2.5vw';
            document.getElementById('li2').style.opacity = '1';
            document.getElementById('li3').style.fontSize = '1.3vw';
            document.getElementById('li3').style.opacity = '.5';
        }
        else if(e.deltaY > 0 && scrollY >= 800 && scrollY < 1600){
            document.getElementById("3").scrollIntoView({ block: 'end',  behavior: 'smooth' });
            document.getElementById('li1').style.fontSize = '1.3vw';
            document.getElementById('li1').style.opacity = '.5';
            document.getElementById('li2').style.fontSize = '1.3vw';
            document.getElementById('li2').style.opacity = '.5';
            document.getElementById('li3').style.fontSize = '2.5vw';
            document.getElementById('li3').style.opacity = '1';
        }
        
    });
}


main();