require('dotenv').config()
const ngrok = require('ngrok')

function parseUrl(url) {
	let index1 = url.indexOf('//');
	let index2 = url.indexOf('o:');
	let newUrl = url.slice(index1+2, index2+1);
	let port = url.slice(index2+2);
	let str = "ssh ";
	str += process.env.PI_USERNAME;
	str += "@";
	str += newUrl;
	str += " -p ";
	str += port;
	return str;
}

const options = {
    proto: 'tcp',
    addr: 22,
    authtoken:process.env.NGROK_TOKEN
}

const connect = async () => {
    console.log('requesting tunnel...')
    const url = await ngrok.connect(options)
    console.log(`url: ${url}`)
    const prsUrl = parseUrl(url)
    console.log(`the command we should paste into cli`)
    console.log(prsUrl)
}

connect()

setTimeout(async () =>  {
    await ngrok.disconnect()
    await ngrok.kill()
    console.log('disconnected!')
}, 3000);

