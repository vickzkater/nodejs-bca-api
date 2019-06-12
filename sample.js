const APIBCA = require('./index');

// set config
const config = {
  api_host: 'https://sandbox.bca.co.id',
  api_port: 443,
  client_id: 'f04e2897-7ffd-4723-9038-81346a522000',
  client_secret: '763c5ad4-8a9d-475f-9692-a26a76603ea4',
  api_key: '044dc941-23b7-456f-90ed-e9efb5fad0d0',
  api_secret: 'abcf597e-9349-4d3a-8af3-1ce9b69be17e',
  origin: 'askapsocial.com',
};

var corporateId = 'BCAAPI2016';

// create object BusinessBanking
const businessBanking = new APIBCA.BusinessBanking(config);

// function get balance of account(s)
const getBalance = async (corpId, accNums) => {
  const balances = await businessBanking.getBalance({
    corporateId: corpId,
    accountNumbers: accNums,
  });

  console.log(balances);
}
// fire the function - uncomment to testing
getBalance(corporateId, ['0201245680']);

const getAccountStatement = async function (corpId, accNum, startDate, endDate) {
  const statement = await businessBanking.getAccountStatement({
    corporateId: corpId,
    accountNumber: accNum,
    startDate: startDate,
    endDate: endDate,
  });

  console.log(statement);
}
// fire the function - uncomment to testing
var startDate = '2016-09-01';
var endDate = '2016-09-01';
// getAccountStatement(corporateId, '0201245680', startDate, endDate);

const transferFund = async (corporateId, transId) => {
  const transfer = await businessBanking.corporateTransfer({
    CorporateID: corporateId,
    SourceAccountNumber : '0201245680',
    TransactionID : transId,
    ReferenceID : '120114/PO/2018',
    CurrencyCode : 'IDR',
    Amount : '250000.00',
    BeneficiaryAccountNumber : '0201245681',
    Remark1 : 'Transfer Test',
    Remark2 : 'Online Transfer',
  });
  console.log(transfer);
}
// fire the function - uncomment to testing
// transferFund(corporateId, '00000005');

const domesticTransfer = async (corpId, channelId, transId) => {
  const domTransfer = await businessBanking.domesticTransfer({
    TransactionID : transId,
    ReferenceID : '66666/PO/2018',
    SourceAccountNumber : '0201245680',
    BeneficiaryAccountNumber : '0201245501',
    BeneficiaryBankCode : 'BRONINJA',
    BeneficiaryName : 'Tester',
    Amount : '1000000.00',
    TransferType : 'LLG',
    BeneficiaryCustType : '1',
    BeneficiaryCustResidence : '1',
    CurrencyCode : 'IDR',
    Remark1 : 'Transfer Test',
    Remark2 : 'Online Transfer',
  }, corpId, channelId);
  console.log(domTransfer);
}
// fire the function - uncomment to testing
// domesticTransfer('BCAAPI', '95051', '00000019');

