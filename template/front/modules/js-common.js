export class JsCommon {

    static toggleVisibility(node) {
        node.classList.toggle('hidden');
    }

    static nodeRemove(node) {
        if (!node || !node.parentNode) return;
        node.parentNode.removeChild(node);
    }

    static toggleFullscreen() {
        if (document.fullscreenElement) {
            document.exitFullscreen().then(r => console.debug(r));
        } else {
            document.documentElement.requestFullscreen().then(r => console.debug(r));
        }
    }

    /**
     * Example
     *
     * ```js
     * createElement('p', { innerHTML: `hello <b>world</b>` });
     * createElement('div', {
     *      id: 'nnn',
     *      className: 'test',
     *      innerText: 'test',
     *   },{
     *      style: 'text-align:center',
     *      //...
     * });
     * ```
     *
     * @param tagName div, p, a, ...
     * @param props properties to apply to Element object
     * @param attrs attributes to apply to Element node
     * @returns {*} The new element
     */
    static createElement(tagName, props, attrs) {
        const obj = Object.assign(document.createElement(tagName), props);
        for (const z in attrs) obj.setAttribute(z, attrs[z]);
        return obj;
    }

    static scrollDown(element) {
        element.scroll({
            top: element.scrollHeight,
            behavior: 'smooth'
        });
    }
}