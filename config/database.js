const mongoose = require('mongoose');

const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://anmolbhutani90:zN62SXxpr2MAfzuR@cluster0.yxcu7vm.mongodb.net/devTinder')
}

module.exports = {connectDB}