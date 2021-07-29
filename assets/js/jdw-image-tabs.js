/* 
 * Accordion style image tabs.
 *
 * On narrow viewport they work as a vertical accordion.
 * Each tab opens up to reveal an image.
 *
 * On wide viewports the image is displayed alongside 
 * the column of tabs.
 * ----------------------------------------------------- */

// Collect all the accordion tabs
var tab_buttons = document.getElementById("tab--list").getElementsByTagName("a");
// Find the current active element
var current = document.getElementById("tab--list").getElementsByClassName("active");

    
for ( let i = 0; i < tab_buttons.length; i++ ) {
    
    // Listen for the button click on the tab list
    tab_buttons[i].addEventListener("click", function() {

        // Remove image from previous item
        var current_image = current[0].getElementsByTagName("img");
        if ( current_image[0] ) {
            current[0].removeChild(current_image[0]);
        }
            
        // Read data attributes
        var image_info = this;
        var image_info_src = image_info.dataset.image;
        var image_info_alt = image_info.dataset.alt;
        
        // Wide viewport
        // Find display element
        var wide_image = document.getElementById("tab--image");
        wide_image.src = image_info_src;
        wide_image.alt = image_info_alt;
                
        // Narrow viewport
        // Append image to current item
        var narrow_image = "<img src='" + image_info_src + "' alt='" + image_info_alt + "'>";
        this.innerHTML += narrow_image;
        
        // Remove .active class from previous item
        current[0].classList.remove("active");

        // Add .active class to current item
        image_info.classList.add("active");
        
    }, false);
}


