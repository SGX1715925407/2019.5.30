
(function () {
    var supportsOrientationChange = 'onorientationchange' in window ? 'orientationchange' : 'resize';
    var timeoutId;
    function setRem() {
        var clientWidth = document.documentElement.clientWidth;
        var nowPX = clientWidth / 320 * 100;
        document.documentElement.style.fontSize = nowPX + 'px';
    }
    setRem();
    // window.addEventListener(supportsOrientationChange, function () {
    //     clearTimeout(timeoutId);
    //     timeoutId = setTimeout(function () {
    //         setRem();
    //     }, 300);
    // }, false);
    window.onresize=setRem;
    // var input=document.getElementsByClassName('search')[0];
    // input.onfocus=function(){
    //     input.setAttribute('value','');
        
    // } 
    // input.onblur=function(){
    //     input.setAttribute('value','输入小区开始找房');
        
    // }
})();
