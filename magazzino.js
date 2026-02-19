const magazzinoBody = document.getElementById('magazzino-body');

        
        let magazzinoData = [
            { nome: 'DEEP TEE', quantita: 50,  },
            { nome: 'HANDLE HOODIE', quantita: 30 },
            { nome: 'You&Me TEE', quantita: 75 },
            { nome: 'TABLE COKE', quantita: 20 },
            { nome: 'CUSTOM BART CAP', quantita: 100 },
            { nome: 'SKATE-SKY', quantita: 15 }
        ];

        function renderMagazzino() {
            magazzinoBody.innerHTML = ''; // Pulisci la tabella

            magazzinoData.forEach((prodotto, index) => {
                const row = magazzinoBody.insertRow();

                const nomeCell = row.insertCell();
                nomeCell.textContent = prodotto.nome;

                const quantitaCell = row.insertCell();
                quantitaCell.textContent = prodotto.quantita;

                const azioneCell = row.insertCell();
                const modificaButton = document.createElement('button');
                modificaButton.textContent = 'Modifica stock';
                modificaButton.className = 'modifica-stock-button';
                modificaButton.addEventListener('click', () => modificaStock(index)); 
                azioneCell.appendChild(modificaButton);
            });
        }

        function modificaStock(index) {
            const prodotto = magazzinoData[index];
            const nuovaQuantita = parseInt(prompt(`Inserisci la nuova quantità disponibile per ${prodotto.nome}:`), 10);
            if (!isNaN(nuovaQuantita)) {
                prodotto.quantita = nuovaQuantita;
                renderMagazzino(); // Rerenderizza la tabella
                alert(`Stock di ${prodotto.nome} aggiornato a ${nuovaQuantita}.`);
                // Qui potresti voler inviare l'aggiornamento al server
            } else if (nuovaQuantita !== null) {
                alert('Inserisci una quantità valida.');
            }
        }

        // Renderizza il magazzino all'avvio
        renderMagazzino();