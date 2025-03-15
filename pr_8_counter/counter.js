let addbtn = document.getElementById(`addbtn`);
let lessbtn = document.getElementById(`lessbtn`);
let resetbtn = document.getElementById(`resetbtn`);

let count = 0

document.getElementById(`count`).innerHTML = count;

if (count == 0) {
    lessbtn.disabled = true;
}

// setInterval(() => {
//     count++;
//     if(count>0){
//         lessbtn.disabled = false;   
//     }
//     document.getElementById(`count`).innerHTML = count;

// }, 500);

const add = () => {
    if (count == 0) {
        lessbtn.disabled = false;
    }
    count++;
    document.getElementById(`count`).innerHTML = count;
}

const less = () => {
    if (count == 0) {
        lessbtn.disabled = true;
    }
    if (count > 0) {
        count--;
        document.getElementById(`count`).innerHTML = count;
    }
}

const reset = () => {
    count = 0;
    document.getElementById(`count`).innerHTML = count;

    lessbtn.disabled = true;

}