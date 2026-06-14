// import React, { Component } from "react";
import css from "./Sorter.module.css";


export function Sorter(
	{
		inputSearch,
		onHandleChangeInputSearchValue
	}) {

	return (
		<div className={css.sorterBox}>
			<h3 className={css.formTitle}>Вибір параметра для пошуку/фільтрації:</h3>
			<input
					className={css.inputSearch}
					type="text"
					placeholder='Введіть назву ЛА'
					value={inputSearch}
					onChange={onHandleChangeInputSearchValue}
				/>
		</div>
	)
}