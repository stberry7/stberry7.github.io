document.addEventListener('DOMContentLoaded', function() {
  const selectMenu = document.querySelector('.search-container select');
  const categoryContainer = document.querySelector('.category-container');

  selectMenu.addEventListener('change', function() {
    const selectedOption = this.value;

    if (selectedOption === '오늘 운세') {
      const birthDate = prompt('생년월일을 입력하세요 (yyyymmdd):');

      if (birthDate) {
        // 입력받은 생년월일이 유효한 형식인지 확인
        const birthDateRegex = /^(\d{4})(\d{2})(\d{2})$/;
        const matchResult = birthDate.match(birthDateRegex);

        if (matchResult) {
          const year = parseInt(matchResult[1]);
          const month = parseInt(matchResult[2]);
          const day = parseInt(matchResult[3]);

          // 연도 유효성 검사 (1900년부터 2020년까지)
          if (year >= 1900 && year <= 2020) {
            // 월과 일의 유효성 검사
            if (month >= 1 && month <= 12 && day >= 1 && day <= 31) {
              // 유효한 생년월일인 경우 처리할 내용
              categoryContainer.innerHTML = '<p> <strong>오늘은 당신에게 특별한 날이 될 것입니다.</strong> <br><br>하늘의 별들이 당신을 향해 빛나고 있고, 우주의 에너지가 당신을 둘러싸고 있습니다. <br>당신의 삶에 큰 변화의 바람이 불어오고 있음을 느낄 수 있을 것입니다.<br><br> 특히 <strong> 오늘 아침 8시에서 10시 사이</strong>에는 당신에게 굉장히 긍정적인 일이 일어날 것으로 보입니다.<br> 이 시간 동안 당신은 평소에 잘 드러나지 않던 당신의 장점과 재능을 발견하게 될 수도 있고, 또는 오랫동안 기다려왔던 좋은 소식을 받게 될 수도 있습니다.<br> 어쩌면 당신의 인생을 바꿀 만한 기회가 찾아올지도 모릅니다.<br> 하지만 이 행운이 당신에게 찾아오기 위해서는 한 가지 조건이 있습니다.<br> 바로 당신의 마음가짐입니다.<br> 당신이 긍정적이고 밝은 에너지로 가득 차 있어야만 이 좋은 일들이 현실로 이루어질 수 있습니다.<br> 부정적인 생각과 감정은 당신의 운을 가로막는 장애물과도 같습니다.<br> 그러므로 오늘 하루 종일 당신의 마음을 밝고 맑게 유지하는 것이 중요합니다.<br> 오늘 당신에게는 남다른 인내심과 배려심이 필요할 것 같습니다.<br> 특히 가족이나 친구와의 관계에서 작은 다툼이 생길 수 있는데, 이럴 때일수록 당신이 먼저 한발 물러서서 이해하고 용서하는 자세를 보여주세요. 그러면 모든 갈등은 쉽게 해결될 것입니다.<br> 건강 면에서는 특별히 주의할 점은 없어 보이지만, 평소보다 조금 더 활동량을 늘리는 것이 좋겠습니다.<br> 가벼운 운동이나 산책을 통해 몸과 마음의 건강을 챙기세요.<br> 일이나 공부와 관련해서는, 오늘 당신의 능력과 성과를 인정받는 일이 생길 것입니다.<br> 그동안의 노력이 드디어 빛을 발하는 날이 될 것이니, 자신의 역량을 마음껏 발휘하셔도 좋습니다.<br> 다만 동료나 파트너와의 협력도 게을리하지 마세요.<br> 재물운으로는 평소보다 약간의 지출이 있을 수 있습니다. 하지만 걱정할 필요는 없습니다. 이는 곧 더 큰 이익으로 돌아올 수 있는 투자가 될 것이니까요.<br> 다만 불필요한 지출은 자제하시는 것이 좋겠습니다.<br> 연인이 있는 당신이라면, 오늘은 사랑하는 사람과 함께 보내기에 더없이 좋은 날입니다. 서로의 마음을 확인하고 더 깊은 유대감을 쌓을 수 있는 소중한 시간이 될 것입니다.<br> 싱글이신 분이라면, 새로운 인연이 다가올 수 있는 날이니 누군가를 만날 기회가 생기면 망설이지 말고 다가가 보세요.<br> 오늘의 행운의 숫자는 8과 3입니다. <br>또한 당신에게 행운을 가져다 줄 색깔은 초록색과 금색이니, 이 색들을 활용해 보는 것도 좋겠습니다. <br>찾아온 기회를 놓치지 말고 현명하게 행동한다면, 오늘은 분명 당신에게 멋진 날로 기억될 것입니다. <br>긍정의 에너지로 가득 찬 하루가 되기를 진심으로 바랍니다. <br><br>사랑을 담아, 운세를 전하는 사람으로부터. </p>';
            } else {
              // 유효하지 않은 생년월일인 경우 처리할 내용
              categoryContainer.innerHTML = '<p>유효하지 않은 생년월일입니다.</p>';
            }
          } else {
            // 유효하지 않은 연도인 경우 처리할 내용
            categoryContainer.innerHTML = '<p>유효하지 않은 생년월일입니다. 1900년부터 2020년까지의 연도만 허용됩니다.</p>';
          }
        } else {
          // 유효하지 않은 형식인 경우 처리할 내용
          categoryContainer.innerHTML = '<p>입력이 제대로 안되었습니다.</p>';
        }
      } else {
        // 생년월일이 입력되지 않았을 때 처리할 내용
        categoryContainer.innerHTML = '<p>입력이 안되었습니다.</p>';
      }
    } else if (selectedOption === '내일 운세') {
      categoryContainer.innerHTML = `
        <div class="category">
        <p>준비중입니다.</p>
        </div>
      `;
    } else if (selectedOption === '이번주 운세') {
      categoryContainer.innerHTML = `
        <div class="category">
        <p>준비중입니다.</p>
        </div>
      `;
    } else if (selectedOption === '이번달 운세') {
      categoryContainer.innerHTML = `
        <div class="category">
        <p>준비중입니다.</p>
        </div>
      `;
    } else if (selectedOption === '올해 운세') {
      categoryContainer.innerHTML = `
        <div class="category">
          <p>준비중입니다.</p>
        </div>
      `;
    } else {
      categoryContainer.innerHTML = '';
    }
  });
});