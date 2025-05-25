document.addEventListener('DOMContentLoaded', () => {
    const preguntaTextElem = document.getElementById('pregunta-text');
    const preguntaImatgeElem = document.getElementById('pregunta-imatge');
    const opcionsContainerElem = document.getElementById('opcions-container');
    const feedbackElem = document.getElementById('feedback');
    const seguentBtn = document.getElementById('seguent-btn');
    
    const preguntaSeccioElem = document.getElementById('pregunta-seccio');
    const resultatsContainerElem = document.getElementById('resultats-container');
    const puntuacioFinalElem = document.getElementById('puntuacio-final');
    const missatgeFinalElem = document.getElementById('missatge-final');
    const reiniciarBtn = document.getElementById('reiniciar-btn');

    const preguntaActualNumElem = document.getElementById('pregunta-actual-num');
    const totalPreguntesElem = document.getElementById('total-preguntes');
    const temaPreguntaElem = document.getElementById('tema-pregunta');

    let preguntes = [];
    let preguntaActualIndex = 0;
    let puntuacio = 0;

    async function carregarPreguntes() {
        try {
            const response = await fetch('preguntes.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            preguntes = await response.json();
            totalPreguntesElem.textContent = preguntes.length;
            iniciarQuiz();
        } catch (error) {
            preguntaTextElem.textContent = 'Error al carregar les preguntes.';
            console.error("No s'ha pogut carregar preguntes.json:", error);
        }
    }

    function iniciarQuiz() {
        preguntaActualIndex = 0;
        puntuacio = 0;
        preguntaSeccioElem.classList.remove('ocult');
        resultatsContainerElem.classList.add('ocult');
        seguentBtn.classList.add('ocult');
        mostrarPregunta();
    }

    function mostrarPregunta() {
        feedbackElem.textContent = '';
        const preguntaActual = preguntes[preguntaActualIndex];

        preguntaActualNumElem.textContent = preguntaActualIndex + 1;
        temaPreguntaElem.textContent = preguntaActual.tema;
        preguntaTextElem.textContent = preguntaActual.pregunta;

        if (preguntaActual.imatge_url) {
            preguntaImatgeElem.src = preguntaActual.imatge_url;
            preguntaImatgeElem.alt = `Imatge per la pregunta ${preguntaActual.id}`;
            preguntaImatgeElem.classList.remove('ocult');
        } else {
            preguntaImatgeElem.classList.add('ocult');
            preguntaImatgeElem.src = ""; // Netejar per si la pregunta anterior tenia imatge
        }

        opcionsContainerElem.innerHTML = ''; // Netejar opcions anteriors

        preguntaActual.opcions.forEach((opcio, index) => {
            const button = document.createElement('button');
            button.classList.add('opcio-btn');
            button.textContent = opcio;
            button.addEventListener('click', () => seleccionarResposta(index, preguntaActual.resposta_correcta));
            opcionsContainerElem.appendChild(button);
        });
        seguentBtn.classList.add('ocult'); // Amagar el botó de següent fins que es respongui
    }

    function seleccionarResposta(indexSeleccionat, indexCorrecte) {
        const opcionsButtons = opcionsContainerElem.querySelectorAll('.opcio-btn');
        opcionsButtons.forEach(btn => btn.disabled = true); // Desactivar tots els botons

        if (indexSeleccionat === indexCorrecte) {
            puntuacio++;
            feedbackElem.textContent = "Correcte!";
            feedbackElem.style.color = '#28a745';
            opcionsButtons[indexSeleccionat].classList.add('correcte');
        } else {
            feedbackElem.textContent = `Incorrecte. La resposta correcta era: ${preguntes[preguntaActualIndex].opcions[indexCorrecte]}`;
            feedbackElem.style.color = '#dc3545';
            opcionsButtons[indexSeleccionat].classList.add('incorrecte');
            opcionsButtons[indexCorrecte].classList.add('correcte'); // Mostrar la correcta
        }
        seguentBtn.classList.remove('ocult');
    }

    seguentBtn.addEventListener('click', () => {
        preguntaActualIndex++;
        if (preguntaActualIndex < preguntes.length) {
            mostrarPregunta();
        } else {
            mostrarResultats();
        }
    });

    reiniciarBtn.addEventListener('click', iniciarQuiz);

    function mostrarResultats() {
        preguntaSeccioElem.classList.add('ocult');
        resultatsContainerElem.classList.remove('ocult');

        puntuacioFinalElem.textContent = `Has encertat ${puntuacio} de ${preguntes.length} preguntes.`;

        let missatge = '';
        const percentatge = (puntuacio / preguntes.length) * 100;

        if (percentatge === 100) {
            missatge = "Excel·lent! Ets un geni!";
        } else if (percentatge >= 75) {
            missatge = "Molt bé! Tens una gran capacitat.";
        } else if (percentatge >= 50) {
            missatge = "No està malament, però pots millorar.";
        } else {
            missatge = "Continua practicant!";
        }
        missatgeFinalElem.textContent = missatge;
    }

    // Començar el quiz
    carregarPreguntes();
});
