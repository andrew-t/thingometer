document.addEventListener('DOMContentLoaded', function(){
    var morpher;
    var json = {"images":[

    {"points":[{"x":258,"y":330},{"x":285,"y":316},{"x":322,"y":329},{"x":291,"y":335},{"x":393,"y":326},{"x":433,"y":313},{"x":433,"y":333},{"x":466,"y":327},{"x":387,"y":371},{"x":405,"y":415},{"x":336,"y":372},{"x":321,"y":429},{"x":355,"y":277},{"x":241,"y":292},{"x":287,"y":291},{"x":323,"y":301},{"x":239,"y":407},{"x":281,"y":449},{"x":314,"y":410},{"x":413,"y":399},{"x":293,"y":500},{"x":312,"y":483},{"x":400,"y":296},{"x":436,"y":289},{"x":471,"y":301},{"x":361,"y":434},{"x":361,"y":486},{"x":401,"y":476},{"x":420,"y":485},{"x":437,"y":454},{"x":199,"y":431},{"x":506,"y":418},{"x":467,"y":399},{"x":338,"y":540},{"x":376,"y":539},{"x":354,"y":569},{"x":334,"y":601},{"x":381,"y":603},{"x":276,"y":568},{"x":232,"y":513},{"x":442,"y":573},{"x":486,"y":496},{"x":347,"y":668},{"x":298,"y":639},{"x":255,"y":597},{"x":401,"y":633},{"x":491,"y":503},{"x":238,"y":547},{"x":458,"y":582},{"x":255,"y":781},{"x":458,"y":779},{"x":297,"y":696},{"x":379,"y":690},{"x":331,"y":754},{"x":370,"y":751},{"x":295,"y":941},{"x":398,"y":941},{"x":248,"y":943},{"x":416,"y":942},{"x":232,"y":629},{"x":510,"y":551},{"x":180,"y":413},{"x":167,"y":341},{"x":159,"y":300},{"x":193,"y":354},{"x":354,"y":125},{"x":518,"y":398},{"x":524,"y":335},{"x":531,"y":296},{"x":501,"y":332},{"x":441,"y":116},{"x":480.08213824286827,"y":181.5419933329835},{"x":495.80752161702713,"y":263.3177802338583},{"x":257,"y":109},{"x":202,"y":156},{"x":191,"y":278},{"x":456,"y":56},{"x":357,"y":32},{"x":275,"y":25},{"x":161,"y":125},{"x":155,"y":256},{"x":551,"y":231},{"x":541,"y":145},{"x":580,"y":583},{"x":634,"y":678},{"x":707.3333129882812,"y":612},{"x":706.3333129882812,"y":947},{"x":212,"y":607},{"x":111,"y":700},{"x":144,"y":740},{"x":112,"y":773},{"x":128,"y":939},{"x":24,"y":942},{"x":21,"y":684},{"x":591.3333129882812,"y":726},{"x":639.3333129882812,"y":756},{"x":205,"y":67},{"x":519,"y":83},{"x":550,"y":945}],"src":"cameron.jpg","x":0,"y":0},

    {"points":[{"x":297,"y":371},{"x":335,"y":360},{"x":368,"y":379},{"x":329,"y":387},{"x":440,"y":388},{"x":472,"y":375},{"x":472,"y":400},{"x":507,"y":389},{"x":432,"y":428},{"x":440,"y":490},{"x":378,"y":424},{"x":359,"y":484},{"x":407,"y":298},{"x":280,"y":339},{"x":310,"y":332},{"x":375,"y":353},{"x":295,"y":458},{"x":338,"y":496},{"x":358,"y":465},{"x":441,"y":470},{"x":332,"y":546},{"x":349,"y":549},{"x":439,"y":356},{"x":494,"y":343},{"x":531,"y":362},{"x":398,"y":500},{"x":392.8732394366196,"y":560.0563380281692},{"x":442,"y":563},{"x":460.66668701171875,"y":562},{"x":465,"y":523},{"x":246,"y":478},{"x":562,"y":509},{"x":506.66668701171875,"y":484},{"x":356,"y":598},{"x":422,"y":607},{"x":379.66668701171875,"y":638},{"x":336,"y":650},{"x":410,"y":668},{"x":278.66668701171875,"y":618},{"x":243,"y":541},{"x":474,"y":639},{"x":535,"y":581},{"x":423.66668701171875,"y":757},{"x":330.66668701171875,"y":695},{"x":273.66668701171875,"y":634},{"x":468.66668701171875,"y":731},{"x":499,"y":670},{"x":242,"y":550},{"x":491,"y":686},{"x":278,"y":823},{"x":499,"y":851},{"x":373,"y":781},{"x":461,"y":783},{"x":432,"y":859},{"x":483,"y":857},{"x":407,"y":1014},{"x":552,"y":1021},{"x":350,"y":1026},{"x":604,"y":1035},{"x":209.66668701171875,"y":602},{"x":501,"y":793},{"x":230.66668701171875,"y":473},{"x":223,"y":397},{"x":228,"y":342},{"x":246,"y":388},{"x":412.66668701171875,"y":188},{"x":586,"y":508},{"x":617,"y":415},{"x":603,"y":365},{"x":579.8731144501434,"y":410.59556046898086},{"x":513,"y":203},{"x":556,"y":255},{"x":565,"y":331},{"x":322,"y":176},{"x":268,"y":247},{"x":256,"y":320},{"x":518,"y":73},{"x":424,"y":42},{"x":318,"y":57},{"x":209,"y":189},{"x":213,"y":284},{"x":623,"y":308},{"x":632,"y":221},{"x":513,"y":732},{"x":548,"y":778},{"x":638,"y":797},{"x":675,"y":1038},{"x":143.66668701171875,"y":653},{"x":146,"y":755},{"x":193,"y":785},{"x":155,"y":826},{"x":260.66668701171875,"y":1030},{"x":36,"y":1031},{"x":18.66668701171875,"y":717},{"x":553,"y":801},{"x":588,"y":821},{"x":248,"y":101},{"x":603,"y":107},{"x":637.0267445335288,"y":1037.1734196860302}],"src":"miliband.jpg","x":0,"y":0},

    {"points":[{"x":87,"y":132},{"x":97,"y":125},{"x":114,"y":125},{"x":99,"y":132},{"x":142,"y":117},{"x":154,"y":112},{"x":158,"y":123},{"x":171,"y":115},{"x":134,"y":132},{"x":149,"y":153},{"x":117,"y":135},{"x":118,"y":160},{"x":118,"y":92},{"x":84,"y":121},{"x":94,"y":117},{"x":109,"y":115},{"x":88,"y":157},{"x":113,"y":170},{"x":114,"y":152},{"x":149,"y":147},{"x":110,"y":187},{"x":122,"y":185},{"x":133,"y":113},{"x":153,"y":101},{"x":175,"y":104},{"x":130,"y":161},{"x":136,"y":182},{"x":150,"y":180},{"x":161,"y":181},{"x":163,"y":170},{"x":76,"y":173},{"x":200,"y":151},{"x":171,"y":145},{"x":130,"y":195},{"x":139,"y":193},{"x":136,"y":207},{"x":133,"y":227},{"x":148,"y":223},{"x":109,"y":215},{"x":88,"y":203},{"x":169,"y":211},{"x":194,"y":181},{"x":140,"y":269},{"x":125,"y":257},{"x":113,"y":239},{"x":167,"y":254},{"x":204,"y":198},{"x":101,"y":224},{"x":190,"y":230},{"x":114,"y":301},{"x":178,"y":311},{"x":129,"y":276},{"x":157,"y":284},{"x":125,"y":304},{"x":138,"y":304},{"x":107,"y":346},{"x":148,"y":346},{"x":72,"y":345},{"x":178,"y":346},{"x":99,"y":252},{"x":225,"y":233},{"x":67,"y":167},{"x":58,"y":142},{"x":52,"y":128},{"x":68,"y":142},{"x":109,"y":51},{"x":206,"y":146},{"x":208,"y":124},{"x":207,"y":104},{"x":199,"y":121},{"x":139,"y":49},{"x":169,"y":63},{"x":182,"y":95},{"x":85,"y":57},{"x":70,"y":76},{"x":68,"y":113},{"x":155,"y":11},{"x":97,"y":12},{"x":69,"y":25},{"x":48,"y":80},{"x":49,"y":108},{"x":203,"y":82},{"x":199,"y":55},{"x":240,"y":217},{"x":240,"y":260},{"x":258,"y":222},{"x":260,"y":350},{"x":83,"y":236},{"x":54,"y":271},{"x":68,"y":286},{"x":51,"y":300},{"x":52,"y":348},{"x":9,"y":347},{"x":25,"y":267},{"x":222,"y":280},{"x":242,"y":296},{"x":49,"y":46},{"x":184,"y":28},{"x":218,"y":343}],"src":"clegg.jpg","x":0,"y":0},

    {"points":[{"x":98,"y":173},{"x":119,"y":163},{"x":139,"y":169},{"x":119,"y":177},{"x":183,"y":167},{"x":198,"y":158},{"x":200,"y":174},{"x":217,"y":167},{"x":174,"y":188},{"x":181,"y":215},{"x":148,"y":189},{"x":145,"y":215},{"x":158,"y":138},{"x":88,"y":149},{"x":111,"y":144},{"x":135,"y":148},{"x":98,"y":205},{"x":127,"y":226},{"x":142,"y":208},{"x":187,"y":208},{"x":127,"y":249},{"x":145,"y":251},{"x":180,"y":144},{"x":198,"y":139},{"x":221,"y":147},{"x":163,"y":222},{"x":156,"y":251},{"x":169,"y":249},{"x":179,"y":249},{"x":196,"y":245},{"x":70,"y":244},{"x":241,"y":229},{"x":217,"y":213},{"x":157,"y":275},{"x":172,"y":274},{"x":165,"y":297},{"x":149,"y":315},{"x":177,"y":315},{"x":117,"y":297},{"x":78,"y":261},{"x":213,"y":295},{"x":231,"y":274},{"x":160,"y":363},{"x":127,"y":349},{"x":111,"y":335},{"x":191,"y":346},{"x":231,"y":283},{"x":85,"y":279},{"x":207,"y":333},{"x":114,"y":399},{"x":207,"y":394},{"x":140,"y":370},{"x":179,"y":368},{"x":153,"y":403},{"x":170,"y":402},{"x":165,"y":481},{"x":166,"y":482},{"x":167,"y":484},{"x":170,"y":483},{"x":93,"y":314},{"x":227,"y":320},{"x":58,"y":233},{"x":50,"y":216},{"x":39,"y":197},{"x":68,"y":142},{"x":152,"y":71},{"x":254,"y":214},{"x":255,"y":195},{"x":248,"y":169},{"x":245,"y":175},{"x":186,"y":60},{"x":221,"y":81},{"x":240,"y":118},{"x":116,"y":62},{"x":91,"y":89},{"x":68,"y":113},{"x":203,"y":22},{"x":134,"y":10},{"x":72,"y":31},{"x":21,"y":166},{"x":19,"y":220},{"x":281,"y":218},{"x":295,"y":159},{"x":242,"y":279},{"x":286,"y":410},{"x":308,"y":325},{"x":303,"y":492},{"x":52,"y":321},{"x":12,"y":400},{"x":71,"y":390},{"x":94,"y":412},{"x":136,"y":487},{"x":8,"y":487},{"x":7,"y":347},{"x":247,"y":392},{"x":223,"y":425},{"x":39,"y":96},{"x":250,"y":72},{"x":189,"y":486}],"src":"bennett.jpg","x":0,"y":0},

    {"points":[{"x":187,"y":285},{"x":219,"y":268},{"x":255,"y":283},{"x":220,"y":293},{"x":327,"y":288},{"x":371,"y":274},{"x":374,"y":297},{"x":411,"y":291},{"x":307,"y":323},{"x":329,"y":384},{"x":265,"y":321},{"x":246,"y":379},{"x":286,"y":219},{"x":178,"y":244},{"x":201,"y":233},{"x":248,"y":246},{"x":200,"y":370},{"x":232,"y":412},{"x":238,"y":364},{"x":340,"y":365},{"x":232,"y":452},{"x":257,"y":450},{"x":328,"y":244},{"x":369,"y":239},{"x":414,"y":255},{"x":281,"y":383},{"x":286,"y":452},{"x":310,"y":451},{"x":331,"y":448},{"x":364,"y":444},{"x":175,"y":409},{"x":490,"y":412},{"x":387,"y":363},{"x":270,"y":491},{"x":301,"y":492},{"x":281,"y":524},{"x":269,"y":549},{"x":314,"y":553},{"x":232,"y":534},{"x":201,"y":494},{"x":410,"y":513},{"x":465,"y":465},{"x":290,"y":664},{"x":258,"y":640},{"x":241,"y":603},{"x":369,"y":620},{"x":481,"y":513},{"x":235,"y":576},{"x":464,"y":555},{"x":209,"y":766},{"x":408,"y":781},{"x":248,"y":683},{"x":325,"y":696},{"x":255,"y":742},{"x":305,"y":746},{"x":213,"y":906},{"x":307,"y":910},{"x":170,"y":910},{"x":348,"y":910},{"x":222,"y":650},{"x":513,"y":589},{"x":167,"y":381},{"x":159,"y":323},{"x":156,"y":303},{"x":166,"y":349},{"x":318,"y":99},{"x":507,"y":389},{"x":525,"y":326},{"x":500,"y":310},{"x":484,"y":333},{"x":415,"y":73},{"x":453,"y":142},{"x":460,"y":230},{"x":210,"y":113},{"x":184,"y":145},{"x":162,"y":281},{"x":427,"y":57},{"x":382,"y":28},{"x":276,"y":34},{"x":146,"y":171},{"x":152,"y":265},{"x":541,"y":258},{"x":529,"y":166},{"x":568,"y":619},{"x":607,"y":725},{"x":679,"y":681},{"x":680,"y":906},{"x":212,"y":637},{"x":113,"y":734},{"x":142,"y":744},{"x":104,"y":778},{"x":106,"y":906},{"x":20,"y":908},{"x":29,"y":734},{"x":559,"y":751},{"x":597,"y":803},{"x":183,"y":91},{"x":485,"y":96},{"x":520,"y":904}],"src":"farage.jpg","x":0,"y":0},

    {"points":[{"x":218,"y":445},{"x":247,"y":432},{"x":284,"y":446},{"x":247,"y":451},{"x":356,"y":440},{"x":387,"y":424},{"x":389,"y":443},{"x":433,"y":436},{"x":326,"y":470},{"x":343,"y":534},{"x":284,"y":471},{"x":271,"y":532},{"x":302,"y":392},{"x":193,"y":422},{"x":222,"y":406},{"x":274,"y":415},{"x":216,"y":552},{"x":241,"y":576},{"x":265,"y":516},{"x":359,"y":519},{"x":261,"y":589},{"x":290,"y":597},{"x":350,"y":406},{"x":413,"y":391},{"x":452,"y":398},{"x":299,"y":536},{"x":316,"y":599},{"x":346,"y":596},{"x":380,"y":585},{"x":414,"y":579},{"x":198,"y":596},{"x":534,"y":552},{"x":449,"y":522},{"x":312,"y":668},{"x":341,"y":664},{"x":324,"y":701},{"x":313,"y":728},{"x":344,"y":730},{"x":266,"y":699},{"x":285,"y":725},{"x":448,"y":685},{"x":504,"y":620},{"x":360,"y":810},{"x":315,"y":799},{"x":304,"y":784},{"x":413,"y":808},{"x":563,"y":689},{"x":292,"y":750},{"x":492,"y":790},{"x":244,"y":891},{"x":445,"y":925},{"x":306,"y":844},{"x":373,"y":875},{"x":314,"y":926},{"x":342,"y":931},{"x":313,"y":955},{"x":338,"y":959},{"x":305,"y":957},{"x":348,"y":959},{"x":257,"y":798},{"x":605,"y":781},{"x":188,"y":561},{"x":177,"y":519},{"x":179,"y":477},{"x":180,"y":530},{"x":304,"y":355},{"x":563,"y":548},{"x":575,"y":500},{"x":559,"y":472},{"x":536,"y":480},{"x":411,"y":352},{"x":500,"y":381},{"x":511,"y":422},{"x":216,"y":358},{"x":184,"y":408},{"x":183,"y":452},{"x":507,"y":122},{"x":362,"y":90},{"x":200,"y":157},{"x":123,"y":434},{"x":151,"y":528},{"x":630,"y":498},{"x":642,"y":352},{"x":690,"y":772},{"x":605,"y":830},{"x":719,"y":801},{"x":710,"y":958},{"x":260,"y":780},{"x":219,"y":842},{"x":211,"y":858},{"x":207,"y":879},{"x":218,"y":971},{"x":128,"y":968},{"x":129,"y":831},{"x":576,"y":844},{"x":549,"y":883},{"x":141,"y":261},{"x":570,"y":190},{"x":443,"y":955}],"src":"sturgeon.jpg","x":0,"y":0},

    {"points":[{"x":268,"y":464},{"x":313,"y":444},{"x":357,"y":460},{"x":320,"y":468},{"x":439,"y":452},{"x":478,"y":432},{"x":485,"y":458},{"x":518,"y":449},{"x":434,"y":492},{"x":451,"y":553},{"x":387,"y":493},{"x":362,"y":559},{"x":399,"y":392},{"x":260,"y":421},{"x":323,"y":408},{"x":364,"y":423},{"x":253,"y":539},{"x":294,"y":600},{"x":359,"y":536},{"x":451,"y":536},{"x":333,"y":618},{"x":377,"y":623},{"x":433,"y":415},{"x":467,"y":400},{"x":503,"y":403},{"x":414,"y":562},{"x":413,"y":624},{"x":453,"y":617},{"x":480,"y":606},{"x":501,"y":584},{"x":214,"y":609},{"x":566,"y":564},{"x":524,"y":532},{"x":379,"y":683},{"x":444,"y":677},{"x":416,"y":709},{"x":380,"y":746},{"x":446,"y":745},{"x":310,"y":722},{"x":243,"y":678},{"x":495,"y":714},{"x":546,"y":657},{"x":394,"y":829},{"x":338,"y":811},{"x":289,"y":809},{"x":455,"y":815},{"x":530,"y":777},{"x":244,"y":795},{"x":492,"y":790},{"x":279,"y":1022},{"x":564,"y":997},{"x":352,"y":877},{"x":440,"y":878},{"x":381,"y":920},{"x":410,"y":922},{"x":376,"y":1039},{"x":429,"y":1039},{"x":291,"y":1037},{"x":566,"y":1042},{"x":237,"y":881},{"x":567,"y":827},{"x":168,"y":587},{"x":161,"y":544},{"x":177,"y":494},{"x":185,"y":514},{"x":325,"y":259},{"x":563,"y":548},{"x":575,"y":500},{"x":559,"y":472},{"x":552,"y":487},{"x":391,"y":269},{"x":459,"y":328},{"x":523,"y":418},{"x":238,"y":329},{"x":208,"y":392},{"x":183,"y":452},{"x":337,"y":117},{"x":281,"y":157},{"x":204,"y":170},{"x":83,"y":436},{"x":82,"y":663},{"x":658,"y":530},{"x":596,"y":291},{"x":715,"y":848},{"x":728,"y":974},{"x":735,"y":859},{"x":734,"y":1042},{"x":151,"y":841},{"x":47,"y":1006},{"x":77,"y":1027},{"x":47,"y":1036},{"x":30,"y":1039},{"x":14,"y":1038},{"x":19,"y":928},{"x":694,"y":1001},{"x":724,"y":1025},{"x":141,"y":261},{"x":478,"y":163},{"x":723,"y":1037},{"x":88,"y":1008}],"src":"wood.jpg","x":0,"y":0}

    ],"triangles":[[0,13,1],[1,14,13],[14,1,15],[15,2,1],[15,12,2],[2,10,12],[12,8,10],[8,4,12],[12,22,4],[4,5,6],[5,22,4],[22,23,5],[5,24,23],[5,7,6],[7,24,5],[8,19,4],[8,9,19],[9,29,19],[28,27,9],[29,28,9],[9,25,27],[27,26,25],[25,8,9],[10,25,8],[10,11,25],[11,21,25],[25,26,21],[21,20,11],[11,18,10],[2,18,10],[18,17,11],[11,17,20],[20,33,21],[21,26,33],[33,34,26],[33,35,34],[34,27,26],[27,28,34],[34,37,35],[36,37,35],[35,33,36],[36,38,33],[20,38,33],[39,38,20],[20,17,39],[39,30,16],[16,17,39],[16,18,17],[19,29,32],[3,2,18],[18,3,16],[16,0,3],[0,64,16],[16,30,64],[64,13,0],[6,19,4],[6,32,19],[7,32,6],[7,69,32],[69,31,32],[32,41,31],[32,41,29],[29,28,41],[41,28,40],[40,37,34],[34,28,40],[75,64,13],[13,75,74],[74,73,65],[65,13,74],[65,14,13],[14,15,12],[65,12,14],[12,23,22],[23,65,12],[65,70,71],[71,23,65],[23,24,71],[24,7,69],[69,72,24],[72,71,24],[69,68,67],[69,67,66],[66,31,69],[63,75,64],[64,62,63],[62,61,64],[64,30,61],[80,75,63],[80,74,75],[80,79,74],[79,73,74],[78,77,73],[73,65,77],[77,76,70],[70,77,65],[79,73,96],[78,73,96],[76,70,97],[82,70,97],[70,71,82],[82,71,81],[81,72,71],[72,69,68],[68,81,72],[41,46,31],[41,46,48],[48,40,41],[48,40,37],[37,45,48],[37,42,45],[36,42,37],[36,43,42],[38,43,36],[44,38,43],[44,47,38],[47,39,38],[59,47,44],[44,49,59],[44,43,49],[49,51,43],[51,42,43],[42,52,45],[52,50,45],[45,48,50],[50,60,48],[48,46,60],[46,83,60],[83,84,60],[60,94,84],[94,50,60],[94,95,50],[95,98,50],[50,58,98],[94,84,95],[84,85,83],[84,95,85],[85,95,86],[86,98,95],[42,53,51],[42,53,54],[54,52,42],[52,54,50],[54,56,58],[58,50,54],[53,55,56],[56,54,53],[53,51,49],[49,57,53],[53,55,57],[57,91,49],[49,90,91],[88,89,90],[90,89,49],[89,59,49],[87,88,89],[89,87,59],[87,47,59],[93,88,87],[93,92,91],[91,90,93],[93,88,90],[1,3,0],[2,1,3],[66,67,81],[67,81,68],[63,80,62],[62,61,80]]}
    json.images.forEach(function(i) {
        i.src = 'leaders/' + i.src;
        if (/clegg/.test(i.src))
            i.points.forEach(function(p) {
                p.x *= 2;
                p.y *= 2;
            });
    });

    setTimeout(function() {
   morpher = new Morpher(json);

  update();
  document.getElementById('canvas').appendChild(morpher.canvas);
  setTimeout(size, 100);
  setInterval(update, 1000);
}, 100);

  var last = '', map = {
    labour: 1,
    tory: 0,
    libdem: 3,
    green: 2,
    snp: 5,
    cymru: 6,
    ukip: 4
  };

  function update() {
    var v = [], t = 0, i = 0;
    for (var p in map)
        t += v[map[p]] = parseInt(document.getElementById(p).value, 10);
    v = v.map(function(n) { return n/t; });
    if (JSON.stringify(v) == last)
        return;
    for (var p in map) {
        var e = document.getElementById('l-' + p);
        e.innerHTML = e.innerHTML.replace(/ \(.*$/, '') + ' (' + Math.round(v[map[p]] * 100) + '%)';
    }
    last = JSON.stringify(v);
    morpher.set(v);
  }
});

function size() {
   var canvas = document.querySelector('canvas'),
        container = document.getElementById('canvas'),
        aspect = canvas.width / canvas.height,
        caspect = container.clientWidth / container.clientHeight,
        r = (aspect > caspect) ? (canvas.width / container.clientWidth) : (canvas.height / container.clientHeight);
    if (aspect > caspect) {
        canvas.style.width = '100%';
        canvas.style.height = container.clientWidth / aspect + 'px';
    } else {
        canvas.style.height = '100%';
        canvas.style.width = container.clientHeight * aspect + 'px';
    }
}

window.addEventListener('resize', size);