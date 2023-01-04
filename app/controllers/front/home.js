exports.index = async (req, res) => {
    res.render('front/home/index', {layout: false})
}

exports.contact = async (req, res) => {
    res.render('front/home/contact', {layout: false})
}

exports.biography = async (req, res) => {
    res.render('front/home/biography', {layout: false})
}

exports.fitplans = async (req, res) => {
    res.render('front/home/fitplans', {layout: false})
}

exports.fitplan = async (req, res) => {
    res.render('front/home/fitplan', {layout: false})
}