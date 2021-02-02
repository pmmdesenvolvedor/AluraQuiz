import db from '../../db.json';

const Db = (req, res) => {

  if (req.method === 'OPTIONS') {
    res.staus(200).end();
    return;
  }

  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');

  res.json(db);
}
export default Db;