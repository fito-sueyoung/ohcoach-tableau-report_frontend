// Initialize the viz variable
var viz;

// window.onresize = function() {
//     fitVizToWindow();
// };

function initViz(){
    let vizDiv = document.getElementById('tableau_content');
    let vizURL = 'https://public.tableau.com/views/121_WeeklyPlayerReport/RecentMatches?:language=en&:display_count=y&publish=yes&:origin=viz_share_link';
    let options = {
        width: "1350px",
        height:  "1908px",
        // width: window.innerWidth + "px",
        // height:  (window.innerWidth * aspectRatio) + "px",
        hideTabs: true,
        hideToolbar: true
    };
    viz = new tableau.Viz(vizDiv, vizURL, options);
}

function resizeViz(width, height) {
    // viz.setFrameSize(parseInt(width, 10), parseInt(height, 10));

    let sheet = viz.getWorkbook().getActiveSheet();

    sheet.changeSizeAsync(
        {"behavior": "EXACTLY", "maxSize": { "height": height, "width": width }})
        .then(viz.setFrameSize(parseInt(width, 10), parseInt(height, 10)));
}

function fitVizToWindow(){
    resizeViz(window.innerWidth, Math.max(900, window.innerWidth * aspectRatio));
    // resizeViz(Math.max(900, window.innerWidth), Math.max(900, window.innerWidth * aspectRatio));
}

// Switch the viz to the sheet specified
function switchView(sheetName) {
    let workbook = viz.getWorkbook();
    workbook.activateSheetAsync(sheetName);
}

// Filter the specified dimension to the specified value(s)
function show(filterName, values) {
    let sheet = viz.getWorkbook().getActiveSheet();
    sheet.applyFilterAsync(filterName, values, tableau.FilterUpdateType.REPLACE);
}

// Select the marks that have the specified value(s) for the specified dimension
function selectMarks(filterName, values) {
    let sheet = viz.getWorkbook().getActiveSheet();
    sheet.selectMarksAsync(filterName, values, tableau.FilterUpdateType.REPLACE);
}
