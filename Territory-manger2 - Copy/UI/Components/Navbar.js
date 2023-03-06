class Navbar extends HTMLElement {
    constructor(){
        super();
        
        //mapping ref
        //let list = [1,2,3];
        //this.innerHTML = `${list.map(item => "<h1> num: " + item + "</h1>").join('')}`;

        this.innerHTML = `
        <style>
        .Navbar{
            margin: 0;
        }
        .Navbar ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            width: 12%;
            background-color: rgb(39, 68, 75);
            position: fixed;
            height: 100%;
            overflow: auto;
            box-shadow: 5px 5px 8px rgb(46, 58, 61);
          }

          .Navbar li a {
            display: block;
            color: white;
            padding: 12px 16px;
            text-decoration: none;
            font-size: 150%;
          }
          
          .Navbar li a.active {
            background-color:  rgb(57, 100, 111);
            color: white;
          }
          
          .Navbar li a:hover:not(.active) {
            background-color: #555;
            color: white;
          }
          .logo-img{
            width:100%;
            height:100%;
          }
        </style>

        <div>
            <div class='Navbar'>
                <ul>
                    <li><img class= 'logo-img' src='images/icons/TM-logo.png'></li>
                    <li><a class="active" href="/index.html">Home</a></li>
                    <li><a href="TerritoryList.html">Territory List</a></li>
                    <li><a href="/Publishers">Publishers</a></li>
                </ul>
            </div>
        </div>`
    }
}

window.customElements.define('nav-bar',Navbar);