# -function doGet(e) {
  var template = HtmlService.createTemplateFromFile('index')
  return  template.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME)
  .addMetaTag('viewport', 'width=device-width , initial-scale=1')
}

 function search(searchtext){
  var sheets = ss.getSheets();
   for(var i = 0; i < sheets.length; i++) {
     var setPlainText = ss.getSheets()[i]; 
     var sheetColumnA = setPlainText.getRange("A1:A");
     sheetColumnA.setNumberFormat("@");
   }
} 

function getCode(code) {

var sheets =  ['ชีต1','ค่าเทอม']
for(var i in sheets){
var ws = SpreadsheetApp.openById("1_1zrJLUi6fHdwUuR_mXpb9vGEye6MsUFNwwqMwE6uOc").getSheetByName(sheets[i])
var data = ws.getDataRange().getDisplayValues().filter(row =>{
return row[0] == code
})
if(data.length >0) break;
}

var stdCodesList = data.map (function(r) { return r[0]; }); 
var stdList = data.map(function(r) { 
return [`  
        <table class="table table-bordered">
        <thead class="thead-light">
         <tr>
          <th scope="col"><center>ชื่อ - สกุล</center"width:40%"}></th>
          <th scope="col"><center>ยอดเต็ม</center"width:15%"}></th>
          <th scope="col"><center>เบิกได้</center"width:15%"}></th>
          <th scope="col"><center>สถานะการอนุมัติ</center"width:15%"}></th>
          <th scope="col"><center>วันที่อนุมัติ</center"width:15%"}></th>
          <th scope="col"><center>หมายเหตุ</center"width:30%"}></th>
         </tr>
        </thead>
        <tbody>
         <tr>
          <td>${r[1]}</td> <td>${r[2]} <td>${r[3]}</td> <td>${r[4]}</td>  <td>${r[5]} <td>${r[6]}</td>
         </td>
         </tr>
        </tbody>
        </table>
        `];
});
var position = stdCodesList.indexOf(code); 
if(position > -1){
return stdList[position];
} else {
return '*ไม่พบข้อมูล';

  }
}
