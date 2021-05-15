import * as waxjs from "@waxio/waxjs/dist";

const wax = new waxjs.WaxJS('https://wax.greymass.com');

const login = async () => {
  try {
    const userAccount = await wax.login();
    return userAccount;
  } catch(e) {
    console.log(e.message)
  }
}

export default login;