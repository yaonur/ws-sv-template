let wasm;
export function __wbg_set_wasm(val) {
    wasm = val;
}

/**
* @param {number} a
* @param {number} b
* @returns {number}
*/
export function sum(a, b) {
    const ret = wasm.sum(a, b);
    return ret;
}

