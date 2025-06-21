export function getImageSrc(url) {
  if (process.env.NODE_ENV == 'development') {
    return process.env.NEXT_PUBLIC_FILE_URL + url;
  } else {
    return 
  }
}

// http://localhost:1337/api
// https://lovable-bear-5da4cbf3d6.strapi.com/api

// http://localhost:1337
// https://lovable-bear-5da4cbf3d6.media.strapi.com