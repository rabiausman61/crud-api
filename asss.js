const express = require("express");
const app = express();
app.use(express.json());
let faculty = 
[{
     
    "id": "1",
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
     
  "id": "2",
"name": "Ayesha",
"gender": "Female",
"email": " ayeshaarshad331@gmail.com",
"address" : {
  "street address": " House no 2229",
  "city": "sialkotm",
  "country " : "pakistan",
},
"course code": "CSS 222",
"phone no":["0300-8282828","333333" ,"3333333"   ],

 
},
{
     
  "id": "3",
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
app.get("/api/faculty", function (req, res) {
  res.send(faculty);
});
//get one resource
app.get("/api/faculty/:id", function (req, res) {
  if (!faculty[req.params.id])
    return res.status(400).send("data not found");
  res.send(faculty[req.params.id]);
});
app.post("/api/faculty/:id", function (req, res) {
  faculty.push(req.body);
  res.send("Record added");
}); 

app.delete("/api/faculty/:id", function (req, res) {
  faculty.splice(req.params.id, 1);
  res.send(faculty);
}); 
app.put("/api/faculty/:id", function (req, res) {
    // Reading isbn from the URL
    const id = req.params.id;
    const newBook = req.body;

    // Remove item from the books array
    for (let i = 0; i < faculty.length; i++) {
        let book = faculty[i]
        if (book.id === id) {
            faculty[i] = newBook;
        }
    }

    res.send('Record edited');
});

app.listen(3000);