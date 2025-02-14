let arr = [];

const addTask = () => {

    let task = document.getElementById(`task`).value;

    
    let dup = arr.filter((val) => {
        return val.taskName == task;
    })

    if(dup.length==1){
        document.getElementById(`task`).value="";
        alert("This task is already add in the list, please add another task.")
        return false;
    }

    let obj = {
        
        taskName: task,
    }

    arr.push(obj);


    let tbl = "";
    let count = 0;

    arr.map((val) => {
        count++;
        tbl += `
            <tr>
                <td>${count}</td>
                <td>${val.taskName}</td>
            </tr>
            `
    })

    document.getElementById(`task`).value = "";

    document.getElementById(`showTask`).innerHTML = tbl;

    // alert("Your task is successfully added. ")
        
}

