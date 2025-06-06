document.addEventListener('DOMContentLoaded', function () {
  const interval = setInterval(function () {
    const header = document.querySelector('.cover__header-content');

    if (header) {
      clearInterval(interval);

      // Remove unwanted elements
      const star = header.querySelector('.cover__header-star');
      const authors = header.querySelector('.cover__header-content-authors');
      if (star) star.remove();
      if (authors) authors.remove();

      // Add custom logo
      const logoWrapper = document.createElement('div');
      logoWrapper.className = 'custom-logo-wrapper';
      logoWrapper.innerHTML = `
        <a href="https://thetraumaandrecoverylab.com" target="_blank">
          <img src="../images/trru__ko.svg" alt="Trauma Recovery and Research Unit" />
        </a>
      `;
      header.prepend(logoWrapper);
    }
  }, 250);
});
