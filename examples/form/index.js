const $form = qq('form');
const $banner = qq('.banner');
const $email = $form.find('[type=email]');
const $password = $form.find('[type=password]');

$form.on('submit', (e) => {
  e.preventDefault();

  const email = $email.value();
  const password = $password.value();

  console.log(email, password);

  console.log($form.html());

  $form.data('submitted', true);

  $banner.html('<h1>Success!</h1>');
});
