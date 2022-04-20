const Email = require('email-templates');
const email =  new Email({
    message:{
        from: 'vitor4023@edu.faccar.com.br'
    },
    send: true,
    transport: {
        host: 'smtp.mailtrap.io',
        port: 2525,
        ssl: false,
        tls: true,
        auth: {
            user: "46f232b8cd4839",
            pass: "207fd73a7f3031"
          }
    }
});

module.exports = email