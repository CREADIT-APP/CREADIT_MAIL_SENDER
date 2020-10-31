const nodemailer = require('nodemailer');

const main = async () =>{

let transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'daehyun1003@gmail.com',//process.env.NODEMAILER_USER,
		pass: 'eogus557'
	},
});

let info = await transporter.sendMail({
	from: `"nodeMailer Test" <daehyun1003@gmail.com>`,
	to: 'souljit2@gmail.com',
	subject: '제발 되면 좋겠다...',
	text: '하하하하',
});

console.log('Msg sent: %s',info.messageId);
/*
res.status(200).json({
	status:'Success',
	code: 200,
	message: 'Sent Auth Email',
});
*/
}

main().catch(console.error);
