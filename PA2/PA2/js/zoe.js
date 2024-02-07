function display(){
	


	var url="https://api.thenewsapi.com/v1/news/top?api_token=Z731U1TS80e5eGV8DnJZb5sbUikFAi311uRfweVk&locale=us&limit=5 ";
	var re= new XMLHttpRequest();
	re.open("Get",url,true);
	re.onreadystatechange=function(){
           
             if(re.readyState==4 && re.status==200){

                       var json=JSON.parse(re.responseText);
                   console.log(json.data[0].url);
                   let format='';
                   for(v=0;v<json.data.length;v++){


                      format+='<div sstyle="width:500px;float:left ;height:600px;border-bottom-width:thick; background:#c9db99;margin-left:150px;border-radius:30px">'+
                  ' <h1 style="color:purple;font-size:26px;vertical-align:center;margin-left:300px;"> '+json.data[v].title+ '</h1>'+
                  '<img src="'+json.data[v].image_url+'" style="width:30%;height=30% ; margin left: 80px;">'+
                 
                  '<p style="font-size:22px; color:blue"> Source: ' +json.data[v].source+'</p>'+
                   '<a href="'+json.data[v].url+'"style="text-decoration:none;color:green"> link to article'+ '</a>'+
                   '<p style="font-size:22px; color:orange"> Description: ' +json.data[v].description+'</p>'+
                   '<p style="font-size:22px; color:blue"> Published: ' +json.data[v].published_at+'</p>'+
                  
                   '</div>';


                   };
                   document.getElementById("sa").innerHTML=format;

	}
}
	re.send();
};
function move(){
 let box = document.getElementById("box");
 if(box.style.left.replace("px","") < 1200 && check == true){
   moveRight(box);
  }else if (box.style.left.replace("px","") == 1200 || check == false)
    {

      if(box.style.left.replace("px","") > 0){
          check = false;
          moveleft(box);
      }else if (box.style.left.replace("px","") == 0){
            check = true;
        }
    }
}
function moveRight(box){
   if(box.style.left != ""){
     let temp = box.style.left.replace("px","");
     temp = parseInt(temp);
     box.style.left = temp+1+"px";
   }else{box.style.left = "1px";}
}
function moveleft(box){
   if(box.style.left != ""){
     let temp = box.style.left.replace("px","");
     temp = parseInt(temp);
     box.style.left = temp-1+"px";
   }else{box.style.left = "1px";}
}
var check = true;
setInterval(move,2);

function COVID(){
	


	var url="https://disease.sh/v3/covid-19/countries/SOUTH%20AFRICA?strict=true ";
	var re= new XMLHttpRequest();
	re.open("Get",url,true);
	re.onreadystatechange=function(){
           
             if(re.readyState==4 && re.status==200){

                       var json=JSON.parse(re.responseText);
                   //console.log(json.data[0].url);
                   let format='';
                  


                      format+=//'<div sstyle="width:500px;float:left ;height:600px;border-bottom-width:thick; background:#c9db99;margin-left:150px;border-radius:30px">'+
                  //' <h1 style="color:purple;font-size:26px;vertical-align:center;margin-left:300px;"> '+json.updated+ '</h1>'+
                  //'<img src="'+json.data[v].image_url+'" style="width:30%;height=30% ; margin left: 80px;">'+
                 // ' <h1 style="color:purple;font-size:26px;vertical-align:center;margin-left:300px;"> '+json.deaths+ '</h1>'+
                  '<p style="font-size:15px; color:orange"> Country: ' +json.country+'</p>'+
                   
                    '<p style="font-size:15px; color:pink"> CountryInfo.id: ' +json.countryInfo.id+'</p>'+
                      '<p style="font-size:15px; color:blue">countryInfo.iso2: ' +json.countryInfo.iso2+'</p>'+
                        '<p style="font-size:15px; color:orange"> countryInfo.iso3: ' +json.countryInfo.iso3+'</p>'+
                    '<p style="font-size:15px; color:red"> json.countryInfo.lat: ' +json.countryInfo.lat+'</p>'+
                      '<p style="font-size:15px; color:yellow">.countryInfo.long: ' +json.countryInfo.long+'</p>'+
                       '<img src="'+json.countryInfo.flag+'" style="width:30%;height=30% ; margin left: 80px;">'+
                 
                  '<p style="font-size:15px; color:red"> cases: ' +json.cases+'</p>'+
                 '<p style="font-size:15px; color:blue"> TodaysCases: ' +json.todayCases+'</p>'+
                  '<p style="font-size:15px; color:white"> deaths: ' +json.deaths+'</p>'+
                  '<p style="font-size:15px; color:purple"> todayDeaths: ' +json.todayDeaths+'</p>'+
                  '<p style="font-size:15px; color:blue"> recovered: ' +json.recovered+'</p>'+
                   '<p style="font-size:15px; color:blue"> todayRecovered: ' +json.todayRecovered+'</p>'+
                 
                  '<p style="font-size:15px; color:green"> active: ' +json.active+'</p>'+
                  '<p style="font-size:15px; color:red"> critical: ' +json.critical+'</p>'+
                  '<p style="font-size:15px; color:orange"> casesPerOneMillion: ' +json.casesPerOneMillion+'</p>'+
                  '<p style="font-size:15px; color:white"> deathsPerOneMillion: ' +json.deathsPerOneMillion+'</p>'+
                  '<p style="font-size:15px; color:pink"> tests: ' +json.tests+'</p>'+
                  '<p style="font-size:15px; color:yellow"> testsPerOneMillion: ' +json.testsPerOneMillion+'</p>'+
                  '<p style="font-size:15px; color:blue"> population: ' +json.population+'</p>'+
                   '<p style="font-size:15px; color:purple"> continent: ' +json.continent+'</p>'+
                   '<p style="font-size:15px; color:red"> oneCasePerPeople: ' +json.oneCasePerPeople+'</p>'+
                   '<p style="font-size:15px; color:green"> oneDeathPerPeople: ' +json.oneDeathPerPeople+'</p>'+
                   '<p style="font-size:15px; color:orange"> oneTestPerPeople: ' +json.oneTestPerPeople+'</p>'+
                    '<p style="font-size:15px; color:pink"> activePerOneMillion: ' +json.activePerOneMillion+'</p>'+
                   '<p style="font-size:15px; color:purple"> recoveredPerOneMillion: ' +json.recoveredPerOneMillion+'</p>'+
                    '<p style="font-size:15px; color:red"> criticalPerOneMillion: ' +json.criticalPerOneMillion+'</p>'+
                   
                   
                  
                  
                  // '<p style="font-size:22px; color:blue"> Published: ' +json.data[v].published_at+'</p>'+
                 
                  
                   '</div>';


                       

                   document.getElementById("sa").innerHTML=format;

	}
}
	re.send();
};
//calendar time
var cal = {
  // (A) PROPERTIES
  // (A1) COMMON CALENDAR
  sMon : false, // Week start on Monday?
  mName : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], // Month Names

  // (A2) CALENDAR DATA
  data : null, // Events for the selected period
  sDay : 0, sMth : 0, sYear : 0, // Current selected day, month, year

  // (A3) COMMON HTML ELEMENTS
  hMth : null, hYear : null, // month/year selector
  hForm : null, hfHead : null, hfDate : null, hfTxt : null, hfDel : null, // event form

  // (B) INIT CALENDAR
  init : () => {
    // (B1) GET + SET COMMON HTML ELEMENTS
    cal.hMth = document.getElementById("cal-mth");
    cal.hYear = document.getElementById("cal-yr");
    cal.hForm = document.getElementById("cal-event");
    cal.hfHead = document.getElementById("evt-head");
    cal.hfDate = document.getElementById("evt-date");
    cal.hfTxt = document.getElementById("evt-details");
    cal.hfDel = document.getElementById("evt-del");
    document.getElementById("evt-close").onclick = cal.close;
    cal.hfDel.onclick = cal.del;
    cal.hForm.onsubmit = cal.save;

    // (B2) DATE NOW
    let now = new Date(),
        nowMth = now.getMonth(),
        nowYear = parseInt(now.getFullYear());

    // (B3) APPEND MONTHS SELECTOR
    for (let i=0; i<12; i++) {
      let opt = document.createElement("option");
      opt.value = i;
      opt.innerHTML = cal.mName[i];
      if (i==nowMth) { opt.selected = true; }
      cal.hMth.appendChild(opt);
    }
    cal.hMth.onchange = cal.list;

    // (B4) APPEND YEARS SELECTOR
    // Set to 10 years range. Change this as you like.
    for (let i=nowYear-10; i<=nowYear+10; i++) {
      let opt = document.createElement("option");
      opt.value = i;
      opt.innerHTML = i;
      if (i==nowYear) { opt.selected = true; }
      cal.hYear.appendChild(opt);
    }
    cal.hYear.onchange = cal.list;

    // (B5) START - DRAW CALENDAR
    cal.list();
  },

  // (C) DRAW CALENDAR FOR SELECTED MONTH
  list : () => {
    // (C1) BASIC CALCULATIONS - DAYS IN MONTH, START + END DAY
    // Note - Jan is 0 & Dec is 11
    // Note - Sun is 0 & Sat is 6
    cal.sMth = parseInt(cal.hMth.value); // selected month
    cal.sYear = parseInt(cal.hYear.value); // selected year
    let daysInMth = new Date(cal.sYear, cal.sMth+1, 0).getDate(), // number of days in selected month
        startDay = new Date(cal.sYear, cal.sMth, 1).getDay(), // first day of the month
        endDay = new Date(cal.sYear, cal.sMth, daysInMth).getDay(), // last day of the month
        now = new Date(), // current date
        nowMth = now.getMonth(), // current month
        nowYear = parseInt(now.getFullYear()), // current year
        nowDay = cal.sMth==nowMth && cal.sYear==nowYear ? now.getDate() : null ;

    // (C2) LOAD DATA FROM LOCALSTORAGE
    cal.data = localStorage.getItem("cal-" + cal.sMth + "-" + cal.sYear);
    if (cal.data==null) {
      localStorage.setItem("cal-" + cal.sMth + "-" + cal.sYear, "{}");
      cal.data = {};
    } else { cal.data = JSON.parse(cal.data); }

    // (C3) DRAWING CALCULATIONS
    // Blank squares before start of month
    let squares = [];
    if (cal.sMon && startDay != 1) {
      let blanks = startDay==0 ? 7 : startDay ;
      for (let i=1; i<blanks; i++) { squares.push("b"); }
    }
    if (!cal.sMon && startDay != 0) {
      for (let i=0; i<startDay; i++) { squares.push("b"); }
    }

    // Days of the month
    for (let i=1; i<=daysInMth; i++) { squares.push(i); }

    // Blank squares after end of month
    if (cal.sMon && endDay != 0) {
      let blanks = endDay==6 ? 1 : 7-endDay;
      for (let i=0; i<blanks; i++) { squares.push("b"); }
    }
    if (!cal.sMon && endDay != 6) {
      let blanks = endDay==0 ? 6 : 6-endDay;
      for (let i=0; i<blanks; i++) { squares.push("b"); }
    }

    // (C4) DRAW HTML CALENDAR
    // Get container
    let container = document.getElementById("cal-container"),
    cTable = document.createElement("table");
    cTable.id = "calendar";
    container.innerHTML = "";
    container.appendChild(cTable);

    // First row - Day names
    let cRow = document.createElement("tr"),
        days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    if (cal.sMon) { days.push(days.shift()); }
    for (let d of days) {
      let cCell = document.createElement("td");
      cCell.innerHTML = d;
      cRow.appendChild(cCell);
    }
    cRow.classList.add("head");
    cTable.appendChild(cRow);

    // Days in Month
    let total = squares.length;
    cRow = document.createElement("tr");
    cRow.classList.add("day");
    for (let i=0; i<total; i++) {
      let cCell = document.createElement("td");
      if (squares[i]=="b") { cCell.classList.add("blank"); }
      else {
        if (nowDay==squares[i]) { cCell.classList.add("today"); }
        cCell.innerHTML = `<div class="dd">${squares[i]}</div>`;
        if (cal.data[squares[i]]) {
          cCell.innerHTML += "<div class='evt'>" + cal.data[squares[i]] + "</div>";
        }
        cCell.onclick = () => { cal.show(cCell); };
      }
      cRow.appendChild(cCell);
      if (i!=0 && (i+1)%7==0) {
        cTable.appendChild(cRow);
        cRow = document.createElement("tr");
        cRow.classList.add("day");
      }
    }

    // (C5) REMOVE ANY PREVIOUS ADD/EDIT EVENT DOCKET
    cal.close();
  },

  // (D) SHOW EDIT EVENT DOCKET FOR SELECTED DAY
  show : (el) => {
    // (D1) FETCH EXISTING DATA
    cal.sDay = el.getElementsByClassName("dd")[0].innerHTML;
    let isEdit = cal.data[cal.sDay] !== undefined ;

    // (D2) UPDATE EVENT FORM
    cal.hfTxt.value = isEdit ? cal.data[cal.sDay] : "" ;
    cal.hfHead.innerHTML = isEdit ? "EDIT EVENT" : "ADD EVENT" ;
    cal.hfDate.innerHTML = `${cal.sDay} ${cal.mName[cal.sMth]} ${cal.sYear}`;
    if (isEdit) { cal.hfDel.classList.remove("ninja"); }
    else { cal.hfDel.classList.add("ninja"); }
    cal.hForm.classList.remove("ninja");
  },

  // (E) CLOSE EVENT DOCKET
  close : () => {
    cal.hForm.classList.add("ninja");
  },

  // (F) SAVE EVENT
  save : () => {
    cal.data[cal.sDay] = cal.hfTxt.value;
    localStorage.setItem(`cal-${cal.sMth}-${cal.sYear}`, JSON.stringify(cal.data));
    cal.list();
    return false;
  },

  // (G) DELETE EVENT FOR SELECTED DATE
  del : () => { if (confirm("Delete event?")) {
    delete cal.data[cal.sDay];
    localStorage.setItem(`cal-${cal.sMth}-${cal.sYear}`, JSON.stringify(cal.data));
    cal.list();
  }}
};
window.addEventListener("load", cal.init);

window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; // class "loader hidden"
});

function searcha(){

  var answer=document.getElementById("person").value;
   console.log(answer);
   var ul='https://newsdata.io/api/1/news?apikey=pub_60443c55a66b51150856660dab44f9620f93&q=';
    var ke='&language=en';
  var url=ul+document.getElementById("person").value+ke;
  console.log(url);
  var re= new XMLHttpRequest();
 re.open("Get",url,true);
  re.onreadystatechange=function(){
           
             if(re.readyState==4 && re.status==200){

                       var json=JSON.parse(re.responseText);
                   console.log(answer);
                   let format='';
                   for(v=0;v<6;v++){


                      format+='<div sstyle="width:500px;float:left ;height:600px;border-bottom-width:thick; background:#c9db99;margin-left:150px;border-radius:30px">'+
                  ' <h1 style="color:purple;font-size:26px;vertical-align:center;margin-left:300px;"> '+json.results[v].title+ '</h1>'+
                  //'<img src="'+json.data[v].image_url+'" style="width:30%;height=30% ; margin left: 80px;">'+
                 
                  '<p style="font-size:22px; color:blue"> Creator: ' +json.results[v].creator+'</p>'+
                   '<a href="'+json.results[v].link+'"style="text-decoration:none;color:green"> link to article'+ '</a>'+
                   '<p style="font-size:22px; color:orange"> Country: ' +json.results[v].country+'</p>'+
                   '<p style="font-size:22px; color:blue"> Category: ' +json.results[v].Category+'</p>'+
                  
                   '</div>';


                   };
                   document.getElementById("sa").innerHTML=format;

  }
}
  re.send();
};

function sports(){

  var answer=document.getElementById("person").value;
   console.log(answer);
   var ul='https://newsdata.io/api/1/news?apikey=pub_60443c55a66b51150856660dab44f9620f93&q=';
    var ke='&language=en';
  var url="https://newsdata.io/api/1/news?apikey=pub_60443c55a66b51150856660dab44f9620f93&category=sports&language=en"; 

  console.log(url);
  var re= new XMLHttpRequest();
 re.open("Get",url,true);
  re.onreadystatechange=function(){
           
             if(re.readyState==4 && re.status==200){

                       var json=JSON.parse(re.responseText);
                   console.log(answer);
                   let format='';
                   for(v=0;v<6;v++){


                      format+='<div sstyle="width:500px;float:left ;height:600px;border-bottom-width:thick; background:#c9db99;margin-left:150px;border-radius:30px">'+
                  ' <h1 style="color:purple;font-size:26px;vertical-align:center;margin-left:300px;"> '+json.results[v].title+ '</h1>'+
                  //'<img src="'+json.data[v].image_url+'" style="width:30%;height=30% ; margin left: 80px;">'+
                 
                  '<p style="font-size:22px; color:blue"> Creator: ' +json.results[v].creator+'</p>'+
                   '<a href="'+json.results[v].link+'"style="text-decoration:none;color:green"> link to article'+ '</a>'+
                   '<p style="font-size:22px; color:orange"> Country: ' +json.results[v].country+'</p>'+
                   '<p style="font-size:22px; color:blue"> Category: ' +json.results[v].Category+'</p>'+
                  
                   '</div>';


                   };
                   document.getElementById("sa").innerHTML=format;

  }
}
  re.send();
};
 function environment(){

  var answer=document.getElementById("person").value;
   console.log(answer);
   var ul='https://newsdata.io/api/1/news?apikey=pub_60443c55a66b51150856660dab44f9620f93&q=';
    var ke='&language=en';
  var url="https://newsdata.io/api/1/news?apikey=pub_60443c55a66b51150856660dab44f9620f93&category=environment&language=en"; 

  console.log(url);
  var re= new XMLHttpRequest();
 re.open("Get",url,true);
  re.onreadystatechange=function(){
           
             if(re.readyState==4 && re.status==200){

                       var json=JSON.parse(re.responseText);
                   console.log(answer);
                   let format='';
                   for(v=0;v<6;v++){


                      format+='<div sstyle="width:500px;float:left ;height:600px;border-bottom-width:thick; background:#c9db99;margin-left:150px;border-radius:30px">'+
                  ' <h1 style="color:purple;font-size:26px;vertical-align:center;margin-left:300px;"> '+json.results[v].title+ '</h1>'+
                  //'<img src="'+json.data[v].image_url+'" style="width:30%;height=30% ; margin left: 80px;">'+
                 
                  '<p style="font-size:22px; color:blue"> Creator: ' +json.results[v].creator+'</p>'+
                   '<a href="'+json.results[v].link+'"style="text-decoration:none;color:green"> link to article'+ '</a>'+
                   '<p style="font-size:22px; color:orange"> Country: ' +json.results[v].country+'</p>'+
                   '<p style="font-size:22px; color:blue"> Category: ' +json.results[v].Category+'</p>'+
                  
                   '</div>';


                   };
                   document.getElementById("sa").innerHTML=format;

  }
}
  re.send();
};
 
function entertainment(){

  var answer=document.getElementById("person").value;
   console.log(answer);
   var ul='https://newsdata.io/api/1/news?apikey=pub_60443c55a66b51150856660dab44f9620f93&q=';
    var ke='&language=en';
  var url="https://newsdata.io/api/1/news?apikey=pub_60443c55a66b51150856660dab44f9620f93&category=entertainment&language=en"; 

  console.log(url);
  var re= new XMLHttpRequest();
 re.open("Get",url,true);
  re.onreadystatechange=function(){
           
             if(re.readyState==4 && re.status==200){

                       var json=JSON.parse(re.responseText);
                   console.log(answer);
                   let format='';
                   for(v=0;v<6;v++){


                      format+='<div sstyle="width:500px;float:left ;height:600px;border-bottom-width:thick; background:#c9db99;margin-left:150px;border-radius:30px">'+
                  ' <h1 style="color:purple;font-size:26px;vertical-align:center;margin-left:300px;"> '+json.results[v].title+ '</h1>'+
                  //'<img src="'+json.data[v].image_url+'" style="width:30%;height=30% ; margin left: 80px;">'+
                 
                  '<p style="font-size:22px; color:blue"> Creator: ' +json.results[v].creator+'</p>'+
                   '<a href="'+json.results[v].link+'"style="text-decoration:none;color:green"> link to article'+ '</a>'+
                   '<p style="font-size:22px; color:orange"> Country: ' +json.results[v].country+'</p>'+
                   '<p style="font-size:22px; color:blue"> Category: ' +json.results[v].Category+'</p>'+
                  
                   '</div>';


                   };
                   document.getElementById("sa").innerHTML=format;

  }
}
  re.send();
};
 
function health(){

  var answer=document.getElementById("person").value;
   console.log(answer);
   var ul='https://newsdata.io/api/1/news?apikey=pub_60443c55a66b51150856660dab44f9620f93&q=';
    var ke='&language=en';
  var url="https://newsdata.io/api/1/news?apikey=pub_60443c55a66b51150856660dab44f9620f93&category=health&language=en"; 

  console.log(url);
  var re= new XMLHttpRequest();
 re.open("Get",url,true);
  re.onreadystatechange=function(){
           
             if(re.readyState==4 && re.status==200){

                       var json=JSON.parse(re.responseText);
                   console.log(answer);
                   let format='';
                   for(v=0;v<6;v++){


                      format+='<div sstyle="width:500px;float:left ;height:600px;border-bottom-width:thick; background:#c9db99;margin-left:150px;border-radius:30px">'+
                  ' <h1 style="color:purple;font-size:26px;vertical-align:center;margin-left:300px;"> '+json.results[v].title+ '</h1>'+
                  //'<img src="'+json.data[v].image_url+'" style="width:30%;height=30% ; margin left: 80px;">'+
                 
                  '<p style="font-size:22px; color:blue"> Creator: ' +json.results[v].creator+'</p>'+
                   '<a href="'+json.results[v].link+'"style="text-decoration:none;color:green"> link to article'+ '</a>'+
                   '<p style="font-size:22px; color:orange"> Country: ' +json.results[v].country+'</p>'+
                   '<p style="font-size:22px; color:blue"> Category: ' +json.results[v].Category+'</p>'+
                  
                   '</div>';


                   };
                   document.getElementById("sa").innerHTML=format;

  }
}
  re.send();
};
 
function business(){

  var answer=document.getElementById("person").value;
   console.log(answer);
   var ul='https://newsdata.io/api/1/news?apikey=pub_60443c55a66b51150856660dab44f9620f93&q=';
    var ke='&language=en';
  var url="https://newsdata.io/api/1/news?apikey=pub_60443c55a66b51150856660dab44f9620f93&category=business&language=en"; 

  console.log(url);
  var re= new XMLHttpRequest();
 re.open("Get",url,true);
  re.onreadystatechange=function(){
           
             if(re.readyState==4 && re.status==200){

                       var json=JSON.parse(re.responseText);
                   console.log(answer);
                   let format='';
                   for(v=0;v<6;v++){


                      format+='<div sstyle="width:500px;float:left ;height:600px;border-bottom-width:thick; background:#c9db99;margin-left:150px;border-radius:30px">'+
                  ' <h1 style="color:purple;font-size:26px;vertical-align:center;margin-left:300px;"> '+json.results[v].title+ '</h1>'+
                  //'<img src="'+json.data[v].image_url+'" style="width:30%;height=30% ; margin left: 80px;">'+
                 
                  '<p style="font-size:22px; color:blue"> Creator: ' +json.results[v].creator+'</p>'+
                   '<a href="'+json.results[v].link+'"style="text-decoration:none;color:green"> link to article'+ '</a>'+
                   '<p style="font-size:22px; color:orange"> Country: ' +json.results[v].country+'</p>'+
                   '<p style="font-size:22px; color:blue"> Category: ' +json.results[v].Category+'</p>'+
                  
                   '</div>';


                   };
                   document.getElementById("sa").innerHTML=format;

  }
}
  re.send();
};
function world(){
  


  var url="https://api.thenewsapi.com/v1/news/all?api_token=Z731U1TS80e5eGV8DnJZb5sbUikFAi311uRfweVk&language=en&limit=5";
  var re= new XMLHttpRequest();
  re.open("Get",url,true);
  re.onreadystatechange=function(){
           
             if(re.readyState==4 && re.status==200){

                       var json=JSON.parse(re.responseText);
                   //console.log(json.data[0].url);
                   let format='';
                   for(v=0;v<json.data.length;v++){


                      format+='<div sstyle="width:500px;float:left ;height:600px;border-bottom-width:thick; background:#c9db99;margin-left:150px;border-radius:30px">'+
                  ' <h1 style="color:purple;font-size:26px;vertical-align:center;margin-left:300px;"> '+json.data[v].title+ '</h1>'+
                  '<img src="'+json.data[v].image_url+'" style="width:30%;height=30% ; margin left: 80px;">'+
                 
                  '<p style="font-size:22px; color:blue"> Source: ' +json.data[v].source+'</p>'+
                   '<a href="'+json.data[v].url+'"style="text-decoration:none;color:green"> link to article'+ '</a>'+
                   '<p style="font-size:22px; color:orange"> Description: ' +json.data[v].description+'</p>'+
                   '<p style="font-size:22px; color:blue"> Published: ' +json.data[v].published_at+'</p>'+
                  
                   '</div>';


                   };
                   document.getElementById("sa").innerHTML=format;

  }
}
  re.send();
}; 
function mzansi(){

  var url="https://api.thenewsapi.com/v1/news/top?api_token=Z731U1TS80e5eGV8DnJZb5sbUikFAi311uRfweVk&language=en&locale=za&limit=5%22 ";
  var re= new XMLHttpRequest();
  re.open("Get",url,true);
  re.onreadystatechange=function(){
           
             if(re.readyState==4 && re.status==200){

                       var json=JSON.parse(re.responseText);
                   console.log(json.data[0].url);
                   let format='';
                   for(v=0;v<json.data.length;v++){


                      format+='<div sstyle="width:500px;float:left ;height:600px;border-bottom-width:thick; background:#c9db99;margin-left:150px;border-radius:30px">'+
                  ' <h1 style="color:purple;font-size:26px;vertical-align:center;margin-left:300px;"> '+json.data[v].title+ '</h1>'+
                  '<img src="'+json.data[v].image_url+'" style="width:30%;height=30% ; margin left: 80px;">'+
                 
                  '<p style="font-size:22px; color:blue"> Source: ' +json.data[v].source+'</p>'+
                   '<a href="'+json.data[v].url+'"style="text-decoration:none;color:green"> link to article'+ '</a>'+
                   '<p style="font-size:22px; color:orange"> Description: ' +json.data[v].description+'</p>'+
                   '<p style="font-size:22px; color:blue"> Published: ' +json.data[v].published_at+'</p>'+
                  
                   '</div>';


                   };
                   document.getElementById("sa").innerHTML=format;

  }
}
  re.send();
};
  //var answer=document.getElementById("person").value;
  // console.log(answer);
  
 
