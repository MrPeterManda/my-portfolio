var content = document.getElementById('content');
var seeMore = document.getElementById('see-more');

seeMore.addEventListener('click', function() {
  if (content.style.height === 'auto') {
    content.style.height = '200px'; /* set initial height */
    seeMore.textContent = 'See More';
  } else {
    content.style.height = 'auto'; /* set height to auto to show all content */
    seeMore.textContent = 'See Less';
  }
});
