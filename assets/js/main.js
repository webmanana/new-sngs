$.fn.select2.amd.define('select2/i18n/ru',[],function () {
    // Russian
    return {
        errorLoading: function () {
            return 'Результат не может быть загружен.';
        },
        inputTooLong: function (args) {
            var overChars = args.input.length - args.maximum;
            var message = 'Пожалуйста, удалите ' + overChars + ' символ';
            if (overChars >= 2 && overChars <= 4) {
                message += 'а';
            } else if (overChars >= 5) {
                message += 'ов';
            }
            return message;
        },
        inputTooShort: function (args) {
            var remainingChars = args.minimum - args.input.length;

            var message = 'Пожалуйста, введите ' + remainingChars + ' или более символов';

            return message;
        },
        loadingMore: function () {
            return 'Загружаем ещё ресурсы…';
        },
        maximumSelected: function (args) {
            var message = 'Вы можете выбрать ' + args.maximum + ' элемент';

            if (args.maximum  >= 2 && args.maximum <= 4) {
                message += 'а';
            } else if (args.maximum >= 5) {
                message += 'ов';
            }

            return message;
        },
        noResults: function () {
          return 'Ничего не найдено';
        },
        searching: function () {
          return 'Поиск…';
        }
    };
});
$( document ).ready(function() {
  $('[data-portal]').each(function(){
    let name = $(this).attr('data-popup');
    $(this).html('<title>'+name+'</title>');
  })
  function switcher(evnt){
    $('path.map-current').removeClass('map-current');
    $('[data-portal='+ evnt + ']').addClass('map-current');
    $('#switch1').addClass('active');
    $('.switch-desc').hide();
    $('#place-' + evnt).show();
    console.log(evnt);
  }

  $('[data-portal]').on('click',function(e){
    let current = +$(this).attr('data-portal');
    switcher(current);
    $("#map-select").val(current).trigger("change");
  })

  if($('*').is('#filterNew')){
    $('#filterNew').change(function(){
      let data= $(this).val();
      if($('*').is('.'+data)){
        $('.doc-list a, .doc-list span.empty').attr('hidden','hidden');
        $('.doc-list a.'+data).removeAttr('hidden');
      }else{
        $('.doc-list a').attr('hidden','hidden');
        $('.doc-list span.empty').removeAttr('hidden');
      }
    });
  }
  $('#filterNew').find('option:first-child').trigger('change');
  $('.menu_main>li').on('mouseleave',function(){
    $(this).find('.dropped').removeClass('hovered');
  })
  $('#map-select').select2({
    language: "ru"
  });
  $("#map-select").on("select2:select", function (e) {
    var num = $('#map-select').val();
    $('[data-portal='+ num + ']').addClass('map-current');
    var region = $(this).val();
    switcher(region);
  });
  $('[data-portal="548"]').click();
  
  $('img[src$=".svg"]').each(function() {
  	var $img = jQuery(this);
  	var imgURL = $img.attr('src');
  	var attributes = $img.prop("attributes");

  	$.get(imgURL, function(data) {
  		var $svg = jQuery(data).find('svg');

  		$svg = $svg.removeAttr('xmlns:a');

  		$.each(attributes, function() {
  			$svg.attr(this.name, this.value);
  		});

  		$img.replaceWith($svg);
  	}, 'xml');
  });
});
