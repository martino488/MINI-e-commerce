let cartItems = [];
        let cartCount = document.getElementById('cartCount');
        let cartTotalElement = document.getElementById('cartTotal');





const prodotti = [
    { nome: 'DEEP TEE', prezzo: 49.99, img: 'image/deepTee.png' },
    { nome: 'HANDLE HOODIE', prezzo: 89.99, img:'./image/hoodievintage.png' },
    { nome: 'You&Me TEE', prezzo: 49.99, img: 'image/youAndMetee.png' },
    { nome: 'TABLE COKE', prezzo: 79.99, img: 'image/table.png' },
    { nome: 'CUSTOM BART CAP', prezzo: 29.99, img: 'image/cap3.png' },
    { nome: 'SKATE-SKY', prezzo: 209.99, img: 'image/lightskate.png' },
];
    
function renderProducts() {
    const productsGrid = document.querySelector('.products-grid');
    if (!productsGrid) {
        console.error("Elemento con classe 'products-grid' non trovato.");
        return;
    }

    
    productsGrid.innerHTML = '';

    prodotti.forEach(prodotto => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        const img = document.createElement('img');
        img.src = prodotto.img;
        img.alt = prodotto.nome;
        img.className = 'product-image';

        const productDetails = document.createElement('div');
        productDetails.className = 'product-details';

        const h3 = document.createElement('h3');
        h3.className = 'product-name';
        h3.textContent = prodotto.nome;

        const p = document.createElement('p');
        p.className = 'product-price';
        p.textContent = prodotto.prezzo;

        const button = document.createElement('button');
        button.className = 'add-button';
        button.textContent = 'AGGIUNGI AL CARRELLO';
        button.onclick = () => addProduct(prodotto.nome);

        productDetails.appendChild(h3);
        productDetails.appendChild(p);
        productDetails.appendChild(button);

        productCard.appendChild(img);
        productCard.appendChild(productDetails);

        productsGrid.appendChild(productCard);
    });
}




function updateCartTotal(){
    let total=0;
    for(let item of cartItems){
        total+=item.prezzo;
    }
    cartTotalElement.textContent=`TOTALE CARRELLO: €${total.toFixed(2)}`; // Formatta il totale a 2 decimali
}


        
        // Funzione per aggiungere un prodotto al carrello
        function addProduct(productName) {
            const prodottoAggiunto = prodotti.find(prodotto => prodotto.nome === productName);
            if (prodottoAggiunto) {
                cartItems.push(prodottoAggiunto); // Memorizza l'oggetto prodotto
                cartCount.textContent = cartItems.length
                updateCartTotal();
            
            // Aggiorna il contatore
            cartCount.textContent = cartItems.length;
            
            // Trova il pulsante cliccato
            let buttons = document.querySelectorAll('.add-button');
            for (let button of buttons) {
                if (button.textContent === 'AGGIUNGI AL CARRELLO' && 
                    button.parentElement.querySelector('.product-name').textContent === productName) {
                    
                    
                    
                    // Cambia temporaneamente il testo
                    button.textContent = 'AGGIUNTO!';
                    
                    // Ripristina dopo un breve periodo
                    setTimeout(function() {
                        button.classList.remove('button-clicked');
                        button.textContent = 'AGGIUNGI AL CARRELLO';
                    }, 500);
                    
                    break;
                }
            }
            
        }
    }

   
    
        
    
        // Funzione per visualizzare il carrello
        function viewCart() {
            if (cartItems.length === 0) {
                alert('Il tuo carrello è vuoto!');
            } else {
                let message = 'PRODOTTI NEL CARRELLO\n\n';
                let productCounts = {};
                let total = 0;  // inizializza la variabile totale = 0
                
                  // Conta le occorrenze di ciascun prodotto e calcola il subtotale per tipo
        for (let item of cartItems) {
            productCounts[item.nome] = (productCounts[item.nome] || 0) + 1;
            total += item.prezzo; // Aggiungi il prezzo al totale
        }

        // Crea il messaggio
        for (let product in productCounts) {
            const prodotto = prodotti.find(p => p.nome === product);
            if (prodotto) {
                message += `${product} x${productCounts[product]} - €${(prodotto.prezzo * productCounts[product]).toFixed(2)}\n`;
            }
        }

        message += `\nTOTALE PRODOTTI: ${cartItems.length}`;
        message += `\nTOTALE CARRELLO: €${total.toFixed(2)}`; // Aggiungi il totale formattato

        alert(message);
        
    }
    updateCartTotal
}

        document.addEventListener('DOMContentLoaded', () => {
            renderProducts();;
            updateCartTotal();
        });

       