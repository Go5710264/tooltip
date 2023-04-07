const hasTooltip = [...document.querySelectorAll('.has-tooltip')]; 
const tooltip = document.querySelector('.tooltip');

hasTooltip.forEach((link) => {
    link.setAttribute('style', 'display: inline-block; position: relative;');
    link.addEventListener('click', promptAppearance);
})

function promptAppearance(evnt) { 
    if (this.contains(tooltip)) { 
        tooltip.classList.toggle('tooltip_active');
    } else {
        tooltip.classList.add('tooltip_active'); 
        this.appendChild(tooltip); 
        tooltip.textContent = this.getAttribute('title'); 
        
        tooltip.setAttribute('style', `position: absolute;`); 
    }
    evnt.preventDefault();
}
