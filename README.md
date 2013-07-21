SkillsChart
===========

Skills Diagram - JavaScript Widget made with Raphael.js derived from http://tympanus.net/codrops/2011/04/22/animated-skills-diagram/

Usage:

    Html: <div id="diagram"></div>
    
    Required Libraries: raphael.js
                        SkillsChart.js  

    JavaScript:
    var skills = {
              name: 'Skills',
              font: '8px Arial',
              fill: '#fff',
              fillbg: '#193340',
              size: 200,
              skills: [
                  {name: '.NET/C#', color: '#433F4A', value: 90},
                  {name: 'Linq', color: '#3A356B', value: 84},
                  {name: 'ASP.NET MVC', color: '#2E3754', value: 79},
                  {name: 'Entity Framework', color: '#35526B', value: 63},
                  {name: 'Enterprise Library', color: '#25444A', value: 52},
                  {name: 'SQL Server', color: '#254A3E', value: 55}
              ]
    }

    var diagram = new SkillsDiagram(skills, 'diagram');
    diagram.draw();

Demo: http://jsfiddle.net/stefanszakal/St9Ky/1/

