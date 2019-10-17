
function main(){
    var _current = 1;
    window.onbeforeunload = function () {
        document.getElementById("1").scrollIntoView();
    }

    var scroll = window.requestAnimationFrame ||
            function(callback){ window.setTimeout(callback, 1000/60)};
    var elementsToShow = document.querySelectorAll('.show-on-scroll');
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
        (rect.top <= 0
            && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
        );
    }
    function loop(){
        console.log(elementsToShow.length);
        elementsToShow.forEach(function(element, i){
            if(isElementInViewport(element)){
                element.classList.add('is_visible');
            }
        });
        scroll(loop);
    }
    loop();
    window.addEventListener('wheel',function(e) {
        const li1 = document.getElementById('li1');
        const li2 = document.getElementById('li2');
        const li3 = document.getElementById('li3');
        const nh = document.getElementsByClassName('nav_helper')[0];
        if(e.deltaY < 0 && _current==2){
            document.getElementById("1").scrollIntoView({ behavior: 'smooth' });
            li1.style.opacity = '1';
            li2.style.opacity = '.5';
            li3.style.opacity = '.5';
            nh.style.top = '34%';
            _current = 1;
         }
        else if((e.deltaY < 0 && _current==3) || (e.deltaY > 0 && _current==1)){
            document.getElementById("2").scrollIntoView({ behavior: 'smooth' });
            li1.style.opacity = '.5';
            li2.style.opacity = '1';
            li3.style.opacity = '.5';
            nh.style.top = '43%';
            _current = 2;
            
        }
        else if(e.deltaY > 0 && _current==2){
            document.getElementById("3").scrollIntoView({ behavior: 'smooth' });
            li1.style.opacity = '.5';
            li2.style.opacity = '.5';
            li3.style.opacity = '1';
            nh.style.top = '52%';
            _current = 3;
        }
        
    });


    window.addEventListener('click', function(){
        const li1 = document.getElementById('li1');
        const li2 = document.getElementById('li2');
        const li3 = document.getElementById('li3');
        const nh = document.getElementsByClassName('nav_helper')[0];
        if (event.target == li1){
            document.getElementById("1").scrollIntoView({ block: 'end',  behavior: 'smooth' });
            li1.style.opacity = '1';
            li2.style.opacity = '.5';
            li3.style.opacity = '.5';
            nh.style.top = '34%';
            _current = 1;
        }
        else if(event.target == li2){
            document.getElementById("2").scrollIntoView({ block: 'end',  behavior: 'smooth' });
            li1.style.opacity = '.5';
            li2.style.opacity = '1';
            li3.style.opacity = '.5';
            nh.style.top = '43%';
            _current = 2;
        }
        else if(event.target == li3){
            document.getElementById("3").scrollIntoView({ block: 'end',  behavior: 'smooth' });
            li1.style.opacity = '.5';
            li2.style.opacity = '.5';
            li3.style.opacity = '1';
            nh.style.top = '52%';
            _current = 3;
        }
    })
}

main();