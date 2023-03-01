const formEl = document.querySelector('.login-form')


formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  const{ elements: { email, password },
} = event.currentTarget;
  const inputValue = {
          email: `${email.value}`, 
          password: `${password.value}`
}

if (email.value === '' || password.value === '') {
  window.alert("Всі поля повинні бути заповнені!");
}
console.log(inputValue);
event.target.reset();
});
