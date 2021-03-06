
/*HTMLSelectElement.remove polyfill by chenzhenxi on github: https://github.com/chenzhenxi/element-remove*/
(function (arr) {
    arr.forEach(function (item) {
        if (item.hasOwnProperty('remove')) {
            return;
        }
        Object.defineProperty(item, 'remove', {
            configurable: true,
            enumerable: true,
            writable: true,
            value: function remove() {
                this.parentNode && this.parentNode.removeChild(this);
            }
        });
    });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype].filter(Boolean));

/*Array.findIndex polyfill*/
if (!Array.prototype.findIndex) {
    Object.defineProperty(Array.prototype, 'findIndex', {
        value: function (callBack, thisArg) {
            // Steps 1-2.
            if (this == null) {
                throw new TypeError('this is null or not defined');
            }
            if (thisArg) {
                throw new TypeError("Ada's janky polyfill doesn't support thisArg");
            }
            var O = Object(this);
            for (var i = 0; i < O.length; i++) {
                if (callBack(O[i], i, O)) {
                    return i;
                }
            }
            return -1;
        }
    });
}

/*Array.fill polyfill*/
if (!Array.prototype.fill) {
    Object.defineProperty(Array.prototype, 'fill', {
        value: function (value) {

            // Steps 1-2.
            if (this == null) {
                throw new TypeError('this is null or not defined');
            }

            var O = Object(this);

            // Steps 3-5.
            var len = O.length >>> 0;

            // Steps 6-7.
            var start = arguments[1];
            var relativeStart = start >> 0;

            // Step 8.
            var k = relativeStart < 0 ?
                Math.max(len + relativeStart, 0) :
                Math.min(relativeStart, len);

            // Steps 9-10.
            var end = arguments[2];
            var relativeEnd = end === undefined ?
                len : end >> 0;

            // Step 11.
            var finalValue = relativeEnd < 0 ?
                Math.max(len + relativeEnd, 0) :
                Math.min(relativeEnd, len);

            // Step 12.
            while (k < finalValue) {
                O[k] = value;
                k++;
            }

            // Step 13.
            return O;
        }
    });
}
