// import path from 'path';
// import fs from 'fs';

const formData = {
    id: 'QHHS9iMgIo7ujv9t89x6',
    title: 'Get Started',
    submission: {
        button: 'Send it!',
    },
    disclaimer:
        'To learn more about how we use your data, please read our <a href="/company-terms" title="You are welcome to read our Company Terms / Privacy Policy">privacy policy</a>.',
    fields: [
        {
            type: 'email',
            name: 'email',
            rules: 'required',
            label: 'Email',
            placeholder: 'you@company.com',
        },
        {
            type: 'textarea',
            name: 'message',
            rules: 'required',
            label: 'Message',
            placeholder: 'What are you looking to accomplish with LandUp?',
        },
        {
            type: 'text',
            name: 'wherefrom',
            label: 'How did you hear about us?',
            help: '(optional)'
        },
    ]
};

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
        //   const filePath = path.join(__dirname, 'formData', 'contact.js');
        //   const fileData = fs.readFileSync(filePath, 'utf8');
        //   const formData = JSON.parse(fileData);
            res.setHeader('Cache-Control', 'no-store')
            return res.status(200).json(formData);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}
