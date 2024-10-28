document.addEventListener('DOMContentLoaded', function() {
    function checkAnswer() {
        const answers = document.getElementsByName('answer');
        let score =""; // declaration t3 chaine fer8a bch tt3aba mba3ed b bravo wlla pas juste
        let selectedAnswer = null;

        // tchouf enehy whda selectionnée
        for (const x of answers) {
            if (x.checked) { 
                selectedAnswer = x.value; 
                break; // mrgl o5rj 
            }
        }

        // tchoufha selectionnée wlla le
        if (selectedAnswer === null) { // kenha mhich selectionnée :
            alert("Veuillez sélectionner une réponse.");
            return; // to5rej ml fonction ken hata whda mehy selectionné
        }

        // tchoufha s7i7a wlla le
        if (selectedAnswer === 'Paris') {
            score = "bravo"; // ken shiha t9olk bravo
        }
        if (selectedAnswer === 'Londres') {
            score = "pas juste"; // ken ghalta t9olk pas juste
        }
            if (selectedAnswer === 'Berlin') {
                score = "pas juste"; // kifkif
            }
        
        if (selectedAnswer === 'Madrid') {
            score = "pas juste"; // kifkif
        }
        // Afficher le score
        alert(score);  
    }

    // yasna3 evenement bch ki tnzl 3l bouton el code ye5dm
    document.getElementById('submit').addEventListener('click', checkAnswer);
});
