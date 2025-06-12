document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.counter').forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText.replace('%','');
        const increment = target / 40;

        if (count < target) {
          counter.innerText = `${Math.ceil(count + increment)}%`;
          setTimeout(updateCount, 25);
        } else {
          counter.innerText = `${target}%`;
        }
      };
      updateCount();
    });
});

