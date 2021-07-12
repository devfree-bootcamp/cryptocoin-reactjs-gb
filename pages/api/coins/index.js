export default async (req, res) => {
    try {
        const response =  await fetch(`${process.env.ENV_API}/tickers/`);
        const data = await response.json();
        res.status(200).json(data);
    } catch (e) {
        console.log(e);
        res.status(400).end();
    }
}