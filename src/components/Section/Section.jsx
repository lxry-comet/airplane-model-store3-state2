import PropTypes from 'prop-types';
import css from "./Section.module.css"; 
// import css from "@/components/Section/Section.module.css"; 


function Section({ 
  isOn = true, 
  bgColor, 
  title, 
  allTypes,
  numberOfSelectedModels,
  children 
}) {
  return (
    <>
    {isOn && 
    <section style={{backgroundColor: bgColor}}>
      
      {title
        &&
        <h2
        // className={`${css.title} ${css.lugrasimoBold}`}
        className={css.titleLugrasimoBold}
        >
          { numberOfSelectedModels === 0 && title === 'Кошик' 
      ? 'Кошик пустий' 
      : title}
        </h2>} 
        <h3 className={css.titleTotalTypes}>Кількість типів ЛА: {allTypes}</h3>
        <h3 className={css.titleTotalTypes}>Загальна кількість моделей ЛА: {0}</h3>
      {children}
    </section>}
    </>
  );
}

Section.propTypes = {
  isOn: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node,
};


export default Section;