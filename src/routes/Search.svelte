<script>
    let query = "", provider = "Search", url = "https://www.google.com/search?q=";
    
    
    // @ts-ignore
    export let searchProviders;
    /**
     * @param {{ code: string; }} event
     */
    function handleKeyDown(event){
        if(event.code == "Enter"){
            if(query.startsWith("!") && (query.length == 2 || query.length == 3)){
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
        color: rgb(44 44 44 / 84%);
        border: 0px;
    }
    input::placeholder {
        font-family: Inter, Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-weight: 400;
        text-align: center;
        background: none;
        color: rgba(54, 54, 54, 0.678);
    }
</style>