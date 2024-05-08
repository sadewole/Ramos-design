const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const animateElements = document.querySelectorAll('.animatedText');
const animatedSlideUpElements = document.querySelectorAll(
  '.animatedSlideUpText'
);
animatedSlideUpElements.forEach((el) => observer.observe(el));

document.addEventListener('DOMContentLoaded', function () {
  animateElements.forEach((el) => {
    observer.observe(el);
    let text = el.textContent.trim();
    let newText = '';

    for (var i = 0; i < text.length; i++) {
      if (text[i] === ' ') {
        newText += '<span class="space">&nbsp;</span>'; // Preserve space with non-breaking space
      } else {
        newText += `<span class="letter" data-char=${text[i]} style="--char-index: ${i}">${text[i]}</span>`;
      }
    }

    el.innerHTML = newText;
  });
});
