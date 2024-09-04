// src/OverloadPage.js
import React from 'react';
import './OverloadPage.css';

function OverloadPage() {
  const handleEffectChange = () => {
    alert('효과 변경 버튼 클릭됨');
  };

  const handleValueReset = () => {
    alert('수치 재조정 버튼 클릭됨');
  };

  return (
    <div style={{ 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      overflow: 'hidden',
      backgroundColor: '#e0e0e0'
    }}>
      <div className='grid-container'>
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className='grid-item'>
            <div className='row'>1줄</div>
            <div className='row'>2줄</div>
            <div className='row'>3줄</div>
            <div className='button-container'>
              <button className='button' onClick={handleEffectChange}>효과 변경</button>
              <button className='button' onClick={handleValueReset}>수치 재조정</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OverloadPage;
