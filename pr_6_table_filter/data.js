let record = [
    {
        GRID: 1,
        NAME: "jay",
        SURNAME: "rathod",
        CITY: "surat",
        DESIGNATION: "senior",
        SALARY: 35000,
        EXPERIENCE: "2 years",
        GENDER: "male",
    },
    {
        GRID: 2,
        NAME: "aarya",
        SURNAME: "patel",
        CITY: "ahmedabad",
        DESIGNATION: "junior",
        SALARY: 25000,
        EXPERIENCE: "1 year",
        GENDER: "female",
    },
    {
        GRID: 3,
        NAME: "rohan",
        SURNAME: "sharma",
        CITY: "surat",
        DESIGNATION: "manager",
        SALARY: 50000,
        EXPERIENCE: "5 years",
        GENDER: "male",
    },
    {
        GRID: 4,
        NAME: "meera",
        SURNAME: "joshi",
        CITY: "pune",
        DESIGNATION: "senior",
        SALARY: 40000,
        EXPERIENCE: "3 years",
        GENDER: "female",
    },
    {
        GRID: 5,
        NAME: "vishal",
        SURNAME: "mehta",
        CITY: "delhi",
        DESIGNATION: "team lead",
        SALARY: 60000,
        EXPERIENCE: "7 years",
        GENDER: "male",
    },
    {
        GRID: 6,
        NAME: "nisha",
        SURNAME: "kapoor",
        CITY: "bangalore",
        DESIGNATION: "developer",
        SALARY: 32000,
        EXPERIENCE: "2 years",
        GENDER: "female",
    },
    {
        GRID: 7,
        NAME: "rahul",
        SURNAME: "yadav",
        CITY: "hyderabad",
        DESIGNATION: "senior",
        SALARY: 45000,
        EXPERIENCE: "4 years",
        GENDER: "male",
    },
    {
        GRID: 8,
        NAME: "tanya",
        SURNAME: "saxena",
        CITY: "ahmedabad",
        DESIGNATION: "junior",
        SALARY: 27000,
        EXPERIENCE: "1.5 years",
        GENDER: "female",
    },
    {
        GRID: 9,
        NAME: "akash",
        SURNAME: "verma",
        CITY: "chennai",
        DESIGNATION: "manager",
        SALARY: 55000,
        EXPERIENCE: "6 years",
        GENDER: "male",
    },
    {
        GRID: 10,
        NAME: "simran",
        SURNAME: "bansal",
        CITY: "jaipur",
        DESIGNATION: "senior",
        SALARY: 38000,
        EXPERIENCE: "3 years",
        GENDER: "female",
    },
    {
        GRID: 11,
        NAME: "deepak",
        SURNAME: "shukla",
        CITY: "lucknow",
        DESIGNATION: "team lead",
        SALARY: 62000,
        EXPERIENCE: "8 years",
        GENDER: "male",
    },
    {
        GRID: 12,
        NAME: "priya",
        SURNAME: "gandhi",
        CITY: "ahmedabad",
        DESIGNATION: "developer",
        SALARY: 31000,
        EXPERIENCE: "2 years",
        GENDER: "female",
    },
    {
        GRID: 13,
        NAME: "sandeep",
        SURNAME: "thakur",
        CITY: "bhopal",
        DESIGNATION: "senior",
        SALARY: 42000,
        EXPERIENCE: "4 years",
        GENDER: "male",
    },
    {
        GRID: 14,
        NAME: "kritika",
        SURNAME: "sinha",
        CITY: "patna",
        DESIGNATION: "junior",
        SALARY: 26000,
        EXPERIENCE: "1 year",
        GENDER: "female",
    },
    {
        GRID: 15,
        NAME: "yuvraj",
        SURNAME: "rana",
        CITY: "indore",
        DESIGNATION: "manager",
        SALARY: 53000,
        EXPERIENCE: "5 years",
        GENDER: "male",
    },
    {
        GRID: 16,
        NAME: "riya",
        SURNAME: "sehgal",
        CITY: "bhopal",
        DESIGNATION: "senior",
        SALARY: 39000,
        EXPERIENCE: "3.5 years",
        GENDER: "female",
    },
    {
        GRID: 17,
        NAME: "harsh",
        SURNAME: "gupta",
        CITY: "nashik",
        DESIGNATION: "team lead",
        SALARY: 58000,
        EXPERIENCE: "7 years",
        GENDER: "male",
    },
    {
        GRID: 18,
        NAME: "pallavi",
        SURNAME: "mishra",
        CITY: "ahmedabad",
        DESIGNATION: "developer",
        SALARY: 33000,
        EXPERIENCE: "2.5 years",
        GENDER: "female",
    },
    {
        GRID: 19,
        NAME: "sahil",
        SURNAME: "khan",
        CITY: "vadodara",
        DESIGNATION: "senior",
        SALARY: 41000,
        EXPERIENCE: "3 years",
        GENDER: "male",
    },
    {
        GRID: 20,
        NAME: "neha",
        SURNAME: "sharma",
        CITY: "varanasi",
        DESIGNATION: "junior",
        SALARY: 25500,
        EXPERIENCE: "1 year",
        GENDER: "female",
    },
    {
        GRID: 21,
        NAME: "anil",
        SURNAME: "dubey",
        CITY: "raipur",
        DESIGNATION: "manager",
        SALARY: 52000,
        EXPERIENCE: "6 years",
        GENDER: "male",
    },
    {
        GRID: 22,
        NAME: "sneha",
        SURNAME: "purohit",
        CITY: "meerut",
        DESIGNATION: "senior",
        SALARY: 37000,
        EXPERIENCE: "3 years",
        GENDER: "female",
    },
    {
        GRID: 23,
        NAME: "arjun",
        SURNAME: "singh",
        CITY: "ranchi",
        DESIGNATION: "team lead",
        SALARY: 60000,
        EXPERIENCE: "8 years",
        GENDER: "male",
    },
    {
        GRID: 24,
        NAME: "isha",
        SURNAME: "verma",
        CITY: "dehradun",
        DESIGNATION: "developer",
        SALARY: 34000,
        EXPERIENCE: "2 years",
        GENDER: "female",
    },
    {
        GRID: 25,
        NAME: "kartik",
        SURNAME: "bajaj",
        CITY: "raipur",
        DESIGNATION: "senior",
        SALARY: 43000,
        EXPERIENCE: "4 years",
        GENDER: "male",
    }
];
const allRecord = () => {
    let tbl = "";
    record.map((val) => {
        tbl += `
                    <tr>
                        <td>${val.GRID}</td>
                        <td>${val.NAME}</td>
                        <td>${val.SURNAME}</td>
                        <td>${val.CITY}</td>
                        <td>${val.DESIGNATION}</td>
                        <td>${val.SALARY}</td>
                        <td>${val.EXPERIENCE}</td>
                        <td>${val.GENDER}</td>
                    </tr>`
        document.getElementById(`tableData`).innerHTML = tbl;
    })
}

allRecord();

const findcity = () => {
    
    let city = document.getElementById(`city`).value;

    let filtercity = record.filter((value) => {
        return value.CITY.includes(city);
    })

    let tbl = "";
    filtercity.map((val) => {
        tbl += `
                    <tr>
                        <td>${val.GRID}</td>
                        <td>${val.NAME}</td>
                        <td>${val.SURNAME}</td>
                        <td>${val.CITY}</td>
                        <td>${val.DESIGNATION}</td>
                        <td>${val.SALARY}</td>
                        <td>${val.EXPERIENCE}</td>
                        <td>${val.GENDER}</td>
                    </tr>`
       
    })

    document.getElementById(`tableData`).innerHTML = tbl;


}

// const findansCity = () => {
//     let searchCity = document.getElementById(`searchCity`).value;

//     let filterCity = record.filter((val, index) => {
//         return searchCity == val.CITY;
//     })

//     document.getElementById(`searchCity`).value = "";

//     let tbl = "";
//     filterCity.map((val) => {
//         tbl += `
//                     <tr>
//                         <td>${val.GRID}</td>
//                         <td>${val.NAME}</td>
//                         <td>${val.SURNAME}</td>
//                         <td>${val.CITY}</td>
//                         <td>${val.DESIGNATION}</td>
//                         <td>${val.SALARY}</td>
//                         <td>${val.EXPERIENCE}</td>
//                         <td>${val.GENDER}</td>
//                     </tr>`
//         document.getElementById(`tableData`).innerHTML = tbl;
//     })
// }

const findansDesignation = () => {
    let designation = document.getElementById(`searchDesignation`).value;

    let filterDesignation = record.filter((val, index) => {
        return val.DESIGNATION == designation;
    })

    document.getElementById(`searchDesignation`).value="";

    let tbl = "";
    filterDesignation.map((val) => {
        tbl += `
                    <tr>
                        <td>${val.GRID}</td>
                        <td>${val.NAME}</td>
                        <td>${val.SURNAME}</td>
                        <td>${val.CITY}</td>
                        <td>${val.DESIGNATION}</td>
                        <td>${val.SALARY}</td>
                        <td>${val.EXPERIENCE}</td>
                        <td>${val.GENDER}</td>
                    </tr>`
        document.getElementById(`tableData`).innerHTML = tbl;
    })
}

const findansGender = () => {


    let searchGender = document.getElementById(`searchGender`).value;

    let filterGender = record.filter((val, index) => {
        return val.GENDER == searchGender;
    })

    document.getElementById(`searchGender`).value = "";

    let tbl = "";
    filterGender.map((val) => {
        tbl += `
                    <tr>
                        <td>${val.GRID}</td>
                        <td>${val.NAME}</td>
                        <td>${val.SURNAME}</td>
                        <td>${val.CITY}</td>
                        <td>${val.DESIGNATION}</td>
                        <td>${val.SALARY}</td>
                        <td>${val.EXPERIENCE}</td>
                        <td>${val.GENDER}</td>
                    </tr>`
        document.getElementById(`tableData`).innerHTML = tbl;
    })


}

const findansSalary = () => {
    let startSalary = document.getElementById(`startSalary`).value;
    let endSalary = document.getElementById(`endSalary`).value;

    let filterSalary = record.filter((val, index) => {
        if (val.SALARY >= startSalary && val.SALARY <= endSalary) {
            return true;
        }
    })

    document.getElementById(`startSalary`).value="";
    document.getElementById(`endSalary`).value="";

    let tbl = "";
    filterSalary.map((val) => {
        tbl += `
                    <tr>
                        <td>${val.GRID}</td>
                        <td>${val.NAME}</td>
                        <td>${val.SURNAME}</td>
                        <td>${val.CITY}</td>
                        <td>${val.DESIGNATION}</td>
                        <td>${val.SALARY}</td>
                        <td>${val.EXPERIENCE}</td>
                        <td>${val.GENDER}</td>
                    </tr>`
        document.getElementById(`tableData`).innerHTML = tbl;
    })
}

const findansYear = () => {
    let startYear = document.getElementById(`startYear`).value;
    let endYear = document.getElementById(`endYear`).value;

    let filterYear = record.filter((val, index) => {
        if (val.EXPERIENCE >= startYear && val.EXPERIENCE <= endYear) {
            return true;
        }

    })

    document.getElementById(`startYear`).value="";
    document.getElementById(`endYear`).value="";

    let tbl = "";
    filterYear.map((val) => {
        tbl += `
                    <tr>
                        <td>${val.GRID}</td>
                        <td>${val.NAME}</td>
                        <td>${val.SURNAME}</td>
                        <td>${val.CITY}</td>
                        <td>${val.DESIGNATION}</td>
                        <td>${val.SALARY}</td>
                        <td>${val.EXPERIENCE}</td>
                        <td>${val.GENDER}</td>
                    </tr>`
        document.getElementById(`tableData`).innerHTML = tbl;
    })
}

