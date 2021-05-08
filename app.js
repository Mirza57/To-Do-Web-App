
var ulList=document.getElementById("ulList");

//var innerDiv=document.getElementById("inner");


function addTodo(){

    var input=document.getElementById("input1");
    var li=document.createElement("li");
    li.setAttribute("class","li")
   //var text=document.createTextNode(input.value);
   // li.appendChild(text);
    


   var input2=document.createElement("input");
   input2.setAttribute("id","input2");
   input2.setAttribute("class","input2");
   
   var text1=document.getElementById("input1");
   
    input2.value=text1.value;
    li.appendChild(input2);
    ulList.append(li);

    input.value=" ";


     //Edit Button
     var editBtn=document.createElement("button");
     editBtn.className="editBtnStyle";
     var editText=document.createTextNode("EDIT")
     editBtn.appendChild(editText);
     editBtn.setAttribute("onclick","editList(this)")
     
 
     li.appendChild(editBtn);
     //innerDiv.appendChild(editBtn);
    
    //Delete List button
    var delBtn=document.createElement("button");
    delBtn.className="delBtnStyle";
    
    var delText=document.createTextNode("DELETE");
    delBtn.appendChild(delText);
    delBtn.setAttribute("onclick","deleteList(this)")
    

    li.appendChild(delBtn);
    //innerDiv.appendChild(delBtn);

    
   
}



function deleteList(e){
    e.parentNode.remove();
   
}
function delAll(){
    ulList.innerHTML=" ";
}
function editList(e){
   
    var value=prompt("Enter Value for update",e.parentNode.firstChild.value);
    e.parentNode.firstChild.value= value;
}