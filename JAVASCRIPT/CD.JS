
let score = 0; // Initialisation du score
let currentQuestionIndex = 0; // Initialisation de l'index de la question
let timerInterval; // Variable pour stocker l'intervalle du minuteur
const questions = [
    {
        question: "Quelle est la capitale du Maroc ?",
        answers: ["Marrakesh", "Fes", "Casablanca", "Rabat"],
        correctAnswer: "Rabat"
    },
    {
        question: "Qui a peint la Mona Lisa ?",
        answers: ["Léonard de Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
        correctAnswer: "Léonard de Vinci"
    },
    {
        question: "Quel est le pays d'origine de la pizza ?",
        answers: ["France", "Espagne", "Italie", "Grèce"],
        correctAnswer: "Italie"
    },
    {
        question: "Qui a écrit la pièce 'Roméo et Juliette' ?",
        answers: ["William Shakespeare", "Molière", "Friedrich Schiller", "Tennessee Williams"],
        correctAnswer: "William Shakespeare"
    },
    {
        question: "Quel est le nom de la chaîne de montagnes qui traverse le Maroc ?",
        answers: ["Atlas", "Himalaya", "Alpes", "Appalaches"],
        correctAnswer: "Atlas"
    },
    {
        question: "Quel est le nom de la monnaie utilisée au Maroc ?",
        answers: ["Dinar", "Dirham", "Peso", "Franco"],
        correctAnswer: "Dirham"
    },
    {
        question: "Quel est le nom du festival culturel annuel qui se déroule à Essaouira ?",
        answers: ["Festival de Marrakech", "Festival Gnaoua", "Festival de Fès", "Festival des Roses"],
        correctAnswer: "Festival Gnaoua"
    },
];

function startQuiz() {
    // Cacher la page d'accueil et afficher l'interface du quiz
    document.getElementById("home-page").style.display = "none";
    document.getElementById("regles").style.display = "none";
    document.getElementById("image1").style.display = "none";
    document.getElementById("quizContainer").style.display = "block";
    document.getElementById("result-page").style.display = "none";

    // Réinitialiser le timer et démarrer la première question
    startTimer();
    showQuestion();
}

 function startTimer() {
    let timeLeft = 15; // 15 secondes pour chaque question
    const timerElement = document.getElementById("timer");
    
    // Clear any existing timer to avoid overlapping intervals
    if (timerInterval) {
        clearInterval(timerInterval);
    }

    // Définir le minuteur qui se décrémente chaque seconde
    timerInterval = setInterval(function() {
        timerElement.textContent = "Temps restant: " + timeLeft;
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timerInterval); // Arrêter le minuteur lorsque le temps est écoulé
            showCorrectAnswer(); // Afficher la réponse correcte si le temps est écoulé
        }
    }, 1000);
 }
function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        let questionData = questions[currentQuestionIndex];
        document.getElementById("question").textContent = questionData.question;

        // Créer les boutons pour les réponses
        let answersHTML = "";
        questionData.answers.forEach(answer => {
            answersHTML += `<button class="answer-btn" onclick="checkAnswer('${answer}')">${answer}</button><br>`;
        });

        document.getElementById("answers").innerHTML = answersHTML;
    } else {
        endQuiz(); // Si toutes les questions sont traitées, afficher les résultats
    }
}

function checkAnswer(selectedAnswer) {
    let correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (selectedAnswer === correctAnswer) {
        score++; // Augmenter le score si la réponse est correcte
    }
    currentQuestionIndex++; // Passer à la question suivante
    showQuestion(); // Charger la question suivante
}

function showCorrectAnswer() {
    // Afficher la réponse correcte si le temps est écoulé
    let correctAnswer = questions[currentQuestionIndex].correctAnswer;
    alert("Temps écoulé! La bonne réponse était: " + correctAnswer);
    currentQuestionIndex++; // Passer à la question suivante
    showQuestion(); // Charger la question suivante
}

function endQuiz() {
    // Cacher l'interface du quiz et afficher la page de résultats
    document.getElementById("quizContainer").style.display = "none";
    document.getElementById("result-page").style.display = "block";
    document.getElementById("score").textContent = "Score: " + score;
}

document.getElementById("Rejouer").addEventListener("click", function() {
    // Réinitialiser le quiz pour rejouer
    score = 0;
    currentQuestionIndex = 0;
    document.getElementById("result-page").style.display = "none";
    document.getElementById("home-page").style.display = "none";
    document.getElementById("regles").style.display = "block";
    document.getElementById("image1").style.display="none"; 

    // Réinitialiser le timer et démarrer la première question
    startTimer();
    showQuestion();
});

document.getElementById("Quitter").addEventListener("click", function()
 {  score = 0;
    currentQuestionIndex = 0;
    document.getElementById("home-page").style.display = "block";
    document.getElementById("regles").style.display = "block";
    document.getElementById("image1").style.display="block"; 
    document.getElementById("result-page").style.display = "none";

    startTimer();
    showQuestion();
});


