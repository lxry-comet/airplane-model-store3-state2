import css from '@/components/Planes/Planes.module.css'

	export function onHighlightTextProtection (text, keyword, radioButtonValue){
		if (!keyword) return text

		const escapedKeyword = escapeRegExp(keyword)


		const regex = new RegExp(`(${escapedKeyword})`, 'gi')

		return text.split(regex).map((part, index) =>
			part.toLowerCase() === keyword.toLowerCase() && radioButtonValue === "nickname"
			? (<span key={index} className={css.highlight}>
					{part}
				</span>) 
			: (part)
		)
	}
function escapeRegExp (str) {
	return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}