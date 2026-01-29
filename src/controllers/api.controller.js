const service = require('../services/message.service.js');

exports.getData = (req, res) => {

    res.json({status : 'success', data : 'Sample Data'});
};

exports.getMessage =(req, res) => {

    const message = service.getMessage();

    res.json({status : 'success', message : message});
};

exports.loginUser = (req, res) => {

    res.json({status : 'success', message : 'Login API working (dummy)'});
};

