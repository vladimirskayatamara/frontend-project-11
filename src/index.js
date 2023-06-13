// @ts-check
import * as yup from 'yup';
import './style.scss';

const form = document.querySelector('.rss-form');
const input = document.querySelector('#url-input');

const existingUrls = []; // Replace with your existing URLs array

const validationSchema = yup.object().shape({
  url: yup.string().url('Invalid URL format').test('unique', 'URL is duplicated', (value) => !existingUrls.includes(value)),
});

function resetForm() {
  // @ts-ignore
  input.value = '';
  // @ts-ignore
  input.style.border = '';
  // @ts-ignore
  input.focus();
}

function showValidationError(errorMessage) {
  // @ts-ignore
  input.style.border = '2px solid red';
  // @ts-ignore
  input.focus();

  const feedback = document.querySelector('.feedback');
  // @ts-ignore
  feedback.textContent = errorMessage;
}

async function validateUrl(url) {
  try {
    await validationSchema.validate({ url });
    // URL is valid
    resetForm();
  } catch (error) {
    // URL is invalid
    showValidationError(error.message);
  }
}

function handleEvent(event) {
  event.preventDefault();
  // @ts-ignore
  const url = input.value.trim();
  validateUrl(url);
}

// @ts-ignore
form.addEventListener('submit', handleEvent);
