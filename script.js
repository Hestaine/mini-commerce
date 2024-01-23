var pool = 0;
count.innerHTML = 0;
function displayCart(){
    show.innerHTML ="";
   for (i = 0; i < cart.length; i++) {
      var kop =` 
<tr>
 <td>${i+1}</td>
 <td>${cart[i]}</td>
 <td><button class="btn btn-danger btn-sm" onclick="del(${i})"">Delete</button> </td>
 <td><button class="btn btn-warning btn-sm"  data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="edit(${i})">Edit</button></td>
</tr>`
    show.innerHTML += `
    ${kop}
       `
    
   }
   count.innerHTML = cart.length
  
}

var cart = [];
// item.innerHTML =`${items}`
function addItems() {
if(inp.value == ""){
    er.style.display ="block"
} else{
    er.style.display ="none"
   cart.push(inp.value)
   document.getElementById('inp').value = '';

   displayCart()
   
}
}
function shit() {
       cart.pop(show.innerHTML)
       show.innerHTML = cart;
       displayCart()
      if (show.innerHTML == '') {
         impp.style.display = "block"
      }
    }

    function remTop() {
        cart.shift(show.innerHTML)
        show.innerHTML = cart;
        displayCart()
     }
     function addTop() {
        cart.unshift(inp.value)
        document.getElementById('inp').value = '';
        show.innerHTML = cart;
        displayCart()
     }
     function addRev() {
        cart.reverse(show.innerHTML)
        document.getElementById('inp').value = '';
        show.innerHTML = cart;
        displayCart()
     }
     function delAny() {
        var confirmation = Number(prompt("Enter the number you want to delete"))
        if (confirmation > cart.length) {
         alert("This cart is empty")
        }
        else{
        
        cart.splice(confirmation-1,1)
        document.getElementById('inp').value = '';
        show.innerHTML = cart;
        displayCart()
      }
     }
     function addEdit() {
        var confirm =Number(prompt("Enter the number you want to edit"))
        var confirmer = prompt("Edit Name")
        if (confirm > cart.length || confirmer == show.innerHTML) {
         alert("invalid Number")
        }
        else{

        cart.splice(confirm-1,1,confirmer)
        document.getElementById('inp').value = '';
        displayCart()
      }
     }
     function delAll() {
        show.innerHTML =   `<th colspan="2" class="text-center">No item added yet to store</th>`;
        cart.length = 0
        count.innerHTML = cart.length
     }

function displaycart() {
   show.innerHTML = ''
   for (i = 0; i < cart.length; i++) {
      var element = cart[i]
      show.innerHTML +=`
      <p>${i + i}. ${element}</p>
      `
   }
}

function del(index) {
   cart.splice(index,1)
   displayCart()
}

function edit(index){
    var input = editInput,value
   cart.splice(index,1,input)
   document.getElementById("inp").value = ""
   displayCart()
}