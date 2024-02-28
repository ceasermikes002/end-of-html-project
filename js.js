const persons = document.querySelectorAll('.person');

window.addEventListener('scroll', () => {
  persons.forEach(person => {
    const position = person.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;
    if (position < screenPosition) {
      person.classList.add('fade-out');
    } else {
      person.classList.remove('fade-out');
    }
  });
});
