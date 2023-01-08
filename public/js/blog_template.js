const url = window.location.search;
const blog = url.replace("?", "");
const placeToPutBlog = document.querySelector("#blog-content");
console.log(blogs);
function parseQuery(queryString) {
  var query = {};
  var pairs = (
    queryString[0] === "?" ? queryString.substr(1) : queryString
  ).split("&");
  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i].split("=");
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
  }
  return query;
}
const whichBlog = parseQuery(blog).blog;
if (blogs[whichBlog]) {
  placeToPutBlog.innerHTML = blogs[whichBlog];
}
