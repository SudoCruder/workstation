function showMessage(tragetID, message) {
  if(document.getElementById(tragetID)) {
    document.getElementById(tragetID).textContent = message;
  }
}

function listItems(itemsWrapperID, items) {
  let itemsWrapper = document.getElementById(itemsWrapperID);

  for(let i = 0; i < items.length; i++) {
    if (itemsWrapper) {
      let li = document.createElement('li');
      li.textContent = items[i];
      itemsWrapper.append(li);
      li.style.cursor = 'pointer';
      li.addEventListener('click', function() {
        if (li.classList.contains('done')) {
          li.classList.remove('done');
        } else {
          li.classList.add('done');
        }
      })
    }
  }
}
