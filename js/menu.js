function toggleItems(categoryId) {
  var items = document.getElementById(categoryId);
  items.classList.toggle('show');

  var categoryTitle = document.querySelector(`h2.category-title[onclick="toggleItems('${categoryId}')"]`);
  var icon = categoryTitle.querySelector('i');

  icon.style.transform = icon.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
}

let rotated = false;
let sidebar = document.getElementById('sidebar');
let rotateButton = document.getElementById('rotate');

function toggleSidebar() {
  if (rotated) {
      rotateButton.style.transform = 'rotate(0deg)';
      sidebar.style.transform = 'translateX(100vw)';
  } else {
      rotateButton.style.transform = 'rotate(90deg)';
      sidebar.style.transform = 'translateX(0)';
  }
  rotated = !rotated;
}

rotateButton.addEventListener('click', toggleSidebar);
rotateButton.addEventListener('touchstart', toggleSidebar);
