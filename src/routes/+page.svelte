<script>
    /**
     * @type {{ weather: any; }}
     */
     export let data;
    import Bookmark1 from "./Bookmark1.svelte";
    import Bookmark2 from "./Bookmark2.svelte";
    import Date from "./Date.svelte";
    import Weather from "./Weather.svelte"
</script>

<svelte:head>
    <title>StartPage</title>
</svelte:head>

<div class="center">
    <div class="parent">
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
</div>

<style>
    .center {
        display: flex;
        justify-content: center;
        flex-flow: column wrap;
        align-items: center;
        min-height: calc(100% - 50px);
        border: 0px solid green;
    }

    .parent {
        display: grid;
        /* removing grid here makes this basically mobile responsive lol */
        grid-template-columns: repeat(3, 209px);
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
    
    .bookmark1 {
        grid-area: 1 / 1 / 3 / 1;
    }
    .bookmark2 {
        grid-area: 1 / 2 / 3 / 2;
    }
    .widget1 {
        grid-area: 1 / 3 / 2 / 4;
    }
    .widget2 {
        grid-area: 2 / 3 / 3 / 4;
    }
    
</style>

