// src/components/Toolbar.js
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons'; // 예시로 설정한 아이콘
import './Toolbar.css'; // CSS 파일 임포트

const Toolbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // 메뉴 클릭 상태를 토글하는 함수
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // 메뉴 외부 클릭 감지 함수
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  // 컴포넌트가 마운트될 때 클릭 이벤트 리스너를 추가
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="toolbar-container">
      <nav className="toolbar-nav">
        <Link to="/" className="toolbar-link">Home</Link>
        <div className="toolbar-menu" ref={menuRef}>
          <button
            onClick={toggleMenu}
            className="toolbar-button"
          >
            <FontAwesomeIcon icon={faCog} className="toolbar-icon" /> {/* 아이콘을 버튼 왼쪽에 배치 */}
            시뮬레이션
          </button>
          {isMenuOpen && (
            <div className="submenu">
              <Link
                to="/gacha"
                className="submenu-link"
                onClick={() => setIsMenuOpen(false)} // 링크 클릭 시 메뉴 접기
              >
                가챠
              </Link>
              <Link
                to="/overload"
                className="submenu-link"
                onClick={() => setIsMenuOpen(false)} // 링크 클릭 시 메뉴 접기
              >
                오버로드
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Toolbar;
