document.addEventListener('DOMContentLoaded', function () {
    let reviewCount = localStorage.getItem('reviewCount');
    if (!reviewCount) {
        reviewCount = 0;
    }

    reviewCount++;

    localStorage.setItem('reviewCount', reviewCount);

    const reviewCountElement = document.getElementById('review-count');
    reviewCountElement.textContent = reviewCount;
});