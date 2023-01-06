<script>
    
    /**
     * @type {{ bongoGif: any; weather: any; server: any;}}
     */
     export let data;
    import BongoGif from "./BongoGif.svelte";
    import Bookmark1 from "./Bookmark1.svelte";
    import Bookmark2 from "./Bookmark2.svelte";
    import Date from "./Date.svelte";
    import Weather from "./Weather.svelte";
    import Search from "./Search.svelte";
</script>

<svelte:head>
    <title>StartPage</title>
</svelte:head>

<div class="center">
    <div class="parent">
        <div class="bongoGif">
            <BongoGif bongoGif={data.bongoGif}/>
        </div>
        <div class="bookmark1">
            <Bookmark1 />
        </div>
        <div class="bookmark2">
            <Bookmark2 />
        </div>
        <div class="widget1">
            <Date />
        </div>
        <div class="widget2">
            <Weather weather={data.weather}/>
        </div>
    </div>
    <div class="search">
        <Search serverAddress = {data.server}/>
    </div>
</div>


<style>
    .center {
        display: flex;
        justify-content: center;
        flex-flow: column wrap;
        align-items: center;
        min-height: 100%;
        border: 0px solid green;
    }

    .parent {
        display: grid;
        /* removing grid here makes this basically mobile responsive lol */
        grid-template-columns: repeat(4, 209px);
        grid-template-rows: repeat(2, 177px);
        grid-column-gap: 50px;
        grid-row-gap: 50px;
        
    }

    .parent div {
        transition: background-color 0.3s;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.6rem;
        border-bottom: 2px solid rgba(10, 10, 10, 0.3);
        font-size: 1.2em;
        padding: 20px;
    }

    .parent > div {
        background-color: rgb(255, 255, 255);
        box-shadow: rgb(67, 67, 80) 0px 50px 100px -20px,
            rgba(194, 194, 194, 0.3) 0px 30px 60px -30px;
    }
    .bongoGif{
        grid-area: 2 / 1 / 2 / 1;
    }
    .bookmark1 {
        grid-area: 1 / 2 / 3 / 2;
    }
    .bookmark2 {
        grid-area: 1 / 3 / 3 / 3;
    }
    .widget1 {
        grid-area: 1 / 4 / 2 / 4;
    }
    .widget2 {
        grid-area: 2 / 4 / 3 / 4;
    }
    
    .search{
        padding-top: 30px;
    }
</style>

