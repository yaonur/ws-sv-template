mod utils;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, greet!");
}
#[wasm_bindgen]
pub fn sum(a: i32, b: i32) -> i32 {
    a + b
}
