
let detailsArr = JSON.parse(localStorage.getItem("details")) || [] 

let cartArr = JSON.parse(localStorage.getItem("cartItems")) || []

let container = document.querySelector("#container")

function display(detailsArr){

    container.innerHTML = null
    let smaller = document.createElement("img")
    smaller.setAttribute("id", "smaller")
    smaller.src = detailsArr.image_url
    
    let bigger =document.createElement("div")
    bigger.setAttribute("id", "bigger")

    let pic = document.createElement("img")
    pic.setAttribute("id", "pic")
    pic.src = detailsArr.image_url        

    let cart = document.createElement("button")
    cart.setAttribute("id","cart")
    cart.innerText = "Add To Cart"
    
    // product Info
    let info = document.createElement("div")
    info.setAttribute("id","info")

    let infodiv = document.createElement("div")
    infodiv.setAttribute("id","infodiv")

    let name= document.createElement("h3")
    name.setAttribute("id","name")
    name.innerText = detailsArr.name;

    let priceDiv = document.createElement("div")
    priceDiv.setAttribute("id","priceDiv")

    let price= document.createElement("p")
    price.setAttribute("id","price")
    price.innerText = `₹ ${detailsArr.price}`;

    let strikedoffprice = document.createElement("p")
    strikedoffprice.innerText= detailsArr.strikedoffprice;
    strikedoffprice.setAttribute("id","strikepri")
    strikedoffprice.style.textDecoration = "line-through";

    let discount = document.createElement("p")
    discount.setAttribute("id","discount")
    discount.innerText= detailsArr.discount

    let delivery = document.createElement("div")
    delivery.setAttribute("id","delivery")
    delivery.innerText =" Free Delivery"

    let ratdiv = document.createElement("div")
    ratdiv.setAttribute("id", "ratdiv")

    let rating = document.createElement("div")
    rating.setAttribute("id","rating")
    rating.innerText = `${detailsArr.rating} ✰`

    let rev = document.createElement("p")
    rev.setAttribute("id","review")
    rev.innerText = detailsArr.review
    
    priceDiv.append(price,strikedoffprice)  
    ratdiv.append(rating,rev) 
    infodiv.append(name,priceDiv,ratdiv,discount,delivery) 
    // product Info completed
    // selection of size
    let selesize = document.createElement("div")
    selesize.setAttribute("id","selesize")

    let head = document.createElement("h3")
    head.innerText = "Select Size"

    let size = document.createElement("div")
    size.setAttribute("id", "size")

    let s1 = document.createElement("div")
    s1.innerHTML = "Free size"        
    let s2 = document.createElement("div")
    s2.innerText = "S"
    let s3 = document.createElement("div")
    s3.innerText = "M"
    let s4 = document.createElement("div")
    s4.innerText = "L"
    s1.addEventListener("click", () => {            
        detailsArr.size = s1.innerHTML                          
    })
    s2.addEventListener("click", () => {            
        detailsArr.size = s2.innerHTML                     
    })
    s3.addEventListener("click", () => {            
        detailsArr.size = s3.innerHTML                                
    })
    s4.addEventListener("click", () => {            
        detailsArr.size = s4.innerHTML                        
    })
    size.append(s1,s2,s3,s4)
    selesize.append(head,size)
    // Product Details
    let pDetails = document.createElement("div")
    pDetails.setAttribute("id","pDetails")

    let phead = document.createElement("h3")
    phead.innerText = "Product Details"

    let Name = document.createElement("p")
    Name.innerText = `Name: ${detailsArr.name}`

    let fab = document.createElement("p")
    fab.innerText = `Fabric: ${detailsArr.tags}`

    let pat = document.createElement("p")
    pat.innerText = `Pattern: Simple` 

    let s = document.createElement("p")
    s.innerText = `Size: Free`

    let org = document.createElement("p")
    org.innerText = `Country of Origin: India`

    let more = document.createElement("h4")
    more.innerText = `More Information`

    pDetails.append(phead,Name,fab,pat,s,org,more)

    let sold = document.createElement("img")
    sold.src = "./images/sell.jpg"
    cart.addEventListener("click",() => {
        addToCart(detailsArr)
    })
    
    bigger.append(pic,cart)
    info.append(infodiv,selesize,pDetails,sold)
    container.append(smaller,bigger,info)  
}

display(detailsArr[detailsArr.length-1])

const addToCart = (data) => {
    cartArr.push(data)
    localStorage.setItem("cartItems", JSON.stringify(cartArr))
    window.location.href ="cart.html"
}
