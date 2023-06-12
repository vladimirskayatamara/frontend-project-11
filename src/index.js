// @ts-check
import * as yup from 'yup';
import './style.scss';

const form = document.querySelector('.rss-form');

if (form instanceof HTMLFormElement) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    console.log(formData.entries());

    const schema = yup.object().shape({
      url: yup.string().required('Url is required'),
    });

    schema
      .validate(formData)
      .then((validatedData) => {
        // Form data is valid
        console.log(validatedData);
      })
      .catch((validationError) => {
        // Form data is invalid
        console.error(validationError.errors);
      });
  });
}

console.log(1);
