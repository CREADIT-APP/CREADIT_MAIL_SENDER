const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const nodemailer = require('nodemailer');

const main = async (name,email,youtube) =>{

let transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'your_email',
		pass: 'your_pw'
	},
});

let info = await transporter.sendMail({
	from: `"nodeMailer Test" <daehyun1003@gmail.com>`,
	to: 'creadit2020@gmail.com',
	subject: 'CREADIT 견적서',
	text: `이름:${name}\n이메일:${email}\n링크:${youtube}`,
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

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.listen(3000,()=>{
	console.log('server is running on port 3000');
});

app.post('/',(req,res)=>{
	const { name } = req.body;
	const { email } = req.body;
	const { youtube } = req.body;
	
	main(name,email,youtube).catch(console.error);
});
app.get('/:str',(req,res)=>{
	const  regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
	const { email } = req.param;
	if(email && regExp.test(email)){
				
	}else{
		
	}
});
