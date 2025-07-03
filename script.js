
const button = document.getElementById('showMoreBtn');
const extraContent = document.getElementById('extraContent');

button.addEventListener('click', () => {
  if (extraContent.style.display === 'none') {
    extraContent.style.display = 'block';
    button.textContent = 'Show Less'; // Optional: change button text
  } else {
    extraContent.style.display = 'none';
    button.textContent = 'Show More'; // Optional: revert button text
  }
});


    
    
    

