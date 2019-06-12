### NodeJS Wrapper for BCA API
Wrapper is based on BCA API documentation which can be found on https://developer.bca.co.id/documentation/

### Config
To be able to use the wrapper, make sure you have all of these configurations:
- client_id
- client_secret
- api_key
- api_secret

Which can be retrieved after signing up and login to https://developer.bca.co.id/sign-in

Config can be used when initiating one of the classes, for example:
```
const bca = new BCA({
  api_host: 'https://sandbox.bca.co.id',
  api_port: 443,
  client_id: 'YOUR_CLIENT_ID',
  client_secret: 'YOUR_CLIENT_SECRET',
  api_key: 'YOUR_API_KEY',
  api_secret: 'YOUR_API_SECRET',
  origin: 'YOUR_SITE_URL',
})
```

### Services
Following the documentation, each service can be used separately. It consists of:
- BusinessBanking
- Fire
- GeneralInformation
- Sakuku
- VirtualAccount

Which can be used by initiating a new class for each service, for example:
```
const businessBanking = new BusinessBanking({
  api_host: 'https://sandbox.bca.co.id',
  api_port: 443,
  client_id: 'YOUR_CLIENT_ID',
  client_secret: 'YOUR_CLIENT_SECRET',
  api_key: 'YOUR_API_KEY',
  api_secret: 'YOUR_API_SECRET',
  origin: 'YOUR_SITE_URL',
});

// Corporate transfer within BCA
businessBanking.corporateTransfer({
  CorporateID: 'BCAAPI2016',
  SourceAccountNumber : '0201245680',
  TransactionID : '00000001',
  ReferenceID : '12345/PO/2016',
  CurrencyCode : 'IDR',
  Amount : '100000.00',
  BeneficiaryAccountNumber : '0201245681',
  Remark1 : 'Transfer Test',
  Remark2 : 'Online Transfer',
});
```

### Token
Token is cached based on `expires_in` specified in https://developer.bca.co.id/documentation/#oauth2-0

You can also decide on how you want to cache it on your own. Just make sure that you call `clearCache()` method

```
fire.clearCache();
```

### Don't forget to install required node modules using `npm install`

### Test
To make sure that your config is set correctly, run `npm run test` and make sure that you your config on `originalConfig` variable defined in `tests/index.js`

### Sample
For sample, you can check `sample.js` but set the config first
```
const config = {
  api_host: 'https://sandbox.bca.co.id',
  api_port: 443,
  client_id: 'YOUR_CLIENT_ID',
  client_secret: 'YOUR_CLIENT_SECRET',
  api_key: 'YOUR_API_KEY',
  api_secret: 'YOUR_API_SECRET',
  origin: 'YOUR_SITE_URL',
};
```

### Notes
If in development using sandbox, you will get error response when using function `domesticTransfer`

```
Error Response:
ErrorCode: 'ESB-82-004'
ErrorMessage: 'Invalid TransactionDate'
```

It is a `false positive`, so don't worry. But if you using `real API config, it works`.

This error cause by Sandbox only accept specific time, not using the real time.
