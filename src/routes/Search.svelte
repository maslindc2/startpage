<script>
    import BongoGif from "./BongoGif.svelte";


    let query = "", provider = "Search", url = "https://www.google.com/search?q=";
     
    /**
     * @type {{ [x: string]: { URL: string; Name: string;}; }}
     */
     export let searchProviders;
    /**
     * @param {{ code: string; }} event
     */
    function handleKeyDown(event){
        if(event.code == "Enter"){
            if(query === '!help' || query === '!h'){
                var availableCMDs = [];
                for(const key in searchProviders){
                        availableCMDs.push(`${" " + key} : ${searchProviders[key].Name}`);
                }
                alert(" Below are the available commands for the search function \n" + availableCMDs);
                query = "";
            }else if(query.startsWith("!") && (query.length == 2 || query.length == 3)){
                provider = searchProviders[query].Name;
                url = searchProviders[query].URL;
                query = "";
            }else if(query !== ""){
                window.location.href = url + query;
            }
        }
    }
</script>

<svelte:window on:keydown={handleKeyDown}/>
<div class="searchBox">
    <input bind:value={query} type="text" placeholder={provider} autofocus>
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
        color: rgba(255, 255, 255, 0.84);
        border: 0px;
    }
    input::placeholder {
        font-family: Inter, Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-weight: 400;
        text-align: center;
        background: none;
        color: rgb(44, 44, 44, 0.84);
    }
</style>