const categoryRef = document.querySelector('#categories');
console.log('Number of category: ', categoryRef.children.length);

const categoryItemRef = document.querySelector('.item');   

   console.log('Category:', categoryItemRef.firstElementChild.textContent);
   console.log('Elements::', categoryItemRef.lastElementChild.children.length);


   console.log('Category:', categoryItemRef.nextElementSibling.firstElementChild.textContent);
   console.log('Elements:', categoryItemRef.nextElementSibling.lastElementChild.children.length);

   console.log('Category: ', categoryRef.lastElementChild.firstElementChild.textContent);
   console.log('Elements:', categoryRef.lastElementChild.lastElementChild.children.length);





