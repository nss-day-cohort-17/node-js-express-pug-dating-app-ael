console.log('*********** CLICK SOMEBODY - START A RELATIONSHIP ***********');

$('.icon').click((e) => {
  // stores parent id
  let clickedID = e.target.parentNode.parentNode.parentNode.id;

  console.dir(e.target);
  // evaluates target class name to swap innerHTML
  if (e.target.className === 'icon-like') {
    $(`#${clickedID} .card-like-sect`).replaceWith(`<div class="card-like-sect"><a class="icon"><img class="icon-heart" src="/img/heart-red.png" alt="icon"/></a></div>`);
  } else {
    $(`#${clickedID} .card-like-sect`).replaceWith(`<div class="card-like-sect"><a class="icon"><img class="icon-like" src="/img/heart-white.png" alt="icon"/></a></div>`);
  }

})  
