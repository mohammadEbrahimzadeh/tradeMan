let myArray;

async function FetchingApi() {
  const res = await fetch("https://api.nobitex.ir/v2/orderbook/all");
  const x = await res.json();
  myArray = Object.keys(x).map((key, i) => [i, key, x[key]]);

  return myArray;
}

export default FetchingApi;

//   {
//   "symbols": [
//     {
//       "proName": "FOREXCOM:SPXUSD",
//       "title": "S&P 500"
//     },
//     {
//       "proName": "FOREXCOM:NSXUSD",
//       "title": "US 100"
//     },
//     {
//       "proName": "FX_IDC:EURUSD",
//       "title": "EUR/USD"
//     },
//     {
//       "proName": "BITSTAMP:BTCUSD",
//       "title": "Bitcoin"
//     },
//     {
//       "proName": "BITSTAMP:ETHUSD",
//       "title": "Ethereum"
//     }
//   ],
//   "showSymbolLogo": true,
//   "colorTheme": "light",
//   "isTransparent": true,
//   "displayMode": "compact",
//   "locale": "en"
// }
