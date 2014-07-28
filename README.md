jquery.simlight
===============

highlight similar text on mouse hover

### HTML

You can activate simlight on the exact phrase of the targetted content, and optionally include additional keywords (comma seperated).


```html
<span class="simlight" data-simlight="highlight,simlight">Highlight the word highight</span>
<p>
  Here is some text that can be <span class="simlight">highlight</span>ed.<br>
</p>
<p>
  simlight will also highlinght the matching phrase, e.g. <span class="simlight">Highlight the word highight</span>.<br>
</p>
<p>
  Only words you want to be highlighted are affected by <span class="simlight">simlight</span>, you are in control.
</p>
```

### JavaScript

Activate using;

```javascript
$('.simlight').simlight();
```

Note: You may activate simlight on any targeted element by id, or any other selector (try to use class or id).

#### Demo

js Fiddle: (http://jsfiddle.net/aTfSt/)

#### Custom Colors

You may pass in the HEX for any highlighting color you wish;

```javascript
$('.simlight.red').simlight('#f00');
$('.simlight.green').simlight('#008000');
$('.simlight.yellow').simlight();
```

### Contribute & Contact

Contact me (Chris Langton) by email [chris (at) codewiz (dot) biz]() or on Twitter [@chrisdlangton](http://twitter.com/chrisdlangton)
