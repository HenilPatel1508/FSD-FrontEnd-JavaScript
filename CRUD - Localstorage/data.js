let submitdata = document.getElementById('submitdata')

function SetLocalStorage(){
    if(localStorage.getItem("userdata"))
    {
        let showdiv=document.querySelector('#show')
        showdiv.innerHTML=" "
        let arr =JSON.parse(localStorage.getItem("userdata"))

        arr.forEach((user,id) => {
            let newdiv = document.createElement('table')

            let HTMLDATA=`
            <tr>
                <td width="100">${id}</td>
                <td width="100">${user.name}</td>
                <td width="100">${user.password}</td>
                <td><button class = "btn btn-success" onClick="DeleteData(${id})">Delete</button></td>
                <td><button class = "btn btn-warning" onClick="onEdit(${id})">Update</button></td>
            </tr>
            `
            newdiv.insertAdjacentHTML('afterbegin',HTMLDATA);
            showdiv.insertAdjacentElement('afterbegin',newdiv);
        });
    }
    else{
        let arr = [];
        let ArrData = {
            name:"",
            password:""}
            arr.push(ArrData);
            localStorage.setItem("userdata",JSON.stringify(arr))
    }
}

submitdata.addEventListener('click',
    function(){
        let arr = JSON.parse(localStorage.getItem("userdata"));
        console.log("button cicked");
        let name = document.getElementById('name').value;
        let password = document.getElementById('password').value;

        //   let arr = [];
        let ArrData={
            name:name,
            password:password
        
        }
        arr.push(ArrData);
        localStorage.setItem("userdata",JSON.stringify(arr));
        
        // console.log(arr);
        alert("Data Added!");
        SetLocalStorage();
    }
)

//Delete data

function DeleteData(id)
{
    let arr = JSON.parse(localStorage.getItem("userdata"))
    let deletearr = [...arr]
    deletearr.splice(id,1)
    arr = [...deletearr]
    alert("Data Deleted!")
    localStorage.setItem("userdata",JSON.stringify(arr))
    SetLocalStorage()
}

//Edit data

function onEdit(id)
{
    console.log(id);
    let arr = JSON.parse(localStorage.getItem("userdata"));
    console.log(arr);
    let name = document.querySelector('#name').value = arr[id].name
    let password = document.querySelector('#password').value = arr[id].password

    submitdata.setAttribute('disabled',true)

    let editbtn = document.createElement('button')
    let form = document.querySelector('#form')
    let btnedit = document.querySelectorAll('#btnedit')

    editbtn.innerHTML="update-edit"
    btnedit.forEach((ele)=>{
        ele.setAttribute('disabled',true)
    })
    form.insertAdjacentElement("beforeend",editbtn)

    editbtn.addEventListener('click',function(e){
        e.preventDefault()
        let newname = document.querySelector('#name')
        let newpass = document.querySelector('#password')

        arr.splice(id,1,{
            name:newname.value,
            password:newpass.value
        })
        localStorage.setItem('userdata',JSON.stringify(arr))
        SetLocalStorage();
        newname.value=""
        newpass.value=""
        form.removeChild(form.lastChild)
        submitdata.removeAttribute('disabled')
    })
}