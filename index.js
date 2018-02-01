var DataTable = ReactJqueryDatatables.DataTable;
var Provider = ReactRedux.Provider;

const tableData = [{"NAME":"#10 Check Agencies","OUTLET TYPE":"Ventra Retail Location","PHONE NUMBER":"","STREET ADDRESS":"6321 South King Drive","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Varies","LAT":41.7796,"LON":-87.615265,"CITY":"Chicago","Location":"6321 King Drive\nChicago 60637\n(41.779580173000454, -87.61562095399967)"},{"NAME":"1 Jackpot Mini Mart","OUTLET TYPE":"Ventra Retail Location","PHONE NUMBER":"","STREET ADDRESS":"535 W. 111th Street","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Varies","LAT":41.69241,"LON":-87.636604,"CITY":"Chicago","Location":"535 111th Street\nChicago 60628\n(41.69240213100045, -87.63650185899968)"},{"NAME":"10 Check Currency","OUTLET TYPE":"Currency Exchange","PHONE NUMBER":"773-493-2769","STREET ADDRESS":"6321 S. King Drive","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Purchase Transit Cards and Passes.","LAT":41.7795,"LON":-87.61561,"CITY":"Chicago","Location":"6321 King Drive\nChicago, IL 60637\n(41.779580173000454, -87.61562095399967)"},{"NAME":"103rd & Halsted Currency","OUTLET TYPE":"Currency Exchange","PHONE NUMBER":"773-233-6068","STREET ADDRESS":"801 W. 103rd Street","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Purchase Transit Cards and Passes.","LAT":41.706917,"LON":-87.64289,"CITY":"Chicago","Location":"801 103rd Street\nChicago, IL 60628\n(41.7074594230005, -87.60387686299964)"},{"NAME":"103rd & Michigan Currency","OUTLET TYPE":"Currency Exchange","PHONE NUMBER":"773-928-1850","STREET ADDRESS":"10251 S. Michigan Avenue","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Purchase Transit Cards and Passes.","LAT":41.707497,"LON":-87.62016,"CITY":"Chicago","Location":"10251 Michigan Avenue\nChicago, IL 60628\n(41.70753026000045, -87.62015057599967)"},{"NAME":"103rd & Western C E","OUTLET TYPE":"Ventra Retail Location","PHONE NUMBER":"","STREET ADDRESS":"10257 South Western Ave","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Varies","LAT":41.706814,"LON":-87.64305,"CITY":"Chicago","Location":"10257 Western Ave\nChicago 60643\n(41.70664159500046, -87.68159527099965)"},{"NAME":"110th & Halsted C E","OUTLET TYPE":"Ventra Retail Location","PHONE NUMBER":"","STREET ADDRESS":"11057 South Halsted","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Varies","LAT":41.692497,"LON":-87.642,"CITY":"Chicago","Location":"11057 Halsted\nChicago 60628\n(41.69259085400046, -87.62300715199967)"},{"NAME":"110th & Halsted Currency","OUTLET TYPE":"Currency Exchange","PHONE NUMBER":"773-785-7404","STREET ADDRESS":"11057 S. Halsted Street","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Purchase Chicago Cards, Transit Cards and Passes.","LAT":41.692505,"LON":-87.64238,"CITY":"Chicago","Location":"11057 Halsted Street\nChicago, IL 60628\n(41.692490671000485, -87.64232048899964)"},{"NAME":"111th & Michigan Currency","OUTLET TYPE":"Currency Exchange","PHONE NUMBER":"773-264-2433","STREET ADDRESS":"11055 S. Michigan Avenue","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Purchase Transit Cards and Passes.","LAT":41.692787,"LON":-87.62105,"CITY":"Chicago","Location":"11055 Michigan Avenue\nChicago, IL 60628\n(41.69284096400048, -87.62103091999967)"},{"NAME":"111th & Michigan Currency Exchange, Inc.","OUTLET TYPE":"Ventra Retail Location","PHONE NUMBER":"","STREET ADDRESS":"11055 S Michigan","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Varies","LAT":41.692986,"LON":-87.620544,"CITY":"Chicago","Location":"11055 Michigan\nChicago 60628\n(41.69259085400046, -87.62300715199967)"},{"NAME":"111th & Western Currency","OUTLET TYPE":"Currency Exchange","PHONE NUMBER":"773-233-3610","STREET ADDRESS":"11230 1/2 S. Western Avenue","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Purchase Chicago Cards, Transit Cards and Passes.","LAT":41.688904,"LON":-87.68107,"CITY":"Chicago","Location":"11230 1 2 S Western Avenue\nChicago, IL 60643\n(41.88106288000046, -87.68645005999969)"},{"NAME":"112th & Vincennes Currency","OUTLET TYPE":"Currency Exchange","PHONE NUMBER":"773-239-1700","STREET ADDRESS":"11207 S. Vincennes","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Purchase Chicago Cards, Transit Cards and Passes.","LAT":41.689846,"LON":-87.664795,"CITY":"Chicago","Location":"11207 Vincennes\nChicago, IL 60643\n(41.699751422000475, -87.66459754499965)"},{"NAME":"115th & Michigan Currency","OUTLET TYPE":"Currency Exchange","PHONE NUMBER":"773-264-0601","STREET ADDRESS":"100 E. 115th Street","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Purchase Transit Cards and Passes.","LAT":41.68535,"LON":-87.62067,"CITY":"Chicago","Location":"100 115th Street\nChicago, IL 60628\n(41.6853269930005, -87.62546000099968)"},{"NAME":"119th & Halsted Currency","OUTLET TYPE":"Currency Exchange","PHONE NUMBER":"773-785-3141","STREET ADDRESS":"11932 S. Halsted Street","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Purchase Transit Cards and Passes.","LAT":41.67682,"LON":-87.64188,"CITY":"Chicago","Location":"11932 Halsted Street\nChicago, IL 60628\n(41.676810412000464, -87.64194023499965)"},{"NAME":"12 Check Agencies","OUTLET TYPE":"Currency Exchange","PHONE NUMBER":"773-533-2927","STREET ADDRESS":"600 S. Pulaski Road","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Purchase Transit Cards and Passes.","LAT":41.87342,"LON":-87.72541,"CITY":"Chicago","Location":"600 Pulaski Road\nChicago, IL 60624\n(41.89206021700045, -87.72598079899967)"},{"NAME":"141 Jackson Currency (Board of Trade)","OUTLET TYPE":"Currency Exchange","PHONE NUMBER":"312-939-2167","STREET ADDRESS":"141 W. Jackson Blvd.","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Purchase Transit Cards and Passes.","LAT":41.878136,"LON":-87.632065,"CITY":"Chicago","Location":"141 Jackson Blvd\nChicago, IL 60604\n(41.878140646000475, -87.63229102299965)"},{"NAME":"141 W Jackson Blvd C E  10136","OUTLET TYPE":"Ventra Retail Location","PHONE NUMBER":"","STREET ADDRESS":"141 W Jackson Blvd.","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Varies","LAT":41.878056,"LON":-87.63221,"CITY":"Chicago","Location":"141 Jackson Blvd\nChicago 60604\n(41.878140646000475, -87.63229102299965)"},{"NAME":"147th & Cicero C E","OUTLET TYPE":"Ventra Retail Location","PHONE NUMBER":"","STREET ADDRESS":"14655 South Cicero Ave","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Varies","LAT":41.62618,"LON":-87.7373,"CITY":"Midlothian","Location":"14655 Cicero Ave\nMidlothian 60445\n(41.62569787400048, -87.73725440599969)"},{"NAME":"147th & Cicero Currency","OUTLET TYPE":"Currency Exchange","PHONE NUMBER":"708-385-2233","STREET ADDRESS":"14655 S. Cicero Avenue","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Purchase Transit Cards and Passes.","LAT":41.626083,"LON":-87.73732,"CITY":"Midlothian","Location":"14655 Cicero Avenue\nMidlothian, IL 60445\n(41.62569787400048, -87.73725440599969)"},{"NAME":"147th & Dixie Highway C E","OUTLET TYPE":"Ventra Retail Location","PHONE NUMBER":"","STREET ADDRESS":"14725 South Dixie Highway","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Varies","LAT":41.621693,"LON":-87.67402,"CITY":"Harvey","Location":"14725 Dixie Highway\nHarvey 60426\n(41.621670244000484, -87.67437007099966)"},{"NAME":"147th & Halsted C E","OUTLET TYPE":"Ventra Retail Location","PHONE NUMBER":"","STREET ADDRESS":"14701 South Halsted","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Varies","LAT":41.622337,"LON":-87.64107,"CITY":"Harvey","Location":"14701 Halsted\nHarvey 60426\n(41.62230054200046, -87.64138022699967)"},{"NAME":"147th & Halsted Currency","OUTLET TYPE":"Currency Exchange","PHONE NUMBER":"708-596-0328","STREET ADDRESS":"14701 S. Halsted","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Purchase Transit Cards and Passes.","LAT":41.622555,"LON":-87.64138,"CITY":"Harvey","Location":"14701 Halsted\nHarvey, IL 60426\n(41.62230054200046, -87.64138022699967)"},{"NAME":"147th & Pulaski C E","OUTLET TYPE":"Ventra Retail Location","PHONE NUMBER":"","STREET ADDRESS":"14755 South Pulaski Ave","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Varies","LAT":41.62387,"LON":-87.71741,"CITY":"Midlothian","Location":"14755 Pulaski Ave\nMidlothian 60445\n(41.623880321000456, -87.71765094899968)"},{"NAME":"154th & Park C E","OUTLET TYPE":"Ventra Retail Location","PHONE NUMBER":"","STREET ADDRESS":"206 East 154th Street","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Varies","LAT":41.609932,"LON":-87.64389,"CITY":"Harvey","Location":"206 154th Street\nHarvey 60426\n(41.609890461000475, -87.66825029899968)"},{"NAME":"157th & Dixie Highway C E","OUTLET TYPE":"Ventra Retail Location","PHONE NUMBER":"","STREET ADDRESS":"15652 South Dixie Highway","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Varies","LAT":41.60486,"LON":-87.669785,"CITY":"Markham","Location":"15652 Dixie Highway\nMarkham 60426\n(41.60495582100049, -87.66942534599968)"},{"NAME":"159th & Halsted C E","OUTLET TYPE":"Ventra Retail Location","PHONE NUMBER":"","STREET ADDRESS":"362 East 159th Street","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Varies","LAT":41.600605,"LON":-87.63539,"CITY":"harvey","Location":"362 159th Street\nharvey 60426\n(41.60087375600045, -87.63568734299969)"},{"NAME":"159th & Kedzie C E","OUTLET TYPE":"Ventra Retail Location","PHONE NUMBER":"","STREET ADDRESS":"3200 West 159th Street","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Varies","LAT":41.600853,"LON":-87.69422,"CITY":"Markham","Location":"3200 159th Street\nMarkham 60426\n(41.6003826110005, -87.67775801499965)"},{"NAME":"159th & Kedzie Currency","OUTLET TYPE":"Currency Exchange","PHONE NUMBER":"708-331-2711","STREET ADDRESS":"3200 W. 159th Street","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Purchase Transit Cards and Passes.","LAT":41.60078,"LON":-87.69465,"CITY":"Markham","Location":"3200 159th Street\nMarkham, IL 60428\n(41.60080814800045, -87.69472841099969)"},{"NAME":"167th & Halsted C E","OUTLET TYPE":"Ventra Retail Location","PHONE NUMBER":"","STREET ADDRESS":"16835 South Halsted","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Varies","LAT":41.585022,"LON":-87.6357,"CITY":"Harvey","Location":"16835 Halsted\nHarvey 60426\n(41.58502075100046, -87.63640006199967)"},{"NAME":"183rd & Pulaski C E","OUTLET TYPE":"Ventra Retail Location","PHONE NUMBER":"","STREET ADDRESS":"4035 West 183rd Street","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Varies","LAT":41.55706,"LON":-87.71455,"CITY":"Country Club Hills","Location":"4035 183rd Street\nCountry Club Hills 60478\n(41.55710326900049, -87.71525750899968)"},{"NAME":"18th & Ashland C E","OUTLET TYPE":"Ventra Retail Location","PHONE NUMBER":"","STREET ADDRESS":"1804 South Ashland Avenue","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Varies","LAT":41.857502,"LON":-87.66636,"CITY":"Chicago","Location":"1804 Ashland Avenue\nChicago 60608\n(41.857520553000484, -87.66616005899965)"},{"NAME":"18th & Ashland Currency","OUTLET TYPE":"Currency Exchange","PHONE NUMBER":"312-829-9141","STREET ADDRESS":"1804 S. Ashland Avenue","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Purchase Transit Cards and Passes.","LAT":41.85762,"LON":-87.66614,"CITY":"Chicago","Location":"1804 Ashland Avenue\nChicago, IL 60608\n(41.857520553000484, -87.66616005899965)"},{"NAME":"18th & Blue Island Currency","OUTLET TYPE":"Currency Exchange","PHONE NUMBER":"312-666-9670","STREET ADDRESS":"1825 S. Blue Island","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Purchase Chicago Cards, Transit Cards and Passes.","LAT":41.857224,"LON":-87.66171,"CITY":"Chicago","Location":"1825 Blue Island\nChicago, IL 60608\n(41.852243736000446, -87.66731751799966)"},{"NAME":"18th Rail Station","OUTLET TYPE":"CTA Rail Station","PHONE NUMBER":"1-888-YOURCTA","STREET ADDRESS":"1710 W. 18th Street","PAYMENTS ACCEPTED":"Cash","FARE MEDIA AVAILABLE":"Purchase new Transit Cards and add value to Transit Cards and Chicago Cards.","LAT":41.857906,"LON":-87.66914,"CITY":"Chicago","Location":"1710 18th Street\nChicago, IL 60608\n(41.857783905000474, -87.66898345299967)"},{"NAME":"21st & Ashland C E Inc  D","OUTLET TYPE":"Ventra Retail Location","PHONE NUMBER":"","STREET ADDRESS":"2023 South Ashland","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Varies","LAT":41.85431,"LON":-87.66554,"CITY":"Chicago","Location":"2023 Ashland\nChicago 60608\n(41.852243736000446, -87.66731751799966)"},{"NAME":"26th & Central Park C E","OUTLET TYPE":"Ventra Retail Location","PHONE NUMBER":"","STREET ADDRESS":"3540 West 26th Street","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Varies","LAT":41.844414,"LON":-87.713974,"CITY":"Chicago","Location":"3540 26th Street\nChicago 60623\n(41.84443659900046, -87.71402018999964)"},{"NAME":"26th & Central Park Currency","OUTLET TYPE":"Currency Exchange","PHONE NUMBER":"773-762-8330","STREET ADDRESS":"3540 W. 26th Street","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Purchase Transit Cards and Passes.","LAT":41.844395,"LON":-87.71397,"CITY":"Chicago","Location":"3540 26th Street\nChicago, IL 60623\n(41.84443659900046, -87.71402018999964)"},{"NAME":"26th & Kedzie C E","OUTLET TYPE":"Ventra Retail Location","PHONE NUMBER":"","STREET ADDRESS":"3221 West 26th Street","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Varies","LAT":41.84425,"LON":-87.70588,"CITY":"Chicago","Location":"3221 26th Street\nChicago 60623\n(41.844489876000466, -87.70578238399969)"},{"NAME":"26th & Kedzie Currency","OUTLET TYPE":"Currency Exchange","PHONE NUMBER":"773-247-2074","STREET ADDRESS":"3221 W. 26th Street","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Purchase Transit Cards and Passes.","LAT":41.844505,"LON":-87.70579,"CITY":"Chicago","Location":"3221 26th Street\nChicago, IL 60623\n(41.844489876000466, -87.70578238399969)"},{"NAME":"26th & Pulaski Currency","OUTLET TYPE":"Currency Exchange","PHONE NUMBER":"773-522-2525","STREET ADDRESS":"4004 W. 26th Street","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Purchase Chicago Cards, Transit Cards, and Passes AND add value to Chicago Cards using Touch-n-Go.","LAT":41.844254,"LON":-87.72478,"CITY":"Chicago","Location":"4004 26th Street\nChicago, IL 60623\n(41.84430425900047, -87.72474292599969)"},{"NAME":"2934 W. Grand Avenue Currency","OUTLET TYPE":"Currency Exchange","PHONE NUMBER":"773-278-2155","STREET ADDRESS":"2934 W. Grand Avenue","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Purchase Transit Cards and Passes.","LAT":41.89588,"LON":-87.70055,"CITY":"Chicago","Location":"2934 Grand Avenue\nChicago, IL 60622\n(41.89584085500047, -87.70039091199965)"},{"NAME":"31st & Morgan Check Cashers","OUTLET TYPE":"Ventra Retail Location","PHONE NUMBER":"","STREET ADDRESS":"906 West 31st Street","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Varies","LAT":41.8381,"LON":-87.64912,"CITY":"Chicago","Location":"906 31st Street\nChicago 60608\n(41.838043696000454, -87.64900127599964)"},{"NAME":"31st & Morgan Currency","OUTLET TYPE":"Currency Exchange","PHONE NUMBER":"312-225-7591","STREET ADDRESS":"906 W. 31st Street","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Purchase Transit Cards and Passes.","LAT":41.83801,"LON":-87.64912,"CITY":"Chicago","Location":"906 31st Street\nChicago, IL 60608\n(41.838043696000454, -87.64900127599964)"},{"NAME":"31st & Wallace C E","OUTLET TYPE":"Ventra Retail Location","PHONE NUMBER":"","STREET ADDRESS":"3101 South Wallace","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Varies","LAT":41.837837,"LON":-87.64134,"CITY":"Chicago","Location":"3101 Wallace\nChicago 60616\n(41.8460738280005, -87.62909884999965)"},{"NAME":"31st & Wallace Check Cashiers, Inc.","OUTLET TYPE":"Currency Exchange","PHONE NUMBER":"312-225-7885","STREET ADDRESS":"3101 S. Wallace","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Purchase Chicago Cards, Transit Cards and Passes.","LAT":41.838017,"LON":-87.64141,"CITY":"Chicago","Location":"3101 Wallace\nChicago, IL 60616\n(41.8460738280005, -87.62909884999965)"},{"NAME":"35-Bronzeville-IIT Rail Station","OUTLET TYPE":"CTA Rail Station","PHONE NUMBER":"1-888-YOURCTA","STREET ADDRESS":"16 E. 35th Street","PAYMENTS ACCEPTED":"Cash","FARE MEDIA AVAILABLE":"Purchase new Transit Cards and add value to Transit Cards and Chicago Cards.","LAT":41.831676,"LON":-87.625824,"CITY":"Chicago","Location":"16 35th Street\nChicago, IL 60616\n(41.83103106300047, -87.62689766099965)"},{"NAME":"35th & Ashland C E","OUTLET TYPE":"Ventra Retail Location","PHONE NUMBER":"773-523-9266","STREET ADDRESS":"1556 W. 35th Street","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Varies","LAT":41.830482,"LON":-87.66537,"CITY":"Chicago","Location":"1556 35th Street\nChicago 60609\n(41.83053214200049, -87.66471318999965)"},{"NAME":"35th & Ashland Currency","OUTLET TYPE":"Currency Exchange","PHONE NUMBER":"773-523-9266","STREET ADDRESS":"1556 W. 35th Street","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Purchase Transit Cards and Passes.","LAT":41.8305,"LON":-87.66542,"CITY":"Chicago","Location":"1556 35th Street\nChicago, IL 60609\n(41.83053214200049, -87.66471318999965)"},{"NAME":"35th & Indiana Currency","OUTLET TYPE":"Currency Exchange","PHONE NUMBER":"312-225-6722","STREET ADDRESS":"126 E. 35th Street","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Purchase Transit Cards and Passes.","LAT":41.831055,"LON":-87.62202,"CITY":"Chicago","Location":"126 35th Street\nChicago, IL 60653\n(41.81843090300049, -87.61270948899966)"},{"NAME":"35th/Archer Rail Station","OUTLET TYPE":"CTA Rail Station","PHONE NUMBER":"1-888-YOURCTA","STREET ADDRESS":"3528 S. Leavitt Street","PAYMENTS ACCEPTED":"Cash","FARE MEDIA AVAILABLE":"Purchase new Transit Cards and add value to Transit Cards and Chicago Cards.","LAT":41.829353,"LON":-87.68062,"CITY":"Chicago","Location":"3528 Leavitt Street\nChicago, IL 60609\n(41.82909337400048, -87.68014039799965)"},{"NAME":"3600 Commissary","OUTLET TYPE":"Ventra Retail Location","PHONE NUMBER":"773-327-5102","STREET ADDRESS":"3600 N. Lake Shore Drive","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Varies","LAT":41.948853,"LON":-87.64349,"CITY":"Chicago","Location":"3600 Lake Shore Drive\nChicago 60613\n(41.949039849000485, -87.64364513899966)"},{"NAME":"3600 Commissary","OUTLET TYPE":"Food Store","PHONE NUMBER":"773-327-5102","STREET ADDRESS":"3600 N. Lake Shore Drive","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Purchase Transit Cards and Passes.","LAT":41.948856,"LON":-87.64313,"CITY":"Chicago","Location":"3600 Lake Shore Drive\nChicago, IL 60613\n(41.949039849000485, -87.64364513899966)"},{"NAME":"39th & Cottage Grove Currency","OUTLET TYPE":"Currency Exchange","PHONE NUMBER":"773-924-1500","STREET ADDRESS":"3960 S. Cottage Grove Avenue","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Purchase Chicago Cards, Transit Cards and Passes.","LAT":41.82224,"LON":-87.60685,"CITY":"Chicago","Location":"3960 Cottage Grove Avenue\nChicago, IL 60653\n(41.82219042300045, -87.60684056199966)"},{"NAME":"43rd & Ashland Currency","OUTLET TYPE":"Currency Exchange","PHONE NUMBER":"773-247-4422","STREET ADDRESS":"4303 S. Ashland","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Purchase Chicago Cards, Transit Cards and Passes.","LAT":41.815727,"LON":-87.665146,"CITY":"Chicago","Location":"4303 Ashland\nChicago, IL 60609\n(41.81387299200048, -87.65534702799965)"},{"NAME":"43rd & Ashland Currency Exchange, Inc.","OUTLET TYPE":"Ventra Retail Location","PHONE NUMBER":"773-247-4422","STREET ADDRESS":"4303 S. Ashland","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Varies","LAT":41.816,"LON":-87.66503,"CITY":"Chicago","Location":"4303 Ashland\nChicago 60609\n(41.81387299200048, -87.65534702799965)"},{"NAME":"43rd & Pulaski Currency Exchange, Inc.","OUTLET TYPE":"Ventra Retail Location","PHONE NUMBER":"","STREET ADDRESS":"4328 S Pulaski","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Varies","LAT":41.814545,"LON":-87.72404,"CITY":"Chicago","Location":"4328 Pulaski\nChicago 60632\n(41.80875023100049, -87.70980732699968)"},{"NAME":"43rd Rail Station","OUTLET TYPE":"CTA Rail Station","PHONE NUMBER":"1-888-YOURCTA","STREET ADDRESS":"314 E. 43rd Street","PAYMENTS ACCEPTED":"Cash","FARE MEDIA AVAILABLE":"Purchase new Transit Cards and add value to Transit Cards and Chicago Cards.","LAT":41.816463,"LON":-87.61902,"CITY":"Chicago","Location":"314 43rd Street\nChicago, IL 60653\n(41.81664040300046, -87.61901061699967)"},{"NAME":"47th & Calumet C E","OUTLET TYPE":"Ventra Retail Location","PHONE NUMBER":"","STREET ADDRESS":"310 East 47th Street","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Varies","LAT":41.809437,"LON":-87.61904,"CITY":"Chicago","Location":"310 47th Street\nChicago 60653\n(41.8093916950005, -87.61914168899966)"},{"NAME":"47th & Calumet Currency","OUTLET TYPE":"Currency Exchange","PHONE NUMBER":"773-268-9494","STREET ADDRESS":"310 E. 47th Street","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Purchase Chicago Cards, Transit Cards and Passes.","LAT":41.809345,"LON":-87.61909,"CITY":"Chicago","Location":"310 47th Street\nChicago, IL 60615\n(41.80229355300048, -87.59993951799964)"},{"NAME":"47th & Damen Currency, Inc.","OUTLET TYPE":"Currency Exchange","PHONE NUMBER":"773-247-5261","STREET ADDRESS":"2001 W. 47th Street","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Purchase Chicago Cards, Transit Cards and Passes.","LAT":41.80851,"LON":-87.67481,"CITY":"Chicago","Location":"2001 47th Street\nChicago, IL 60609\n(41.80853011500045, -87.67483098399964)"},{"NAME":"47th & Halsted Check Cashers","OUTLET TYPE":"Ventra Retail Location","PHONE NUMBER":"","STREET ADDRESS":"4651 South Halsted Street","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Varies","LAT":41.809196,"LON":-87.645164,"CITY":"Chicago","Location":"4651 Halsted Street\nChicago 60609\n(41.809153798000466, -87.64550662399967)"},{"NAME":"47th & King Drive C E","OUTLET TYPE":"Ventra Retail Location","PHONE NUMBER":"","STREET ADDRESS":"432 East 47th Street","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Varies","LAT":41.809517,"LON":-87.61501,"CITY":"Chicago","Location":"432 47th Street\nChicago 60653\n(41.80944018700046, -87.61497327999967)"},{"NAME":"47th & King Drive Currency","OUTLET TYPE":"Currency Exchange","PHONE NUMBER":"773-268-4363","STREET ADDRESS":"432 E. 47th Street","PAYMENTS ACCEPTED":"Varies","FARE MEDIA AVAILABLE":"Purchase Transit Cards and Passes.","LAT":41.809406,"LON":-87.614975,"CITY":"Chicago","Location":"432 47th Street\nChicago, IL 60615\n(41.80229355300048, -87.59993951799964)"}];

class TableInstance extends React.Component {

  constructor(props) {
    super(props);
    this.handleTableClick = this.handleTableClick.bind(this);
    this.buildTable = this.buildTable.bind(this);
    this.renderMapUrl = this.renderMapUrl.bind(this);
  }

  // GENERIC URL LINK RENDERER
  renderUrl(val, row) {
    return (<a title={`Value: ${val}`} href={`/baseurl/${val}`}>
      <span
        style={{
          display: 'inline-block',
          width: 92,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}
      >
        {`Value: ${val}`}
      </span>
    </a>);
  }

  renderCity(val, row) {
  	console.log(row);
    if (!val) return (
      <span>{``}</span>
    );
    else
      return (
        <a
          href="#"
          data-action-name={'linkCity'}
          data-city-name={row.CITY}
        >
          {val}
      </a>
      );
  }

  renderMapUrl(val, row) {
    return (
    <a href={`https://www.google.com/maps?q=${row['LAT']},${row['LON']}`}>
      Google Maps
    </a>
    );
  }

  handleTableClick(dataAttrs) {
  	debugger;
    switch (dataAttrs.actionName) {
      case 'linkCity':
        alert(dataAttrs.cityName)
      default:
        console.error(
          new Error('No handler for table action: ' + dataAttrs.actionName));
        return undefined;
    }
  }

  buildTable(tableData) {
    var tableColumns = [
      { title: 'Name', prop: 'NAME', className: 'pushState' },
      { title: 'City', prop: 'CITY', render: this.renderCity, className: 'dtClickAction' },
      { title: 'Street address', prop: 'STREET ADDRESS' },
      { title: 'Phone', prop: 'PHONE NUMBER', defaultContent: '<no phone>' },
      { title: 'Map', render: this.renderMapUrl, className: 'text-center' }
    ];


    return (
      <DataTable
        className="container"
        keys={['NAME', 'OUTLET TYPE', 'STREET ADDRESS']}
        columns={tableColumns}
        clickHandler={this.handleTableClick}
        dataArray={tableData}
        initialPageLength={5}
        sortBy={{ prop: 'CITY', order: 'desc' }}
        buttons={[
          'copy',
          'csv',
          'excel',
          {
            extend: 'pdf',
            orientation: 'landscape',
            pageSize: 'LEGAL',
            footer: true,
            filename: `Custom-Report-Filename`,
            message: `extra message here`,
            download: 'open'
          },
          'print',
          'colvis']}
        pageLengthOptions={[5, 20, 50]}
      />
    );
  }

  render() {
    if (tableData.length > 0) {
      return (
        <div>
          {this.buildTable(tableData)}
        </div>
      )
    }
    return (
      <div>Loading csv data....</div>
    );
  }
};

var initialState = {counter: 0}
var store = Redux.createStore(reducer, initialState)
function reducer(state, action) {
  return state
}

ReactDOM.render(
  <Provider store={store} key="provider">
    {React.createElement(TableInstance, null)}
  </Provider>,
  document.getElementById('root')
);
