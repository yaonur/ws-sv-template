<script lang="ts">
    import {sum,process_video_data} from '$lib/pkg/greet'
    import {FFmpeg} from '@ffmpeg/ffmpeg'
	import { onMount } from 'svelte';
    // import {fetchFile,toBlobURL} from '@ffmpeg/util'
    let data = "hello world" 
    // let processed_data = process_video_data(new TextEncoder().encode(data))
    try {

        let processed_data = process_video_data(11)
    } catch(e){
        console.log(e)
    }

    let file: Blob;
    let videoUrl = "";
    async function handleDrop(event) {
        event.preventDefault();
        file = [...event.dataTransfer.files][0];
        console.log(file)
        const ffmpeg = new FFmpeg()
        await ffmpeg.load()
        console.log("will process data")
        const data =await ffmpeg.readFile(file)
        console.log("processed data")
        console.log(data)

        // processFiles();
    }

    function processFiles() {
            let reader = new FileReader();
            let file_uint= new Uint8Array()
            reader.onload = function(event) {
                file_uint = new Uint8Array(event.target.result)
                console.log(process_video_data(file_uint))
                videoUrl = URL.createObjectURL(new Blob([file_uint]));
            };
            reader.readAsArrayBuffer(file);
    }

    function handleDragOver(event) {
        event.preventDefault();
    }
    
</script>
<p>{sum(1,3)}</p>

<div 
    on:drop={handleDrop} 
    on:dragover={handleDragOver} 
    style="border: 1px solid black; height: 200px; width: 200px;">
    Drop files here
</div>

{#if videoUrl}
    <video controls src={videoUrl}>
        <track kind="captions" />
    </video>
{/if}