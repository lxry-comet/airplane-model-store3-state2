import PropTypes from 'prop-types'
import Planes from '@/components/Planes/Planes.jsx' 
import { getBgColor, } from '@/utils'
import css from "./PlanesList.module.css"


function PlanesList({ items }) {
	return (
		<ul
			className={css.list}
		>
			{items.map(item => (
				<li
					// className={getBgColor(item.info.year)}
					className={css[getBgColor(item.info.year)]}
					key={item.id}
				>
					<Planes
						bgCardTitle={item.aircraftType}
						urlMain={item.url.main}
						urlPromotional={item.url.promotional}
						urlActual={item.model.actualImages}
						urlActualFull={item.model.actualFullImages}
						nameBrief={item.name.brief}
						nameFull={item.name.full}
						nickname={item.name.nickname}
						year={item.info.year}
						country={item.info.country}
						type={item.info.type}
						price={item.info.price}
						description={item.info.description}
						start={item.manufacturing.start}
						end={item.manufacturing.end}
					/>
				</li>
			))}
		</ul>
	)
}

PlanesList.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired
		})
	)
}

export default PlanesList
