document.addEventListener('DOMContentLoaded', function() {

    // 각 단계의 버튼과 출력 영역에 대한 상호작용을 설정하는 함수
    function setupStepInteraction(buttonId, outputId) {
        const runButton = document.getElementById(buttonId);
        const outputArea = document.getElementById(outputId);

        // 버튼이 존재할 경우에만 이벤트 리스너를 추가
        if (runButton) {
            runButton.addEventListener('click', function() {
                // 숨겨진 출력 영역을 보여줌
                if (outputArea) {
                    outputArea.classList.remove('hidden');
                }
                
                // 버튼을 비활성화하고 텍스트 변경
                this.disabled = true;
                this.textContent = '✅ 실행 완료';
            });
        }
    }

    // 각 단계별로 상호작용 설정 실행
    setupStepInteraction('runStep1Btn', 'outputStep1');
    setupStepInteraction('runStep2Btn', 'outputStep2');
    setupStepInteraction('runStep3Btn', 'outputStep3');
    setupStepInteraction('runStep4Btn', 'outputStep4');

});