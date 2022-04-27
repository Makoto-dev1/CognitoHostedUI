export default {
	apiGateway: {
		REGION: 'us-east-1',
		URL: 'https://f0nbzc6elj.execute-api.us-east-1.amazonaws.com/dev'
	},
	cognito: {
		REGION: 'us-east-1',
		USER_POOL_ID: 'us-east-1_Fc39LjwNb',
		APP_CLIENT_ID: '1g36b2sqgdauaqc1ni5q6vel2b',
		IDENTITY_POOL_ID: 'us-east-1:ec99db37-21b7-4b76-90ab-4cc9e2d35938',
		DOMAIN: 'https://daredelogin.auth.us-east-1.amazoncognito.com',
		SCOPE: ['rs/cliente', 'phone', 'email', 'openid', 'profile', 'aws.cognito.signin.user.admin'],
		REDIRECT_SIGN_IN: 'http://localhost:3000',
		REDIRECT_SIGN_OUT: 'http://localhost:3000',
		RESPONSE_TYPE: 'token',
		FEDERATION_TARGET: "COGNITO_USER_POOLS"
	},
};
