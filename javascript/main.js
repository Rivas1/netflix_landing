const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

console.log( tabItems );
console.log( tabContentItems );

// Select tab content item
function selectItem (e) {
    // Disable red on other tabs
    removeBorder();
    removeShow();

    // Add red border to current tab
    this.classList.add('tab-border');

    // Grab content item from DOM
    //  console.log(this.id);  
    
     const tabContentItem = document.querySelector(`#${this.id}-content`);

     // Add show class
     tabContentItem.classList.add('show');

   

}

function removeBorder () {
    tabItems.forEach( item => item.classList.remove('tab-border'));
}

function removeShow() {
    tabContentItems.forEach( item => item.classList.remove('show'));
}

tabItems.forEach( item => item.addEventListener( 'click', selectItem));