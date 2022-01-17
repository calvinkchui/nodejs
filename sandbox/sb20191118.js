//
module.exports = {
  test: function() {
    console.log("sb20191118")

    var cacheManager = require('cache-manager');
    var memoryCache = cacheManager.caching({ store: 'memory', max: 100, ttl: 100 });
    // 
    const algotrader = require('algotrader');
    const AlphaVantage = algotrader.Data.AlphaVantage;
    const av = new AlphaVantage("6AUILADXBVS2TXM2");

    /*
    {
      meta: {
        symbols: ["0001"],
        ref_date: "2019-01-01",
        dates: ["2019-01-02", "2019-01-03"]      
      },
      data: [ 
        { symbol:"0001", 
          quota : { "2019-01-01": { open: ... } }
        }
      ]
    }  
  
    // date
    { 
       meta: { symbol, start_date, end_date },
       data: {
          "2019-01-01": { open: ....}
       }               
    }
    */

    function formatDateYmd(d) {
      var date_input = new Date(d);
      var day = date_input.getDay();
      var month = date_input.getMonth() + 1;
      var year = date_input.getFullYear();
      var yyyy_MM_dd = year + "-" + (month < 10 ? "0" : "") + month + "-" + (day < 10 ? "0" : "") + day;

      return yyyy_MM_dd;
    }

    /*
        {  meta: { symbol, ts_date, start_date, end_date ,  },
           data: {
              "2019-01-01": { open: ....}
           }               
        }
    */
    function _timeSeriesDailyQuote(array) {
      let tsData = {};
      let timeSeriesDates = [];
      let index = 0;
      array.forEach(e => {
        let ymd = formatDateYmd(e.date);
        let quote = {
          date: ymd,
          open: e.price.open,
          high: e.price.high,
          low: e.price.low,
          close: e.price.close,
          volume: e.price.volume
        }
        index++;
        timeSeriesDates.push(ymd)
        tsData[ymd] = quote;
      });
      // 
      let metaData = {};
      if (array.length > 0) {
        metaData.symbol = array[0].symbol;
        metaData.ts_dates = timeSeriesDates;
      }
      if (timeSeriesDates.length > 0) {
        metaData.start_date = timeSeriesDates[0];
        metaData.end_date = timeSeriesDates[index - 1];
      }
      //
      return {
        meta: metaData,
        data: tsData
      }
    }

    async function _timeSeriesDaily(symbol) {
      return new Promise((resolve) => {
        av.timeSeriesMonthly(symbol, false).then(array => {
          // Returns an array of Quote objects for every minute since market open          
          console.log("#timeSeriesDaily " + symbol + " " + array.length)
          let ret = _timeSeriesDailyQuote(array);
          resolve(ret);
        });
      });
    }

    async function test1() {
      let symbols = ["6160.HK", "1255.HK"];
      //   let ref_date = "2019-01-31";
      //   let dates = ["2019-02-28", "2019-03-29"];

      for (let i = 0; i < symbols.length; i++) {
        let symbol = symbols[i];
        console.log("#1 " + symbol);
        //var result = await timeSeriesDaily(s);
        let result = await memoryCache.wrap(symbol, function() {
          return _timeSeriesDaily(symbol);
        });
        console.log("#1m " + result.meta.symbol +  " " +  result.meta.start_date + " - " + result.meta.end_date);
        console.log("#1d " + JSON.stringify(result.data[result.meta.start_date]) );
      };

      console.log("test1 end");
    }
    
    async function table2() {

      let symbols = ["^HSI", "6160.HK", "1255.HK"];
      let ref_date = "2019-01-04";
      let dates = ["2019-02-04", "2019-03-05"];

      let data = [ ]

      for (let i = 0; i < symbols.length; i++) {
        let symbol = symbols[i];
        console.log("#2 " + symbol);
     
        let q = await memoryCache.wrap(symbol, function() {
          return _timeSeriesDaily(symbol);
        });

        //console.log("#2q " + q.meta.symbol +  " " +  q.meta.start_date + " - " + q.meta.end_date);
//console.log("#2q meta " + JSON.stringify(q.meta));

        let sdata = { "symbol": symbol}            
        sdata["ref_date"] = q.data[ref_date];
        let d=dates[0];
        sdata["qdate_1"] = q.data[d];
        d=dates[1];
        sdata["qdate_2"] = q.data[d];
      //console.log("#2 sdata " + JSON.stringify(sdata) );

        data.push(sdata);
      };

      console.log("#table " + JSON.stringify(data) );
      console.log("test1 end");
    }


    test1();
    table2();
    console.log("sb20191118 end")
  }
}

async function testRef() {
  const immediatePromise =
    () => new Promise((resolve) => setImmediate(resolve));
  const timeoutPromise =
    (timeout) => new Promise((resolve) => setTimeout(() => {
      resolve(timeout);
    }, timeout));

  let items = [10];
  for (let i = 0; i < items.length; i++) {
    const result = await timeoutPromise(1000);
    console.log("#2 [" + items[i] + "] " + result);
  }

}