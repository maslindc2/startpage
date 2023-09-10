<script>
    export let data;
    import BongoGif from "./BongoGif.svelte";
    import Bookmark1 from "./Bookmark1.svelte";
    import Bookmark2 from "./Bookmark2.svelte";
    import Date from "./Date.svelte";
    import Weather from "./Weather.svelte";
    import Search from "./Search.svelte";
    import WindAndAir from "./WindAndAir.svelte";
</script>

<svelte:head>
    <title>StartPage</title>
</svelte:head>

<div class="center">
    <div class="parent">
        <div class="date">
            <Date />
        </div>
        <div class="bongoGif">
            <BongoGif bongoGif={data.bongoGif}/>
        </div>
        <div class="bookmark1">
            <Bookmark1 bookmarks={data.bookmarkGroup1}/>
        </div>
        <div class="bookmark2">
            <Bookmark2 bookmarks={data.bookmarkGroup2}/>
        </div>
        <div class="weather">
            <Weather weather={data.weather}/>
        </div>
        <div class="windAndAir">
            <WindAndAir weather={data.weather}/>
        </div>
        
    </div>
    <div class="search">
        <Search searchProviders = {data.searchProviders}/>
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
        background-color: #242424;
        box-shadow: rgb(67, 67, 80) 0px 50px 100px -20px,
            rgba(194, 194, 194, 0.3) 0px 30px 60px -30px;
    }
    .bongoGif{
        grid-area: 2 / 1 / 2 / 1;
    }
    .date {
        grid-area: 1 / 1 / 2 / 2;
    }
    .bookmark1 {
        grid-area: 1 / 2 / 3 / 3;
    }
    .bookmark2 {
        grid-area: 1 / 3 / 3 / 4;
    }
    .weather {
        grid-area: 1 / 4 / 2 / 5;
    }
    .windAndAir{
        grid-area: 2 / 4 / 2 / 5;
    }
    .search{
        padding-top: 30px;
    }
</style>

