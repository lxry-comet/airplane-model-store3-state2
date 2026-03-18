
import css from './Filter.module.css'

export function Filter({
	onAll,
	onPlanes,
	onHelicopters
}) {
	return (
		<div className={css.filterBox}>
			<button
				className={css.buttonAllFiltration}
				type='button'
				onClick={onAll}
			>
				ВСІ
			</button>

			<button
				className={css.buttonPlaneFiltration}
				type='button'
				onClick={onPlanes}
			>
				Літаки
			</button>

			<button
				className={css.buttonHelicopterFiltration}
				type='button'
				onClick={onHelicopters}
			>
				Вертольоти
			</button>
		</div>
	)
}
