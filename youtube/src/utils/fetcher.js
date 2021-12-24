export const fetcher = (url) => {
  fetch(url)
    .then((response) => console.log(response))
    .cathc((error) => console.log(error));
};
