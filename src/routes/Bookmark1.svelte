<script>
    /**
     * @type {any}
     */
     export let bookmarks;
</script>
<div class="linkParent">
    {#each bookmarks as {Icon, URL}, i}
        <div>
            <a class="link" href={URL}>
                <img src={Icon} alt="" width="48px" height="48px">
            </a>
        </div>
    {/each}
</div>

<style>
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        align-items: center;
        border-radius: 0.6rem;
        font-size: 1.2em;
        padding: 20px;
        background-color: rgba(10, 10, 10, 0.05);
        border-bottom: 2px solid rgba(10, 10, 10, 0.3);
    }
    .linkParent {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
        grid-column-gap: 12px;
        grid-row-gap: 12px;
        width: 100%;
        align-items: unset;
        padding: 0;
        background-color: unset;
        border-bottom: none;
        border-radius: 0;
    }
    .parent .linkParent div {
        padding: 0;
    }
    .link {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        height: 70px;
        
    }    
</style>
