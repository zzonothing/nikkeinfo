// src/OverloadPage.js
import React, { useState } from 'react';
import './OverloadPage.css';

// 옵션과 확률 설정
const options = [
  { text: '우월코드 대미지 증가', probability: 0.1, levels: [
    { level: 1, value: '9.54%', probability: 0.1 },
    { level: 2, value: '10.94%', probability: 0.1 },
    { level: 3, value: '12.34%', probability: 0.1 },
    { level: 4, value: '13.75%', probability: 0.1 },
    { level: 5, value: '15.15%', probability: 0.1 },
    { level: 6, value: '16.55%', probability: 0.07 },
    { level: 7, value: '17.95%', probability: 0.07 },
    { level: 8, value: '19.35%', probability: 0.07 },
    { level: 9, value: '20.75%', probability: 0.07 },
    { level: 10, value: '22.15%', probability: 0.07 },
    { level: 11, value: '23.56%', probability: 0.01 },
    { level: 12, value: '24.96%', probability: 0.01 },
    { level: 13, value: '26.36%', probability: 0.01 },
    { level: 14, value: '27.76%', probability: 0.01 },
    { level: 15, value: '29.16%', probability: 0.01 }
  ] },
  { text: '명중률 증가', probability: 0.12, levels: [
    { level: 1, value: '4.77%', probability: 0.12 },
    { level: 2, value: '5.47%', probability: 0.12 },
    { level: 3, value: '6.18%', probability: 0.12 },
    { level: 4, value: '6.88%', probability: 0.12 },
    { level: 5, value: '7.59%', probability: 0.12 },
    { level: 6, value: '8.29%', probability: 0.07 },
    { level: 7, value: '9.00%', probability: 0.07 },
    { level: 8, value: '9.70%', probability: 0.07 },
    { level: 9, value: '10.40%', probability: 0.07 },
    { level: 10, value: '11.11%', probability: 0.07 },
    { level: 11, value: '11.81%', probability: 0.01 },
    { level: 12, value: '12.52%', probability: 0.01 },
    { level: 13, value: '13.22%', probability: 0.01 },
    { level: 14, value: '13.93%', probability: 0.01 },
    { level: 15, value: '14.63%', probability: 0.01 }
  ] },
  { text: '최대 장탄 수 증가', probability: 0.12, levels: [
    { level: 1, value: '27.84%', probability: 0.12 },
    { level: 2, value: '31.95%', probability: 0.12 },
    { level: 3, value: '36.06%', probability: 0.12 },
    { level: 4, value: '40.17%', probability: 0.12 },
    { level: 5, value: '44.28%', probability: 0.12 },
    { level: 6, value: '48.39%', probability: 0.07 },
    { level: 7, value: '52.50%', probability: 0.07 },
    { level: 8, value: '56.60%', probability: 0.07 },
    { level: 9, value: '60.71%', probability: 0.07 },
    { level: 10, value: '64.82%', probability: 0.07 },
    { level: 11, value: '68.93%', probability: 0.01 },
    { level: 12, value: '73.04%', probability: 0.01 },
    { level: 13, value: '77.15%', probability: 0.01 },
    { level: 14, value: '81.26%', probability: 0.01 },
    { level: 15, value: '85.37%', probability: 0.01 }
  ] },
  { text: '공격력 증가', probability: 0.1, levels: [
    { level: 1, value: '4.77%', probability: 0.12 },
    { level: 2, value: '5.47%', probability: 0.12 },
    { level: 3, value: '6.18%', probability: 0.12 },
    { level: 4, value: '6.88%', probability: 0.12 },
    { level: 5, value: '7.59%', probability: 0.12 },
    { level: 6, value: '8.29%', probability: 0.07 },
    { level: 7, value: '9.00%', probability: 0.07 },
    { level: 8, value: '9.70%', probability: 0.07 },
    { level: 9, value: '10.40%', probability: 0.07 },
    { level: 10, value: '11.11%', probability: 0.07 },
    { level: 11, value: '11.81%', probability: 0.01 },
    { level: 12, value: '12.52%', probability: 0.01 },
    { level: 13, value: '13.22%', probability: 0.01 },
    { level: 14, value: '13.93%', probability: 0.01 },
    { level: 15, value: '14.63%', probability: 0.01 }
  ] },
  { text: '차지 대미지 증가', probability: 0.12, levels: [
    { level: 1, value: '4.77%', probability: 0.12 },
    { level: 2, value: '5.47%', probability: 0.12 },
    { level: 3, value: '6.18%', probability: 0.12 },
    { level: 4, value: '6.88%', probability: 0.12 },
    { level: 5, value: '7.59%', probability: 0.12 },
    { level: 6, value: '8.29%', probability: 0.07 },
    { level: 7, value: '9.00%', probability: 0.07 },
    { level: 8, value: '9.70%', probability: 0.07 },
    { level: 9, value: '10.40%', probability: 0.07 },
    { level: 10, value: '11.11%', probability: 0.07 },
    { level: 11, value: '11.81%', probability: 0.01 },
    { level: 12, value: '12.52%', probability: 0.01 },
    { level: 13, value: '13.22%', probability: 0.01 },
    { level: 14, value: '13.93%', probability: 0.01 },
    { level: 15, value: '14.63%', probability: 0.01 }
  ] },
  { text: '차지 속도 증가', probability: 0.12, levels: [
    { level: 1, value: '1.98%', probability: 0.12 },
    { level: 2, value: '2.28%', probability: 0.12 },
    { level: 3, value: '2.57%', probability: 0.12 },
    { level: 4, value: '2.86%', probability: 0.12 },
    { level: 5, value: '3.16%', probability: 0.12 },
    { level: 6, value: '3.45%', probability: 0.07 },
    { level: 7, value: '3.75%', probability: 0.07 },
    { level: 8, value: '4.04%', probability: 0.07 },
    { level: 9, value: '4.33%', probability: 0.07 },
    { level: 10, value: '4.63%', probability: 0.07 },
    { level: 11, value: '4.92%', probability: 0.01 },
    { level: 12, value: '5.21%', probability: 0.01 },
    { level: 13, value: '5.51%', probability: 0.01 },
    { level: 14, value: '5.80%', probability: 0.01 },
    { level: 15, value: '6.09%', probability: 0.01 }
  ] },
  { text: '크리티컬 대미지 증가', probability: 0.12, levels: [
    { level: 1, value: '6.64%', probability: 0.12 },
    { level: 2, value: '7.62%', probability: 0.12 },
    { level: 3, value: '8.60%', probability: 0.12 },
    { level: 4, value: '9.58%', probability: 0.12 },
    { level: 5, value: '10.56%', probability: 0.12 },
    { level: 6, value: '11.54%', probability: 0.07 },
    { level: 7, value: '12.52%', probability: 0.07 },
    { level: 8, value: '13.50%', probability: 0.07 },
    { level: 9, value: '14.48%', probability: 0.07 },
    { level: 10, value: '15.46%', probability: 0.07 },
    { level: 11, value: '16.44%', probability: 0.01 },
    { level: 12, value: '17.42%', probability: 0.01 },
    { level: 13, value: '18.40%', probability: 0.01 },
    { level: 14, value: '19.38%', probability: 0.01 },
    { level: 15, value: '20.36%', probability: 0.01 }
  ] },
  { text: '크리티컬 확률 증가', probability: 0.1, levels: [
    { level: 1, value: '2.30%', probability: 0.12 },
    { level: 2, value: '2.64%', probability: 0.12 },
    { level: 3, value: '2.98%', probability: 0.12 },
    { level: 4, value: '3.32%', probability: 0.12 },
    { level: 5, value: '3.66%', probability: 0.12 },
    { level: 6, value: '4.00%', probability: 0.07 },
    { level: 7, value: '4.35%', probability: 0.07 },
    { level: 8, value: '4.69%', probability: 0.07 },
    { level: 9, value: '5.03%', probability: 0.07 },
    { level: 10, value: '5.37%', probability: 0.07 },
    { level: 11, value: '5.70%', probability: 0.01 },
    { level: 12, value: '6.05%', probability: 0.01 },
    { level: 13, value: '6.39%', probability: 0.01 },
    { level: 14, value: '6.73%', probability: 0.01 },
    { level: 15, value: '7.07%', probability: 0.01 }
  ] },
  { text: '방어력 증가', probability: 0.1, levels: [
    { level: 1, value: '4.77%', probability: 0.12 },
    { level: 2, value: '5.47%', probability: 0.12 },
    { level: 3, value: '6.18%', probability: 0.12 },
    { level: 4, value: '6.88%', probability: 0.12 },
    { level: 5, value: '7.59%', probability: 0.12 },
    { level: 6, value: '8.29%', probability: 0.07 },
    { level: 7, value: '9.00%', probability: 0.07 },
    { level: 8, value: '9.70%', probability: 0.07 },
    { level: 9, value: '10.40%', probability: 0.07 },
    { level: 10, value: '11.11%', probability: 0.07 },
    { level: 11, value: '11.81%', probability: 0.01 },
    { level: 12, value: '12.52%', probability: 0.01 },
    { level: 13, value: '13.22%', probability: 0.01 },
    { level: 14, value: '13.93%', probability: 0.01 },
    { level: 15, value: '14.63%', probability: 0.01 }
  ] },
];

// 랜덤 레벨 선택 함수
function getRandomLevel(levels) {
  const totalProbability = levels.reduce((acc, level) => acc + level.probability, 0);

  const random = Math.random() * totalProbability;
  let cumulativeProbability = 0;

  for (const level of levels) {
    cumulativeProbability += level.probability;
    if (random < cumulativeProbability) {
      return { level: level.level, value: level.value };
    }
  }

  return { level: 0, value: 'Error' };
}

// 랜덤 텍스트 선택 함수 (중복 방지 및 확률 재계산)
function getRandomText(exclude = []) {
  const filteredOptions = options.filter(option => !exclude.includes(option.text));
  const totalProbability = filteredOptions.reduce((acc, option) => acc + option.probability, 0);

  const random = Math.random() * totalProbability;
  let cumulativeProbability = 0;

  for (const option of filteredOptions) {
    cumulativeProbability += option.probability;
    if (random < cumulativeProbability) {
      return option;
    }
  }

  return filteredOptions[filteredOptions.length - 1]; // 기본 반환
}

// 랜덤 레벨 선택 함수 (11번째 레벨 고정)
function getFixedLevel(levels, index) {
  if (index >= 0 && index < levels.length) {
    return { level: levels[index].level, value: levels[index].value };
  }
  return { level: 0, value: 'Error' };
}

// 1번째 줄 (100% 확률로 선택)
function getRow1Text(selectedTexts, prevOption = null, fixedLevelIndex = null) {
  const option = prevOption !== null ? prevOption : getRandomText(selectedTexts);
  const level = fixedLevelIndex !== null ? getFixedLevel(option.levels, fixedLevelIndex) : getRandomLevel(option.levels);
  return { text: option.text, level: level, option: option };
}

// 2번째 줄 (50% 확률로 선택, 50%는 공백)
function getRow2Text(selectedTexts, prevOption = null, fixedLevelIndex = null) {
  if (prevOption !== null)
  {
    const option = prevOption;
    const level = fixedLevelIndex !== null ? getFixedLevel(option.levels, fixedLevelIndex) : getRandomLevel(option.levels);
    return { text: option.text, level: level, option: option };
  }
  else
  {
    if (Math.random() < 0.5) {
      const option = getRandomText(selectedTexts);
      const level = fixedLevelIndex !== null ? getFixedLevel(option.levels, fixedLevelIndex) : getRandomLevel(option.levels);
      return { text: option.text, level: level, option: option };
    }
    return { text: '', level: '', option: null };
  }
}

// 3번째 줄 (30% 확률로 선택, 70%는 공백)
function getRow3Text(selectedTexts, prevOption = null, fixedLevelIndex = null) {
  if (prevOption !== null)
    {
      const option = prevOption;
      const level = fixedLevelIndex !== null ? getFixedLevel(option.levels, fixedLevelIndex) : getRandomLevel(option.levels);
      return { text: option.text, level: level, option: option };
    }
    else
    {
      if (Math.random() < 0.3) {
        const option = getRandomText(selectedTexts);
        const level = fixedLevelIndex !== null ? getFixedLevel(option.levels, fixedLevelIndex) : getRandomLevel(option.levels);
        return { text: option.text, level: level, option: option };
      }
      return { text: '', level: '', option: null };
    }
}

function OverloadPage() {
  const [overloaded, setOverloaded] = useState(Array(4).fill(false));
  const [rows, setRows] = useState(Array(4).fill({ row1: '', row2: '', row3: '' }));
  const [moduleCount, setModuleCount] = useState(0);

  const handleOverloadClick = (index, isFirst) => {
    setOverloaded(prevState => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });

    setRows(prevRows => {
      const newRows = [...prevRows];
      const selectedTexts = [];

      // 1번째 줄 텍스트 선택
      const row1 = getRow1Text(selectedTexts, null, isFirst ? 10 : null);
      selectedTexts.push(row1.text);

      // 2번째 줄 텍스트 선택
      const row2 = getRow2Text(selectedTexts, null, isFirst ? 10 : null);
      if (row2.text) selectedTexts.push(row2.text);

      // 3번째 줄 텍스트 선택
      const row3 = getRow3Text(selectedTexts, null, isFirst ? 10 : null);

      newRows[index] = {
        row1Text: row1.text ? `${row1.text} ${row1.level.value}` : '',
        row1Level: row1.text ? row1.level.level : 0,
        row1Option: row1.option,

        row2Text: row2.text ? `${row2.text} ${row2.level.value}` : '',
        row2Level: row2.text ? row2.level.level : 0,
        row2Option: row2.option,

        row3Text: row3.text ? `${row3.text} ${row3.level.value}` : '',
        row3Level: row3.text ? row3.level.level : 0,
        row3Option: row3.option,
      };
      return newRows;
    });

    setModuleCount(prevCount => prevCount + 1); // 모듈 수 증가
  };

  const handleEffectChangeClick = (index, isFirst) => {
    handleOverloadClick(index, isFirst);
  };

  const handleRescaleClick = (index) => {
    setRows(prevRows => {
      const newRows = [...prevRows];
      const selectedTexts = [];

      // 1번째 줄 텍스트 선택
      if (newRows[index].row1Option !== null)
      {
        const row1 = getRow1Text(selectedTexts, newRows[index].row1Option);
        selectedTexts.push(row1.text);
        newRows[index].row1Text = row1.text ? `${row1.text} ${row1.level.value}` : '';
        newRows[index].row1Level = row1.text ? row1.level.level : 0;
        newRows[index].row1Option = row1.option;
      }

      // 2번째 줄 텍스트 선택
      if (newRows[index].row2Option !== null)
      {
        const row2 = getRow2Text(selectedTexts, newRows[index].row2Option);
        if (row2 && row2.text) selectedTexts.push(row2.text);
        newRows[index].row2Text = row2.text ? `${row2.text} ${row2.level.value}` : '';
        newRows[index].row2Level = row2.text ? row2.level.level : 0;
        newRows[index].row2Option = row2.option;
      }

      // 3번째 줄 텍스트 선택
      if (newRows[index].row3Option !== null)
      {
        const row3 = getRow3Text(selectedTexts, newRows[index].row3Option);
        if (row3 && row3.text) selectedTexts.push(row3.text);
        newRows[index].row3Text = row3.text ? `${row3.text} ${row3.level.value}` : '';
        newRows[index].row3Level = row3.text ? row3.level.level : 0;
        newRows[index].row3Option = row3.option;
      }

      return newRows;
    });

    setModuleCount(prevCount => prevCount + 1); // 모듈 수 증가    
  };

  const getLevelStyles = (level) => {
    switch (level) {
      case 12:
      case 13:
      case 14:
        return { color: 'blue' };
      case 15:
        return { color: 'white', backgroundColor: 'black' };
      default:
        return {};
    }
  };

  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100vh',
      overflow: 'hidden',
      backgroundColor: '#e0e0e0'
    }}>
      <div style={{ margin: '20px', fontSize: '24px', fontWeight: 'bold' }}>
        사용 모듈: {moduleCount}개
      </div>
      <div className='grid-container'>
        {overloaded.map((isOverloaded, index) => (
          <div key={index} className='grid-item'>
            <div className='row' style={getLevelStyles(rows[index].row1Level)}>{isOverloaded ? rows[index].row1Text : ''}</div>
            <div className='row' style={getLevelStyles(rows[index].row2Level)}>{isOverloaded ? rows[index].row2Text : ''}</div>
            <div className='row' style={getLevelStyles(rows[index].row3Level)}>{isOverloaded ? rows[index].row3Text : ''}</div>
            <div className='button-container'>
              {!isOverloaded ? (
                <button className='button' onClick={() => handleOverloadClick(index, true)}>오버로드</button>
              ) : (
                <>
                  <button className='button' onClick={() => handleEffectChangeClick(index, false)}>효과 변경</button>
                  <button className='button' onClick={() => handleRescaleClick(index)}>수치 재조정</button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OverloadPage;