const statisticsModel = require('@models/statistics')
// we do not want to export the whole module,
// we aim to export just this method.
exports.index = async (req, res) => {

    const data = {
        totalUsers: await statisticsModel.totalUsers(),
        totalComments: await statisticsModel.totalComments(),
        totalPosts: await statisticsModel.totalPosts(),
        totalViews: await statisticsModel.totalViews()
    }
    res.render('admin/dashboard/index' , {
        layout: 'admin',
        ...data
    })
}