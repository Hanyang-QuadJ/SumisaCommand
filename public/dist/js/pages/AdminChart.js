$(function () {

    'use strict';
    // Get context with jQuery - using jQuery's .get() method.
    var AdminCanvas = $("#Admin").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var Admin = new Chart(AdminCanvas);

    var AdminData = {
        labels: ["1월", "2월", "3월", "4월", "5월", "6월", "7월"],
        datasets: [
            {
                label: "등록수",
                fillColor: "#ef776c",
                strokeColor: "rgb(210, 214, 222)",
                pointColor: "#ef776c",
                pointStrokeColor: "#ef776c",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgb(220,220,220)",
                data: [275, 359, 280, 481, 256, 355, 270]
            },
            {
                label: "퇴원수",
                fillColor: "#00aead",
                strokeColor: "#00aead",
                pointColor: "#00aead",
                pointStrokeColor: "rgba(60,141,188,1)",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(60,141,188,1)",
                data: [128, 248, 340, 219, 486, 327, 290]
            }
        ]

    };

    var AdminOptions = {
        //Boolean - If we should show the scale at all
        showScale: true,
        //Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines: false,
        //String - Colour of the grid lines
        scaleGridLineColor: "rgba(0,0,0,.05)",
        //Number - Width of the grid lines
        scaleGridLineWidth: 1,
        //Boolean - Whether to show horizontal lines (except X axis)
        scaleShowHorizontalLines: true,
        //Boolean - Whether to show vertical lines (except Y axis)
        scaleShowVerticalLines: true,
        //Boolean - Whether the line is curved between points
        bezierCurve: true,
        //Number - Tension of the bezier curve between points
        bezierCurveTension: 0.3,
        //Boolean - Whether to show a dot for each point
        pointDot: false,
        //Number - Radius of each point dot in pixels
        pointDotRadius: 4,
        //Number - Pixel width of point dot stroke
        pointDotStrokeWidth: 1,
        //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
        pointHitDetectionRadius: 20,
        //Boolean - Whether to show a stroke for datasets
        datasetStroke: true,
        //Number - Pixel width of dataset stroke
        datasetStrokeWidth: 2,
        //Boolean - Whether to fill the dataset with a color
        datasetFill: true,
        //String - A legend template
        legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%=datasets[i].label%></li><%}%></ul>",
        //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
        maintainAspectRatio: true,
        //Boolean - whether to make the chart responsive to window resizing
        responsive: true
    };

    //Create the line chart
    Admin.Line(AdminData, AdminOptions);
});





//-----------------
//- END PIE CHART -
//-----------------
/**
 * Created by pleiades on 2017. 1. 21..
 */
