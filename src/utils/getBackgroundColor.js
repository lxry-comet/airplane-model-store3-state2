import clsx from "clsx";
// export function getBgColor(year) {
// let bgColor = '#ffdb92';

// 	if(year > 1946) bgColor = '#d2fdbd';

// 	if (year > 1999) bgColor = '#d6f1ff';
// 	return bgColor;
// }

// export function getBgColor(year) {
// 	const arrayClass = ['listItem', 'last', 'current'];
// 	let bgColor = ['listItem'];
// 	if(year > 1946) bgColor = ['listItem', 'last'];
// 	if (year > 1999) bgColor = ['listItem', 'last', 'current'];
// 	return bgColor;
// }

//todo: var.1.1 - використання бібліотеки clsx
// export function getBgColor(year) {
//     const classNames = clsx(
//         "item",
//         year > 1945 && "last",
//         year > 1999 && "current",
//     );
//     console.log("classNames:", classNames); //!
//     return classNames;
// };
//todo: var.2.1 - використання бібліотеки clsx
// export function getBgColor(year) {
//     let classNames = "";
//     if (year < 1946) return classNames = "listItem";
//     classNames = clsx(
//         "listItem",
//         year > 1945 && year < 2000 ? "last" : "current"
//     );
//     console.log("classNames:", classNames); //!
//     return classNames;
// };

//todo: CSS-модулі 
export function getBgColor(year) {
    let className = "listItem";
    if (year > 1945) className = "last";
    if (year > 1999) className = "current";
    // console.log("className:", className); //!
    return className;
};
