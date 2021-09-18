
var updateBtns = document.getElementsByClassName('update-cart')


for(var i = 0; i<updateBtns.length; i++) {

    console.log('heee')

   updateBtns[i].addEventListener("click",function()
   {
      var productId = this.dataset.product;
      var action = this.dataset.action;
      console.log('productId :', productId,'axction ',action,user)

      if(user == "AnonymousUser")
        console.log('AnonymousUser')

       else updateUserOrder(productId, action)

   })





}

function updateUserOrder(productId, action){

    let url = '/update_item/'

    fetch(url,{

    method : "POST",
    headers : {

    'Content-Type': 'application/json',
    'X-CSRFToken': csrftoken,


    },
    body : JSON.stringify({

      'productId': productId,
      'action' : action,
    })

    }).then(res=>res.json())
    .then(function(data)
    {
    console.log(data)


    location.reload()}

    )

 }