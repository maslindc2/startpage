import { API_KEY, ZIP_CODE, BONGO_SERVE, PROJECT_ID, DATA_SET } from "$env/static/private";
import {createClient} from "@sanity/client"

const client = createClient({
    projectId: "hprter7b",
    dataset: "testing",
    apiVersion: "2023-09-09",
    useCdn: true
});

export async function load(){
    /**
     * @param {string} assetRef
     */
    function imageRefToSanityCompatibleURL(assetRef) {
        if(typeof assetRef !== 'string'){
            throw new Error('Invalid asset reference');
        }
        
        // Base url for the accessing images from Sanity
        const BASE_URL = `https://cdn.sanity.io/images/${PROJECT_ID}/${DATA_SET}/`

        /*  Sanity outputs images as a reference from a JS array, we need to turn that into a url for our image tag to read
            Example output from Sanity: image-9413d81fab714099f7978ed8cabcba9d3b5d6308-288x288-webp
            We will use regex here to remove the leading part of the reference ("image-")
        */
           var removeImageLead = assetRef.replace(/^image-/,'');

           // Use regex again to extract the file extension if it matches any of the accepted extensions
           var regex = /-(gif|jpeg|jpg|png|webp)$/;
           var match = removeImageLead.match(regex)
           var fileExtension = match ? match[1] : '';
           
           // Extract just the sanity file name
           var fileNameFromDB = removeImageLead.replace(regex, '');
           
           // Use the file name we extracted and the file extension we extracted to build out the url we will use to fetch the gif
           const fileURL = fileNameFromDB+"."+fileExtension
           return BASE_URL + fileURL
    }


    const fetchBongo = async () =>{
        // Fetches gifs from Sanity CMS
        const gifsData = await client.fetch(`*[_type == "gifs"]`);
        
        // Get the length of the response array
        var numberOfGifs = gifsData.length
        // Randomly pick an index, this is used for displaying a random gif from the response array
        const randomGifIndex = Math.floor(Math.random() * numberOfGifs);
        // Next get the reference tag for the randomly chosen gif
        const randomGifAssetRef = gifsData[randomGifIndex].gif.asset._ref;

        return imageRefToSanityCompatibleURL(randomGifAssetRef);
    }
    const fetchWeather = async () =>{
        const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}=${ZIP_CODE}&aqi=no`);
        const data = await res.json();
        return data;
    }
    const fetchBookmarkGroup1 = async() =>{
        try {
            // Fetch the bookmark1 dataset from Sanity
            const res = await client.fetch(`*[_type == "bookmark1"]`)
            // Build a bookmarkGroup array using the response from Sanity
            const bookmarkGroup = res.map((/** @type {{ icon: { asset: { _ref: string; }; }; url: string; }} */ bookmark) => {
                // Store the icon reference for the current bookmark
                const iconRef = bookmark.icon.asset._ref;
                // Send the icon reference to our reference to url function and store the returned url to our icon
                const iconUrl = imageRefToSanityCompatibleURL(iconRef);
                // add the iconUrl and the bookmark url to the array
                return {
                    Icon: iconUrl,
                    URL: bookmark.url,
                }; 
            })
            // return the bookmarkGroup array
            return bookmarkGroup
        } catch(error){
            console.error("Error fetching data for group 1 from Sanity:", error);
            return [];
        }
    }
    
    const fetchBookmarkGroup2 = async() =>{
        try {
            // Fetch the bookmark1 dataset from Sanity
            const res = await client.fetch(`*[_type == "bookmark2"]`)
            // Build a bookmarkGroup array using the response from Sanity
            const bookmarkGroup = res.map((/** @type {{ icon: { asset: { _ref: string; }; }; url: string; }} */ bookmark) => {
                // Store the icon reference for the current bookmark
                const iconRef = bookmark.icon.asset._ref;
                // Send the icon reference to our reference to url function and store the returned url to our icon
                const iconUrl = imageRefToSanityCompatibleURL(iconRef);
                // add the iconUrl and the bookmark url to the array
                return {
                    Icon: iconUrl,
                    URL: bookmark.url,
                }; 
            })
            // return the bookmarkGroup array
            return bookmarkGroup
        } catch(error){
            console.error("Error fetching bookmark data for group 2 from Sanity:", error);
            return [];
        }
    }
    const fetchSearchProviders = async() =>{
        try {
            // Fetch the bookmark1 dataset from Sanity
            const res = await client.fetch(`*[_type == "searchProviders"]`)
            // Build a bookmarkGroup array using the response from Sanity
            const searchProviders = res.map((/** @type {{ access: string; provider: string; url: string; }} */ searchProvider) => {
                // add the iconUrl and the bookmark url to the array
                return {
                    "Access": searchProvider.access,
                    "Provider": searchProvider.provider,
                    "URL": searchProvider.url
                }; 
            })
            // return the bookmarkGroup array
            
            return searchProviders
        } catch(error){
            console.error("Error fetching search providers from Sanity:", error);
            return [];
        }
    }

    return {
        bongoGif: fetchBongo(),
        weather: fetchWeather(),
        bookmarkGroup1: fetchBookmarkGroup1(),
        bookmarkGroup2: fetchBookmarkGroup2(),
        searchProviders: fetchSearchProviders()
    }
};