console.log('*********** CLICK SOMEBODY - START A RELATIONSHIP ***********');

$('.card').on("click", function(e) {
  if(e.target.className === "card-img") return
  // stores parent card
  let clickedID = e.currentTarget;
  let currentIconClass = clickedID.lastChild.childNodes[0].childNodes[0].className;

  // evaluates target class name to swap innerHTML
  if (currentIconClass === 'icon-like') {
    $(`#${clickedID.id} .card-like-sect`).replaceWith(`<div class="card-like-sect"><a class="icon"><img class="icon-heart" src="/img/heart-red.png" alt="icon"/></a></div>`);
		$.post('/home', {liked_user_id: e.currentTarget.id})
  } else {
    $(`#${clickedID.id} .card-like-sect`).replaceWith(`<div class="card-like-sect"><a class="icon"><img class="icon-like" src="/img/heart-grey.png" alt="icon"/></a></div>`);
    $.ajax({
    	url: '/home',
    	type: 'DELETE',
    	data: {liked_user_id: e.currentTarget.id}
    })
  }
})

