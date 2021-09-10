import React from 'react';

// Components
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

// Assets
import BgFooter from '../../assets/images/bg-guesspage-2.png';

export const PlantDisease = () => {
  const [isOpenModal, setIsOpenModal] = React.useState(false);
  const [formData, setFormData] = React.useState({
    img_upload: null,
    img_upload_show: null,
  });

  const fileNameRef = React.useRef(null);

  const handleOnChangeFile = (e) => {
    const { files } = e.target;
    let reader = new FileReader();

    if (files && files[0]) {
      reader.readAsDataURL(files[0]);
      reader.onload = () => {
        setFormData({ ...formData, img_upload: reader.result });
      };
    }

    fileNameRef.current.innerHTML = files[0]?.name || 'Choose file';
  };

  const handleUploadFile = () => {
    setFormData({ ...formData, img_upload_show: formData.img_upload });
  };

  return (
    <div>
      <Header isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />

      {/* Start: Body */}
      <div>
        <section className='banner-guess-page'>
          <div className='container'>
            <div
              className='banner__box'
              style={{ maxWidth: '420px', top: '20%' }}
            >
              <h1 className='banner__box__title'>DỰ ĐOÁN BỆNH CHO CÂY</h1>
              <p className='banner__box__content'>
                Chọn ảnh để hệ thống dự đoán bệnh cho cây.
              </p>

              <div className='guess__wrap-file'>
                <input
                  type='file'
                  name='img_upload'
                  id='img_upload'
                  accept='image/*'
                  hidden
                  onChange={handleOnChangeFile}
                />
                <div className='guess__file-display'>
                  <label
                    htmlFor='img_upload'
                    title='Choose file'
                    ref={fileNameRef}
                  >
                    Choose file
                  </label>
                  <div
                    className='guess__file__btn-upload'
                    onClick={handleUploadFile}
                  >
                    DỰ ĐOÁN
                  </div>
                </div>
                {formData.img_upload_show && (
                  <>
                    <div className='wrap-show-img'>
                      <img
                        src={formData.img_upload_show}
                        alt=''
                        style={{
                          width: '200px',
                          height: '200px',
                          objectFit: 'cover',
                        }}
                      />
                    </div>
                    <div className='wrap-show-percent'>
                      <div className='percent-item'>
                        <span className='percent-number red'>65%</span>
                        <span className='percent-disease-text'>
                          Bệnh sdas sdad dsada
                        </span>
                      </div>
                      <div className='percent-item'>
                        <span className='percent-number yellow'>33%</span>
                        <span className='percent-disease-text'>
                          Bệnh sdas đáasd
                        </span>
                      </div>
                      <div className='percent-item'>
                        <span className='percent-number green'>2%</span>
                        <span className='percent-disease-text'>Bệnh sdas</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* End: Body */}

      <Footer bgImage={BgFooter} />
    </div>
  );
};
