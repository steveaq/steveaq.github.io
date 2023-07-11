const copyButtons = document.querySelectorAll('.pre-banner');

copyButtons.forEach(button => {
  button.addEventListener('click', () => {
    const code = button.nextElementSibling.querySelector('code');
    const text = code.innerText;

    navigator.clipboard.writeText(text)
      .then(() => {
        button.innerText = 'Copied!';
        setTimeout(() => {
          button.innerText = 'Copy';
        }, 1500);
      })
      .catch(error => {
        console.error('Failed to copy text:', error);
      });
  });
});


