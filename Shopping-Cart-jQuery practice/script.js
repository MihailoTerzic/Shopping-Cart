
let zbir = 0; // ukupna cena
let artikli = [] // artikli u korpi za lifecycle hook
$(".add").click((e) => {
  e.preventDefault();
  let name = e.target.parentElement.parentElement.children[1].innerText;
  let price = $(e.target).parent().prev().text();
  price = parseFloat(price.substring(1));
  let kolicina = parseFloat($(e.target).prev().prev().val());
  // brisanje iz korpe
  const remove = document.createElement("button");
  remove.innerText = "Remove";

  $(remove).click((el) => {
    $(el.target.previousSibling).remove();
    $(el.target).remove();
    $(e.target).prev().prev().val(1);
    e.target.disabled = false;
    zbir -= parseracun;
    artikli.pop(objekat) // ovo brise poslednji a ne izabrani
    $(".summedprice").text("Price:$" + zbir.toFixed(2));

  });
  // izabran proizvod
  let ukupno = (price * kolicina).toFixed(2);
  let racun = `<div class="appended">${name}: ${kolicina} x $${price} = $${ukupno}</div>`;

  // objekat za proizvod
  let objekat = {
    naziv: name,
    cena: price,
    kolicina: kolicina,
  };
  artikli.push(objekat); // ovo valjda radi
 

  // ukupno
  let parseracun = parseFloat(racun.substr(racun.indexOf(ukupno), 5));

  zbir += parseracun;
  $(".summedprice").text("Price:$" + zbir.toFixed(2));

  e.target.disabled = true;
  $(".addeditems").append(racun).append(remove);
});

