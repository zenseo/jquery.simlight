/**
 * @class jquery.simlight
 * @verson 0.1
 * @author Christopher Langton <chris@codewiz.biz>
 * @url https://github.com/chrisdlangton/jquery.simlight
 * @classDescription highlight similar text on mouse hover
 */
jQuery.fn.simlight = function(color) {
  var self = this;
  if ('string' !== typeof color || color.charAt(0) !== '#') color = '#fcff0b';
  var slElems = {},
    removeHighlight = function removeHighlight(arr)
    {
      var el = $.fn.simlight.slElems;
      for (var i=0,l=arr.length; i<l; i++)
      {
        var key = arr[i].toLowerCase().trim(),
            $el;
        for (var j=0,len=el[key].length; j<len; j++)
        {
          $el = $(el[key][j]);
          $el.css('background-color', 'transparent');
        }
      }
    },
    highlight = function highlight(arr)
    {
      var el = $.fn.simlight.slElems;
      for (var i=0,l=arr.length; i<l; i++)
      {
        var key = arr[i].toLowerCase().trim(),
          $el;
        for (var j=0,len=el[key].length; j<len; j++)
        {
          $el = $(el[key][j]);
          $el.css('background-color', color);
        }
      }
    };
  if (self.length > 0)
  {
    var $el, $data, key;
    for (var i=0,l=self.length; i<l; i++)
    {
      $el = $(self[i]);
      $data = $el.data();
      key = $el.text().toLowerCase().trim();
      var slKeys=[];
      if (key !== '')
      {
        slKeys.push(key);
        if ('undefined' === typeof slElems[key]) slElems[key] = [];
        slElems[key].push(self[i]);
        if ('string' === typeof $data.simlight && $data.simlight != '')
        {
          var keys = $data.simlight.split(','), key2;
          for (var j=0,len=keys.length; j<len; j++)
          {
            key2 = keys[j].toLowerCase().trim();
            if (key2 !== '')
            {
              if ('undefined' === typeof slElems[key2]) slElems[key2] = [];
              slElems[key2].push(self[i]);
              slKeys.push(key2);
            }
          }
        }
        $el.data('slKeys', slKeys.join(','));
        $el.on('mouseover',function(){
          var el = $(this), data = el.data('slKeys');
          if ('string' !== typeof data || data == '') return;
          highlight(data.split(','));
        });
        $el.on('mouseout',function(){
          var el = $(this), data = el.data('slKeys');
          if ('string' !== typeof data || data == '') return;
          removeHighlight(data.split(','));
        });
      }
    }
  }
  jQuery.fn.simlight.slElems = slElems;
  return this;
};
