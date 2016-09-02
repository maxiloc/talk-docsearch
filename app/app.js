let Marvel = {
  init() {
    // Full list of configuration options available here:
    // https://github.com/hakimel/reveal.js#configuration
    Reveal.initialize({
      controls: false,
      progress: true,
      history: true,
      center: true,

      transition: 'linear',

      dependencies: [{
        src: 'js/classList.js',
        condition: () => {
          return !document.body.classList;
        }
      }, {
        src: 'js/prism.js',
        async: true,
        callback: () => {
          Prism.highlightAll();
        }
      }]
    });

    // Custom code to display the correct part of the Algolia animation
    Reveal.addEventListener('fragmentshown', function (event) {
      var step = $(event.fragment).data('step');
      if (!step) {
        return;
      }
      var wrapper = $('.column-step');
      wrapper.data('step', step);
    });
  }
};

export default Marvel;
