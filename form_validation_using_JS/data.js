const validation = () => {
    let name = document.getElementById(`name`).value;
    let email = document.getElementById(`email`).value;
    let password =  document.getElementById(`password`).value;

    if(name.length==0){
        document.getElementById(`nameError`).innerHTML = `Name is required`;   
    }
    else if(name.length<=3){
        document.getElementById(`nameError`).innerHTML = `Name should have minimum 4 latter.`
    }

    
}