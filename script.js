var submitButtons = document.querySelectorAll('.submitButton1, .submitButton2');
submitButtons.forEach(function(submitButton) {
  submitButton.addEventListener('click', function(event) {
    var emailSection = this.closest('.email-section');
    var emailInput = emailSection.querySelector('.emailInput1, .emailInput2');
    var successMessage = emailSection.querySelector('.notification .success');
    var errorMessage = emailSection.querySelector('.notification .error');

    var email = emailInput.value.trim();

    if (email === '') {
      errorMessage.textContent = 'Please enter an email.';
      errorMessage.style.display = 'block';
      errorMessage.style.color = 'red';
      emailInput.style.border = '1px solid red';
      // submitButton.style.backgroundColor = 'red';
      successMessage.style.display = 'none';
    } else if (validateEmail(email)) {
      successMessage.textContent = 'Submit Successful.';
      successMessage.style.display = 'block';
      errorMessage.style.display = 'none';
      emailInput.style.border = '1px solid green';
      // submitButton.style.backgroundColor = 'green';
    } else {
      errorMessage.textContent = 'Please enter a valid email.';
      errorMessage.style.display = 'block';
      // errorMessage.style.color = 'red';
      emailInput.style.border = '1px solid red';
      // submitButton.style.backgroundColor = 'red';
      successMessage.style.display = 'none';
    }
  });
});

function validateEmail(email) {
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}