

function setListeners(){
    const controlsAmazonas = document.querySelectorAll('.control-amazonas');
    let currentItem = 0;
    const items = document.querySelectorAll('.amazonas-item');
    const maxItems = items.length;


    controlsAmazonas.forEach(control => {
        control.addEventListener('click', () =>{
            const isLeft = control.classList.contains('arrow-left');
            if(isLeft){
                currentItem -= 1;
            }else{
                currentItem += 1;
            }
    
            if(currentItem >= maxItems){
                currentItem = 0;
            }
    
            if(currentItem < 0 ){
                currentItem = maxItems - 1;
            }
    
            items.forEach(item => item.classList.remove('current-itemAmazonas'));
            items[currentItem].scrollIntoView({
                inline: 'center',
                behavior: 'smooth',
            });
        })
    });

}
 
function init(){
    setListeners()
}

export default{
    init
}