(function(){
    let button = document.querySelectorAll('.slider__name');
    
    let desc = document.querySelectorAll('slider__description')
    let desc_wrap = document.querySelectorAll('.slider__description--wrap')

    function hideAccordeon(){

    }

    function showAccordeon(i){
        let height = getComputedStyle(desc[i]).height
        desc_wrap[i].style.height = `${height}`
        desc_wrap[i].classList.add('slider__description--wrap--active')
    }

    for (let i=0; i<button.length; i++) {
        let current = button[i];

        current.addEventListner('click', ()=>{
            showAccordeon(i)
        })
    }
})();