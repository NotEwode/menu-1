function toggleItems(categoryId) {
    var items = document.getElementById(categoryId);
    if (items.classList.contains('show')) {
        items.classList.remove('show');
    } else {
        items.classList.add('show');
    }

    var categoryTitle = document.querySelector(h2.category-title[onclick="toggleItems('${categoryId}')"]);
    var icon = categoryTitle.querySelector('i');

    if (icon.style.transform === 'rotate(180deg)') {
        icon.style.transform = 'rotate(0deg)';
    } else {
        icon.style.transform = 'rotate(180deg)';
    }
}
let rotated = false;
let sidebar = document.getElementById('sidebar');

document.getElementById('rotate').addEventListener('click', function() {
  if (rotated) {
    this.style.transform = 'rotate(0deg)';
    sidebar.style.transform = 'translateX(100vw)';
  } else {
    this.style.transform = 'rotate(90deg)';
    sidebar.style.transform = 'translateX(0)';
  }
  rotated = !rotated;
});
