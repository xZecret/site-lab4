let div = document.createElement('div');
div.className = "alert";
div.innerHTML = "Идет загрузка...";
document.body.prepend(div);
setTimeout(() => div.remove(), 1000);


function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('dude');
const url = 'https://randomuser.me/api/?results=10';

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let dude = data.results;
  return dude.map(function(dude) {
    let li = createNode('li');
    let img = createNode('img');
    let span = createNode('span');
    let span1 = createNode('span');
    let span2 = createNode('span');
    let span3 = createNode('span');
    let span4 = createNode('span');
    let span5 = createNode('span');
    img.src = dude.picture.medium;
    span.innerHTML = `<br>${dude.name.first} ${dude.name.last}`;
    span1.innerHTML = `<br>${dude.email}`;
    span2.innerHTML = `<br>${dude.gender}`;
    span3.innerHTML = `<br>${dude.phone}`;
    span4.innerHTML = `<br>${dude.location.city}`;
    span5.innerHTML = `<br>${dude.dob.date} | ${dude.dob.age} age`;
    append(li, img);
    append(li, span);
    append(li, span1);
    append(li, span2);
    append(li, span3);
    append(li, span4);
    append(li, span5);
    append(ul, li);
  })
})
.catch(function(error) {
  console.log(error);
});


