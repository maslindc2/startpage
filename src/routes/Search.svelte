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
    <span class="underline"></span>
</div>
<style>
    input{
        font-size: 38px;
        font-family: Inter, Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-weight: 400;
        text-align: center;
        background: none;
        width: 100%;
        outline: 0;
        color: rgb(7, 7, 7);
        border: 0px;
        text-shadow: 0px 5px 10px rgba(0,0,0,0.125);
    }
    
    input::placeholder {
        font-family: Inter, Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-weight: 400;
        text-align: center;
        background: none;
        color: rgba(255, 255, 255, 0.541);
    }
    input::-webkit-input-placeholder{
        color:#AAA;
    }
    input::focus::-webkit-input-placeholder{
        color: dodgerblue;
    }
    .input:focus+.underline {
        transform: scale(1);
    }
    .underline {
        background-color: dodgerblue;
        display: inline-block;
        height: 2px;
        left: 50px;
        margin-top: -4px;
        position: absolute;
        top: 185px;
        -webkit-transform: scale(0, 1);
        transform: scale(0, 1);
        -webkit-transition: all 0.5s linear;
        transition: all 0.5s linear;
        width: 202px;
    }
</style>