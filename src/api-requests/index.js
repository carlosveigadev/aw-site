import * as waxjs from '@waxio/waxjs/dist';
import axios from 'axios';

const wax = new waxjs.WaxJS('https://wax.greymass.com');

export const login = async () => {
  try {
    const userAccount = await wax.login();
    return userAccount;
  } catch (e) {
    console.log(e.message);
  }
};

export const requestLastMine = async (userCode) => axios({
  url: 'https://api.waxsweden.org/v1/chain/get_table_rows',
  data: JSON.stringify({
    json: true,
    code: 'm.federation',
    scope: 'm.federation',
    table: 'miners',
    table_key: '',
    lower_bound: userCode,
    upper_bound: userCode,
    index_position: 1,
    key_type: '',
    limit: 10,
    reverse: false,
    show_payer: false,
  }),
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
}).then((res) => res.data.rows[0]).catch((err) => err);
