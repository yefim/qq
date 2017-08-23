const $form = qq('form');
const $email = $form.find('[type=email]');
const $password = $form.find('[type=password]');

$form.on('submit', (e) => {
  e.preventDefault();

  const email = $email.value();
  const password = $password.value();

  console.log(email, password);
});
