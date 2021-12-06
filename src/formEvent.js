const formEvent = () => {
  const allForm = document.getElementsByTagName('form');

  for (const $form of allForm) {
    $form.addEventListener('submit', (e) => {
      e.preventDefault();
    });
  }
};

export { formEvent };
