/*FOR THE EMAIL BUTTON*/
function sub(){
    if(document.querySelector('.inpt').value==""){
        alert('Enter Email');
    
    }
    else{
        alert('Thanks For Submiting')
    }
}

const btn_one = document.querySelector('.btn_one').addEventListener('click',sub)


