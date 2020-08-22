export let maincolor = "#F13F18";
export let gray_1 = " #f7f8fa";
export let gray_2 = " #f2f3f5";
export let gray_3 = " #ebedf0";
export let gray_4 = " #dcdee0";
export let gray_5 = " #c8c9cc";
export let gray_6 = " #969799";
export let gray_7 = " #646566";
export let gray_8 = " #323233";

export function getObjectURL(file) {
    var url = null;
    // 下面函数执行的效果是一样的，只是需要针对不同的浏览器执行不同的 js 函数而已
    if (window.createObjectURL != undefined) { // basic
        url = window.createObjectURL(file);
    } else if (window.URL != undefined) { // mozilla(firefox)
        url = window.URL.createObjectURL(file);
    } else if (window.webkitURL != undefined) { // webkit or chrome
        url = window.webkitURL.createObjectURL(file);
    }
    return url;
}