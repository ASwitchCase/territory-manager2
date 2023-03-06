class TerritoryCard extends HTMLElement{
    constructor(){
        super();
        let tid = this.getAttribute('id');
        let date = this.getAttribute('date');
        let publisher = this.getAttribute('publisher');
        let imgrc = this.getAttribute('imgrc');
        let row = parseInt(this.getAttribute('row'));
        this.innerHTML = `
            <head>
            <style>
                .list-content{
                    background-color: rgb(175, 219, 231);
                    box-shadow: 7px 7px 8px rgb(72, 91, 95);
                    
                    margin: 10px 30px;
                    width: 90%;
                    display: inline-block;
                }
                .list-content h2{
                    padding: 10px 30px;
                }
                .list-content h3{
                    padding: 10px 30px;
                }
                .id-container{
                    width:100%;
                    heigth:20%;
                    background-color: rgb(115, 193, 214);
                    float:left;
                }
                .trash{
                    float:right;
                    height: 35px;
                    width: 35px;
                    margin: 20px 20px;
                  }
                  
                  .trash:hover{
                    content: url('images/icons/full-trash-bin-icon.png');
                    height: 37px;
                    width: 37px;
                  }
                
                  .edit{
                    float:right;
                    height: 35px;
                    width: 35px;
                    margin: 22px 21px;
                  }
                  
                  .edit:hover{
                    height: 37px;
                    width: 37px;
                  }
                  

            </style>
            </head>
            <view-popup tid = ${tid} date = ${date} publisher = ${publisher} imgrc = ${imgrc}></view-popup>
            <div class='list-content'>
                <header class='id-container'>
                    <h2>${tid}</h2>
                    <a href="#card-view-popup${tid}"><img id = 'myBtn' class='edit' src='images/icons/file-edit-icon.png'></img><a>
                    <img onclick="deleteCard('${row}')" class='trash' src='images/icons/trash-can-icon.png'></img>
                </header>
                <br></br>
                <h2 style='display:inline-block'>${publisher}</h2>
                <h3 style='float:right'> Date: ${date}</h3>
                
            </div>    
        `
    }
}
window.customElements.define('territory-card',TerritoryCard);