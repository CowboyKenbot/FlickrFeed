(function() {
  var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  $.getJSON( flickerAPI, {
    tags: "ocean",
    tagmode: "any",
    format: "json"
  })
    .done(function( data ) {
      $.each( data.items, function( i, item ) {
        var a = $('<a/>').attr('href', item.media.m.replace('_m', '_b')).attr('data-title', item.title).attr('data-lightbox', 'lightboxpics');
        $( "<img>" ).attr( {src: item.media.m.replace('_m', '_q'), class: 'animated fadeIn'} ).appendTo( "#images-container" ).wrap(a);
        if ( i === 11 ) {
          return false;
        }
      });
    });
})();
$('.btn-more').click(function() {
    $(this).fadeOut();
    (function() {
      var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
      $.getJSON( flickerAPI, {
        tags: "ocean",
        tagmode: "any",
        format: "json"
      })
        .done(function( data ) {
          $.each( data.items, function( i, item ) {
            var a = $('<a/>').attr('href', item.media.m.replace('_m', '_b')).attr('data-title', item.title).attr('data-lightbox', 'lightboxpics');
            $( "<img>" ).attr( {src: item.media.m.replace('_m', '_q'), class: 'animated fadeIn'} ).appendTo( "#images-container" ).wrap(a);
            $("#images-container img").slice(12, 24).hide();
            if ( i === 32 ) {
              return false;
            }
          });
        });
    })();
});