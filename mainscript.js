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
    document.getElementById('1pic').innerHTML='<a href='+names[0].replace(/\s/g, "")+'.html>'+'<img src="logos/'+names[0]+'.png" height="160vh" width="160vw"></a>';
    document.getElementById('2pic').innerHTML='<a href='+names[1].replace(/\s/g, "")+'.html>'+'<img src="logos/'+names[1]+'.png" height="160vh" width="160vw"></a>';
    document.getElementById('3pic').innerHTML='<a href='+names[2].replace(/\s/g, "")+'.html>'+'<img src="logos/'+names[2]+'.png" height="160vh" width="160vw"></a>';
    document.getElementById('4pic').innerHTML='<a href='+names[3].replace(/\s/g, "")+'.html>'+'<img src="logos/'+names[3]+'.png" height="160vh" width="160vw"></a>';
    document.getElementById('5pic').innerHTML='<a href='+names[4].replace(/\s/g, "")+'.html>'+'<img src="logos/'+names[4]+'.png" height="160vh" width="160vw"></a>';
    document.getElementById('6pic').innerHTML='<a href='+names[5].replace(/\s/g, "")+'.html>'+'<img src="logos/'+names[5]+'.png" height="160vh" width="160vw"></a>';
    document.getElementById('7pic').innerHTML='<a href='+names[6].replace(/\s/g, "")+'.html>'+'<img src="logos/'+names[6]+'.png" height="160vh" width="160vw"></a>';
    document.getElementById('8pic').innerHTML='<a href='+names[7].replace(/\s/g, "")+'.html>'+'<img src="logos/'+names[7]+'.png" height="160vh" width="160vw"></a>';
    document.getElementById('9pic').innerHTML='<a href='+names[8].replace(/\s/g, "")+'.html>'+'<img src="logos/'+names[8]+'.png" height="160vh" width="160vw"></a>';
    document.getElementById('10pic').innerHTML='<a href='+names[9].replace(/\s/g, "")+'.html>'+'<img src="logos/'+names[9]+'.png" height=160vh" width="160vw"></a>';
    document.getElementById('11pic').innerHTML='<a href='+names[10].replace(/\s/g, "")+'.html>'+'<img src="logos/'+names[10]+'.png" height=160vh" width="160vw"></a>';
    document.getElementById('12pic').innerHTML='<a href='+names[11].replace(/\s/g, "")+'.html>'+'<img src="logos/'+names[11]+'.png" height=160vh" width="160vw"></a>';
    document.getElementById('13pic').innerHTML='<a href='+names[12].replace(/\s/g, "")+'.html>'+'<img src="logos/'+names[12]+'.png" height=160vh" width="160vw"></a>';
    document.getElementById('14pic').innerHTML='<a href='+names[13].replace(/\s/g, "")+'.html>'+'<img src="logos/'+names[13]+'.png" height=160vh" width="160vw"></a>';
    document.getElementById('15pic').innerHTML='<a href='+names[14].replace(/\s/g, "")+'.html>'+'<img src="logos/'+names[14]+'.png" height=160vh" width="160vw"></a>';
    document.getElementById('16pic').innerHTML='<a href='+names[15].replace(/\s/g, "")+'.html>'+'<img src="logos/'+names[15]+'.png" height=160vh" width="160vw"></a>';
    document.getElementById('17pic').innerHTML='<a href='+names[16].replace(/\s/g, "")+'.html>'+'<img src="logos/'+names[16]+'.png" height=160vh" width="160vw"></a>';
    document.getElementById('18pic').innerHTML='<a href='+names[17].replace(/\s/g, "")+'.html>'+'<img src="logos/'+names[17]+'.png" height=160vh" width="160vw"></a>';
    document.getElementById('19pic').innerHTML='<a href='+names[18].replace(/\s/g, "")+'.html>'+'<img src="logos/'+names[18]+'.png" height=160vh" width="160vw"></a>';
    document.getElementById('20pic').innerHTML='<a href='+names[19].replace(/\s/g, "")+'.html>'+'<img src="logos/'+names[19]+'.png" height=160vh" width="160vw"></a>';

    document.getElementById('2_price').innerHTML="$"+parseInt( prices[1]).toFixed(1)
    document.getElementById('3_price').innerHTML="$"+parseInt( prices[2]).toFixed(1)
    document.getElementById('4_price').innerHTML="$"+parseInt( prices[3]).toFixed(1)
    document.getElementById('5_price').innerHTML="$"+parseInt( prices[4]).toFixed(1)
    document.getElementById('6_price').innerHTML="$"+parseInt( prices[5]).toFixed(1)
    document.getElementById('7_price').innerHTML="$"+parseInt( prices[6]).toFixed(1)
    document.getElementById('8_price').innerHTML="$"+parseInt( prices[7]).toFixed(1)
    document.getElementById('9_price').innerHTML="$"+parseInt( prices[8]).toFixed(1)
    document.getElementById('10_price').innerHTML="$"+parseInt( prices[9]).toFixed(1)
    document.getElementById('11_price').innerHTML="$"+parseInt( prices[10]).toFixed(1)
    document.getElementById('12_price').innerHTML="$"+parseInt( prices[11]).toFixed(1)
    document.getElementById('13_price').innerHTML="$"+parseInt( prices[12]).toFixed(1)
    document.getElementById('14_price').innerHTML="$"+parseInt( prices[13]).toFixed(1)
    document.getElementById('15_price').innerHTML="$"+parseInt( prices[14]).toFixed(1)
    document.getElementById('16_price').innerHTML="$"+parseInt( prices[15]).toFixed(1)
    document.getElementById('17_price').innerHTML="$"+parseInt( prices[16]).toFixed(1)
    document.getElementById('18_price').innerHTML="$"+parseInt( prices[17]).toFixed(1)
    document.getElementById('19_price').innerHTML="$"+parseInt( prices[18]).toFixed(1)
    document.getElementById('20_price').innerHTML="$"+parseInt( prices[19]).toFixed(1)
////

    document.getElementById('1_volume').innerHTML=parseInt(volume[0]).toFixed(1)
    document.getElementById('2_volume').innerHTML=parseInt(volume[1]).toFixed(1)
    document.getElementById('3_volume').innerHTML=parseInt(volume[2]).toFixed(1)
    document.getElementById('4_volume').innerHTML=parseInt(volume[3]).toFixed(1)
    document.getElementById('5_volume').innerHTML=parseInt(volume[4]).toFixed(1)
    document.getElementById('6_volume').innerHTML=parseInt(volume[5]).toFixed(1)
    document.getElementById('7_volume').innerHTML=parseInt(volume[6]).toFixed(1)
    document.getElementById('8_volume').innerHTML=parseInt(volume[7]).toFixed(1)
    document.getElementById('9_volume').innerHTML=parseInt(volume[8]).toFixed(1)
    document.getElementById('10_volume').innerHTML=parseInt(volume[9]).toFixed(1)
    document.getElementById('11_volume').innerHTML=parseInt(volume[10]).toFixed(1)
    document.getElementById('12_volume').innerHTML=parseInt(volume[11]).toFixed(1)
    document.getElementById('13_volume').innerHTML=parseInt(volume[12]).toFixed(1)
    document.getElementById('14_volume').innerHTML=parseInt(volume[13]).toFixed(1)
    document.getElementById('15_volume').innerHTML=parseInt(volume[14]).toFixed(1)
    document.getElementById('16_volume').innerHTML=parseInt(volume[15]).toFixed(1)
    document.getElementById('17_volume').innerHTML=parseInt(volume[16]).toFixed(1)
    document.getElementById('18_volume').innerHTML=parseInt(volume[17]).toFixed(1)
    document.getElementById('19_volume').innerHTML=parseInt(volume[18]).toFixed(1)
    document.getElementById('20_volume').innerHTML=parseInt(volume[19]).toFixed(1)


    document.getElementById('1_marketcap').innerHTML="$"+parseInt(marketcap[0])
    document.getElementById('2_marketcap').innerHTML="$"+parseInt(marketcap[1])
    document.getElementById('3_marketcap').innerHTML="$"+parseInt(marketcap[2])
    document.getElementById('4_marketcap').innerHTML="$"+parseInt(marketcap[3])
    document.getElementById('5_marketcap').innerHTML="$"+parseInt(marketcap[4])
    document.getElementById('6_marketcap').innerHTML="$"+parseInt(marketcap[5])
    document.getElementById('7_marketcap').innerHTML="$"+parseInt(marketcap[6])
    document.getElementById('8_marketcap').innerHTML="$"+parseInt(marketcap[7])
    document.getElementById('9_marketcap').innerHTML="$"+parseInt(marketcap[8])
    document.getElementById('10_marketcap').innerHTML="$"+parseInt(marketcap[9])
    document.getElementById('11_marketcap').innerHTML="$"+parseInt(marketcap[10])
    document.getElementById('12_marketcap').innerHTML="$"+parseInt(marketcap[11])
    document.getElementById('13_marketcap').innerHTML="$"+parseInt(marketcap[12])
    document.getElementById('14_marketcap').innerHTML="$"+parseInt(marketcap[13])
    document.getElementById('15_marketcap').innerHTML="$"+parseInt(marketcap[14])
    document.getElementById('16_marketcap').innerHTML="$"+parseInt(marketcap[15])
    document.getElementById('17_marketcap').innerHTML="$"+parseInt(marketcap[16])
    document.getElementById('18_marketcap').innerHTML="$"+parseInt(marketcap[17])
    document.getElementById('19_marketcap').innerHTML="$"+parseInt(marketcap[18])
    document.getElementById('20_marketcap').innerHTML="$"+parseInt(marketcap[19])


    document.getElementById('1_change1h').innerHTML=change1h[0]
    document.getElementById('2_change1h').innerHTML=change1h[1]
    document.getElementById('3_change1h').innerHTML=change1h[2]
    document.getElementById('4_change1h').innerHTML=change1h[3]
    document.getElementById('5_change1h').innerHTML=change1h[4]
    document.getElementById('6_change1h').innerHTML=change1h[5]
    document.getElementById('7_change1h').innerHTML=change1h[6]
    document.getElementById('8_change1h').innerHTML=change1h[7]
    document.getElementById('9_change1h').innerHTML=change1h[8]
    document.getElementById('10_change1h').innerHTML=change1h[9]
    document.getElementById('11_change1h').innerHTML=change1h[10]
    document.getElementById('12_change1h').innerHTML=change1h[11]
    document.getElementById('13_change1h').innerHTML=change1h[12]
    document.getElementById('14_change1h').innerHTML=change1h[13]
    document.getElementById('15_change1h').innerHTML=change1h[14]
    document.getElementById('16_change1h').innerHTML=change1h[15]
    document.getElementById('17_change1h').innerHTML=change1h[16]
    document.getElementById('18_change1h').innerHTML=change1h[17]
    document.getElementById('19_change1h').innerHTML=change1h[18]
    document.getElementById('20_change1h').innerHTML=change1h[19]


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
    document.getElementById('20_change24h').innerHTML=change24h[19]

    
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