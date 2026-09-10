var bigd_site = "https://bigd.big.ac.cn/";

$(document).ready(function () {
    prependHeaderSection();
    //  appendFooterSection();
    appendSearchSection();

    $('li.bigd-dropdown').hover(function () {
        $(this).find('.bigd-dropdown-menu').first().stop(true, true).delay(50).fadeIn();
    }, function () {
        $(this).find('.bigd-dropdown-menu').first().stop(true, true).delay(50).fadeOut();
    });

    $('.bigd-collapsed').click(function () {
        $('#bigd-coll').toggle();
        var display = $('#bigd-coll').css("display");
        if (display == 'block') {
            $('.bigd-navbar').css("height", "200px");
        } else {
            $('.bigd-navbar').css("height", "30px");
        }

    });
});

function prependHeaderSection() {
    $('head').append("<link rel='stylesheet' type='text/css' href='" + bigd_site + "static/css/page.min.css'>");
    var header = "<header>" +
        "<div class='bigd-container'>" +
        "<nav class='bigd-navbar-default bigd-navbar'>" +
        "<div class='bigd-navbar-header'>" +
        "<button type='button' class='bigd-navbar-toggle bigd-collapsed'> <span class='bigd-sr-only'>Toggle navigation</span>" +
        "<span class='bigd-icon-bar'></span>" +
        "<span class='bigd-icon-bar'></span> " +
        "<span class='bigd-icon-bar'></span> " +
        "</button> " +
        "<a href='" + bigd_site + "' class='bigd-navbar-brand'><img src='" + bigd_site + "cdn/image/ngdc-logo.png' /></a>" +
        "</div>" +

        "<div class='bigd-collapse bigd-navbar-collapse' id='bigd-coll'>" +
        "<ul class='bigd-nav bigd-navbar-nav bigd-navbar-right'>" + 
        "<li><a href='" + bigd_site + "databases'> Databases</a></li>" +
        "<li><a href='" + bigd_site + "tools'>Tools</a></li> " +
        "<li><a href='" + bigd_site + "standards'>Standards</a></li> " +
        "<li><a href='" + bigd_site + "publications'>Publications</a></li>" +
        "<li><a href='" + bigd_site + "about'>About</a></li>" +
        "</ul>" +
        "</div>" +
        "</nav>" +
        "</div>" +
        "</header>";
    $("body").prepend(header);
}

function appendFooterSection() {
    var myDate = new Date();
    var year = myDate.getFullYear();
    var footer = "" +
        "<footer class='bigd-footer' style='font-family: Arial'>" +
        "<div class='bigd-container'><div class='bigd-panel bigd-panel-default'>" +
        "<div class='bigd-panel-body'>" +
        "<div class='bigd-row'> " +
        "<div class='bigd-col-md-2'> " +
        "<a href='" + bigd_site + "'><img src='" + bigd_site + "static/image/bigd-logo-blue.png'  style='margin-top: 15px'/></a> " +
        "<ul class='bigd-list-unstyled'> " +
        "<li><a href='" + bigd_site + "about'>About BIGD</a></li> " +
        "<li><a href='" + bigd_site + "mission'>Mission</a></li> " +
        "<li><a href='" + bigd_site + "board'>Advisory Board</a></li> " +
        "<li><a href='" + bigd_site + "structure'>Organizational Structure</a></li> " +
        "<li><a href='" + bigd_site + "history'>History</a></li> " +
        "<li><a href='" + bigd_site + "annual-report'>Annual Report</a></li> " +
        "</ul> " +
        "</div> " +

        "<div class='bigd-col-md-2'> " +
        "<h3>Resources</h3> " +
        "<ul class='bigd-list-unstyled'> " +
        "<li><a href='" + bigd_site + "databases'>Databases</a></li> " +
        "<li><a href='" + bigd_site + "tools'>Tools</a></li> " +
        "<li><a href='" + bigd_site + "standards'>Standards</a></li> " +
        "</ul> " +
        "</div> " +

        "<div class='bigd-col-md-2'> " +
        "<h3>Research</h3> " +
        "<ul class='bigd-list-unstyled'> " +
        "<li><a href='" + bigd_site + "research'>Topics & Projects</a></li> " +
        "<li><a href='" + bigd_site + "publications'>Publications</a></li> " +
        "</ul> " +
        "</div> " +

        "<div class='bigd-col-md-2'> " +
        "<h3>Featured</h3> " +
        "<ul class='bigd-list-unstyled'> " +
        "<li><a href='http://databasecommons.org' target='_blank'>Database Commons</a></li> " +
        "<li><a href='http://gsa.big.ac.cn' target='_blank' title='Genome Sequence Archive'>GSA</a></li> " +
        "<li><a href='http://ic4r.org' target='_blank' title='Information Commons for Rice'>IC4R</a></li>" +
        "<li><a href='http://bigd.big.ac.cn/methbank' target='_blank' title='Methylation DataBank'>MethBank</a></li> " +
        "<li><a href='http://vcg.cbi.ac.cn' target='_blank' title='Virtual Chinese Genome Database'>VCGDB</a></li> " +
        "</ul> " +
        "</div> " +

        "<div class='bigd-col-md-2'> " +
        "<h3>Conferences & Training</h3> " +
        "<ul class='bigd-list-unstyled'> " +
        "<li><a href='" + bigd_site + "conference'>Conferences</a></li> " +
        "<li><a href='" + bigd_site + "training'>Training</a></li> " +
        "<li><a href='" + bigd_site + "events'>Calendar</a></li> " +
        "</ul> " +
        "</div> " +

        "<div class='bigd-col-md-2'> " +
        "<h3>About Us</h3> " +
        "<ul class='bigd-list-unstyled'> " +
        "<li><a href='" + bigd_site + "people'>People</a></li> " +
        "<li><a href='" + bigd_site + "partners'>Partners</a></li> " +
        "<li><a href='" + bigd_site + "collaborations'>Collaborations</a></li> " +
        "<li><a href='" + bigd_site + "funding'>Funding</a></li> " +
        "<li><a href='" + bigd_site + "contact'>Contact Us</a></li> " +
        "</ul> " +
        "</div> " +
        "</div> " +

        "<hr class='footer-hr'>" +
        "<div class='bigd-row'>" +
        "<div class='bigd-col-md-7'>" +
        "<p class='bigd-text-muted'>" +
        "Copyright &copy; " + year + " BIG Data Center, <a href='http://english.big.cas.cn' target='_blank'>Beijing Institute of Genomics</a>, <a href='http://english.cas.cn' target='_blank'>Chinese Academy of Sciences</a><br/>" +
        "No.1 Beichen West Road, Chaoyang District, Beijing 100101, China" +
        "</p>" +
        "<p><a rel='license' target='_blank' href='http://creativecommons.org/licenses/by/3.0/cn/'><img alt='Creative Commons License' style='border-width:0;height: 15px' src='https://i.creativecommons.org/l/by/3.0/cn/88x31.png'/></a>This work is licensed under a <a rel='license' href='http://creativecommons.org/licenses/by/3.0/cn/' target='_blank'>Creative Commons Attribution 3.0 China Mainland License</a>. </p>" +
        "</div>" +
        "<div class='bigd-col-md-5'> <div class='bdsharebuttonbox pull-right'><a href='#' class='bds_twi' data-cmd='twi' title='Share to Twitter'></a> <a href='#' class='bds_fbook' data-cmd='fbook' title='Share to Facebook'></a> <a href='#' class='bds_linkedin' data-cmd='linkedin' title='Share to LinkedIn'></a> <a href='#' class='bds_sqq' data-cmd='sqq' title='Share to QQ'></a> <a href='#' class='bds_qzone' data-cmd='qzone' title='Share to QZone'></a> <a href='#' class='bds_weixin' data-cmd='weixin' title='Share to WeChat'></a> </div></div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</footer>";
    $("body").append(footer);
}

window._bd_share_config = {
    "common": {
        "bdSnsKey": {},
        "bdText": "The BIG Data Center advances life & health sciences by providing open access to a variety of resources, with the aim to translate big data into big discoveries and support activities in both academia and industry.",
        "bdMini": "2",
        "bdMiniList": false,
        "bdPic": "http://bigd.big.ac.cn/image/bigd-logo-blue.png",
        "bdStyle": "0",
        "bdSize": "16"
    },
    share: {}
};
with (document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];

function appendSearchSection() {
    var db = $('#bigsearch').data('db');
    var tip = $('#bigsearch').data('tip');
    var example = $('#bigsearch').data('example');

    var searchForm = "<form class='form-horizontal' style='margin: 0 auto' action='http://bigd.big.ac.cn/search' method='get'>" +
        "<div class='form-group' style='margin: 0 auto'>" +
        "<div class='row'>" +
        "<div class='col-md-3 col-md-offset-1' style='margin-right: 0;padding-right: 0;padding-left: 0'>" +
        "<select class='form-control' name='dbId' id='dbId'>" +
        "<option value=''>All Databases</option></select></div>" +
        "<div class='col-md-6' style='margin-right: 0;margin-left: 0; padding-left: 0;padding-right: 0'>" +
        "<input name='q' class='form-control' placeholder='" + tip + "'/></div>" +
        "<div class='col-md-1' style='margin-right: 0;margin-left: 0; padding-left: 0;padding-right: 0'>" +
        "<button class='btn btn-info' type='submit' style='padding: 9px 15px'><span class='glyphicon glyphicon-search'></span></button></div></div>" +
        "<span id='example' class='text-center help-block'>e.g., </span>" +
        // "<a href='${host}/search?dbId=&q=PRJCA000126'>PRJCA000126</a>;" +
        // "<a href='${host}/search?dbId=&q=SAMC000385'>SAMC000385</a>;" +
        // "<a href='${host}/search?dbId=&q=tp53'>tp53</a>;" +
        // "<a href='${host}/search?dbId=&q=EGFR'>EGFR</a>;" +
        // "<a href='${host}/search?dbId=&q=human'>human</a>; " +
        // "<a href='${host}/search?dbId=&q=KaKs_Calculator'>KaKs_Calculator</a>;" +
        // "<a href='${host}/search?dbId=&q=GenBank'>GenBank</a>; " +
        "</div></form>";

    $(document).ready(function () {
        console.log(example);
        if (example !== undefined) {
            if (example.indexOf(",") > 0) {
                example = example.split(",");
                $.each(example, function (i, item) {
                    console.log(item);
                    var link = "<a href='" + bigd_site + "/search?dbId=" + db + "&q=" + item + "'>" + item + "</a>; ";
                    var lastlink = "<a href='" + bigd_site + "/search?dbId=" + db + "&q=" + item + "'>" + item + "</a>";
                    if (example.length > 1) {
                        if (i === example.length - 1) {
                            $('span#example').append(lastlink);
                        } else {
                            $('span#example').append(link);
                        }
                    } else {
                        $('span#example').append(lastlink);
                    }


                });
            } else {
                $('span#example').append("<a href='" + bigd_site + "/search?dbId=" + db + "&q=" + example + "'>" + example + "</a>");
            }
        }
    });


    $.ajax({
        url: bigd_site + 'api/bigdsearch/dbs',
        type: 'get',
        success: function (data) {
            $.each(data, function (i, item) {
                if (item.id === db) {

                    $('#dbId').append($('<option>', {
                        value: item.id,
                        text: item.title,
                        selected: true
                    }));
                } else {
                    $('#dbId').append($('<option>', {
                        value: item.id,
                        text: item.title
                    }));
                }
            })
        }
    });
    $('#bigsearch').prepend(searchForm);
}
