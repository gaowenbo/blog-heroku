
module.exports = {
  hostname: 'dry-fjord-44385.herokuapp.com',
  email: {
   // default mail options
	  mailOptions: {
	  // by default log emails in console
	  sendToConsole: false,
	  // default from and to
	  from: '948053013@qq.com', // sender address
	  subject: 'Blog # ' // Subject line
	  },
   // connection configs
   auth: {
   user: '948053013@qq.com',
    pass: 'korxnsefexkzbfga'
     },
    // ignoreTLS: false,
  // name: null,
   // optional params
   service: 'QQ',
    type: 'SMTP',
    host: 'smtp.qq.com',
     port: 465,
	 debug: true
  //   // localAddress: '',
  //   // connectionTimeout: '',
  //   // greetingTimeout: '',
  //   // socketTimeout: '',

  //   // authMethod: '',
  //   // tls: ''
  }


}
