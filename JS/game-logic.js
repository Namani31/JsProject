/*
    `DOMContentLoaded`는 HTML 문서가 모두 로드되고
    DOM(Document Object Model, 문서 객체 모델)이 준비된 후
    내부의 코드를 실행하도록 한다.
    만약 `DOMContentLoaded`를 사용하지 않을 시,
    `querySelectorAll`가 비어있는 결과를 반환하거나, 이벤트 리스너를 추가 할 수 없다.
    따라서 버튼을 클릭해도 아무 반응이 없게 된다.
    즉, DOM이 없으면 JS는 HTML과 액세스 할 수 없다.
*/

document.addEventListener('DOMContentLoaded', () => {
    const choices = document.querySelectorAll('.choice');

    // 사용자와 컴퓨터의 선택 저장용 변수
    let userChoice;
    let computerChoice;

    // 컴퓨터의 선택을 랜덤으로 결정
    const getComputerChoice = () => {
        // rock = 0, scissors = 1, paper = 2
        const choices = ['rock', 'scissors', 'paper'];
        // 0과 2 사이의 랜덤 인덱스 생성
        const randomIndex = Math.floor(Math.random() * choices.length);
        // 해당 인덱스의 선택 반환
        return choices[randomIndex];
    };

    choices.forEach(choice => {
        choice.addEventListener('click', function() {
            userChoice = this.getAttribute('data-choice');
            computerChoice = getComputerChoice();
            // 
            displayChoices(userChoice, computerChoice);
            determineWinner(userChoice, computerChoice);
        });
    });
}); 