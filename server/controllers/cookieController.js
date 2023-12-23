const cookieController = {};


cookieController.setCookie = (req, res, next) => {
  res.cookie("secret", Math.floor(Math.random() * 99));
  next();
};


cookieController.setSSIDCookie = (req, res, next) => {
  if (res.locals.userInfo) {
    const _id = res.locals.userInfo._id;
    res.cookie("ssid", _id.toString(), {
      httpOnly: true
    });
    next();
  } else {
    next();
  }
};

module.exports = cookieController;