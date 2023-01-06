<script>
    let query = "", provider = "Search", url ="";
    /**
     * @param {{code: string;}} event
     * @type {any}
     */
     export let serverAddress;
    
    /**
     * @param {{ code: string; }} event
     */
    function handleKeyDown(event){
        if(event.code == "Enter"){
            if(query.startsWith("!") && (query.length == 2 || query.length == 3)){
                const requestProvider = async() =>{
                    let res = await fetch(`${serverAddress}/requestProvider`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({'providerCommand': query}),
                    })
                    .then(response => response.json())
                    .then(json => {
                        provider = json.Name;
                        url = json.URL;
                    });
                }
                requestProvider();
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