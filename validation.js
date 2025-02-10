window.onload = function(){

    let form = document.getElementsByName('gbForm')[0]

    // προσπέλαση ως ιδιότητα φόρμας με βάση όνομα (θα πρέπει να είναι έγκυρo id)
    let edtFullName = form.the_name
    // προσπέλαση με βάση τη θέση στη φόρμα (όχι τόσο ασφαλές, λαμβάνεται υπόψη τα fieldset)
    edtFullName = form[2]
    // προσπέλαση ως ιδιότητα φόρμας με bracket notation, με βάση το όνομα
    edtFullName = form['the_name']

    form.addEventListener('submit', function(event) {
        let password = form.password.value;
        let confirm_password = form.confirm_password.value;

        if (password !== confirm_password) {
            alert('Οι κωδικοί δεν ταιριάζουν.');
            evt.preventDefault(); // Αποτροπή της υποβολής της φόρμας
        }
    });
}
