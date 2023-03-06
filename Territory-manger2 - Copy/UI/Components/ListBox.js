class ListBox extends HTMLElement{
    constructor(){
        super();
        //add a attribute that is a function thaat will filter the list
        let content = JSON.parse(this.getAttribute('content')).tList;
        if(this.getAttribute('filter') === 'unassigned'){
            content = content.filter(card => card.publisher === "None")
        }else if(this.getAttribute('filter') === 'assigned'){
            content = content.filter(card => card.publisher !== "None")
        }else{
            content = content
        }
        
        let title = this.getAttribute('title');
        this.innerHTML = `
        <head>
        <style>
            .page-content{
                float: left;
                margin-top: 1%;
                margin-left: 15%;
                width: 85%;
                height: 800px;
                
            }
            .content{
                display: inline-block;
                height: 680px;
                width:45%;
                margin: 10px 10px;
                background-color: rgb(73, 92, 97);
                box-shadow: 5px 5px 8px rgb(62, 79, 83);
                vertical-align: top;
            }

            .content-header{
            padding: 10px 30px;
            background-color: rgb(89, 115, 121);
            }

            .content header h1{
            color: rgb(212, 246, 255);
            display: inline-block;
            text-shadow: 7px 7px 8px rgb(72, 91, 95);
            }

            .content h2{
            color: rgb(39, 59, 64);
            display: inline-block;
            }
            .content h3{
            color: rgb(85, 98, 101);
            display: inline-block;
            }
            
        </style>
    
        </head>
        <div class='content'>
            <header class='content-header'>
            <h1>${title}</h1>
            </header>

            <div style="overflow-y:scroll; height:80%;">
            ${content.map(item => "<territory-card row="+item.row+" id=" + item.tid +" date="+ item.dateAssigned + " publisher=" + item.publisher + " record=" + item.record + " imgrc="+item.imgrc+"></territory-card>").join('')}
            </div>
            
        </div>
        `
    }
}
window.customElements.define('list-box',ListBox);
