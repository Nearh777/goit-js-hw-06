const formEl = document.querySelector('.login-form');

form.addEventListene('submit', (event) => {
  const elements: { email: `${email.value}`, password: `${password.value} },
} = event currenTarget;
  const inputValue = {
          email, 
          password
}
console.log(inputValue);
if email.value === '' || password.value === '') {
  window.alert("Всі поля повинні бути заповнені!");
}
event.target.reset()
});
