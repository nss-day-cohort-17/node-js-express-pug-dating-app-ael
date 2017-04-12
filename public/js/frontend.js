console.log('*********** CLICK SOMEBODY - START A RELATIONSHIP ***********');


$('.icon').click((e) => {
  let clickedID = e.target.parentNode.parentNode.parentNode.id;

  console.log(clickedID);

  // $('.icon-like').replaceWith("<h1>HI</h1>")
  $(`#21`).html(`<a class="icon"><img class="icon-heart" src="/img/add-to-favourites.png" alt="icon"`);
})
