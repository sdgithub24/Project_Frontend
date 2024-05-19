let form = document.forms['my-form'];
let menu = form.vehicle;
let options = form.vehicle.options;



form.onsubmit = function(e){
    e.preventDefault();

    let optionValue = this.vehicle.value;
    if(optionValue == "1"){
        location.href="Twowheeler.html";
    }
    else{
        location.href="Fourwheeler.html";
    }
}