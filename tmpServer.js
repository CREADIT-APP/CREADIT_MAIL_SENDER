const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const nodemailer = require('nodemailer');
const url = require('url')
require('dotenv').config();
const { MAIL_ID, MAIL_PW } = process.env;
let successPageLink = 'http://creadit.godomall.com/main/html.php?htmid=main/estimate-success.html'

const getMailForm = mailInfo => {
	console.log(mailInfo);	
	return`안녕하세요. 크리에이딧입니다.\n\n문의주신 견적 요청사항 보내드립니다.\n\n종사 업종(업체명) : ${mailInfo.store_name}\n\n신청자 명 : ${mailInfo.name}\n\n컨설팅 횟수 : ${mailInfo.consult_count}\n\n컨설팅 종류 : ${mailInfo.consult_type}\n\n컨설팅 상세 : ${mailInfo.reason}\n\n유튜브 링크 : ${mailInfo.link}\n\n`}
const addParamsToLink = (link, jsonData) => {
	link = link + '?'
	for(key in jsonData) {
		if(key === 'reason') continue;
		link += key+'='+jsonData[key]+'&';
	}
	return link;
}
const sendMail = async (mailInfo, send) =>{
	if(send)
	{
		let transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: MAIL_ID,
				pass: MAIL_PW
			},
		});

		let info = await transporter.sendMail({
			from: `"CREADIT" <creadit2020@gmail.com>`,
			to: 'creadit2020@gmail.com',
			subject: 'CREADIT 견적서',
			text: getMailForm(mailInfo),
		});
		console.log('Msg sent: %s',info.messageId);
	}
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
>>>>>>> c50dd5606bb46c6d699cfe940b8557b13498902f
}

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.listen(3000,()=>{
	console.log('server is running on port 3000');
});

app.post('/',(req,res)=>{
	sendMail(req.body, true).catch(console.error);
	res.status(200).redirect(addParamsToLink(successPageLink, req.body));
});
app.get('/', (req, res) => {
	console.log('GET Test');
	res.status(200).send('success');
})
app.get('/:str',(req, res)=>{
	const  regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
	const { email } = req.param;
	if(email && regExp.test(email)){
				
	}else{
		
	}
});
