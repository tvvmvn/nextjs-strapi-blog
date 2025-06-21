export function getImageSrc(url) {
  if (process.env.NODE_ENV == 'production') {
    return url;
  } 
  return 'http://localhost:1337' + url;
}