const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://shubham1615:shubham123@working.qonmzcc.mongodb.net/?retryWrites=true&w=majority&appName=Working')
    .then(() => {
        console.log(`connected`);
    }).catch((error) => {
        console.log(error);
    })


// shubham123
// shubhamchavhan1615

// 5afCiPPr4HUuioSC
// 152.57.7.7/32 //Ip Adds
