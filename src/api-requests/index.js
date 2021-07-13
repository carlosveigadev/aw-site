/* eslint-disable no-await-in-loop */
import * as waxjs from '@waxio/waxjs/dist';
import axios from 'axios';
import { fetchPaginate } from 'fetch-paginate';

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

export const requestItems = async (userCode) => axios({
  url: 'https://api.waxsweden.org/v1/chain/get_table_rows',
  data: JSON.stringify({
    json: true,
    code: 'm.federation',
    scope: 'm.federation',
    table: 'bags',
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

export const requestItemsData = async (itemCode) => {
  try {
    const response = await axios({
      url: `https://wax.api.atomicassets.io/atomicassets/v1/assets/${itemCode}`,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const newData = await response.data.data.data;
    return newData;
  } catch (error) {
    return error;
  }
};

export const requestLandData = async (landCode) => {
  try {
    const response = await axios({
      url: `https://wax.api.atomicassets.io/atomicassets/v1/assets/${landCode}`,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const newData = await response.data.data.data;
    return newData;
  } catch (error) {
    return error;
  }
};

export const requestLast100mines = async () => {
  try {
    const response = await axios({
      url: 'http://34.136.237.181/',
    });
    const newData = await response.data;
    return newData;
  } catch (error) {
    return error;
  }
};

export const requestSpecificTopMining = async (values) => {
  const {
    initialDate, finalDate, order, registers,
  } = values;
  try {
    let nextPage = true;
    let page = 1;
    let promises = [];

    while (nextPage) {
      const response = await axios({
        url: `http://34.136.237.181/mining/?startDate=${initialDate}&endDate=${finalDate}&limit=${registers}&page=${page}&sort=${order}`,
      });
      promises = [...promises, ...response.data];
      page += 1;

      if (await response.data.length === 0) {
        nextPage = false;
      }
    }

    const responses = await Promise.all(promises);
    return responses;
  } catch (error) {
    return error;
  }
};

export const requestTopMiners = async (values) => {
  const {
    initialDate, finalDate, order, registers,
  } = values;
  try {
    const response = await axios({
      url: `http://34.136.237.181/topMiners/?startDate=${initialDate}&endDate=${finalDate}&limit=${registers}&page=1&sort=${order}`,
    });
    const newData = await response.data;
    return newData;
  } catch (error) {
    return error;
  }
};

export const requestUserData = async (values) => {
  const {
    initialDate, finalDate, account,
  } = values;
  try {
    const response = await axios({
      url: `http://34.136.237.181/mining/${account}?startDate=${initialDate}&endDate=${finalDate}&limit=100&page=1&sort=-1`,
    });
    const newData = await response.data;
    console.log(newData);
    return newData;
  } catch (error) {
    return error;
  }
};
