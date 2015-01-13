/**
 * @file 前端发送统计log
 * @param  {Object} param 定制参数
 * @param  {string} url 发送地址
 * @author hangyongsheng@
 * @example
 * USER_LOG({type:'del',uid:'12345'});
 * USER_LOG({type:'del',uid:'12345'},'http://hetu.baidu.com/log.gif');
 */
(function() {
    function slog(param, url) {
        this.url = url || 'http://ee.baidu.com/log.gif';
        var _this = this;
        if (param) {
            var img = new Image();
            var key = 'slog_' + Math.floor(Math.random() * 2147483648).toString(36);
            this[key] = img;
            img.onload = img.onerror = img.onabort = function() {
                img.onload = img.onerror = img.onabort = null;
                _this[key] = null;
                delete _this[key];
                img = null;
            };
            var params = [];
            param.t = Math.round(Math.random() * 2147483647);
            for (var k in param) {
                if (param.hasOwnProperty(k)) {
                    params.push(k + '=' + encodeURIComponent(param[k]));
                }
            }
            img.src = this.url + '?' + params.join('&');
        }
    }
    window.USER_LOG = slog;
})();
