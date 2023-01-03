<script>
    const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    let day = new Date();

    const nth = function (/** @type {number} */ d) {
        const dString = String(d);
        const last = +dString.slice(-2);
        if (last > 3 && last < 21) return "th";
        switch (last % 10) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    };
</script>
<div class="date">
    <p>It's</p>
    <p>{weekday[day.getDay()]}</p>
    <p>{month[day.getMonth()]} {day.getDate()}{nth(day.getDate())}</p>
</div>

<style>
    .date{
        text-align: center;
    }
    .date p:nth-child(1) {
        color: rgba(0, 0, 0, 0.5);
        font-weight: 400;
    }
    .date p:nth-child(2) {
        color: rgba(0, 0, 0, 0.75);
        font-weight: 400;
    }
    .date p:nth-child(3) {
        color: rgba(0, 0, 0, 1);
        font-weight: 600;
    }
</style>