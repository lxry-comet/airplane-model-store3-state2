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
// export function getBgColor(year) {
//     let className = "listItem";
//     if (year > 1945) className = "last";
//     if (year > 1999) className = "current";
//     // console.log("className:", className); //!
//     return className;
// };
//* backgroundColor: '#ffd1d1', "year" до 1939 - (WWI (1914–1918) + The "Golden Age" of aviation (1918–1939))
//* backgroundColor: '#ffdb92', "year" 1939–1945 - (WWII (1939–1945))
//* backgroundColor: '#d2fdbd', "year" 1946-1999 - (Jet age (1946–1999))
//* backgroundColor: '#d6f1ff', "year" від 2000 - (Нинішнє століття (2000-до наших днів))
export function getBgColor(year) {
    let className = "listItem";
    if (year < 1939) className = "planesItemWWIGoldenAge";
    if (year >= 1939 && year <= 1945) className = "planesItemWWII";
    if (year >= 1946 && year <= 1999) className = "planesItemJetAge";
    if (year >= 2000) className = "planesItemCurrentAge";
    // console.log("className:", className); //!
    return className;
};