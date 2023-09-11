import { API_KEY, ZIP_CODE, PURPLE_AIR, SENSOR, PROJECT_ID, DATA_SET } from "$env/static/private";
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

    
    const fetchBackground = async() =>{
        const res = await client.fetch(`*[_type == "background"]`)
        return imageRefToSanityCompatibleURL(res[0].background.asset._ref)
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

    const fetchWeather = async () =>{
        const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}=${ZIP_CODE}&aqi=no`);
        const data = await res.json();
        return data;
    }


    const AQI_RANGES = [
        { range: [0, 50], label: "Good" },
        { range: [51, 100], label: "Moderate" },
        { range: [101, 150], label: "Unhealthy for Sensitive Groups" },
        { range: [151, 200], label: "Unhealthy" },
        { range: [201, 300], label: "Very Unhealthy" },
        { range: [301, 600], label: "Hazardous" },
    ];

    const fetchAirQuality = async () => {
        try {
          const sensorURL = `https://api.purpleair.com/v1/sensors/${SENSOR}?fields=pm2.5`;
          const response = await fetch(sensorURL, {
            headers: {
              'X-API-KEY': PURPLE_AIR,
            },
          });
      
          if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.status}`);
          }
      
          const data = await response.json();
          const pm25 = data.sensor["pm2.5"];
          const aqi = calculateAQI(pm25);
          // @ts-ignore
          const aqiLabel = interpretAQI(aqi);
          return aqiLabel;
        } catch (error) {
          console.error("Error fetching air quality:", error);
        }
    };

    /**
     * @param {number} pm25
     */
    function calculateAQI(pm25) {
        // Define the AQI breakpoints for PM2.5
        const breakpoints = [
          { bpLow: 0.0, bpHigh: 12.0, iLow: 0, iHigh: 50 },
          { bpLow: 12.1, bpHigh: 35.4, iLow: 51, iHigh: 100 },
          { bpLow: 35.5, bpHigh: 55.4, iLow: 101, iHigh: 150 },
          { bpLow: 55.5, bpHigh: 150.4, iLow: 151, iHigh: 200 },
          { bpLow: 150.5, bpHigh: 250.4, iLow: 201, iHigh: 300 },
          { bpLow: 250.5, bpHigh: 350.4, iLow: 301, iHigh: 400 },
          { bpLow: 350.5, bpHigh: 500.4, iLow: 401, iHigh: 500 },
        ];
      
        // Find the appropriate range of breakpoints
        const breakpoint = breakpoints.find((range) => pm25 >= range.bpLow && pm25 <= range.bpHigh);
      
        if (!breakpoint) {
          return "AQI data not available for this PM2.5 concentration";
        }
      
        // Calculate AQI based on the selected range
        const aqi = ((breakpoint.iHigh - breakpoint.iLow) / (breakpoint.bpHigh - breakpoint.bpLow)) * (pm25 - breakpoint.bpLow) + breakpoint.iLow;
      
        return Math.round(aqi);
      }

    /**
     * @param {number} aqi
     */
    function interpretAQI(aqi) {
        for (const range of AQI_RANGES) {
            if (aqi >= range.range[0] && aqi <= range.range[1]) {
                return range.label;
            }
        }
        return "Error calculating AQI";
    }

    return {
        bongoGif: fetchBongo(),
        weather: fetchWeather(),
        airQuality: fetchAirQuality(),
        bookmarkGroup1: fetchBookmarkGroup1(),
        bookmarkGroup2: fetchBookmarkGroup2(),
        searchProviders: fetchSearchProviders(),
        background: fetchBackground()
    }
};


