$.ajax({
    url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson",
    success: function (data) {
        console.log(data);
    }
});


