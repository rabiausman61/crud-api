const express = require("express");
const app = express();
app.use(express.json());
let faculty = 
[{
     
 
  "name": "Rabia",
  "gender": "Female",
  "email": " rabiausman331@gmail.com",
  "address": 
{
      "street address": " House no 2227",
      "city": "multan",
      "country " : "pakistan",
    },
  
  "course code": "CSS 211",
  "phone no":["0300-8282828","333333" ,"3333333"   ],
 },
 {
"name": "Ayesha",
"gender": "Female",
"email": " ayeshaarshad331@gmail.com",
"address" : {
  "street address": " House no 2229",
  "city": "sialkot",
  "country " : "pakistan",
},
"course code": "CSS 222",
"phone no":["0300-8282828","333333" ,"3333333"   ],
},
{
"name": "Tahir",
"gender": "Male",
"email": " tahirtariq@gmail.com",
"address": 
{
      "street address": " House no 2227",
      "city": "lahore",
      "country " : "pakistan",
    },
"course code": "CSS 333",
"phone no":["0300-8282828","333333" ,"3333333"   ],
 
},
];

let i = 0, ln = faculty.length;
for (i;i<ln;i++){
  faculty[i].uniqueId = i+1;
}

console.log(faculty);
app.get("/api/faculty", function (req, res) {
  res.send(faculty);
});
//get one resource
app.get("/api/faculty/:index", function (req, res) {
  if (!faculty[req.params.index])
    return res.status(400).send("data not found");
  res.send(faculty[req.params.index]);
});
app.post("/api/faculty/:index", function (req, res) {

faculty.push(req.body);

  res.send("Record added");
}); 

app.delete("/api/faculty/:index", function (req, res) {
  faculty.splice(req.params.index, 1);
  res.send(faculty);
}); 



app.put("/api/faculty/:index", function (req, res) {
  faculty[req.params.index] = req.body;
 

  res.send(faculty[req.params.index]);
});


  app.listen(3000);