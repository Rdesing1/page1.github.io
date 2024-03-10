let classMenuMovil = 'header-nav-responsive';
let classMenuDesktop = 'header-nav';

let $menuMovil = document.querySelector('.'+classMenuMovil);
let $menuDesktop = document.querySelector('#menu-responsive');

$menuMovil.addEventListener('click',(e)=>{
    if($menuMovil.classList.contains(classMenuMovil)){
        $menuMovil.classList.remove(classMenuMovil);
        $menuMovil.classList.add('hidden');
    }
});


$menuDesktop.addEventListener('click',(e)=>{
    $menuMovil.classList.remove('hidden');
    $menuMovil.classList.add(classMenuMovil);
});