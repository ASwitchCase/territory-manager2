class AlertMsg extends HTMLElement{
  constructor(){
    super();
    this.innerHTML=`
    <head>
      <style>
      .overlay {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.7);
        transition: opacity 500ms;
        visibility: hidden;
        opacity: 0;
      }
      .overlay:target {
        visibility: visible;
        opacity: 1;
      }
      
      .popup {
          height: 680px;
          width:45%;
          background-color: rgb(107, 176, 193);
          box-shadow: 5px 5px 8px rgb(62, 79, 83);
          
        margin: 70px auto;
        padding: 20px;
        width: 30%;
        position: relative;
        transition: all 5s ease-in-out;
      }
      
      .popup h2 {
        margin-top: 0;
        color: #333;
        font-family: Tahoma, Arial, sans-serif;
      }
      .popup .close {
        position: absolute;
        top: 20px;
        right: 30px;
        transition: all 200ms;
        font-size: 30px;
        font-weight: bold;
        text-decoration: none;
        color: #333;
      }
      .popup .close:hover {
        color: #06D85F;
      }
      
      @media screen and (max-width: 700px){
        .box{
          width: 70%;
        }
        .popup{
          width: 70%;
        }
      }
      </style>
    </head>
    <div id="popup2" class="overlay">
      <div class="popup">
        <h2 class="popup-title">Here i am</h2>
        <a class="close" href="#">&times;</a>
      </div>
    </div>
    
    `;
  }
}


class SaveMsg extends HTMLElement{
  constructor(){
    super();
    this.innerHTML=`
    <head>
      <style>
      .overlay {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.7);
        transition: opacity 500ms;
        visibility: hidden;
        opacity: 0;
      }
      .overlay:target {
        visibility: visible;
        opacity: 1;
      }
      
      .save-popup {
        height: 130px;
        width:35%;
        background-color: rgb(39, 68, 75);
        
        
      margin: 70px auto;
      padding: 20px;
      width: 30%;
      position: relative;
      transition: all 5s ease-in-out;
      text-align: center;
    }
    
    .save-popup h1 {
      margin-top: 0;
      color:rgb(212, 246, 255);
      font-family: Tahoma, Arial, sans-serif;
    }
      .save-popup .close {
        position: absolute;
        top: 20px;
        right: 30px;
        transition: all 200ms;
        font-size: 40px;
        font-weight: bold;
        text-decoration: none;
        color: rgb(212, 246, 255);
      }
      .save-popup .close:hover {
        color: #06D85F;
      }
      
      @media screen and (max-width: 700px){
        .box{
          width: 70%;
        }
        .save-popup{
          width: 70%;
        }
      }
      
      .loading-icon{
        width: 60px;
        height: 60px;
        margin-left: 15px;
      }
      </style>
    </head>
    <div id="save-popup" class="overlay">
      <div id='save-container' class="save-popup">
      
      </div>
    </div>
    `;
  }
}

class CardView extends HTMLElement{
  constructor(){
    super();
    let imgrc = this.getAttribute('imgrc');
    let tid = this.getAttribute('tid');
    let date = this.getAttribute('date');
    let publisher = this.getAttribute('publisher');
        
    this.innerHTML=`
    <head>
      <style>
      .overlay {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.7);
        transition: opacity 500ms;
        visibility: hidden;
        opacity: 0;
      }
      .overlay:target {
        visibility: visible;
        opacity: 1;
      }
      
      
      .view-popup .close {
        position: absolute;
        top: 20px;
        right: 30px;
        transition: all 10ms;
        font-size: 30px;
        font-weight: bold;
        text-decoration: none;
        color: #333;
      }
      .view-popup .close:hover {
        color: #06D85F;
      }
      
      @media screen and (max-width: 700px){
        .box{
          width: 70%;
        }
        .popup{
          width: 70%;
        }
      }

      .card-pic{
        width:100%;
        height:100%;
      }
      .as-btn{
        background-color: rgb(0, 143, 182);
        color: rgb(212, 246, 255);
        font-size: 30px;
        border:none;
        width: 160;
        height: 70px;
        display:inline;
        
      }
      </style>
    </head>
    <div id="card-view-popup${tid}" class="overlay">
      <div class="view-popup">
        <header class='view-header'>
          <h1>Territory ${tid}</h1>
          <a class="close" href="#">&times;</a>
        </header>

        <div class='photo-container'>
          <img class='card-pic' src='..${imgrc}'>
        </div>

        <div class='info-container'>
          <h1>Current publisher</h1>
          <h2 style='color: rgb(226, 250, 255)'>${publisher}</h2>
          <h1>Date Assigned</h1>
          <h2 style='color: rgb(226, 250, 255)'>${date}</h2>
          <br></br>
          <br></br>
          <br></br>
          <button class='as-btn'>Assign Publisher</button>
        </div>
        
        

      </div>
    </div>
    
    `;
  }
}
window.customElements.define('save-msg',SaveMsg);
window.customElements.define('alert-msg',AlertMsg);
window.customElements.define('view-popup',CardView);