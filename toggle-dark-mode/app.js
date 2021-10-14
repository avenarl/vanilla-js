let toggle = document.getElementById('toggle');

toggle.addEventListener('click', function(){
    if(toggle.checked === true){
        document.body.style.background = "#333333";
    }else {
        document.body.style.background = "#FFFFFF";
    }
});
