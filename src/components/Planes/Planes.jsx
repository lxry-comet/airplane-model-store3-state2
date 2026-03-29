import PropTypes from 'prop-types'
import defaultImage from '../default.jpg'
import css from './Planes.module.css'
import {ActualImageModal} from '@/components/ActualImageModal/ActualImageModal.jsx' 

import {
	FaMapMarkerAlt,
	FaUserAlt,
	FaCalendarAlt,
	FaClock
} from 'react-icons/fa'
import {
	AiOutlineFlag,
	AiOutlineInfoCircle,
	AiOutlineClockCircle,
	AiOutlineDollarCircle
} from 'react-icons/ai'
import {
	GiArmoredBoomerang,
	GiCeremonialMask,
	GiAirplaneDeparture,
	GiCommercialAirplane,
	GiCurlyMask,
	GiAbstract021
} from 'react-icons/gi'
import { CiBadgeDollar, CiGlobe, CiAirportSign1 } from 'react-icons/ci'
import { TbClockHour4Filled } from 'react-icons/tb'
import { FcTrademark } from 'react-icons/fc'

//! Реекспорт з папки constants та utils
import { iconSize, iconColor } from '@/constants'
import { getManufacturingYears } from '@/utils/'

export default function Planes({
	bgCardTitle,
	urlMain = defaultImage,
	urlPromotional,
	urlActual = [],
	nameBrief,
	nameFull,
	nickname = 'не відомо',
	year,
	country,
	type,
	price,
	description,
	start,
	end
}) {
	const different = getManufacturingYears(start, end)

	function getBgColorCardTitle(type) {
		switch (type) {
			case 'plane':
				return 'planeTitle'
			case 'biplane':
				return 'biplaneTitle'
			case 'helicopter':
				return 'helicopterTitle'
      default:
        return 'itemTitle';
		}
	}
	return (
		<>
			<h3 className={css[getBgColorCardTitle(bgCardTitle)]}>
				<GiAbstract021 className={css.icon} size={iconSize.lg} />
				{nameBrief}
			</h3>

			<img src={urlMain} alt={nameBrief} className={css.mainImage} />

			<p className={css.textField}>
				<FcTrademark className={css.icon} size={iconSize.sm} />
				Повна назва: <span className={css.textFieldValue}>{nameFull}</span>
			</p>

			<p className={css.textField}>
				{/* Логіка: якщо тип містить "літак" — одна іконка, інакше — бумеранг */}
				{type.toLowerCase().includes('літак') ? (
					<GiCommercialAirplane className={css.icon} size={iconSize.sm} />
				) : (
					<GiArmoredBoomerang className={css.icon} size={iconSize.sm} />
				)}
				Тип: <span className={css.textFieldValue}>{type}</span>
			</p>

			<p className={css.textField}>
				<GiCeremonialMask className={css.icon} size={iconSize.sm} />
				Прізвисько: <span className={css.textFieldValue}>{nickname}</span>
			</p>

			<p className={css.textField}>
				<AiOutlineFlag className={css.icon} size={iconSize.sm} />
				Країна виробник: <span className={css.textFieldValue}>{country}</span>
			</p>

			<p className={css.textField}>
				<AiOutlineClockCircle className={css.icon} size={iconSize.sm} />
				Рік випуску: <span className={css.textFieldValue}>{year}</span>
			</p>

			{different && (
				<p className={css.textField}>
					<TbClockHour4Filled className={css.icon} size={iconSize.sm} />
					Тривалість виробництва (в роках):{' '}
					<span className={css.textFieldValue}>{different}</span>
				</p>
			)}

			<p className={css.textField}>
				<CiBadgeDollar className={css.icon} size={iconSize.md} />
				Ціна: <span className={css.textFieldValue}>{price}</span>
			</p>

			<p className={css.textField}>
				<AiOutlineInfoCircle className={css.icon} size={iconSize.sm} />
				Опис: <span className={css.textFieldValue}>{description}</span>
			</p>

			<h4 className={css.imageTitles}>
				<GiAirplaneDeparture className={css.icon} size={iconSize.sm} />
				Рекламна модель:
			</h4>
			<img
				src={urlPromotional}
				alt='Promotional model'
				className={css.promoImage}
			/>

			<h4 className={css.imageTitles}>
				<CiAirportSign1 className={css.icon} size={iconSize.sm} />
				Реальна модель:
			</h4>
			{/* //? Блок зображень без модальнич вікон */}

			{/* <div className={css.imageContainer}>
				{urlActual.map((item, index) => (
					<img
						key={index}
						src={item}
						alt={`${nameBrief} actual view ${index + 1}`}
						className={css.actualImage}
					/>
				))}
			</div> */}
			<ActualImageModal images={urlActual} briefName={nameBrief}/>
			<button className={css.button} type='button'>
				Додати до кошику
			</button>
		</>
	)
}

Planes.propTypes = {
	urlMain: PropTypes.string,
	urlPromotional: PropTypes.string.isRequired,
	urlActual: PropTypes.arrayOf(PropTypes.string).isRequired,
	nameBrief: PropTypes.string.isRequired,
	nameFull: PropTypes.string.isRequired,
	nickname: PropTypes.string,
	year: PropTypes.number.isRequired,
	country: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	start: PropTypes.number,
	end: PropTypes.number
}
