function navbar(){
    return `<div class="border" id="logo">
    <img  src="/images/homepage/logo/logo.png" alt="">
</div>
<div class="border">
    
    <div id="hellodiv">
        <div>Hello</div>
        <span class="material-icons">location_on</span><span id="location">Select your address</span>
    </div>
</div>
<div id="searchDiv" class="flex">
    <div>
    <select name="" id="select">
        <option value="">All</option>
        <option value="">All Categories</option>
        <option value="">Alexa Skills</option>
        <option value="">Amazon Devices</option>
        <option value="">Amazon Fashion</option>
        <option value="">Amazon Fresh</option>
        <option value="">Amazon Pharmacy</option>
        <option value="">Appliances</option>
        <option value="">Apps & Games</option>
        <option value="">Baby</option>
    </select>
    </div>
    <div><input type="text" id="search"></div>
    <div><span id="searchicon" class="material-icons">
        search
        </span></div>
</div>
<div class="border" id="flagDrop">
    <img src="images/national_flag_of_india_4k_5k.jpg" alt="" id="flag">
    <div class="dropdown-contentflag">
        <div id="englishdiv">
            <input type="radio" checked><label for="">English - EN</label>
        </div>
        <div id="lan">
            <input  type="radio"><label for="" id="hindi">हिंदी - HI</label>
            <br>
            <input type="radio"><label for="">தமிழ் - TA</label>
            <br>
            <input type="radio"><label for="">TE</label>
            <br>
            <input type="radio"><label for="">KN</label>
            <br>
            <input type="radio"><label for="">ML</label>
            <br>
            <input type="radio"><label for="">BN</label>
            <br>
            <input type="radio"><label for="">MR</label>
        </div>
        <div id="flag2Div">
            <img id="flag2" src="images/national_flag_of_india_4k_5k.jpg" alt="">
            <span>
                You are shopping on Amazon.in
            </span>
        </div>
        
            <a href="#">Change country/region.</a>
        
    </div>
</div>
<div id="signInDrop" class="border">
    <div class="hello">Hello,Sign in</div>
    <div>Account & Lists</div>
    <div class="dropdown-content">
        <div id="sign">
            <button id="signBtn">Sign in</button>
            <br>
            <span>New customer?</span><a href="">Start here</a>
        </div>
        <div class="flex">
            <div id="lists">
                <div>Your Lists</div>
                <a href="">Create a Wish List</a>
                <a href="">Wish from Any Website</a>
                <a href="">Baby Wish List</a>
                <a href="">Discover Your Style</a>
                <a href="">Explore Showroom</a>
            </div>
            <div>
                <div>Your Account</div>
                <a href="">Your Account</a>
                <a href="">Your Orders</a>
                <a href="">Your Wish List</a>
                <a href="">Your Recommendations</a>
                <a href="">Your Prime Membership</a>
                <a href="">Your Prime Video</a>
                <a href="">Your Subscription & Save items</a>
                <a href="">Memberships & Subscriptions</a>
                <a href="">Your Gift Card Balance</a>
                <a href="">Your Amazon Business Account</a>
                <a href="">Your Seller Account</a>
                <a href="">Manage Your Content and Devices</a>
            </div>
        </div>
    </div>
</div>
<div id="returns" class="border">
    <div class="hello">Returns</div>
    <div>& Orders</div>
</div>
<div id="cartIcon" class="border">
    <ly-svg-icon  p="cart-icon" class="ly-svg--red ly-svg--xl ng-isolate-scope"><svg xmlns="http://www.w3.org/2000/svg"
        height="90%" width="70%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
        <path ng-attr-d="{{$root.icons[ctrl.p]}}"
            d="M8,17.816a2.3,2.3,0,0,1-2.178-1.728L3.411,5.261a2.087,2.087,0,0,0-.695-1.006L0.475,2.771a0.815,0.815,0,0,1-.227-1.14L0.364,1.46a0.839,0.839,0,0,1,1.155-.224L3.76,2.721A3.89,3.89,0,0,1,5.24,4.864L7.654,15.691A0.434,0.434,0,0,0,8,15.968H19.965a0.488,0.488,0,0,0,.386-0.3l1.728-6.789a0.833,0.833,0,0,1,1.01-.6l0.2,0.05a0.82,0.82,0,0,1,.6,1l-1.728,6.789a2.32,2.32,0,0,1-2.2,1.694H8Zm11.754,2.695A1.534,1.534,0,1,1,18.223,19,1.525,1.525,0,0,1,19.757,20.511Zm-8.842,0A1.535,1.535,0,1,1,9.381,19,1.525,1.525,0,0,1,10.916,20.511Z">
        </path>
    </svg></ly-svg-icon>
    <div id="cartSize">0</div>
    <div id="cartName">Cart</div>
</div>`
}

export default navbar;