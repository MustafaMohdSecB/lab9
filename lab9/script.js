$(document).ready(function() {
  $('.filter-btn').click(function() {
      const category = $(this).data('category');
      if (category === 'all') {
          $('.image-wrapper').fadeIn();
      } else {
          $('.image-wrapper').not('.' + category).fadeOut();
          $('.image-wrapper.' + category).fadeIn();
      }
  });

  $('.image-wrapper img').click(function() {
      const src = $(this).attr('src');
      $('#lightbox .lightbox-content').attr('src', src);
      $('#lightbox').fadeIn();
  });

  $('.close-btn').click(function() {
      $('#lightbox').fadeOut();
  });
});
