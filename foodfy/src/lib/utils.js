module.exports = {
    date(timestamp){
        const date = new Date(timestamp)
    
        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)

        return {
            day,
            month,
            year,
            iso: `${year}-${month}-${day}`,
            birthDay: `${day}/${month}`,
            format: `${day}/${month}/${year}`
        }
    },
    lineBreak(str) {
        const normal = str.replace(/(?:\r\n|\r|\n)/g, '<br>\n')
        const invert = str.replace(/<br>/g, '\n')
        
        return {
            norm: normal,
            inv: invert
        }
    } 
}