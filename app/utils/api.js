export async function getPosts(filterId) {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await resp.json(); //because resp is a promise
  if (!filterId) return data;
  else {
    const filterData = data.filter((elem) => elem.id === parseInt(filterId));
    return filterData;
  }
}

export async function getComments(filterId) {
  const resp = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await resp.json(); //because resp is a promise
  const filterData = data.filter((elem) => elem.id === parseInt(filterId));
  return filterData;
}
