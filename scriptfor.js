var studentList =
[{   "Name": "Azarudeen",
    "Address": "woraiyur",
    "District": "Trichy"
},
{   "Name": "Raja ",
    "Address": "T-nagar",
    "District": "salem"
},
{   "Name": "Ragupathy",
    "Address": "KK-Nagar",
    "District": "chennai"
},
]
//for loop/
for(var i=0;i<studentList.length;i++)
{
    console.log(studentList[i].Name);
}

//for in//

for(var j in studentList)
{
 
    console.log(studentList[j].Address );

}
//for of
for(var j of studentList)
{
 
    console.log(j.District);

}
//forEach

studentList.forEach(function (student){

    console.log(student.Name);
    console.log(student.District);
});











