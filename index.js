
import  saveFormData  from './form.js';
let form = document.getElementById('feedback-form')
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        message: form.message.value.trim()
    };
        saveFormData(formData);
        
        const successMessage = document.getElementById('success-message');
        successMessage.style.display = 'block';
        });