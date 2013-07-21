/**
 * SkillsChart.js
 *
 * Skills Diagram - JavaScript Widget made with Raphael.js derived from http://tympanus.net/codrops/2011/04/22/animated-skills-diagram/
 *
 *
 * Copyright 2013 Stefan Szakal (@SSzakal)
 *
 * Released under the MIT and GPL Licenses.
 *
 * ------------------------------------------------
 *  author:  Stefan Szakal
 *  version: 0.1
 *  url:     https://github.com/o0nix/SkillsChart
 *  source:  http://github.com/bartaz/impress.js/
 */



function SkillDiagram (skills, elementName)
{
    this.skills = skills;
    this.draw = function() {
        var width = skills.size;
        
		var r = Raphael(elementName, width, width);
		var rad = width/7;
		var defaultText = skills.name;
		var speed = 250;
		
		r.circle(width/2, width/2, width/6).attr({ stroke: 'none', fill: skills.fillbg });
		
		var title = r.text(width/2, width/2, defaultText).attr({
			font: skills.font,
			fill: skills.fill
		}).toFront();
		
		r.customAttributes.arc = function(value, color, rad){
			var v = 3.6*value,
				alpha = v == 360 ? 359.99 : v,
				random = Math.floor((Math.random()*(240-91+1))+91),
				a = (random-alpha) * Math.PI/180,
				b = random * Math.PI/180,
				sx = width/2 + rad * Math.cos(b),
				sy = width/2 - rad * Math.sin(b),
				x = width/2 + rad * Math.cos(a),
				y = width/2 - rad * Math.sin(a),
				path = [['M', sx, sy], ['A', rad, rad, 0, +(alpha > 180), 1, x, y]];
			return { path: path, stroke: color }
		}
        
        var length = this.skills.skills.length;
        var entry = null;
        for (var i = 0; i < length; i++) {
          entry = this.skills.skills[i];
          var color = entry.color;
		  var value = entry.value;
		  var text = entry.name;
            
            rad += width/20;	
			var z = r.path().attr({ arc: [value, color, rad], 'stroke-width': width/24 });
            z.data({"entry": this.skills.skills[i]});
            z.mouseover(function(){
                this.animate({ 'stroke-width': width/14, opacity: .75 }, 1000, 'elastic');
                var entry = this.data('entry');
				title.stop().animate({ opacity: 0 }, speed, '>', function(){
					this.attr({ text: entry.name + '\n' + entry.value + '%' }).animate({ opacity: 1 }, speed, '<');
				});
            }).mouseout(function(){
				this.stop().animate({ 'stroke-width': width/24, opacity: 1 }, speed*4, 'elastic');
				title.stop().animate({ opacity: 0 }, speed, '>', function(){
					title.attr({ text: defaultText }).animate({ opacity: 1 }, speed, '<');
				});	
            });
        }   
    };
}
