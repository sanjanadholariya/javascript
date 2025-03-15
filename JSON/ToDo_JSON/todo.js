let arr = [];

const checkTask = () => {
    let localTasks = JSON.parse(localStorage.getItem('task'));
    if (localTasks) {
        arr = localTasks;
    }

    showtask();
}

const showtask = () => {

    

    let tbl = "";
    arr.map((val) => {
        tbl += `
                <tr>
                    
                    <td>${val.taskid}</td>
                    <td>${val.taskname}</td>
                    <td>
                        <button class="btn btn-warning btn-sm" onclick="deleteTask(${val.taskid})">Delete</button>
                        <button class="btn btn-info btn-sm" onclick="editData(${val.taskid},'${val.taskname}')">Edit</button>
                        <select id="status_${val.taskid}" onchange="showStatus(${val.taskid})">
                            <option selected>----select option----</option>
                            <option value="success">success</option>
                            <option value="pending" >pending</option>
                            <option value="cancel" >cancel</option>
                        </select>
                    </td>
                    <td id="statusText_${val.taskid}" style="color:${checkColor(val.status)};">
                           ${val.status}
                    </td>
                    </tr>
                `
    })

    document.getElementById(`viewtask`).innerHTML = tbl;
}

const addTask = () => {

    let task = document.getElementById(`Task`).value;

    if (task == "") {
        alert("Add a task");
        return;
    }

    let duplicate = arr.some((val) => val.taskname === task);

    if (duplicate) {
        alert("This task already exists. Please enter another task.");
        document.getElementById("Task").value = "";
        return;
    }

    let obj = {
        taskname: task,
        taskid: Math.floor(Math.random() * 1000),
        status: "pending",
    }

    arr.push(obj);

    alert("record added...");

    localStorage.setItem('task', JSON.stringify(arr));

    document.getElementById(`Task`).value = "";

    showtask();

}

const editData = (id, task) => {
    document.getElementById('add').style.display = "none";
    document.getElementById('edit').style.display = "block";

    document.getElementById('Task').value = task;
    document.getElementById('editId').value = id;

}

const editTask = () => {

    let task = document.getElementById('Task').value;
    let editId = parseInt(document.getElementById('editId').value);

    arr = arr.map((val) => {
        if (val.taskid === editId) {
            // return {...val,taskname:task};
            val.taskname = task;
        }
        return val;
    })

    localStorage.setItem('task', JSON.stringify(arr));
    alert("record will be update");
    showtask();
    document.getElementById('editId').value = "";
    document.getElementById('Task').value = "";

    document.getElementById('add').style.display = "block";
    document.getElementById('edit').style.display = "none";
}

const clearTask = () => {
    localStorage.removeItem('task');
    arr = [];
    showtask();
    alert("all task are deleted..");
}

const deleteTask = (taskid) => {
    arr = arr.filter((val) => {
        return val.taskid != taskid;
    })
    localStorage.setItem('task', JSON.stringify(arr));
    alert(`${taskid}'s task will be delete.`);
    showtask();
}

const showStatus = (id) => {

    let status = document.getElementById(`status_${id}`).value;

    arr = arr.map((val) => {
        if (val.taskid == id) {
            val.status = status;
        }
        return val;
    })

    localStorage.setItem('task',JSON.stringify(arr));

    document.getElementById(`statusText_${id}`).innerText = status;
    document.getElementById(`statusText_${id}`).style.color=checkColor(status);

    showtask();
}

const checkColor = (status) => {
    switch (status){
        case "pending":
            return "orange";
        case "success":
            return "green";
        case "cancel":
            return "red"; 
    }
}


window.onload = checkTask;
