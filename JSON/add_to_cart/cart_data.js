

let cart = JSON.parse(localStorage.getItem("record")) || [];


const showCart = () => {
    let tbl = "";
    let total = 0;
    cart.map((val) => {
        tbl += `
                 <tr>
                    <td><img src="${val.image}" class="card-img-top " height="100px" alt="."></td>
                    <td>${val.name}</td>
                    <td>${val.price}</td>
                    <td><input type="number" id="qty_${val.id}" onchange="qtychange(${val.id})" class="form-control quantity-input" value="${val.qty}"  min="1"></td>
                    <td>${val.price*val.qty}</td>
                    <td><button onclick="removeItem(${val.id})" class="btn btn-danger btn-sm">Remove</button></td>
                 </tr> 
    `
    total += val.price * val.qty;
    

    })
    document.getElementById('itemlist').innerHTML = tbl; 
    document.getElementById('total').innerHTML =  `Total :- $ ${total}`;

}
showCart();

const qtychange = (id) => {
    let qty = document.getElementById(`qty_${id}`).value;
    cart = cart.map((val)=>{
        if(val.id==id){
            val.qty = qty;
        }
        return val;
    })
    
    localStorage.setItem('record',JSON.stringify(cart));
    alert("cart updated!")
    showCart();
}

const removeItem = (id) => {
    cart = cart.filter((val)=>{
        return val.id!=id;
    })

    localStorage.setItem('record',JSON.stringify(cart));
    alert("Product will be delete.")
    showCart();
}