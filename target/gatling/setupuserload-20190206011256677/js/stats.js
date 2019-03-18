var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "24",
        "ok": "24",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "231",
        "ok": "231",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2063",
        "ok": "2063",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "760",
        "ok": "760",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "537",
        "ok": "537",
        "ko": "-"
    },
    "percentiles1": {
        "total": "618",
        "ok": "618",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1244",
        "ok": "1244",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1434",
        "ok": "1434",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1918",
        "ok": "1918",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 12,
        "percentage": 50
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 5,
        "percentage": 21
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 7,
        "percentage": 29
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.462",
        "ok": "0.462",
        "ko": "-"
    }
},
contents: {
"req_homepage-339f7": {
        type: "REQUEST",
        name: "Homepage",
path: "Homepage",
pathFormatted: "req_homepage-339f7",
stats: {
    "name": "Homepage",
    "numberOfRequests": {
        "total": "12",
        "ok": "12",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "880",
        "ok": "880",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2063",
        "ok": "2063",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1249",
        "ok": "1249",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "311",
        "ok": "311",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1247",
        "ok": "1247",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1423",
        "ok": "1423",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1717",
        "ok": "1717",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1994",
        "ok": "1994",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 5,
        "percentage": 42
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 7,
        "percentage": 58
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.231",
        "ok": "0.231",
        "ko": "-"
    }
}
    },"req_searchflight-f5673": {
        type: "REQUEST",
        name: "SearchFlight",
path: "SearchFlight",
pathFormatted: "req_searchflight-f5673",
stats: {
    "name": "SearchFlight",
    "numberOfRequests": {
        "total": "12",
        "ok": "12",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "231",
        "ok": "231",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "356",
        "ok": "356",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "270",
        "ok": "270",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "36",
        "ok": "36",
        "ko": "-"
    },
    "percentiles1": {
        "total": "262",
        "ok": "262",
        "ko": "-"
    },
    "percentiles2": {
        "total": "283",
        "ok": "283",
        "ko": "-"
    },
    "percentiles3": {
        "total": "329",
        "ok": "329",
        "ko": "-"
    },
    "percentiles4": {
        "total": "351",
        "ok": "351",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 12,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.231",
        "ok": "0.231",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
