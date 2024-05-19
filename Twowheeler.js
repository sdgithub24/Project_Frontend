const container  = document.querySelector(".container");
const select = document.querySelector('.row .seats:not(.occupied)');

const count = document.getElementById('count');
const total = document.getElementById('total');


const slotselect = document.getElementById('vehicle');




let ticketPrice =+slotselect.value;

function updateSelectedCount(){
    const selectedSlots = document.querySelectorAll('.row .seats.selected');
    
    

    const selectedSlotsCount = selectedSlots.length;

    count.innerText = selectedSlotsCount;
    
    total.innerText = selectedSlotsCount*ticketPrice;

}


//console.log(typeof ticketPrice);

slotselect.addEventListener('change', e=>{
    ticketPrice = +e.target.value;
    updateSelectedCount();
})


container.addEventListener("click",(e)=>{
    
   
    if (e.target.classList.contains('seats')&& !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');
      
    }
    

    updateSelectedCount();
});
