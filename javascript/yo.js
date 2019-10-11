
function main(){
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
    
    window.addEventListener('wheel',function(e) {
        if(e.deltaY < 0 && scrollY > 800 && scrollY < 850){
            document.getElementById("1").scrollIntoView({ block: 'end',  behavior: 'smooth' });
            document.getElementById('li1').style.fontSize = '2.5vw';
            document.getElementById('li1').style.opacity = '1';
            document.getElementById('li2').style.fontSize = '1.3vw';
            document.getElementById('li2').style.opacity = '.5';
            document.getElementById('li3').style.fontSize = '1.3vw';
            document.getElementById('li3').style.opacity = '.5';
         }
        else if((e.deltaY < 0 && scrollY > 1600 && scrollY < 1650) || (e.deltaY > 0 && scrollY >= 0 && scrollY < 50)) {
            document.getElementById("2").scrollIntoView({ block: 'end',  behavior: 'smooth' });
            document.getElementById('li1').style.fontSize = '1.3vw';
            document.getElementById('li1').style.opacity = '.5';
            document.getElementById('li2').style.fontSize = '2.5vw';
            document.getElementById('li2').style.opacity = '1';
            document.getElementById('li3').style.fontSize = '1.3vw';
            document.getElementById('li3').style.opacity = '.5';
        }
        else if(e.deltaY > 0 && scrollY > 800 && scrollY < 850){
            document.getElementById("3").scrollIntoView({ block: 'end',  behavior: 'smooth' });
            document.getElementById('li1').style.fontSize = '1.3vw';
            document.getElementById('li1').style.opacity = '.5';
            document.getElementById('li2').style.fontSize = '1.3vw';
            document.getElementById('li2').style.opacity = '.5';
            document.getElementById('li3').style.fontSize = '2.5vw';
            document.getElementById('li3').style.opacity = '1';
        }
        
    });


    window.addEventListener('click', function(){
        const li1 = document.getElementById('li1');
        const li2 = document.getElementById('li2');
        const li3 = document.getElementById('li3');
        if (event.target == li1){
            document.getElementById("1").scrollIntoView({ block: 'end',  behavior: 'smooth' });
            li1.style.fontSize = '2.5vw';
            li1.style.opacity = '1';
            li2.style.fontSize = '1.3vw';
            li2.style.opacity = '.5';
            li3.style.fontSize = '1.3vw';
            li3.style.opacity = '.5';
        }
        else if(event.target == li2){
            document.getElementById("2").scrollIntoView({ block: 'end',  behavior: 'smooth' });
            li1.style.fontSize = '1.3vw';
            li1.style.opacity = '.5';
            li2.style.fontSize = '2.5vw';
            li2.style.opacity = '1';
            li3.style.fontSize = '1.3vw';
            li3.style.opacity = '.5';
        }
        else if(event.target == li3){
            document.getElementById("3").scrollIntoView({ block: 'end',  behavior: 'smooth' });
            li1.style.fontSize = '1.3vw';
            li1.style.opacity = '.5';
            li2.style.fontSize = '1.3vw';
            li2.style.opacity = '.5';
            li3.style.fontSize = '2.5vw';
            li3.style.opacity = '1';
        }
    })
}


main();