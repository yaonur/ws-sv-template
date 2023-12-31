mod utils;

use wasm_bindgen::prelude::*;


#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}

#[wasm_bindgen]
pub fn sum(a: i32, b: i32) -> i32 {
    a + b
}

#[wasm_bindgen]
pub fn process_video_data(video_data: &[u8]) -> Vec<u8> {
    // Perform some operations on the video data...
    // This is just a placeholder that returns the original data.
    video_data.to_vec()
}