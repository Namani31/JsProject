document.addEventListener("DOMContentLoaded", () => {
    // 'start-game' id를 가진 버튼 요소 가져옴
    var startGameButton = document.getElementById('start-game');


    startGameButton.addEventListener("click", function (event) {
        alert('Test');
    });
});