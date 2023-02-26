//const categoryEl = document.querySelector('#categories');

//console.log('Number of category: ', categoryEl.children.length);

//const listEl = categoryEl.forEach(element => {
//  const categoryItemEl = document.querySelector('.item');
//  const categoryItemLengthEl = document.querySelectorAll('');
//  console.log('Category:', categoryItemEl.firstElementChild.textContent);
//});



//const categoryRef = document.querySelector('#categories');
//console.log('Number of category: ', categoryRef.children.length);

//const categoryItemRef = document.querySelector('.item');

//console.log('Category:', categoryItemRef.firstElementChild.textContent);
//console.log('Elements::', categoryItemRef.lastElementChild.children.length);

//console.log(
//  'Category:',
//  categoryItemRef.nextElementSibling.firstElementChild.textContent
//);
//console.log(
//  'Elements:',
//  categoryItemRef.nextElementSibling.lastElementChild.children.length
//);

//console.log(
//  'Category: ',
//  categoryRef.lastElementChild.firstElementChild.textContent
//);
//console.log(
//  'Elements:',
//  categoryRef.lastElementChild.lastElementChild.children.length
//);

//const categoryEl = document.querySelector('#categories');

//console.log('Number of category: ', categoryEl.children.length);

//const listEl = categoryEl.forEach(element => {
//  const categoryItemRef = document.querySelectorAll('.item');

//console.log('Category:', categoryItemRef.firstElementChild.textContent);
////console.log('Elements::', categoryItemRef.lastElementChild.children.length);

////console.log(
////  'Category:',
////  categoryItemRef.nextElementSibling.firstElementChild.textContent
////);
////console.log(
////  'Elements:',
////  categoryItemRef.nextElementSibling.lastElementChild.children.length
////);

////console.log(
////  'Category: ',
////  categoryEl.lastElementChild.firstElementChild.textContent
////);
////console.log(
////  'Elements:',
////  categoryEl.lastElementChild.lastElementChild.children.length
////);
////console.log(listEl);
//});

const itemEl = document.querySelectorAll('.item');
console.log('Number of categories:' , itemEl.length);
itemEl.forEach(element => {
    const titleEl = element.firstElementChild;
    const innerLiEl = element.lastElementChild.children;
    console.log('Category:' , titleEl.textContent);
    console.log('Elements:' , innerLiEl.length);
});


