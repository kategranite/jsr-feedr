const APP_KEY = 'af91509e664f477fba0ed9507826e6b8';
const xhr = new XMLHttpRequest();

function getArticles(ingredient) {
xhr.open('GET', `https://newsapi.org/v2/everything?q=urban sustainability&from=2019-04-01&sortBy=publishedAt&apiKey=af91509e664f477fba0ed9507826e6b8`);
xhr.send();
xhr.onload = onSuccess; 
  
  
