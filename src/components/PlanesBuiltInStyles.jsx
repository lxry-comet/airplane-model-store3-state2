import PropTypes from 'prop-types';
import defaultImage from "./default.jpg"; //! Дефолтне зображення


//! Стилі для текстових полів
const textField = {
  // fontSize: '18px',
  // fontWeight: 700,
}

//! Стилі для значень текстових полів
const textFieldValue = {
  // fontWeight: 400,
  // fontStyle: "italic",
}

//! Стилі для заголовків зображень
const imageTitles = {
  // textAlign: 'center',
  // color: 'blue'
}


export default function Planes({
  urlMain = defaultImage, //! Дефолтне зображення
  urlPromotional,
  urlActual,
  nameBrief,
  nameFull,
  nickname = "не відомо",
  year,
  country,
  type,
  price,
  description
})
{
  function printlActualimages(urlActual) {
    urlActual.map
  }
  return (
    <>
      <h3 className='itemTitle'
        // style={{
        // marginBottom: 12,
        // padding: "12px 16px",
        // fontSize: 32,
        // textAlign: 'center',
        // borderRadius: 8,
        // backgroundColor: "yellow",
        // color: "blue",
        // }}
      >
        {nameBrief}
      </h3>
      <img src={urlMain} alt={nameBrief} />
      <p className="textField">Повна назва: <span className="textFieldValue">{nameFull}</span></p>
      <p className="textField">Тип: <span className="textFieldValue">{type}</span></p>
      <p className="textField">Прізвисько: <span className="textFieldValue">{nickname}</span></p>
      <p className="textField">Країна виробник: <span className="textFieldValue">{country}</span></p>
      <p className="textField">Рік випуску: <span className="textFieldValue">{year}</span></p>
      <p className="textField">Ціна: <span className="textFieldValue">{price}</span></p>
      <p className="textField">Опис: <span className="textFieldValue">{description}</span></p>
      {/*//! заголовок зображень */}
      {/* <h4 style={{ textAlign: 'center', color: 'blue' }}>Рекламна модель:</h4> */}
      <h4 className="imageTitles">Рекламна модель:</h4>
      <img src={urlPromotional} alt={nameBrief} />
      {/*//! заголовок зображень */}
      {/* <h4 style={{ textAlign: 'center', color: 'blue' }}>Реальна модель:</h4> */}
      <h4 className="imageTitles">Реальна модель:</h4>
      {/* <img src={urlActual} alt={nameBrief} width="600" /> */}
      <div
        className='imageContainer'
        // style={{
        //   display: "flex",
        //   gap: 10,
        //   flexWrap: 'wrap',
        //   padding: "8px",
        //   borderRadius: 8,
        //   backgroundColor: "gray",
        // }}
      >
        {urlActual.map(item =>
          <img
            // key={item} //! поки що не унікальний
            src={item}
            alt={nameBrief}
            className="actualImage"
            // style={{
            //   maxWidth: "calc((100% - 10px) / 2)",
            //   borderRadius: 4,
            // }}
          />
        )}
      </div>
      <button
      className="button"
        type="button"
      >
        Додати до кошику 
      </button>
    </>
  );
};

//! Контроль типу змінних - propTypes
Planes.propTypes = {
  urlMain: PropTypes.string.isRequired,
  urlPromotional: PropTypes.string.isRequired,
  urlActual: PropTypes.string.isRequired,
  nameBrief: PropTypes.string.isRequired,
  nameFull: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  // price: PropTypes.number.isRequired,  //! контроль propTypes
  description: PropTypes.string.isRequired
};
