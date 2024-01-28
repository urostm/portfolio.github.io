// Custom cursor script
document.onmousemove = function (e) {
    var cursorText = document.getElementById('cursor-text');
    if (cursorText) {
        cursorText.style.display = "block"; // Show cursor text
        cursorText.style.left = e.pageX + 'px';
        cursorText.style.top = e.pageY + 'px';
    }
};

// Check if the current page is index.html before adding click listener
if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
    document.addEventListener('click', function () {
        window.location.href = 'about_me.html';
    });
}

document.addEventListener('DOMContentLoaded', function () {
    var headerText = document.querySelector('header h1');

    headerText.addEventListener('mouseover', function () {
        headerText.textContent = 'Урош Мирковић ™';
    });

    headerText.addEventListener('mouseout', function () {
        headerText.textContent = 'Uros Mirkovic ™';
    });

    headerText.addEventListener('click', function () {
        window.location.href = 'index.html';
    });
    var imagePreviewContainer = document.querySelector('.image-preview-container');
    var imagePreview = document.getElementById('image-preview');
    // Function to change the image source
    function changeImageSource(imageSrc, listItem) {
        if (imageSrc) {
            // Get the bounding rectangle of the hovered list item
            const listItemRect = listItem.getBoundingClientRect();
            // Calculate the horizontal midpoint between the list item's right edge and the right edge of the viewport
            const midpoint = listItemRect.right + (window.innerWidth - listItemRect.right) / 2;

            // Update the source of the image preview
            imagePreview.src = imageSrc;

            // Position the container
            imagePreviewContainer.style.display = 'block'; // Show the image container
            imagePreviewContainer.style.left = `${midpoint}px`;
            imagePreviewContainer.style.transform = 'translateX(-50%) translateY(-50%)';
            imagePreviewContainer.style.top = '50%';
        } else {
            imagePreview.src = '';
            imagePreviewContainer.style.display = 'none'; // Hide the image container
        }
    }

    // Add event listeners to list items
    const listItems = document.querySelectorAll('.right-section ul li:not(:first-child)');
    console.log('List items found:', listItems);

    listItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const imageSrc = item.getAttribute('data-image-src');
            changeImageSource(imageSrc, item);
        });
        item.addEventListener('mouseleave', () => {
            changeImageSource('', null);
        });
    });
});
