# WassPlayer

WassPlayer is a simple, lightweight and customizable video player that supports [_modern_](#browser-support) browsers.

### HTML5 Video

```html
<video id="WassPlayer" controls data-poster="/path/to/poster.jpg">
  <source src="/path/to/video.mp4" type="video/mp4" />
  <source src="/path/to/video.webm" type="video/webm" />

  <!-- Captions are optional -->
  <track kind="captions" label="English captions" src="/path/to/captions.vtt" srclang="en" default />
</video>
```

## JavaScript

You can use WassPlayer as an ES6-ES9 module as follows:

```javascript
import WassPlayer from 'wassplayer';

const player = new WassPlayer('#WassPlayer');
```

## CDN

## JS

You can use our CDN

```html
<script src="http://code4stack.com/wassplayer.js"></script>
```

## CSS

```html
<link rel="stylesheet" href="http://code4stack.com/wassplayer.css" />
```

### The `.source` setter

This allows changing the player source and type on the fly.

Video example:

```javascript
player.source = {
  type: 'video',
  title: 'title',
  sources: [
    {
      src: '/path/movie.mp4',
      type: 'video/mp4',
      size: 720,
    },
    {
      src: '/path/movie.webm',
      type: 'video/webm',
      size: 1080,
    },
  ],
  poster: '/path/poster.jpg',
  previewThumbnails: {
    src: '/path/thumbnails.vtt',
  },
  tracks: [
    {
      kind: 'captions',
      label: 'English',
      src: '/path/to/captions.en.vtt',
      default: true,
    },
    {
      kind: 'captions',
      label: 'Hindi',
      src: '/path/to/captions.hn.vtt',
    },
  ],
};
```
# Browser support

WassPlayer supports the last 2 versions of most _modern_ browsers.

| Browser       | Supported       |
| ------------- | --------------- |
| Chrome        | ✓               |
| Edge          | ✓               |
| Firefox       | ✓               |
| IE11          | ✓&sup3;         |
| IE10          | ✓<sup>2,3</sup> |
| Mobile Safari | ✓&sup1;         |
| Opera         | ✓               |
| Safari        | ✓               |

# Author

WassPlayer is developed by (https://www.webappssoft.com/).

# Copyright and License

[The MIT license](LICENSE.md)