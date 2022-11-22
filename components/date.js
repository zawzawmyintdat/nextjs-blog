import {parseISO, format} from 'date-fns'

export default function Date({dateStirng}){
    const date = parseISO(dateStirng);
    return <time dateTime={dateStirng}>{format(date, 'LLLL d, yyyy')}</time>;
}