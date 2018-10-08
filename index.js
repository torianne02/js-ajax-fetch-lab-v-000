const baseURL = 'https://api.github.com';
const user = 'torianne02';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return 'fbed3cac74745e55cdc9135c1a21da4b86e73996';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const url = `${baseURL}/repos/${repo}/forks`;
  fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json());
  .then(json => showResults(json));
}

function showResults(json) {
  document.getElementById('results').innerHTML = `<a href=${json.html_url}>${json.html_url}</a>`;
}

function createIssue() {
  const repo = `${user}/js-ajax-fetch-lab`;
  const url = `${baseURL}/repos/${repo}/issues`;
  const postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  };
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}

// fbed3cac74745e55cdc9135c1a21da4b86e73996
