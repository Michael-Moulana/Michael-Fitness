const mj = require('jalali-moment')

exports.toPersianDate = (date, format = 'YYYY/MM/DD') => {
    return mj(date).locale('fa').format(format)
}