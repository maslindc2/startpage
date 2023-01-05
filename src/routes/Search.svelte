<script>
    let query = "", provider = "Search";

    /**
     * @param {{ code: string; }} event
     */
    function handleKeyDown(event){
        if(event.code == "Enter"){
            if(query == "!wk"){
                provider = "Wikipedia";
                query = "";
            }
            if(query == "!g"){
                provider = "Search";
                query = "";
            }
            if(query == "!am"){
                provider = "Amazon";
                query = "";
            }
            if(query == "!r"){
                provider = "Reddit";
                query = "";
            }
            if(query == "!yt"){
                provider = "YouTube";
                query = "";
            }
            if(query !== ""){
                switch (provider) {
                    case "Wikipedia":
                        window.location.href = "https://en.wikipedia.org/wiki/" + query;
                        break;
                    case "Amazon":
                        window.location.href = "https://www.amazon.com/s?k=" + query;
                        break;
                    case "Reddit":
                        window.location.href = "https://www.reddit.com/search/?q=" + query;
                        break;
                    case "YouTube":
                        window.location.href = "https://www.youtube.com/results?search_query=" + query;
                        break;
                    default:
                        window.location.href = "https://www.google.com/search?q=" + query;
                        break;
                }
            }
        }
    }
</script>

<svelte:window on:keydown={handleKeyDown}/>
<div class="searchBox">
    <input bind:value={query} type="text" placeholder={provider} name="" id= "">
</div>
<style>
    input{
        font-size: 38px;
        font-family: Inter, Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-weight: 400;
        text-align: center;
        background: none;
        width: auto;
        outline: 0;
        color: rgba(255, 255, 255, 0.863);
        border: 0px;
    }
    input::placeholder {
        font-family: Inter, Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-weight: 400;
        text-align: center;
        background: none;
        color: rgba(255, 255, 255, 0.541);
    }
</style>