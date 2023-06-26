var data = [];
async function Makeup()
 {
  const response = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json');
  data = await response.json();
  // data = JSON.parse(this.response);
var heading =document.createElement("h1");
heading.setAttribute("Id","title");
heading.innerHTML= "Make up products"
document.body.append(heading);

var description = document.createElement("p");
description.setAttribute("id", "description");
description.innerText ="product details";
document.body.append( description);

  var prev = document.createElement("input");
  prev.setAttribute("class", "button");
  prev.setAttribute("id", "prev");
  prev.setAttribute("type", "button");
  prev.setAttribute("value", "prev");
  prev.setAttribute("onClick", "previous()");
  document.body.append(prev);

  for (var i = 1; i <= 47; i++) {
    var button = document.createElement("input");
    button.setAttribute("class", "button");
    button.setAttribute("id", i);
    button.setAttribute("type", "button");
    button.setAttribute("value", i);
    button.setAttribute("onClick", "display(id)");
    button.style.background.color = "aqua";
    document.body.append(button);

  }
 
  var next = document.createElement("input");
  next.setAttribute("class", "button");
  next.setAttribute("id", "next");
  next.setAttribute("type", "button");
  next.setAttribute("value", "next");
  next.setAttribute("onClick", "next()");
  document.body.append(next);
  

};

var table = document.createElement("div");
table.setAttribute("class", "table-responsive");

var content = document.createElement("table")
content.setAttribute("class","table table-bordered")

var thead = document.createElement("thead");
thead.setAttribute("class", "thead");

var tr = document.createElement("tr");

var th1 = document.createElement("th");
th1.innerHTML = "Name";

var th2 = document.createElement("th");
th2.innerHTML = "Brand";

var th3 = document.createElement("th");
th3.innerHTML = "Product Link";

var th4 = document.createElement("th");
th4.innerHTML = "Price";

var th5 = document.createElement("th");
th5.innerHTML = "Description";

var th6 = document.createElement("th");
th6.innerHTML = "Image";

tr.append(th1, th2, th3, th4, th5, th6);
thead.append(tr);

var getId = 1;

function display(id) {
  var id = parseInt(id);
  getId = id;
  table.innerHTML = "";
  for (var i = (id - 1) * 20; i < id * 20; i++) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var td6 = document.createElement("td");
    td1.innerHTML = data[i].name;
    td2.innerHTML = data[i].brand;
    td3.innerHTML = data[i].product_link;
    td4.innerHTML = data[i].price;
    td5.innerHTML = data[i].description;
    td6.innerHTML = data[i].image_link;

    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.append(td4);
    tr.append(td5);
    tr.append(td6);
    table.append(tr, thead);
    // table.setAttribute("border", "2");
    // table.style.textAlign = "center";
  }
  document.body.append(table);
}

function previous() {
  if (getId > 1) {
    getId--;
    display(getId);
  }
}
function next() {
  if (getId < 10) {
    getId++;
    display(getId);
  }
}
Makeup();



