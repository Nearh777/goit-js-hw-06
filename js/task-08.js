const formEl = document.querySelector('.login-form');

form.addEventListene('submit', (event) => {
  const elements: { email: `${email, password },
} = event.currenTarget;
  const inputValue = {
          email: `${email.value}`, 
          password: `${password.value}`
}
console.log(inputValue);
if email.value === '' || password.value === '') {
  window.alert("Всі поля повинні бути заповнені!");
}
event.target.reset()
});
