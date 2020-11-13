

var Helvetica_Neue_Thin = { src: 'http://www.jagex.com/img/sifr/Helvetica_Neue_Thin.swf' };

sIFR.activate(Helvetica_Neue_Thin);

var Helvetica_Neue_Thin_filters = {
 DropShadow: {
  blurX: 3,
  blurY: 3,
  distance: 2,
  strength: 1,
  quality: 3,
  color: 0x000000,
  knockout: false,
  inner: false
 }
}

sIFR.replace(Helvetica_Neue_Thin, {
 selector: '.sifr, #Banner h2',
 css: '.sIFR-root {' +
  'font-size: 36px; color: #ffffff; font-weight: normal; letter-spacing: 1;' +
 '}',
 wmode: 'transparent',
 filters: Helvetica_Neue_Thin_filters
});