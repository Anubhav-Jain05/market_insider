var apikey = {
    key:'b9aa7f3f-3102-4690-8da2-191c607aeef1'
  }
  request('GET','https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=' + apikey.key)
  .then((r1) => {
    var x1 = JSON.parse(r1.target.responseText);
    const coins=x1.data
    let names=[]
    let prices=[]
    let cap24h=[]
    let cap7d=[]
    let marketcap=[]
    let change1h=[]
    let change24h=[]
    let volume=[]
    for(var i = 0; i < 20; i++) {
        let obj = coins[i];
        names.push(obj.name)
        prices.push(obj.quote.USD.price)
        cap24h.push(obj.quote.USD.percent_change_24h)
        change1h.push(obj.quote.USD.percent_change_1h)
        change24h.push(obj.quote.USD.percent_change_24h)
        cap7d.push(obj.quote.USD.percent_change_7d)
        volume.push(obj.quote.USD.volume_24h)
        marketcap.push(obj.quote.USD.market_cap)

    }
    
    document.getElementById('2_price').innerHTML="$"+parseInt( prices[1]).toFixed(1)
    
////

    document.getElementById('1_volume').innerHTML=parseInt(volume[0]).toFixed(1)
    


    document.getElementById('1_marketcap').innerHTML="$"+parseInt(marketcap[0])
   


    document.getElementById('1_change1h').innerHTML=change1h[0]
    


    document.getElementById('1_change24h').innerHTML=change24h[0]
    document.getElementById('2_change24h').innerHTML=change24h[1]
    document.getElementById('3_change24h').innerHTML=change24h[2]
    document.getElementById('4_change24h').innerHTML=change24h[3]
    document.getElementById('5_change24h').innerHTML=change24h[4]
    document.getElementById('6_change24h').innerHTML=change24h[5]
    document.getElementById('7_change24h').innerHTML=change24h[6]
    document.getElementById('8_change24h').innerHTML=change24h[7]
    document.getElementById('9_change24h').innerHTML=change24h[8]
    document.getElementById('10_change24h').innerHTML=change24h[9]
    document.getElementById('11_change24h').innerHTML=change24h[10]
    document.getElementById('12_change24h').innerHTML=change24h[11]
    document.getElementById('13_change24h').innerHTML=change24h[12]
    document.getElementById('14_change24h').innerHTML=change24h[13]
    document.getElementById('15_change24h').innerHTML=change24h[14]
    document.getElementById('16_change24h').innerHTML=change24h[15]
    document.getElementById('17_change24h').innerHTML=change24h[16]
    document.getElementById('18_change24h').innerHTML=change24h[17]
    document.getElementById('19_change24h').innerHTML=change24h[18]
    document.getElementById('20_change24h').innerHTML=change24h[0]

    
    
  }).catch(err => {
    console.log(err);
  })  
  function request(method, url) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.onload = resolve;
            xhr.onerror = reject;
            xhr.send();
        });
  }