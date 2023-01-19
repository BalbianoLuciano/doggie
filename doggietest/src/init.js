import Web3 from "web3";

let isInitalized = false;
let contract;

export const init = () => {
  let provider = window.ethereum;
  //This function connect into to any wallet
  if (typeof provider !== undefined) {
    provider
      .request({ method: "eth_requestAccounts" })
      .then((accounts) => {
        console.log(accounts);
      })
      .catch((err) => {
        console.log(err);
        return;
      });
    isInitalized = true;
  }
  let contractAddress = "0xc7df86762ba83f2a6197e1ff9bb40ae0f696b9e6";
  let abi = [
    {
      inputs: [],
      name: "baseTokenURI",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
  ];
  const web3 = new Web3(provider);
  contract = new web3.eth.Contract(abi, contractAddress);
};

export const getOwnURL = async () => {
  if (!isInitalized) {
    await init();
  }
  return await contract.methods.baseTokenURI().call();
};
