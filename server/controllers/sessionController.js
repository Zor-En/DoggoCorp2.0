const sessionController = {};

sessionController.startSession = (req, res, next) => {
    console.log('entering startSession middleware');
    //check validity
    //db.add(session)
    return next();
}

sessionController.isLoggedIn = (req, res, next) => {
    //something
    return next();
}

module.exports = sessionController;
