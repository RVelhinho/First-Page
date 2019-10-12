
function main(){
    var _current = 1;
    window.onbeforeunload = function () {
        document.getElementById("1").scrollIntoView();
    }
    window.addEventListener('wheel',function(e) {
        const li1 = document.getElementById('li1');
        const li2 = document.getElementById('li2');
        const li3 = document.getElementById('li3');
        if(e.deltaY < 0 && _current==2){
            document.getElementById("1").scrollIntoView({ behavior: 'smooth' });
            li1.style.fontSize = '2.5vw';
            li1.style.opacity = '1';
            li2.style.fontSize = '1.3vw';
            li2.style.opacity = '.5';
            li3.style.fontSize = '1.3vw';
            li3.style.opacity = '.5';
            _current = 1;
         }
        else if((e.deltaY < 0 && _current==3) || (e.deltaY > 0 && _current==1)){
            document.getElementById("2").scrollIntoView({ behavior: 'smooth' });
            li1.style.fontSize = '1.3vw';
            li1.style.opacity = '.5';
            li2.style.fontSize = '2.5vw';
            li2.style.opacity = '1';
            li3.style.fontSize = '1.3vw';
            li3.style.opacity = '.5';
            _current = 2;
        }
        else if(e.deltaY > 0 && _current==2){
            document.getElementById("3").scrollIntoView({ behavior: 'smooth' });
            li1.style.fontSize = '1.3vw';
            li1.style.opacity = '.5';
            li2.style.fontSize = '1.3vw';
            li2.style.opacity = '.5';
            li3.style.fontSize = '2.5vw';
            li3.style.opacity = '1';
            _current = 3;
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
            _current = 1;
        }
        else if(event.target == li2){
            document.getElementById("2").scrollIntoView({ block: 'end',  behavior: 'smooth' });
            li1.style.fontSize = '1.3vw';
            li1.style.opacity = '.5';
            li2.style.fontSize = '2.5vw';
            li2.style.opacity = '1';
            li3.style.fontSize = '1.3vw';
            li3.style.opacity = '.5';
            _current = 2;
        }
        else if(event.target == li3){
            document.getElementById("3").scrollIntoView({ block: 'end',  behavior: 'smooth' });
            li1.style.fontSize = '1.3vw';
            li1.style.opacity = '.5';
            li2.style.fontSize = '1.3vw';
            li2.style.opacity = '.5';
            li3.style.fontSize = '2.5vw';
            li3.style.opacity = '1';
            _current = 3;
        }
    })
}


main();