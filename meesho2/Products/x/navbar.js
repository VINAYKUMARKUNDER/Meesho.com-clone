const navbar = ()=>{
    return `
    <div id="leftNav">
        <div id="logoMeesho"><img src="https://2ballz.in/assets/images/meesho.png" alt="WebsiteLogo"></div>

        <div id="searchNavbar">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            <input type="text" id="InputNavbar" placeholder="Try Tshirt ,Kurta, shoes , Saree or By Product Code"></div>
    </div>

    <div id="RightNav">
        <ul>
            <li id="download"><a href="#"><i class="bi bi-phone-fill"></i> Download 
            <div id="playStoreHover">
                <div>
            <a href="#"> Download From- </a>         
            <a href="https://play.google.com/store/apps/details?id=com.meesho.supply"> <img src="https://meesho.com/_next/static/images/playstore-a7dfd2afcd42f96d491912cbec2d6fa2.png"
            alt="android"> </a>
            <a href="https://play.google.com/store/apps/details?id=com.meesho.supply">  <img src="https://meesho.com/_next/static/images/appstore-a689c2ac38f3ed1ab7e7b39e98aaf15a.png" alt="ios"></img> </a>
                 </div>
            </div>
         </a></li>

            <li><a href="#"><i class="bi bi-shop"></i>Become a Supplier</a></li>
            <li id="cartHhover"><a href="#"><i class="bi bi-person-circle"></i> Profile 
                    <div id="signupHover">
                        <div>
                 <a href="#"> Hello User </a>         
                 <a href="#"> To Accese Our Messho Account </a>         
                 <a href="./MEESHO/signup1.html"> Sign Up </a> 
                 <hr>      
                 <a href="#"><i class="bi bi-bag-heart"></i>My Orders</a>
                         </div>
                     </div>
            </a></li>
            <li><a href="./cart.html"> <i class="bi bi-cart"></i>Cart</a></li>
        </ul>
    </div>`
}
export default navbar;

{/* <img src="https://meesho.com/_next/static/images/playstore-a7dfd2afcd42f96d491912cbec2d6fa2.png"
                alt="android">
            <img src="https://meesho.com/_next/static/images/appstore-a689c2ac38f3ed1ab7e7b39e98aaf15a.png" alt="ios"></img> */}