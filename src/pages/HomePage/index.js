// Components
import React from 'react';

// Components
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

export const HomePage = () => {
  const [isOpenModal, setIsOpenModal] = React.useState(false);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  return (
    <div>
      <Header isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />

      <div>
        <section className='section-banner'>
          <div className='container'>
            <div className='banner__box'>
              <h1 className='banner__box__title'>
                SINH TRẮC BỆNH LÝ CÂY TRỒNG
              </h1>
              <p className='banner__box__content'>
                Phân tích nhanh bệnh lý của cây trồng, tìm ra giải pháp điều trị
                phù hợp để tăng năng suất cho cây.
              </p>
              <div className='banner__box__btn'>
                <span onClick={handleOpenModal}>BẮT ĐẦU</span>
              </div>
            </div>
          </div>
        </section>

        <div className='section-intro'>
          <div className='intro__title'>
            <h2>"Em có biết tại sao lá cây lại màu xanh"</h2>
            <p>-Câu châm ngôn gì đó-</p>
          </div>

          <div className='container wrap-box-intro'>
            <div className='intro__box'>
              <h4 className='intro__box-title'>Dự đoán</h4>
              <p className='intro__box-content'>
                Sử dụng công nghệ gì đó để tìm ra loại bệnh mà cây đang mắc
                phải...
              </p>
            </div>
            <div className='intro__box'>
              <h4 className='intro__box-title'>Diễn đàn</h4>
              <p className='intro__box-content'>
                Sử dụng công nghệ gì đó để tìm ra loại bệnh mà cây đang mắc
                phải...
              </p>
            </div>
            <div className='intro__box'>
              <h4 className='intro__box-title'>Đề xuất</h4>
              <p className='intro__box-content'>
                Sử dụng công nghệ gì đó để tìm ra loại bệnh mà cây đang mắc
                phải...
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
