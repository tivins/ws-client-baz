import {JsCommon} from "./modules/js-common";

document.body.append(JsCommon.createElement('p',{innerText: "Hello"}));
// import {UITest} from "./modules/ui-test";
//
//
// const mainInterval = setInterval(() => {
// }, 1000);
//
// window.addEventListener('beforeunload', e => e.preventDefault());
// window.addEventListener('DOMContentLoaded', e => UITest.init());
// document.addEventListener('visibilitychange', (e) => visibilityChanged(e));