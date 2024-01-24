document.addEventListener('DOMContentLoaded', function() {
    var cityWhite = document.getElementById('city_white');
    var isRotating = false;

    function rotateImage(imageId, degrees) {
        var image = document.getElementById(imageId);
        if (image && !isRotating) {
            isRotating = true;
            image.style.transition = 'transform 2s ease';
            image.style.transform = 'rotate(' + degrees + 'deg)';
        }
    }

    // Function to get the current rotation in degrees
    function getRotationDegrees(element) {
        var transform = window.getComputedStyle(element).getPropertyValue('transform');
        var matrix = new DOMMatrix(transform);
        return Math.round(Math.atan2(matrix.b, matrix.a) * (180 / Math.PI));
    }

    // Function to reset rotation
    function resetRotation() {
        cityWhite.style.transition = 'none';
        cityWhite.style.transform = 'rotate(0deg)';
        // Allow rotation to start again
        isRotating = false;
    }

    // Grid item at row 1, column 1
    document.getElementById('item-1-1').addEventListener('mouseover', function() {
        var currentRotation = getRotationDegrees(cityWhite);
        if (currentRotation === 0) {
            rotateImage('city_white', 180);
        } else {
            rotateImage('city_white', 0);
        }
    });

    // Grid item at row 3, column 2
    document.getElementById('item-3-2').addEventListener('mouseover', function() {
        var currentRotation = getRotationDegrees(cityWhite);
        if (currentRotation === 0) {
            rotateImage('city_white', 180);
        } else {
            rotateImage('city_white', 0);
        }
    });

    // Grid item at row 3, column 4
    document.getElementById('item-3-4').addEventListener('mouseover', function() {
        var currentRotation = getRotationDegrees(cityWhite);
        if (currentRotation === 0) {
            rotateImage('city_white', 180);
        } else {
            rotateImage('city_white', 0);
        }
    });

    // Grid item at row 3, column 5
    document.getElementById('item-3-5').addEventListener('mouseover', function() {
        var currentRotation = getRotationDegrees(cityWhite);
        if (currentRotation === 0) {
            rotateImage('city_white', 180);
        } else {
            rotateImage('city_white', 0);
        }
    });

    // Grid item at row 5, column 4
    document.getElementById('item-5-4').addEventListener('mouseover', function() {
        var currentRotation = getRotationDegrees(cityWhite);
        if (currentRotation === 0) {
            rotateImage('city_white', 180);
        } else {
            rotateImage('city_white', 0);
        }
    });

    // Listen for transitionend to update currentRotation after the rotation completes
    cityWhite.addEventListener('transitionend', function() {
        isRotating = false;
    });


    // Rotate letters
    $(window).on("load", function() {
        $(".grid-item").on("mouseenter", function() {
            rotateImages($(this));
        });
    });

    function rotateImages(gridItem) {
        // Rotate the specified images
        gridItem.find("img[alt='letter'], img[alt='letterBIG']").each(function() {
            var randomRotation = Math.floor(Math.random() * 4) * 90; // 0, 90, 180, 270
            $(this).css("transform", "rotate(" + randomRotation + "deg)");
        });

        // After 2000 milliseconds (2 seconds), reset the rotation
        setTimeout(function() {
            resetRotation(gridItem);
        }, 2000);
    }

    function resetRotation(gridItem) {
        // Reset the rotation to the initial position
        gridItem.find("img[alt='letter'], img[alt='letterBIG']").css("transform", "rotate(0deg)");
    }
});