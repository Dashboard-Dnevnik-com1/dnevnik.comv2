// Express backend для скрытой проверки логинов/паролей
const express = require('express');
const app = express();
app.use(express.json());

const credentials = [
    { u: 'behruz.ah288', p: 'ahmedov.bh28', url: 'http://dnevnik.com1.tilda.ws/page68189337html' },
    { u: 'hf8548', p: '849w8d', url: 'http://dnevnik.com-v2.tilda.ws/moya-organizacia' },
    { u: 'rozh0508', p: 'rozh11', url: 'http://dnevnik.com1.tilda.ws/useruset390243969048639039' },
    { u: 'admin_oo', p: 'admin_oo00', url: 'http://dnevnik.com1.tilda.ws/sms-go-tc/bitrix24' }
];

app.post('/api/login', (req, res) => {
    const { login, password } = req.body;
    const cred = credentials.find(c => c.u === login && c.p === password);
    if (cred) {
        res.json({ success: true, redirectUrl: cred.url });
    } else {
        res.json({ success: false });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));
