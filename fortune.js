document.addEventListener('DOMContentLoaded', function() {
  const selectMenu = document.querySelector('.search-container select');
  const categoryContainer = document.querySelector('.category-container');

  selectMenu.addEventListener('change', async function() {
    const selectedOption = this.value;

    if (selectedOption === '오늘 운세' || selectedOption === '내일 운세' || selectedOption === '이번주 운세' || selectedOption === '이번달 운세' || selectedOption === '올해 운세') {
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
              let fileName = '';
              if (selectedOption === '오늘 운세') {
                fileName = 'today001.html';
              } else if (selectedOption === '내일 운세') {
                fileName = 'tomorrow001.txt';
              } else if (selectedOption === '이번주 운세') {
                fileName = 'week001.txt';
              } else if (selectedOption === '이번달 운세') {
                fileName = 'month001.txt';
              } else if (selectedOption === '올해 운세') {
                fileName = 'year001.txt';
              }

              try {
                const response = await fetch(fileName);
                const content = await response.text();
                categoryContainer.innerHTML = `<p>${content}</p>`;
              } catch (error) {
                categoryContainer.innerHTML = `<p>파일을 불러오는 중 오류가 발생했습니다.</p>`;
              }
            } else {
              // 유효하지 않은 생년월일인 경우 처리할 내용
              categoryContainer.innerHTML = `<p>유효하지 않은 생년월일입니다.</p>`;
            }
          } else {
            // 유효하지 않은 연도인 경우 처리할 내용
            categoryContainer.innerHTML = `<p>유효하지 않은 생년월일입니다. 1900년부터 2020년까지의 연도만 허용됩니다.</p>`;
          }
        } else {
          // 유효하지 않은 형식인 경우 처리할 내용
          categoryContainer.innerHTML = `<p>입력이 제대로 안되었습니다.</p>`;
        }
      } else {
        // 생년월일이 입력되지 않았을 때 처리할 내용
        categoryContainer.innerHTML = `<p>입력이 안되었습니다.</p>`;
      }
    } else {
      categoryContainer.innerHTML = '';
    }
  });
});
