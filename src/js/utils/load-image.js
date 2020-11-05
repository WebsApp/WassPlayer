export default function loadImage(src, minWidth = 1) {
  return new Promise((resolve, reject) => {
    const image = new Image();

    const handler = () => {
      delete image.onload;
      delete image.onerror;
      (image.naturalWidth >= minWidth ? resolve : reject)(image);
    };

    Object.assign(image, { onload: handler, onerror: handler, src });
  });
}
