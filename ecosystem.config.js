const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from a .env file

module.exports = {
	  apps: [
		      {
			            name: process.env.APP_NAME,
			            cwd: process.env.PROJECT_PATH,
			            script: 'npm',
			            args: 'start',
			            env: {
					            APP_KEYS: process.env.APP_KEYS,
					            API_TOKEN_SALT: process.env.API_TOKEN_SALT,
					            ADMIN_JWT_SECRET: process.env.ADMIN_JWT_SECRET,
					            JWT_SECRET: process.env.JWT_SECRET,
					            NODE_ENV: process.env.NODE_ENV,
					            DATABASE_HOST: process.env.DATABASE_HOST,
					            DATABASE_PORT: process.env.DATABASE_PORT || '5432',
					            DATABASE_NAME: process.env.DATABASE_NAME,
					            DATABASE_USERNAME: process.env.DATABASE_USERNAME || 'postgres',
					            DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
					            AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME,
					          },
			          },
		    ],
};

