const navSLIDE = () => {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
    const menulinks = document.querySelectorAll('.menu a');
    console.log(menulinks);
    burger.addEventListener('click', () => {
        menu.classList.toggle('menuactive');

        menulinks.forEach((a,index) => {
            if(a.style.animation){
                a.style.animation = '';
            }
            else
            {
                a.style.animation = `menulinksfade 0.5s ease forwards ${index / 7 + 0.3}s`
            }
    
        });
    });

    
}

navSLIDE();

