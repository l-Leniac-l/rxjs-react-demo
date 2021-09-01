export function request(path, options) {
  const headers = {
    "X-Parse-Application-Id": "",
    "X-Parse-REST-API-Key": "",
  };

  const url = `https://parseapi.back4app.com/classes/${path}`;

  return fetch(url, {
    ...options,
    headers,
  });
}
