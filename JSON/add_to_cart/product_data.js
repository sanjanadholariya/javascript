let arr = [
    {
        id: 1,
        name: "ELRINZA Air Sofa",
        qty: 1,
        price: 84,
        image: "https://m.media-amazon.com/images/I/61M46aVw3uL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
        id: 2,
        name: "Velvet Fabric Manual Recliner",
        qty: 1,
        price: 90,
        image: "https://m.media-amazon.com/images/I/71b+XaCc8SL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
        id: 3,
        name: "Wood Arm Chair Set of 2",
        qty: 1,
        price: 73,
        image: "https://m.media-amazon.com/images/I/81NoA7va8XL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
        id: 4,
        name: "Wood Single Seater Sofa",
        qty: 1,
        price: 80,
        image: "https://m.media-amazon.com/images/I/61M46aVw3uL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
        id: 5,
        name: "DANEWOOD - 1 Seater Sofa",
        qty: 1,
        price: 56,
        image: "https://m.media-amazon.com/images/I/61f1aJvrpSL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
        id: 6,
        name: "Bean Bag Chair",
        qty: 1,
        price: 78,
        image: "https://m.media-amazon.com/images/I/81polk26wsL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
        id: 7,
        name: "Decorian Soft Velvet",
        qty: 1,
        price: 90,
        image: "https://m.media-amazon.com/images/I/71gzl1bovNL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
        id: 8,
        name: "Wood Rocking Chair",
        qty: 1,
        price: 82,
        image: "https://m.media-amazon.com/images/I/91xYEg+q32L._AC_UL480_FMwebp_QL65_.jpg"
    }
]

const product = () => {
    let tbl = "";
    arr.map((val) => {
        tbl += `
            <div class="col-3 ">
                <div class="card" style="width: 22rem; padding:10px; margin-top:25px; background-color:#e4dfd9;">
                    <img src="${val.image}" class="card-img-top " height="300px" alt=".">
                    <div class="card-body">
                        <h5 class="card-title">${val.name}</h5>
                        <p class="card-text" style="letter-spacing: 3px;">$ ${val.price}</p>
                        <a href="#" onclick="addProduct(${val.id})" class="btn  rounded-pill" style="background-color:#89786b; color:#e4dfd9;">Add to cart</a>
                    </div>
                </div>
            </div>
        `
    })

    document.getElementById('product').innerHTML = tbl;
}
product();


let cart = JSON.parse(localStorage.getItem("record")) || [];
document.getElementById("count").innerHTML = cart.length;




const addProduct = (id) => {

    let dup = cart.find(val => val.id === id);
    if(dup){
        alert("already exist in the cart!");
        return;
    }


    arr.map((val) => {
        if (val.id == id) {
            cart.push(val);
            localStorage.setItem("record", JSON.stringify(cart));
            alert("Product added to cart");
            document.getElementById("count").innerHTML = cart.length;

        }
    })
}