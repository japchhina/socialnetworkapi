const addDateSuffix = (date) => {
    let dateStr = date.toString();
}
const lastChar = dateStr.charAt(dateStr.length - 1);
switch (lastChar) {
    case '1':
        dateStr = `${dateStr}st`;
        break;
    case '2':
        dateStr = `${dateStr}nd`;
        break;
    case '3':
        dateStr = `${dateStr}rd`;
        break;
    default:
        dateStr = `${dateStr}th`;
}
return dateStr;
