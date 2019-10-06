var xin = true, yin = true;
var delay = 20;
var step = 1;
var x = 50, y = 50;
var cnt = document.getElementById('main');

// github push test

function floatDiv() {
    // x, y坐标的最小值
    // 当它们减小到负值的时候，马上置为最小值
    var L = T = 0;
    // x, y坐标的最大值
    // 它们的最大值，是文档宽度（高度）减去它们自身的宽度（高度）
    // 这里要注意的是，这个宽和高是要包含边框的宽度的(offsetWidth, offsetHeight)
    var R = document.documentElement.clientWidth - cnt.offsetWidth;
    var B = document.documentElement.clientHeight - cnt.offsetHeight;
    cnt.style.left = (x + document.body.scrollLeft).toString() + "px";
    cnt.style.top = (y + document.body.scrollTop).toString() + "px";

    x = x + step*(xin?1:-1)
    if (x < L) { 
        xin = true; 
        x = L;
    }
    if (x > R) { 
        xin = false; 
        x = R;
    }
    y = y + step*(yin?1:-1)
    if (y < T) {
        yin = true; 
        y = T;
    }
    if (y > B) { 
        yin = false; 
        y = B;
    }
}

var itl = setInterval("floatDiv()", delay);
cnt.onmouseover = function() {
    clearInterval(itl);
};
cnt.onmouseout = function() {
    itl = setInterval("floatDiv()", delay);
};