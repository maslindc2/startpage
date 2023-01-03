<div class="linkParent">
    <div class="link1">
        <a class="link" href="https://www.gmail.com/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="" width="48px" height="48px">
        </a>
    </div>
    <div class="link2">
        <a class="link" href="https://outlook.office.com/mail/inbox">
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg" alt="" width="48px" height="48px">
        </a>
    </div>
    <div class="link3">
        <a class="link" href="https://globe.adsbexchange.com/">
            <img src="https://www.adsbexchange.com/wp-content/uploads/cropped-Stealth-48px.png" alt="" width="48px" height="48px">
        </a>
    </div>
    <div class="link4">
        <a class="link" href="https://reddit.com">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/07/Reddit_icon.svg" alt="" width="48px" height="48px">
        </a>
    </div>
    <div class="link5">
        <a class="link" href="https://netflix.com">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2015_N_logo.svg" alt="" width="48px" height="48px">
        </a>
    </div>
    <div class="link6">
        <a class="link" href="https://twitch.tv/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Twitch_Glitch_Logo_Purple.svg" alt="" width="48px" height="48px">
        </a>
    </div>
    <div class="link7">
        <a class="link" href="https://9anime.to/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/75/Cib-crunchyroll_%28CoreUI_Icons_v1.0.0%29_orange.svg" alt="" width="48px" height="48px">   
        </a>
    </div>
    <div class="link8">
        <a class="link" href="https://www.youtube.com/feed/subscriptions">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" alt="" width="69px" height="49px">
        </a>
    </div>
    
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

    .link1 {
        grid-area: 1 / 1 / 2 / 2;
        background-color: white;
        
    }
    .link2 {
        grid-area: 1 / 2 / 2 / 3;
        background-color: #21262d;
    }
    .link3 {
        grid-area: 2 / 2 / 3 / 3;
        background-color: white;
    }
    .link4 {
        grid-area: 2 / 1 / 3 / 2;
        background-color: #323437;
    }
    .link5{
        background-color: white;
    }
    .link6{
        background-color: #323437;

    }
    .link7{
        background-color: #323437;

    }
    .link8{
        background-color: white;
    }
</style>
