    
   document.querySelector('.inpu').addEventListener('input',function () {
    let searchTerm = this.value.toLowerCase();
    let elements = document.querySelectorAll('p','a');
    let result = [];

    elements.forEach(function(element) {
     let textContent = element.textContent.toLowerCase();
     if (textContent.includes(searchTerm)) {
       result.push(element.outerHTML);
       element.style.display = 'block';
     } else {
       element.style.display = 'none';
     }
    });
    document.querySelector('.result1').innerHTML = result.join('')
  })
  const show = document.querySelector('.pop');
  const del = setTimeout(() => {
    show.style.display = 'block'
  },2000)
  const pus = document.querySelector('.pu');
  pus.onclick = function() {
    clearTimeout(del)
    show.style.display = 'none';
  }
