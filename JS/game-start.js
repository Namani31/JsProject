// game-start.js
// TODO: '게임 시작'을 눌렀을 때 가위바위보 사진이 나와야 함
document.addEventListener("DOMContentLoaded", () => {
    // 'start-game' id를 가진 버튼 요소 가져옴
    const startGameButton = document.getElementById('start-game');
    const gameScreen = document.querySelector('.game-screen');
    const choices = document.querySelectorAll('[data-choice]');
    const userChoiceImg = document.getElementById('computer-choice-img');
    const computerChoiceImg = document.getElementById('computer')
    
    startGameButton.addEventListener("click", function (event) {
        userChoice.style.display = 'block';
        startGameButton.style.display = 'none' // 게임 시작 버튼 숨기기
    });

    choices.forEach(button => {
        button.addEventListener('click', function(event) {
            const userChoice = this.getAttribute('data-choice');
            console.log(`사용자 선택: ${userChoice}`);

            // 사용자 선택 이미지 변경
            userChoiceImg.src = `images/${userChoice}.png`;
            userChoiceImg.alt = userChoice;

            // 컴퓨터 선택
            const choiceArray = ['scissors', 'rock', 'paper'];
            const randomChoice = choiceArra[Math.floor(Math.random() * choiceArray.length)];
            console.log(`컴퓨터 선택: ${randomChoice}`);

            // 컴퓨터 선택 이미지 변경
            computerChoiceImg.src = `images/${randomChoice}.png`;
            computerChoiceImg.alt = randomChoice;
        })
    })
});