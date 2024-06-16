const displayChoices = (user, computer) => {
    document.getElementById('user-choice').textContent = '나: ${user}';
    document.getElementById('computer-choice').textContent = '컴퓨터 선택: ${computer}';
};

const determineWinner = (user, computer) => {
    const resultElement = document.getElementById('game-result');
    if (user == computer) {
        resultElement.textContent = '결과: 무승부!';
    } else if (
        (user == 'rock' && computer === 'scissors') ||
        (user == 'paper' && computer === 'rock') ||
        (user == 'scissors' && computer === 'paper') 
    ) {
        resultElement.textContent = '결과: 승리!';
    } else {
        resultElement.textContent = '결과: 패배!';
    }
};