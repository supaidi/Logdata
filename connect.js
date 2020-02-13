var KiteTicker = require("kiteconnect").KiteTicker;
var ticker = new KiteTicker({
	api_key: "frzs55jbcxwmt1af",
	access_token: "f1fkn6lYtOK1jV0KEH27StkSo3qxm9OT"
});

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

function onTicks(ticks) {
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "supai_sudheer",
  password: "Paidi@2453",
  database: "supai_test"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO test (name) VALUES ('Company Inc')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    con.destroy();
    console.log("1 record inserted");
  });
});
}

function subscribe() {
	var items = [55350279];
	ticker.subscribe(items);
	ticker.setMode(ticker.modeFull, items);
}