document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.querySelector('#name').value;
    var address = document.querySelector('#address').value;
    var email = document.querySelector('#email').value;
    var product = document.querySelector('#product').value;
    var quantity = document.querySelector('#quantity').value;
    document.querySelector('#message').innerHTML = 'Order placed successfully!<br><br>' +
        'Name: ' + name + '<br>' +
        'Address: ' + address + '<br>' +
        'Email: ' + email + '<br>' +
        'Product: ' + product + '<br>' +
        'Quantity: ' + quantity;
});
