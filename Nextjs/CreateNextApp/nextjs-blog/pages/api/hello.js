// req = HTTP incoming message, res = HTTP server response s
export default function handler(req, res) {
    res.status(200).json({text: 'hello'});
}