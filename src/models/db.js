import mongoose from 'mongoose'
import config from '../../config'

const dbConfig = config[process.env.NODE_ENV || 'development'];

// 连接成功 
mongoose.connection.on('connected', function () {
    console.log('Mongoose connection open to ' + dbConfig.mongo.uri);
});

// 连接失败
mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
});

// 断开连接
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected');
});

export default () => {
    mongoose.connect(dbConfig.mongo.uri);
}