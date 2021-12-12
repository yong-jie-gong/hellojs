
/*
app.get('/ab?cd', function(req, res): 符合 acd 和 abcd
app.get('/ab+cd', function(req, res): 符合 abcd、abbcd、abbbcd
app.get('/ab(cd)?e', function(req, res): 符合 /abe 和 /abcde。
app.get('/ab*cd', function(req, res): 符合 abcd、abxcd、abRABDOMcd、ab123cd 等
app.get(/a/, function(req, res): 只要路由名稱中有 “a”，都與這個路由路徑相符
app.get(/.*fly$/, function(req, res):  符合 butterfly 和 dragonfly，但不符合 butterflyman、dragonfly man 等
方法	說明
res.download()	提示您提供要下載的檔案。
res.end()	結束回應程序。
res.json()	傳送 JSON 回應。
res.jsonp()	傳送 JSON 回應，並支援 JSONP。
res.redirect()	將要求重新導向。
res.render()	呈現視圖範本。
res.send()	傳送各種類型的回應。
res.sendFile()	以八位元組串流形式傳送檔案。
res.sendStatus()	設定回應狀態碼，並以回應內文形式傳送其字串表示法。
//get、 post、put、head、delete、options、 trace、
copy、lock、mkcol、move、purge、propfind、proppatch、
unlock、report、mkactivity、checkout、merge、m-search、notify、subscribe、unsubscribe、patch、search，以及 connect。

*/