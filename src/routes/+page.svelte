<script>
    export let data;
    import Bookmark1 from "./Bookmark1.svelte";
    import Bookmark2 from "./Bookmark2.svelte";
    import Bookmark3 from "./Bookmark3.svelte";
    import Date from "./Date.svelte";
</script>

<svelte:head>
    <title>StartPage</title>
</svelte:head>

<div class="center">
    <div class="parent">
        <div class="div1">
            <Bookmark1 />
        </div>
        <div class="div2">
            <Bookmark2 />           
        </div>
        <div class="div3">
            <Bookmark3 />
        </div>
        <div class="div4">
            <Date />
        </div>
        <div class="div5">
            <Date />
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
        grid-template-columns: repeat(4, 300px);
        grid-template-rows: repeat(2, 200px);
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
        background-color: grey;
        box-shadow: rgb(67, 67, 80) 0px 50px 100px -20px,
            rgba(194, 194, 194, 0.3) 0px 30px 60px -30px;
    }
    
    .div1 {
        grid-area: 1 / 1 / 3 / 1;
    }
    .div2 {
        grid-area: 1 / 2 / 3 / 2;
    }
    .div3 {
        grid-area: 1 / 3 / 3 / 3;
    }
    
    .div4 {
        grid-area: 1 / 4 / 2 / 4;
    }
    .div5 {
        grid-area: 2 / 4 / 3 / 4;
    }
    
</style>

