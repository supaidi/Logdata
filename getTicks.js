var KiteTicker = require("kiteconnect").KiteTicker;
var fs = require('fs');
try {
    var access_token = fs.readFileSync('../../../kiteconnect/access_token.txt', 'utf8');
} catch(e) {
    console.log('Error:', e.stack);
}

var ticker = new KiteTicker({
	api_key: "frzs55jbcxwmt1af",
	access_token: access_token
});

//var items = [55350279];
var items = [11598594,11598338,11597058,11596802,11592450,11592194,11588354,11588098,11587330,11587074,11586818,11586050,11583234,11582722,11582466,11580930,11580674,11579650,11578114,11571458,11571202,11570946,11570690,11570434,11568386,11564290,11563522,11563010,11562754,11554818,11552002,11551746,11551234,11550978,11550722,11549186,11548930,11538946,11537666,11537410,11537154,11536898,11535362,11535106,11534850,11534594,11534338,11534082,11533826,11533570,11533314,11533058,11532802,11630338,11630082,11619074,11618306,11613442,11612162,11611906,11611650,11610882,11610114,11604226,11603970,11603714,11603202,11602178,11625730,11625474,11625218,11624962,11622658,11620866,11620610,11619330,11609346,11607810,11601922,11591938,11591682,11591426,11591170,11588866,11588610,11530754,11585794,11585538,11585282,11618050,11577858,11616770,11616258,11577602,11577346,11568130,11567874,11567362,11614722,11614466,11613954,11613698,11577090,11575042,11574786,11574530,11574018,11573762,11573506,11567106,11566338,11566082,11564034,11563778,11565570,11565314,11565058,11551490,11560962,11557634,11557378,11556610,11556354,11556098,11547394,11547138,11555842,11544578,11555074,11544834,11536642,11536386,11536130,11535874,11535618,11530498,11532546,11532290,11532034,11531778,11531522,11531266,9864450,9864194,9699074,9698818,10658818,10658562,10576386,10576130,9570562,9570306,9220354,9220098,9035266,9035010,10358786,10358530,10355714,10355458,10355202,10354946,10353154,10352898,10350850,10350594,10347010,10346754,10343938,10343682,10342658,10341890,10331906,10330882,10329858,10329602,10324482,10324226,10322434,10322178,10320130,10319874,10317570,10316802,10313474,10313218,10312706,10312450,10308354,10308098,10298370,10298114,10296578,10296322,10292226,10291970,10285314,10285058,10284802,10284290,10283778,10283522,10281730,10281474,10280194,10279938,10279682,10279426,10279170,10278914,10278658,10278402,10271490,10270722,10269442,10269186,10268930,10268674,10268418,10268162,10266370,10266114,10263298,10263042,10262786,10262530,10262274,10262018,10261506,10260994,10258690,10258434,10257666,10257410,10253570,10253314,10253058,10252802,10245890,10245634,10242818,10242562,10240770,10240514,10230018,10229762,10227970,10227458,10227202,10226946,10226690,10224386,10224130,10219266,10219010,10212866,10212610,10210562,10210306,10209538,10209282,10209026,10208770,10208514,10208258,10208002,10207746,10206978,10206722,10205954,10205698,10205442,10205186,10204418,10204162,9349378,9349122,9348866,9348610,9348354,9348098,9347842,9347586,9347330,9347074,9346818,9346562,10496770,10496514,10236162,10235906,10227714,10149634,10149378,10137346,10136834,10569730,10569474,10495490,10495234,8972034,8971778,8966914,8966658,8964354,8964098,10202882,10202626,10201858,10201602,10200834,10200578,10198274,10198018,10196226,10195970,10195714,10195458,10194178,10119682,10119426,10119170,10116866,10116610,10114818,10114562,10188546,10188290,10188034,10187778,10185986,10185730,10184962,10184706,10184450,10184194,10193922,10191874,10191618,10190594,10190338,10189826,10189570,10187522,10187266,10186498,10186242,10185474,10185218,10183938,10183170,10182914,10182658,10181890,10181378,10180354,10180098,10179330,10179074,10178818,10178562,10164226,10162434,10162178,10159362,10159106,10157826,10157570,10156802,10156546,10156290,10156034,10155778,10155522,10154242,10153986,10153730,10153474,10148610,10147330,10147074,10146818,10146562,10145794,10145026,10865410,10865154,11915778,11914498,11913986,11913730,12006658,12006402,12005378,12004098,14540546,14536706,9281794,9281538,9281282,9281026,9278210,9277954,9277698,9277442,9277186,9276930,9275650,9275394,9275138,9274882,9273602,9273346,10144770,10139906,10139650,10136322,10136066,10135810,10134786,10135554,10134530,10133762,10178306,10178050,10177282,10177026,10173698,10173442,10173186,10172930,10172674,10172418,10172162,10171906,10171650,10171138,10170626,10170370,10170114,10169858,10168578,10168322,10168066,10167810,10167554,10167298,10164482,10133506,10133250,10132994,10130946,10130434,10130178,10129922,10127618,10127362,10127106,10126850,10125826,10125570,10125058,10124802,10120962,10120450,10120194];

var final_output = [];
var values = '';
var current_min;
var instrument_data = [];
for(k=0;k<items.length;k++){
	instrument_data[items[k]] = [];
}
// set autoreconnect with 10 maximum reconnections and 5 second interval
ticker.autoReconnect(true, 10, 5)
ticker.connect();
ticker.on("ticks", onTicks);
ticker.on("connect", subscribe);

ticker.on("noreconnect", function() {
	console.log("noreconnect");
});

ticker.on("reconnecting", function(reconnect_interval, reconnections) {
	console.log("Reconnecting: attempt - ", reconnections, " innterval - ", reconnect_interval);
});

var dateFormat = require('dateformat');

function onTicks(ticks) {
    var date = new Date(ticks[0].timestamp);

	var full_date = dateFormat(date, "yyyy/mm/dd");
	var minute = dateFormat(date, "MM");
	var next_minute = (parseInt(minute) + parseInt(1));
	if(next_minute == 60){
	    minute = parseInt(minute) + parseInt(1);
	    next_minute = '00';
	}

	if(minute.toString().length < 2){
		minute= "0"+minute;
	}
	if(next_minute.toString().length < 2){
		next_minute= "0"+next_minute;
	}

	var count = 0;

	var hour = date.getHours();
	var last_oi = [];
	for(i=0;i<ticks.length;i++){
		if(current_min!=minute){
			var min_data = instrument_data[ticks[i].instrument_token];
			if(min_data.length>0){
				var obj = {};
				obj.instrument_token = ticks[i].instrument_token;
				obj.datetime = full_date + ' '+hour+':'+minute;
				obj.date = full_date;
				obj.time = hour+':'+minute+' - '+hour+':'+ next_minute;
				obj.open = min_data[0].last_price;
				obj.close = min_data[min_data.length-1].last_price;
				
				obj.high = Math.max.apply(Math, min_data.map(function(o) { return o.last_price; }));
				obj.low = Math.min.apply(Math, min_data.map(function(o) { return o.last_price; }));
				
				obj.ci_op = obj.close - obj.open;
				obj.quantity = min_data.reduce(function(prev, cur) { return prev + cur.last_quantity;}, 0);
				obj.value = min_data.reduce(function(prev, cur) { return prev + ( cur.last_quantity * cur.last_price)}, 0);
				obj.price = obj.value/obj.quantity;
				obj.oi =  min_data[min_data.length-1].oi;
				final_output.push(obj);
				if(values == undefined){
				    values = '';
				}
            	values += '(';
            	values +=  obj.instrument_token +',';
            	values += '"' + obj.datetime + '",';
            	values += '"'+ 	obj.date +'"' +',';
            	values += '"'+ obj.time +'"' +',';
            	values += obj.open + ',';
            	values += obj.high + ',';
            	values += obj.low +',';
            	values += obj.close +',';
            	values += obj.ci_op +',';
            	values += obj.quantity +',';
            	values += obj.value +',';
            	
            	if( obj.price != '' && Number.isNaN(obj.price) == false ){
            	   values += obj.price + ',';
            	}else{
            	   values += '0,';
            	}
            	
            	if( obj.oi != '' ){
            	   values += obj.oi;
            	}else{
            	   values += '0';
            	}
                values += '),';
			}
			
			instrument_data[ticks[i].instrument_token] = [];
		}
		instrument_data[ticks[i].instrument_token].push(ticks[i]);
	}
	current_min = minute;

	if(final_output.length>0){
		var paramJSON = JSON.stringify(final_output);
		final_output = [];
			var mysql = require('mysql');
            var con = mysql.createConnection({
              host: "localhost",
              user: "supai_sudheer",
              password: "Paidi@2453",
              database: "supai_analytics"
            });

           var values = values.substring(0, values.length-1);
            con.connect(function(err) {
              if (err) throw err;
              var sql = "INSERT INTO oianalytics (instrument_id, datetime, date, time, open, high, low, close, ci_op, quantity, value, price, oi) VALUES "+ values;

              con.query(sql, function (err, result) {
               if (err) throw err;
                con.destroy();
                console.log('inserted');
              });
            });
	}
    

}

function subscribe() {
	//var items = [55350279];
	ticker.subscribe(items);
	ticker.setMode(ticker.modeFull, items);
}