// src/App.js
import React, { useState } from 'react';
import './GachaPage.css';

function GachaPage() {
  const gridSize = 10; // 5x2 = 10 squares

  // 이미지와 확률 정의
  const pickupProb = 0.02; // 고정 (필그림 픽업 제외)
  const pilgrimProb = 0.005; // 고정 (필그림 픽업 제외)
  const ssrProb = 0.015; // 고정 (필그림 픽업 제외)
  const srProb = 0.43; // 고정
  const rProb = 0.53; // 고정

  const pilgrimCount = 11;
  const ssrCount = 70;
  const srCount = 9;
  const rCount = 9;

  const images = [
    // SSR - 픽업
    { src: '/images/SSR_아스카.webp', probability: pickupProb, borderColor: 'yellow' },
    { src: '/images/SSR_레이.webp', probability: pickupProb, borderColor: 'yellow' },
    { src: '/images/SSR_마리.webp', probability: pickupProb, borderColor: 'yellow' },

    // SSR - 필그림
    { src: '/images/SSR_하란.webp', probability: pilgrimProb / pilgrimCount, borderColor: 'yellow' },    
    { src: '/images/SSR_스노우화이트.webp', probability: pilgrimProb / pilgrimCount, borderColor: 'yellow' },
    { src: '/images/SSR_노아.webp', probability: pilgrimProb / pilgrimCount, borderColor: 'yellow' },
    { src: '/images/SSR_홍련.webp', probability: pilgrimProb / pilgrimCount, borderColor: 'yellow' },
    { src: '/images/SSR_이사벨.webp', probability: pilgrimProb / pilgrimCount, borderColor: 'yellow' },    
    { src: '/images/SSR_라푼젤.webp', probability: pilgrimProb / pilgrimCount, borderColor: 'yellow' },    
    { src: '/images/SSR_모더니아.webp', probability: pilgrimProb / pilgrimCount, borderColor: 'yellow' },
    { src: '/images/SSR_도로시.webp', probability: pilgrimProb / pilgrimCount, borderColor: 'yellow' },
    { src: '/images/SSR_레드후드.webp', probability: pilgrimProb / pilgrimCount, borderColor: 'yellow' },
    { src: '/images/SSR_홍련_흑영.webp', probability: pilgrimProb / pilgrimCount, borderColor: 'yellow' },
    { src: '/images/SSR_크라운.webp', probability: pilgrimProb / pilgrimCount, borderColor: 'yellow' },

    // SSR - 일반
    { src: '/images/SSR_맥스웰.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 1
    { src: '/images/SSR_슈가.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 2
    { src: '/images/SSR_엑시아.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 3
    { src: '/images/SSR_앨리스.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 4
    { src: '/images/SSR_엠마.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 5
    { src: '/images/SSR_유니.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 6
    { src: '/images/SSR_프리바티.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 7
    { src: '/images/SSR_프림.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 8
    { src: '/images/SSR_율리아.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 9
    { src: '/images/SSR_시그널.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 10

    { src: '/images/SSR_폴리.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 11
    { src: '/images/SSR_미란다.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 12
    { src: '/images/SSR_브리드.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 13
    { src: '/images/SSR_솔린.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 14
    { src: '/images/SSR_디젤.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 15
    { src: '/images/SSR_센티.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 16
    { src: '/images/SSR_은화.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 17
    { src: '/images/SSR_드레이크.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 18
    { src: '/images/SSR_크로우.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 19
    { src: '/images/SSR_메어리.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 20

    { src: '/images/SSR_애드미.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 21
    { src: '/images/SSR_길로틴.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 22
    { src: '/images/SSR_루드밀라.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 23
    { src: '/images/SSR_얀.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 24
    { src: '/images/SSR_에피넬.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 25
    { src: '/images/SSR_아리아.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 26
    { src: '/images/SSR_볼륨.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 27
    { src: '/images/SSR_노이즈.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 28
    { src: '/images/SSR_폴크방.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 29
    { src: '/images/SSR_메이든.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 30
    
    { src: '/images/SSR_리타.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 31
    { src: '/images/SSR_노벨.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 32
    { src: '/images/SSR_도라.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 33
    { src: '/images/SSR_루피.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 34
    { src: '/images/SSR_율하.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 35
    { src: '/images/SSR_밀크.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 36
    { src: '/images/SSR_페퍼.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 37
    { src: '/images/SSR_베스티.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 38
    { src: '/images/SSR_헬름.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 39
    { src: '/images/SSR_라플라스.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 40
    
    { src: '/images/SSR_자칼.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 41
    { src: '/images/SSR_바이퍼.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 42
    { src: '/images/SSR_코코아.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 43
    { src: '/images/SSR_소다.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 44
    { src: '/images/SSR_비스킷.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 45
    { src: '/images/SSR_사쿠라.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 46
    { src: '/images/SSR_D.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 47
    { src: '/images/SSR_블랑.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 48
    { src: '/images/SSR_누아르.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 49
    { src: '/images/SSR_로산나.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 50

    { src: '/images/SSR_네로.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 51
    { src: '/images/SSR_마스트.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 52
    { src: '/images/SSR_마르차나.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 53
    { src: '/images/SSR_나가.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 54
    { src: '/images/SSR_티아.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 55
    { src: '/images/SSR_키리.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 56
    { src: '/images/SSR_토브.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 57
    { src: '/images/SSR_레오나.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 58
    { src: '/images/SSR_목단.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 59
    { src: '/images/SSR_프리바티_언카인드_메이드.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 60

    { src: '/images/SSR_에이드.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 61
    { src: '/images/SSR_일레그.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 62
    { src: '/images/SSR_D_킬러_와이프.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 63
    { src: '/images/SSR_베이.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 64
    { src: '/images/SSR_트로니.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 65
    { src: '/images/SSR_소다_트윙클링_바니.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 66
    { src: '/images/SSR_앨리스_원더랜드_바니.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 67
    { src: '/images/SSR_클레이.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 68
    { src: '/images/SSR_아인.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 69
    { src: '/images/SSR_츠바이.webp', probability: ssrProb / ssrCount, borderColor: 'yellow' }, // 70

    // SR
    { src: '/images/SR_라피.webp', probability: srProb / srCount, borderColor: 'purple' },
    { src: '/images/SR_네온.webp', probability: srProb / srCount, borderColor: 'purple' },
    { src: '/images/SR_델타.webp', probability: srProb / srCount, borderColor: 'purple' },
    { src: '/images/SR_미카.webp', probability: srProb / srCount, borderColor: 'purple' },
    { src: '/images/SR_벨로타.webp', probability: srProb / srCount, borderColor: 'purple' },
    { src: '/images/SR_아니스.webp', probability: srProb / srCount, borderColor: 'purple' },
    { src: '/images/SR_미하라.webp', probability: srProb / srCount, borderColor: 'purple' },
    { src: '/images/SR_N102.webp', probability: srProb / srCount, borderColor: 'purple' },
    { src: '/images/SR_에테르.webp', probability: srProb / srCount, borderColor: 'purple' },

    // R
    { src: '/images/R_솔져EG.webp', probability: rProb / rCount, borderColor: 'blue' },
    { src: '/images/R_솔져FA.webp', probability: rProb / rCount, borderColor: 'blue' },
    { src: '/images/R_솔져OW.webp', probability: rProb / rCount, borderColor: 'blue' },
    { src: '/images/R_iDoll썬.webp', probability: rProb / rCount, borderColor: 'blue' },
    { src: '/images/R_iDoll오션.webp', probability: rProb / rCount, borderColor: 'blue' },
    { src: '/images/R_iDoll플라워.webp', probability: rProb / rCount, borderColor: 'blue' },
    { src: '/images/R_프로덕트08.webp', probability: rProb / rCount, borderColor: 'blue' },
    { src: '/images/R_프로덕트12.webp', probability: rProb / rCount, borderColor: 'blue' },
    { src: '/images/R_프로덕트23.webp', probability: rProb / rCount, borderColor: 'blue' },
  ];

  const [selectedCharacter, setSelectedCharacter] = useState('아스카'); // 초기값을 "아스카"로 설정

  const handleCharacterChange = (event) => {
    setSelectedCharacter(event.target.value);
    setGridImages(Array(gridSize).fill(null));
    setClickCount(0);
    setResults({});
  };

  const filteredImages = images.filter(image => {
    if (selectedCharacter === '아스카' && (image.src.includes('/images/SSR_레이.webp') || image.src.includes('/images/SSR_마리.webp'))) return false;
    if (selectedCharacter === '레이' && (image.src.includes('/images/SSR_아스카.webp') || image.src.includes('/images/SSR_마리.webp'))) return false;
    if (selectedCharacter === '마리' && (image.src.includes('/images/SSR_아스카.webp') || image.src.includes('/images/SSR_레이.webp'))) return false;
    return true;
  });

  // 확률 기반으로 이미지와 색상 선택하기 위한 함수
  const getRandomImage = () => {
    const random = Math.random();
    let cumulativeProbability = 0;
    for (const image of filteredImages) {
      cumulativeProbability += image.probability;
      if (random <= cumulativeProbability) {
        return image;
      }
    }
    return filteredImages[0]; // 기본값
  };

  const cleanName = (text) => {
    return text
      .replace('/images/SSR_', '')
      .replace('.webp', '')
      .replace('_', ' : ')
      .replace('_', ' ')
      .replace('_', ' ')
      .replace('_', ' ')
      .replace('_', ' ')
  };

  const [gridImages, setGridImages] = useState(Array(gridSize).fill(null));
  const [clickCount, setClickCount] = useState(0);
  const [results, setResults] = useState({});

  const handleRandomize = () => {
    setClickCount(prevCount => prevCount + 10);
    const newGridImages = gridImages.map(() => getRandomImage());
    setGridImages(newGridImages);

    // 결과 업데이트
    const newResults = { ...results };
    newGridImages.forEach(image => {
      if (image && image.borderColor === 'yellow') {
        const cleanedName = cleanName(image.src);
        if (!newResults[cleanedName]) {
          newResults[cleanedName] = 0;
        }
        newResults[cleanedName] += 1;
      }
    });
    setResults(newResults);
  };

  return (    
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      overflow: 'hidden', // 페이지가 넘칠 경우 숨김
    }}>
      <div>
        {filteredImages.map((image) => (            
            <img src={image.src} alt='' style={{display: 'none'}}></img>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h2>픽업 선택:</h2>
        <select 
          value={selectedCharacter} 
          onChange={handleCharacterChange}
          style={{
            margin: '0px 0px 0px 10px',
            padding: '5px',
            fontSize: '16px',
          }}
        >
          <option value="아스카">아스카</option>
          <option value="레이">레이</option>
          <option value="마리">마리</option>
        </select>
      </div>
      <div class='grid' style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)' }}>
        {gridImages.map((image, index) => (
          <div 
            class={image ? image.borderColor : 'transparent'}
            key={index} 
            style={{               
              backgroundColor: '#eee'
            }}
          >
            {image && <img src={image.src} alt={`Random ${index}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
          </div>
        ))}
      </div>
      <button 
        onClick={handleRandomize} 
        style={{ 
          margin: '20px 0 20px 0px',
          padding: '10px 20px',
          backgroundColor: '#007bff', // 버튼 배경색
          color: '#fff', // 버튼 글자색          
          border: 'none', // 버튼 테두리 제거
          borderRadius: '5px', // 버튼 모서리 둥글게
          cursor: 'pointer', // 마우스 커서 포인터로 변경
          fontSize: '16px', // 글자 크기
        }}
      >
        10명 모집
      </button>
      <div 
        class='history'
        style={{
          maxHeight: 'calc(100vh - 550px)', // 버튼과 이미지 영역을 제외한 나머지 공간을 계산하여 최대 높이 설정
          overflowY: 'auto', // 결과가 많아지면 스크롤이 가능하도록 설정
          border: '1px solid #ddd',
          padding: '10px',
        }}>
        <div style={{ 
          fontSize: '20px',
          fontWeight: 'bold'
        }}>모집 결과 ({clickCount} 모집)</div>
        <>
          {Object.entries(results).sort(([nameA, countA], [nameB, countB]) => countB - countA).map(([name, count]) => (
            <div key={name}>- {name}: {count}개 ({Math.round(count / clickCount * 100000) / 1000}%)</div>
          ))}
        </>
      </div>
    </div>
  );
}

export default GachaPage;
