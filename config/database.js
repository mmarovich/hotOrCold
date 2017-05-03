exports.DATABASE_URL = process.env.DATABASE_URL ||
						global.DATABASE_URL ||
						'mongodb://mmarovich:12345@ds113841.mlab.com:13841/hotorcold';
exports.PORT = process.env.PORT || 8080;