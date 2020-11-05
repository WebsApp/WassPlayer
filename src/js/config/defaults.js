// ==========================================================================
// WassPlayer default config file
// ==========================================================================

const defaults = {
  // Disable
  enabled: true,

  // Custom media title
  title: '',

  // Logging to console
  debug: false,

  // Auto play (if supported)
  autoplay: false,

  // Only allow one media playing at once
  autopause: true,

  // Allow inline playback on iOS
  playsinline: true,

  // Default time to skip when rewind/fast forward
  seekTime: 10,

  // Default volume
  volume: 1,
  muted: false,

  // Pass a custom duration
  duration: null,

  // Display the media duration on load in the current time position
  // If you have opted to display both duration and currentTime, this is ignored
  displayDuration: true,

  // Invert the current time to be a countdown
  invertTime: true,

  // Clicking the currentTime inverts it's value to show time left rather than elapsed
  toggleInvert: true,

  // Force an aspect ratio
  // The format must be `'w:h'` (e.g. `'16:9'`)
  ratio: null,

  // Click video container to play/pause
  clickToPlay: true,

  // Auto hide the controls
  hideControls: true,

  // Reset to start when playback ended
  resetOnEnd: false,

  // Disable the standard context menu
  disableContextMenu: true,

  // Sprite (for icons)
  loadSprite: true,
  iconPrefix: 'wassPlayer',
  iconUrl: 'http://code4stack.com/wassplayer.svg',

  // Quality default
  quality: {
    default: 576,
    // The options to display in the UI, if available for the source media
    options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
    forced: false,
    onChange: null,
  },

  // Set loops
  loop: {
    active: false,
    // start: null,
    // end: null,
  },

  // Speed default and options to display
  speed: {
    selected: 1,
    // The options to display in the UI, if available for the source media
    options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4],
  },

  // Keyboard shortcut settings
  keyboard: {
    focused: true,
    global: false,
  },

  // Display tooltips
  tooltips: {
    controls: false,
    seek: true,
  },

  // Captions settings
  captions: {
    active: false,
    language: 'auto',
    update: false,
  },

  // Fullscreen settings
  fullscreen: {
    enabled: true, // Allow fullscreen?
    fallback: true, // Fallback using full viewport/window
    iosNative: false, // Use the native fullscreen in iOS (disables custom controls)
    // container: null, // defaults to the player element
  },

  // Local storage
  storage: {
    enabled: true,
    key: 'wassPlayer',
  },

  // Default controls
  controls: [
    'play-large',
    // 'restart',
    'rewind',
    'play',
    'fast-forward',
    'progress',
    'current-time',
    // 'duration',
    'mute',
    'volume',
    'captions',
    'settings',
    'pip',
    'airplay',
    // 'download',
    'fullscreen',
  ],
  settings: ['captions', 'quality', 'speed'],

  // Localisation
  i18n: {
    restart: 'Restart',
    rewind: 'Rewind {seektime}s',
    play: 'Play',
    pause: 'Pause',
    fastForward: 'Forward {seektime}s',
    seek: 'Seek',
    seekLabel: '{currentTime} of {duration}',
    played: 'Played',
    buffered: 'Buffered',
    currentTime: 'Current time',
    duration: 'Duration',
    volume: 'Volume',
    mute: 'Mute',
    unmute: 'Unmute',
    enableCaptions: 'Enable captions',
    disableCaptions: 'Disable captions',
    download: 'Download',
    enterFullscreen: 'Enter fullscreen',
    exitFullscreen: 'Exit fullscreen',
    frameTitle: 'Player for {title}',
    captions: 'Captions',
    settings: 'Settings',
    pip: 'PIP',
    menuBack: 'Go back to previous menu',
    speed: 'Speed',
    normal: 'Normal',
    quality: 'Quality',
    loop: 'Loop',
    start: 'Start',
    end: 'End',
    all: 'All',
    reset: 'Reset',
    disabled: 'Disabled',
    enabled: 'Enabled',
    advertisement: 'Ad',
    qualityBadge: {
      2160: '4K',
      1440: 'HD',
      1080: 'HD',
      720: 'HD',
      576: 'SD',
      480: 'SD',
    },
  },

  // Custom control listeners
  listeners: {
    seek: null,
    play: null,
    pause: null,
    restart: null,
    rewind: null,
    fastForward: null,
    mute: null,
    volume: null,
    captions: null,
    download: null,
    fullscreen: null,
    pip: null,
    airplay: null,
    speed: null,
    quality: null,
    loop: null,
    language: null,
  },

  // Events to watch and bubble
  events: [
    'ended',
    'progress',
    'stalled',
    'playing',
    'waiting',
    'canplay',
    'canplaythrough',
    'loadstart',
    'loadeddata',
    'loadedmetadata',
    'timeupdate',
    'volumechange',
    'play',
    'pause',
    'error',
    'seeking',
    'seeked',
    'emptied',
    'ratechange',
    'cuechange',

    // Custom events
    'download',
    'enterfullscreen',
    'exitfullscreen',
    'captionsenabled',
    'captionsdisabled',
    'languagechange',
    'controlshidden',
    'controlsshown',
    'ready',

    // Quality
    'qualitychange',
  ],

  // Selectors
  // Change these to match your template if using custom HTML
  selectors: {
    editable: 'input, textarea, select, [contenteditable]',
    container: '.wassPlayer',
    controls: {
      container: null,
      wrapper: '.wassPlayer__controls',
    },
    labels: '[data-wassPlayer]',
    buttons: {
      play: '[data-wassPlayer="play"]',
      pause: '[data-wassPlayer="pause"]',
      restart: '[data-wassPlayer="restart"]',
      rewind: '[data-wassPlayer="rewind"]',
      fastForward: '[data-wassPlayer="fast-forward"]',
      mute: '[data-wassPlayer="mute"]',
      captions: '[data-wassPlayer="captions"]',
      download: '[data-wassPlayer="download"]',
      fullscreen: '[data-wassPlayer="fullscreen"]',
      pip: '[data-wassPlayer="pip"]',
      airplay: '[data-wassPlayer="airplay"]',
      settings: '[data-wassPlayer="settings"]',
      loop: '[data-wassPlayer="loop"]',
    },
    inputs: {
      seek: '[data-wassPlayer="seek"]',
      volume: '[data-wassPlayer="volume"]',
      speed: '[data-wassPlayer="speed"]',
      language: '[data-wassPlayer="language"]',
      quality: '[data-wassPlayer="quality"]',
    },
    display: {
      currentTime: '.wassPlayer__time--current',
      duration: '.wassPlayer__time--duration',
      buffer: '.wassPlayer__progress__buffer',
      loop: '.wassPlayer__progress__loop', // Used later
      volume: '.wassPlayer__volume--display',
    },
    progress: '.wassPlayer__progress',
    captions: '.wassPlayer__captions',
    caption: '.wassPlayer__caption',
  },

  // Class hooks added to the player in different states
  classNames: {
    type: 'wassPlayer--{0}',
    provider: 'wassPlayer--{0}',
    video: 'wassPlayer__video-wrapper',
    embed: 'wassPlayer__video-embed',
    videoFixedRatio: 'wassPlayer__video-wrapper--fixed-ratio',
    embedContainer: 'wassPlayer__video-embed__container',
    poster: 'wassPlayer__poster',
    posterEnabled: 'wassPlayer__poster-enabled',
    control: 'wassPlayer__control',
    controlPressed: 'wassPlayer__control--pressed',
    playing: 'wassPlayer--playing',
    paused: 'wassPlayer--paused',
    stopped: 'wassPlayer--stopped',
    loading: 'wassPlayer--loading',
    hover: 'wassPlayer--hover',
    tooltip: 'wassPlayer__tooltip',
    cues: 'wassPlayer__cues',
    hidden: 'wassPlayer__sr-only',
    hideControls: 'wassPlayer--hide-controls',
    isIos: 'wassPlayer--is-ios',
    isTouch: 'wassPlayer--is-touch',
    uiSupported: 'wassPlayer--full-ui',
    noTransition: 'wassPlayer--no-transition',
    display: {
      time: 'wassPlayer__time',
    },
    menu: {
      value: 'wassPlayer__menu__value',
      badge: 'wassPlayer__badge',
      open: 'wassPlayer--menu-open',
    },
    captions: {
      enabled: 'wassPlayer--captions-enabled',
      active: 'wassPlayer--captions-active',
    },
    fullscreen: {
      enabled: 'wassPlayer--fullscreen-enabled',
      fallback: 'wassPlayer--fullscreen-fallback',
    },
    pip: {
      supported: 'wassPlayer--pip-supported',
      active: 'wassPlayer--pip-active',
    },
    airplay: {
      supported: 'wassPlayer--airplay-supported',
      active: 'wassPlayer--airplay-active',
    },
    tabFocus: 'wassPlayer__tab-focus',
    previewThumbnails: {
      // Tooltip thumbs
      thumbContainer: 'wassPlayer__preview-thumb',
      thumbContainerShown: 'wassPlayer__preview-thumb--is-shown',
      imageContainer: 'wassPlayer__preview-thumb__image-container',
      timeContainer: 'wassPlayer__preview-thumb__time-container',
      // Scrubbing
      scrubbingContainer: 'wassPlayer__preview-scrubbing',
      scrubbingContainerShown: 'wassPlayer__preview-scrubbing--is-shown',
    },
  },

  // Embed attributes
  attributes: {
    embed: {
      provider: 'data-wassPlayer-provider',
      id: 'data-wassPlayer-embed-id',
    },
  },

  // Preview Thumbnails plugin
  previewThumbnails: {
    enabled: false,
    src: '',
  },
};

export default defaults;
