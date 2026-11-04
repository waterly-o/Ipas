// Navigasi Antar Halaman
function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

// Data Kuis Interaktif
const quizData = [
    {
        question: "1. Apa fungsi utama otak dalam sistem saraf manusia?",
        options: ["Menghasilkan sel darah merah", "Menopang berat badan", "Pusat pengolahan informasi dan koordinasi", "Menghubungkan tulang"],
        answer: 2
    },
    {
        question: "2. Bagian manakah yang memproses gerak refleks secara cepat tanpa menunggu perintah sadar?",
        options: ["Saraf tepi", "Sumsum tulang belakang", "Sendi", "Otak"],
        answer: 1
    },
    {
        question: "3. Komponen sistem gerak yang berfungsi sebagai alat gerak aktif dengan cara berkontraksi adalah...",
        options: ["Tulang", "Sendi", "Sumsum", "Otot"],
        answer: 3
    },
    {
        question: "4. Bagaimana urutan alur informasi saraf pada gerak refleks?",
        options: [
            "Rangsangan -> Saraf Sensorik -> Otak -> Efektor", 
            "Rangsangan -> Reseptor -> Saraf Sensorik -> Sumsum Tulang Belakang -> Saraf Motorik -> Efektor",
            "Reseptor -> Otak -> Sumsum Tulang Belakang -> Otot",
            "Efektor -> Saraf Motorik -> Sumsum Tulang Belakang -> Rangsangan"
        ],
        answer: 1
    },
    {
        question: "5. Apa fungsi sendi pada tubuh manusia?",
        options: ["Memompa darah ke seluruh tubuh", "Menghubungkan dua tulang agar bisa bergerak fleksibel", "Menerima rangsangan dari luar", "Menjadi pusat pengendali seluruh aktivitas"],
        answer: 1
    }
];

// Merender Kuis ke HTML
const quizContainer = document.getElementById("quiz-container");
quizData.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.className = "question-block";
    
    let optionsHtml = q.options.map((opt, i) => `
        <label>
            <input type="radio" name="q${index}" value="${i}"> ${opt}
        </label>
    `).join("");

    questionDiv.innerHTML = `<p>${q.question}</p><div class="options">${optionsHtml}</div>`;
    quizContainer.appendChild(questionDiv);
});

// Menghitung Skor
function calculateScore() {
    let score = 0;
    quizData.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && parseInt(selected.value) === q.answer) {
            score += 20; // 5 soal x 20 = 100
        }
    });

    const resultDiv = document.getElementById("result");
    resultDiv.classList.remove("hidden");
    resultDiv.innerHTML = `Skor Anda: ${score} / 100 <br> ${score === 100 ? 'Luar biasa! Pemahamanmu sangat baik.' : 'Terus semangat belajar dan coba lagi!'}`;
}
