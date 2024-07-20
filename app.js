document.addEventListener('DOMContentLoaded', function() {
    const myPlugs = document.querySelectorAll('.my-plug');
    // const hoverImages = myPlug.querySelectorAll('.hover-image');

    myPlugs.forEach(function(myPlug) {
        let hoverImage = myPlug.querySelector("img");
        myPlug.addEventListener('mousemove', function(e) {
            const rect = myPlug.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            
        
            hoverImage.style.left = x + 'px';
            hoverImage.style.top = y + 'px';
            hoverImage.style.opacity = '1';
        });
        
        myPlug.addEventListener('mouseleave', function() {
            hoverImage.style.opacity = '0';
        });
    });
  });