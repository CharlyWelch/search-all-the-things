const URL = 'https://www.googleapis.com/books/v1/volumes?q=subject:';
const API_KEY = 'AIzaSyCnNP1g1nyTkcW6BjorD93gN-ueMhUWg0I';

export function search(subject, startIndex) {
  const url = `${URL}${subject}&startIndex=${startIndex}&orderBy=newest&key=${API_KEY}`;
  return fetch(url).then(response => {
    response = response.json();
    return response;
  });
  
}