import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Components
import { Modal } from '../Modal';

export const Header = ({ isOpenModal, setIsOpenModal }) => {
  const [isActiveHeader, setIsActiveHeader] = React.useState(false);
  const [tabActive, setTabActive] = React.useState(0);

  const lineRef = React.useRef(null);
  const loginRef = React.useRef(null);

  const { pathname } = useLocation();

  function handleOnScroll() {
    if (this.scrollY > 120) {
      setIsActiveHeader(true);
    } else {
      setIsActiveHeader(false);
    }
  }

  const handleActiveTab = (e, index) => {
    setTabActive(index);
    lineRef.current.style.left = e.target.offsetLeft + 'px';
    lineRef.current.style.width = e.target.offsetWidth + 'px';
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleOnScroll);
    return () => window.removeEventListener('scroll', handleOnScroll);
  }, []);

  React.useEffect(() => {
    if (lineRef.current) {
      lineRef.current.style.left = loginRef.current.offsetLeft + 'px';
      lineRef.current.style.width = loginRef.current.offsetWidth + 'px';
    }
  }, [isOpenModal]);

  return (
    <>
      <Modal isOpen={isOpenModal} stateOpenModal={setIsOpenModal}>
        <div className='modal__wrap-content'>
          <div className='tabs'>
            <div
              className={`tab-item ${tabActive === 0 ? 'active' : ''}`}
              onClick={(e) => handleActiveTab(e, 0)}
              ref={loginRef}
            >
              Đăng nhập
            </div>
            <div
              className={`tab-item ${tabActive === 1 ? 'active' : ''}`}
              onClick={(e) => handleActiveTab(e, 1)}
            >
              Đăng ký
            </div>
            <div className='line' ref={lineRef}></div>
          </div>

          <div className='panes'>
            <div className={`pane-item ${tabActive === 0 ? 'active' : ''}`}>
              <div className='form-group'>
                <label htmlFor='username' className='form-label'>
                  Tên người dùng
                </label>
                <input type='text' className='form-control' id='username' />
              </div>
              <div className='form-group'>
                <label htmlFor='password' className='form-label'>
                  Mật khẩu
                </label>
                <input type='password' className='form-control' id='password' />
              </div>
              <div className='wrap-btn-login'>
                <span className='btn-login'>Đăng nhập</span>
              </div>
            </div>
            <div className={`pane-item ${tabActive === 1 ? 'active' : ''}`}>
              <div className='form-group'>
                <label htmlFor='' className='form-label'>
                  Tên người dùng
                </label>
                <input type='text' className='form-control' />
              </div>
              <div className='form-group'>
                <label htmlFor='' className='form-label'>
                  Email
                </label>
                <input type='email' className='form-control' />
              </div>
              <div className='form-group'>
                <label htmlFor='' className='form-label'>
                  Mật khẩu
                </label>
                <input type='password' className='form-control' />
              </div>
              <div className='form-group'>
                <label htmlFor='' className='form-label'>
                  Nhập lại mật khẩu
                </label>
                <input type='password' className='form-control' />
              </div>
              <div className='wrap-btn-login'>
                <span className='btn-login'>Đăng ký</span>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <header className={`header ${isActiveHeader ? 'active' : ''}`}>
        <div className='container'>
          <div className='header__wrap'>
            <div className='header__logo'>
              <Link to='/'>
                <span className='header__logo-text'>PLANT</span>
                <span className='header__logo-text-right'>DISEASE</span>
              </Link>
            </div>

            <ul className='header__nav-list'>
              <Link
                to='/'
                className={`header__nav-item ${
                  pathname === '/' && !isOpenModal ? 'active' : ''
                }`}
              >
                Trang chủ
              </Link>
              <Link
                to='/du-doan'
                className={`header__nav-item ${
                  pathname === '/du-doan' && !isOpenModal ? 'active' : ''
                }`}
              >
                Dự đoán
              </Link>
              <Link to='/' className='header__nav-item'>
                Diễn đàn
              </Link>
              <li
                className={`header__nav-item ${isOpenModal ? 'active' : ''}`}
                onClick={() => setIsOpenModal(true)}
                style={{ cursor: 'pointer' }}
              >
                Đăng nhập
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};
