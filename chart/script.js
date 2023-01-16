let charte = document.getElementById("myChart");
new Chart(charte,{
    
      type: 'bar',
      data: {
        labels: ["damien", "paul", "pierre"],
        backgroundColor: ['yellow','','blue'],
        datasets: [
           {
           label: "Francais",
           data: [20, 10, 12],
           backgroundColor: ['green','red','blue'],
           },{
           label: "Math",
           data: [107, 115, 2],
           backgroundColor: ['green','red','blue'],
           },{
           label: "biologie",
           data: [120, 116, 9],
           backgroundColor: ['green','red','blue'],
           }
        ]
      }
    });