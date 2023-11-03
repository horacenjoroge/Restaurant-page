export function loadMenuPage() {
    const menuDiv = document.createElement('div');
    menuDiv.id = 'menu';
    menuDiv.innerHTML = `
        <h2>Our Menu</h2>
        <div class="menu-item">
            <h3>Dish 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula, justo at lacinia.</p>
            <span>$10.99</span>
        </div>
        <div class="menu-item">
            <h3>Dish 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula, justo at lacinia.</p>
            <span>$12.99</span>
        </div>
        <div class="menu-item">
            <h3>Dish 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula, justo at lacinia.</p>
            <span>$9.99</span>
        </div>
   ` ;
    return menuDiv;
}