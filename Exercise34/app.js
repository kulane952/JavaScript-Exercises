const list = document.querySelector('#list');


function addItem() {
    const item = document.createElement('li');
    item.textContent = 'New Item';
    list.appendChild(item);
}

function removeItem() {
    if (list.lastChild){
        list.removeChild(list.lastChild);
    }else {
        alert('No items to remove!');
    }
}