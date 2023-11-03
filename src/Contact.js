export function loadContactPage() {
    const contactDiv = document.createElement('div');
    contactDiv.id = 'contact';
    contactDiv.innerHTML = `
        <h2>Contact Us</h2>
        <p>If you have any questions or would like to make a reservation, please contact us.</p>
        <a href="tel:+1234567890">Call Us: (123) 456-7890</a>
        <a href="mailto:info@restaurant.com">Email Us: info@restaurant.com</a>
    `;
    return contactDiv;
}