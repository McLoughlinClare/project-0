"use strict";function levelOnePlay(){shuffledNumbers=shuffleArray(numbers),cardSlotAssign(slots),cardAssign(numbers),$(".start-button").click(function(){console.log("welcome clicked!"),$("#welcome").hide(10),$("#levelOne").show(500),levelOneStart=(new Date).getTime(),console.log(levelOneStart)}),$(".skip-button").click(function(){$("#levelTwo").show(),$("#levelTwo").animate({opacity:1}),levelTwoPlay()})}function shuffleArray(e){var o=e.slice(0);return o.sort(function(){return Math.random()-.5}),o}function cardSlotAssign(){for(var e=0;e<slots.length;e++)$("<div />",{text:slots[e],"data-position":e+1}).appendTo("#cardSlots").droppable({accept:"#cardPile div",hoverClass:"hovered",drop:handleCardDrop})}function cardAssign(){for(var e=0;e<shuffledNumbers.length;e++)$("<div />",{text:shuffledNumbers[e],"data-position":numbers.indexOf(shuffledNumbers[e])+1}).attr("id","card"+e).appendTo("#cardPile").draggable({containment:"#levelOne",stack:"#cardPile div",cursor:"move",revert:!0})}function handleCardDrop(e,o){var l=$(this).data("position"),r=o.draggable.data("position");console.log(l,r),l===r&&(o.draggable.addClass("correct"),o.draggable.draggable("disable"),$(this).droppable("disable"),o.draggable.position({of:$(this),my:"left top",at:"left top"}),o.draggable.draggable("option","revert",!1),correctCards++,console.log(correctCards)),8===correctCards&&1===turnNumber?(slots=slotsTwo,numbers=numbersTwo,turnNumber++,$("#cardPile").html(""),$("#cardSlots").html(""),levelOnePlay()):16===correctCards&&2===turnNumber?(slots=slotsThree,numbers=numbersThree,turnNumber++,$("#cardPile").html(""),$("#cardSlots").html(""),levelOnePlay()):24===correctCards&&3===turnNumber&&(levelOneEnd=(new Date).getTime(),levelOneScore=Math.round((100-(levelOneEnd-levelOneStart)/1e3)/10),console.log(levelOneScore),$("#levelTwo").show(),$("#levelOne").hide(),console.log("leveltworevealed"),levelTwoStart=(new Date).getTime(),levelTwoPlay())}function levelTwoPlay(){console.log("levelTwoPlay"),console.log($(".unclassifiedParticle")),$(".unclassifiedParticle").draggable({containment:"levelTwo",revert:!0}),$("#mesons").droppable({accept:".mesons",drop:levelTwoDropEvent}),$("#baryons").droppable({accept:".baryons",drop:levelTwoDropEvent}),$("#lepton").droppable({accept:".leptons",drop:levelTwoDropEvent})}function levelTwoDropEvent(e,o){$(this).data("position")===o.draggable.data("position")&&(o.draggable.addClass("correct"),o.draggable.draggable("option","revert",!1),10==++correctClassification&&(levelTwoEnd=(new Date).getTime(),levelTwoScore=Math.round((100-(levelTwoEnd-levelTwoStart)/1e3)/10),console.log(levelTwoScore),console.log("Level Three"),$("#levelThree").show(500),$("#levelTwo").hide(),levelThreePlay(),buttonClick()))}function levelThreePlay(){console.log("start of level 3");var e=questions[round].question,o=questions[round].options[0],l=questions[round].options[1],r=questions[round].options[2];actualAnswer=questions[round].answer,$("div.questions").html(e),$("button.a").html(o),$("button.b").html(l),$("button.c").html(r)}function buttonClick(){$(".roundThree button").click(function(e){$(e.target).attr("class")===actualAnswer&&levelThreeScore++,round<=3?(round++,levelThreePlay()):(console.log("results"),$("div.feedbackOne p").html(levelOneScore),levelOneScore>4&&$(".feedbackOne").addClass("good"),3!==levelOneScore&&4!==levelOneScore||$(".feedbackOne").addClass("average"),levelOneScore<3&&$(".feedbackOne").addClass("bad"),$("div.feedbackTwo p").html(levelTwoScore),levelTwoScore>6&&$(".feedbackTwo").addClass("good"),5!==levelTwoScore&&6!==levelTwoScore||$(".feedbackTwo").addClass("average"),levelTwoScore<5&&$(".feedbackTwo").addClass("bad"),$("div.feedbackThree p").html(levelThreeScore),levelThreeScore>4&&$(".feedbackThree").addClass("good"),3!==levelThreeScore&&4!==levelThreeScore||$(".feedbackThree").addClass("average"),levelThreeScore<3&&$(".feedbackThree").addClass("bad"),console.log("student feedback loading"),$("#studentFeedback").show().animate({opacity:1}))})}console.log("JS loaded");var correctCards=0,turnNumber=1,numbersTwo=["Proton","Neutron","k⁰","π+","π-","K+","K-","π⁰"],numbersThree=["Q","B","S","γ","b","ν","L","e⁰ "],numbersOne=["Proton","Neutron","Electron","Positron","tau","Kaon+","Muon","Pion"],slotsTwo=["uud","udd","ds̄","ūd","d̄u","us̄","ūs","uū"],slotsThree=["Charge","Baryon number","Strangeness","photon","Bottom Quark","neutrino","Lepton number","positron"],slotsOne=["p","n","e","p̄","τ","K+","μ","π⁰"],shuffledNumbers=[],slots=slotsOne,numbers=numbersOne,levelOneStart="",levelOneEnd="",levelOneScore="",levelTwoStart="",levelTwoEnd="",levelTwoScore="",correctClassification=0,questions=[{answer:"a answer-button",question:"the creation of a particle and its anti-particle when a gamma ray photon passes close to a nucleus.",options:["Pair Production","Pair Annihilation","Anti-matter"]},{answer:"c answer-button",question:"What is the charm quark's anti quark?",options:["Up","Top","Strange"]},{answer:"c answer-button",question:"Which particle type consists of quark-antiquark pairs?",options:["Baryon","Lepton","Meson"]},{answer:"a answer-button",question:"When is strangeness not conserved?",options:["weak interaction","electromagnetic force","gravitational force"]},{answer:"b answer-button",question:"Which of the following is not a Lepton?",options:["Muon","Neutron","Tau"]}],levelThreeScore=0,actualAnswer="",round=0;$(levelOnePlay),$("#cardPile").html("");
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjYXJkU2xvdEFzc2lnbiIsInNodWZmbGVkTnVtYmVycyIsInNodWZmbGVBcnJheSIsIm51bWJlcnMiLCJzbG90cyIsImNhcmRBc3NpZ24iLCJsZXZlbE9uZVN0YXJ0IiwiY2xpY2siLCJEYXRlIiwiY29uc29sZSIsImxvZyIsIiQiLCJoaWRlIiwic2hvdyIsImdldFRpbWUiLCJsZXZlbFR3b1BsYXkiLCJhbmltYXRlIiwib3BhY2l0eSIsImFycmF5IiwibmV3QXJyYXkiLCJzbGljZSIsInNvcnQiLCJNYXRoIiwicmFuZG9tIiwiZHJvcCIsImkiLCJsZW5ndGgiLCJ0ZXh0IiwiZGF0YS1wb3NpdGlvbiIsImFwcGVuZFRvIiwiZHJvcHBhYmxlIiwiYWNjZXB0IiwiaG92ZXJDbGFzcyIsImN1cnNvciIsImluZGV4T2YiLCJhdHRyIiwiZHJhZ2dhYmxlIiwiY29udGFpbm1lbnQiLCJzdGFjayIsImhhbmRsZUNhcmREcm9wIiwicmV2ZXJ0IiwiZXZlbnQiLCJ1aSIsImFkZENsYXNzIiwiZGF0YSIsImNhcmROdW1iZXIiLCJjb3JyZWN0Q2FyZHMiLCJ0aGlzIiwidHVybk51bWJlciIsImF0Iiwic2xvdHNUd28iLCJsZXZlbE9uZVBsYXkiLCJudW1iZXJzVGhyZWUiLCJzbG90c1RocmVlIiwibGV2ZWxPbmVFbmQiLCJsZXZlbE9uZVNjb3JlIiwicm91bmQiLCJsZXZlbFR3b1N0YXJ0IiwibGV2ZWxUd29Ecm9wRXZlbnQiLCJwYXJ0aWNsZURpdiIsInBhcnRpY2xlQ2xhc3NpZmljYXRpb24iLCJjb3JyZWN0Q2xhc3NpZmljYXRpb24iLCJsZXZlbFR3b1Njb3JlIiwibGV2ZWxUd29FbmQiLCJsZXZlbFRocmVlUGxheSIsImJ1dHRvbkNsaWNrIiwiYW5zd2VyQiIsImFuc3dlckMiLCJjaG9zZW5RdWVzdGlvbiIsInF1ZXN0aW9ucyIsInF1ZXN0aW9uIiwiYW5zd2VyQSIsImh0bWwiLCJvcHRpb25zIiwiYWN0dWFsQW5zd2VyIiwiYW5zd2VyIiwiJGJ1dHRvbiIsImUiLCJsZXZlbFRocmVlU2NvcmUiLCJudW1iZXJzVHdvIiwibnVtYmVyc09uZSIsInNsb3RzT25lIl0sIm1hcHBpbmdzIjoiWUF5RUVBLFNBQUFBLGdCQUdBQyxnQkFBQUMsYUFBQUMsU0FDQUgsZUFBQUksT0FDQUMsV0FBQUYsU0FTRUcsRUFBQUEsaUJBQWlCQyxNQUFJQyxXQUNyQkMsUUFBUUMsSUFBSUosb0JBTGRLLEVBQUEsWUFBQUMsS0FBQSxJQVFBRCxFQUFBLGFBQUFFLEtBQUEsS0FDRVAsZUFBZ0JDLEdBQWxCQyxPQUF3Qk0sVUFDdEJILFFBQUVELElBQUFKLGlCQUlGUyxFQUFBQSxnQkFBQUEsTUFBQUEsV0FMRkosRUFBQSxhQUFBRSxPQU9ERixFQUFBLGFBQUFLLFNBSktDLFFBQVMsSUFPYkYsaUJBUUMsUUFGRGIsY0FBQWdCLEdBSUQsR0FBQUMsR0FBQUQsRUFBQUUsTUFBQSxFQUlDLE9BUkFELEdBQVNFLEtBQU0sV0FNakIsTUFBQUMsTUFBQUMsU0FBQSxLQUVRSixFQUtGSyxRQUFBQSxrQkFIVSxJQURaLEdBQUFDLEdBQUEsRUFBQUEsRUFBQXJCLE1BQUFzQixPQUFBRCxJQU1EZCxFQUFBLFdBQUFnQixLQUFBdkIsTUFBQXFCLEdBQUFHLGdCQUFBSCxFQUFBLElBQUFJLFNBQUEsY0FDRkMsV0FMS0MsT0FBUSxnQkFPZEMsV0FBQSxVQUNBUixLQUFTbkIsaUJBTUg0QixRQUFBQSxjQUg2SixJQUEvSixHQUFBUixHQUFBLEVBQUFBLEVBQUF4QixnQkFBQXlCLE9BQUFELElBTURkLEVBQUEsV0FBQWdCLEtBQUExQixnQkFBQXdCLEdBQUFHLGdCQUFBekIsUUFBQStCLFFBQUFqQyxnQkFBQXdCLElBQUEsSUFBQVUsS0FBQSxLQUFBLE9BQUFWLEdBQUFJLFNBQUEsYUFBQU8sV0FDRkMsWUFBQSxZQUNEQyxNQUFBLGdCQUNBTCxPQUFTTSxPQUxIQyxRQUFRLElBV1osUUFBQUQsZ0JBQUFFLEVBQUFDLEdBRUVBLEdBQUFBLEdBQWFDLEVBQUFBLE1BQVVDLEtBQUEs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TUEsT0FBQUEsa0JBRUZNLFNBQUFBLHNHQUNBTCxTQUFBQSxrQkFBQUEsb0JBQUFBLGlCQUlBSyxPQUFRLGtCQUNSTCxTQUFBQSx3Q0FDQUcsU0FBUyxLQUFBLE1BQUEsYUFJVEgsT0FBQUEsa0JBQ0FHLFNBQUFBLHlEQUVGQSxTQUFBLFNBQUEsU0FBQSxXQUdFQSxPQUFTLGtCQUVYSCxTQUFBQSxxQ0FDRUssU0FBUSxtQkFBQSx3QkFBQSx5QkF0QlpBLE9BQUEsa0JBdUJJTCxTQUFBQSwwQ0FLQVEsU0FBQUEsT0FBQUEsVUFBQUEsU0FJSkEsZ0JBQUEsRUFISUosYUFBZSxHQUNmbEIsTUFBUSxDQVdWN0MsR0FBQXdDLGNBb0NBeEMsRUFBQSxhQUFNUSxLQUFXRCIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZygnSlMgbG9hZGVkJyk7XG5cbi8vbGV2ZWwgb25lIGNvbnN0YW50cy8vL1xubGV0IGNvcnJlY3RDYXJkcyA9IDA7XG5sZXQgdHVybk51bWJlciA9IDE7XG5cbmNvbnN0IG51bWJlcnNUd28gPSBbJ1Byb3RvbicsICdOZXV0cm9uJywgJ2tcXHUyMDcwJywgJ1xcdTAzQzArJywnXFx1MDNDMC0nLCAnSysnLCdLLScsJ1xcdTAzQzBcXHUyMDcwJ107XG5jb25zdCBudW1iZXJzVGhyZWUgPVsnUScsICdCJywgJ1MnLCAnXFx1MDNCMycsICdiJywgJ1xcdTAzQkQnLCAnTCcsICdlXFx1MjA3MCAnXTtcbmNvbnN0IG51bWJlcnNPbmUgPSBbJ1Byb3RvbicsICdOZXV0cm9uJywgJ0VsZWN0cm9uJywgJ1Bvc2l0cm9uJywgJ3RhdScsICdLYW9uKycsICdNdW9uJywgJ1Bpb24nXTtcblxuY29uc3Qgc2xvdHNUd289IFsndXVkJywgJ3VkZCcsJ2RzXFx1MDMwNCcsJ3VcXHUwMzA0ZCcsICdkXFx1MDMwNHUnLCd1c1xcdTAzMDQnLCAndVxcdTAzMDRzJywgJ3V1XFx1MDMwNCddO1xuY29uc3Qgc2xvdHNUaHJlZSA9IFsnQ2hhcmdlJywgJ0JhcnlvbiBudW1iZXInLCAnU3RyYW5nZW5lc3MnLCAncGhvdG9uJywgJ0JvdHRvbSBRdWFyaycsICduZXV0cmlubycsICdMZXB0b24gbnVtYmVyJywgJ3Bvc2l0cm9uJ107XG5jb25zdCBzbG90c09uZSA9IFsncCcsICduJywnZScsICdwXFx1MDMwNCcsJ1xcdTAzQzQnLCAnSysnLCdcXHUwM0JDJywnXFx1MDNDMFxcdTIwNzAnXTtcblxubGV0IHNodWZmbGVkTnVtYmVycz0gW107XG5sZXQgc2xvdHMgPXNsb3RzT25lO1xubGV0IG51bWJlcnMgPSBudW1iZXJzT25lO1xuXG5sZXQgbGV2ZWxPbmVTdGFydCA9ICcnO1xubGV0IGxldmVsT25lRW5kID0gJyc7XG5sZXQgbGV2ZWxPbmVTY29yZSA9ICcnO1xuXG4vL2xldmVsIHR3byBjb25zdGFudHMvLy8vXG5cbmxldCBsZXZlbFR3b1N0YXJ0ID0gJyc7XG5sZXQgbGV2ZWxUd29FbmQgPSAnJztcbmxldCBsZXZlbFR3b1Njb3JlID0gJyc7XG5cbi8vbGV2ZWwgdGhyZWUgY29uc3RhbnRzLy8vXG5sZXQgY29ycmVjdENsYXNzaWZpY2F0aW9uID0gMDtcbmNvbnN0IHF1ZXN0aW9ucyA9W1xuICB7XG4gICAgYW5zd2VyOiAnYSBhbnN3ZXItYnV0dG9uJyxcbiAgICBxdWVzdGlvbjogYHRoZSBjcmVhdGlvbiBvZiBhIHBhcnRpY2xlIGFuZCBpdHMgYW50aS1wYXJ0aWNsZSB3aGVuIGEgZ2FtbWEgcmF5IHBob3RvbiBwYXNzZXMgY2xvc2UgdG8gYSBudWNsZXVzLmAsXG4gICAgb3B0aW9uczogW2BQYWlyIFByb2R1Y3Rpb25gLCBgUGFpciBBbm5paGlsYXRpb25gLCBgQW50aS1tYXR0ZXJgXVxuICB9LFxuICB7XG4gICAgYW5zd2VyOiAnYyBhbnN3ZXItYnV0dG9uJyxcbiAgICBxdWVzdGlvbjogYFdoYXQgaXMgdGhlIGNoYXJtIHF1YXJrJ3MgYW50aSBxdWFyaz9gLFxuICAgIG9wdGlvbnM6IFtgVXBgLCBgVG9wYCwgYFN0cmFuZ2VgXVxuICB9LFxuICB7XG4gICAgYW5zd2VyOiAnYyBhbnN3ZXItYnV0dG9uJyxcbiAgICBxdWVzdGlvbjogYFdoaWNoIHBhcnRpY2xlIHR5cGUgY29uc2lzdHMgb2YgcXVhcmstYW50aXF1YXJrIHBhaXJzP2AsXG4gICAgb3B0aW9uczogW2BCYXJ5b25gLCBgTGVwdG9uYCwgYE1lc29uYF1cbiAgfSxcbiAge1xuICAgIGFuc3dlcjogJ2EgYW5zd2VyLWJ1dHRvbicsXG4gICAgcXVlc3Rpb246IGBXaGVuIGlzIHN0cmFuZ2VuZXNzIG5vdCBjb25zZXJ2ZWQ/YCxcbiAgICBvcHRpb25zOiBbYHdlYWsgaW50ZXJhY3Rpb25gLCBgZWxlY3Ryb21hZ25ldGljIGZvcmNlYCwgYGdyYXZpdGF0aW9uYWwgZm9yY2VgXVxuICB9LFxuICB7XG4gICAgYW5zd2VyOiAnYiBhbnN3ZXItYnV0dG9uJyxcbiAgICBxdWVzdGlvbjogYFdoaWNoIG9mIHRoZSBmb2xsb3dpbmcgaXMgbm90IGEgTGVwdG9uP2AsXG4gICAgb3B0aW9uczogW2BNdW9uYCwgYE5ldXRyb25gLCBgVGF1YF1cbiAgfVxuXTtcblxubGV0IGxldmVsVGhyZWVTY29yZSA9IDA7XG5sZXQgYWN0dWFsQW5zd2VyID0gJyc7XG5sZXQgcm91bmQgPSAwO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy9lbmQgb2YgY29uc3RhbnRzLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXG4vL3J1biBmdW5jdGlvbiBmb3IgdGhlIGZpcnN0IHRpbWUgZm9yIHR1cm4gMS5cblxuJChsZXZlbE9uZVBsYXkgKTtcblxuZnVuY3Rpb24gbGV2ZWxPbmVQbGF5KCkge1xuICAvLyBTaG93IG9ubHkgdGhlIGZpcnN0IGdhbWUuXG4gIC8vc2hvdyBvbmx5IG9uZSBwYWlyIG9mIGFycmF5cyBhdCBhIHRpbWVcbiAgc2h1ZmZsZWROdW1iZXJzID0gc2h1ZmZsZUFycmF5KG51bWJlcnMpO1xuICBjYXJkU2xvdEFzc2lnbihzbG90cyk7XG4gIGNhcmRBc3NpZ24obnVtYmVycyk7XG5cbiAgLy8gJCgnLmdvLWJ1dHRvbicpLmNsaWNrKCgpID0+IHtcbiAgLy8gICBjb25zb2xlLmxvZygnZ28gY2xpY2tlZCEnKTtcbiAgLy8gICAkKCcjaW5zZXJ0TmFtZScpLmhpZGUoMTApO1xuICAvLyAgICQoJyN3ZWxjb21lJykuc2hvdyg1MDApO1xuICAvLyB9KTtcblxuICAvL3N0YXJ0IGJ1dHRvbiB0byBjb2xsZWN0IHRpbWUgc3RhbXAuXG4gICQoJy5zdGFydC1idXR0b24nKS5jbGljaygoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3dlbGNvbWUgY2xpY2tlZCEnKTtcbiAgICAkKCcjd2VsY29tZScpLmhpZGUoMTApO1xuICAgICQoJyNsZXZlbE9uZScpLnNob3coNTAwKTtcbiAgICBsZXZlbE9uZVN0YXJ0ID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcbiAgICBjb25zb2xlLmxvZyhsZXZlbE9uZVN0YXJ0KTtcblxuICB9KTtcbiAgLy9za2lwIGJ1dHRvbiBmb3IgZGV2ZWxvcG1lbnQgcHVycG9zZXMgb25seS5cbiAgJCgnLnNraXAtYnV0dG9uJykuY2xpY2soKCkgPT4ge1xuICAgICQoJyNsZXZlbFR3bycpLnNob3coKTtcbiAgICAkKCcjbGV2ZWxUd28nKS5hbmltYXRlKCB7XG4gICAgICBvcGFjaXR5OiAxXG4gICAgfSApO1xuICAgIGxldmVsVHdvUGxheSgpO1xuICB9KTtcbn1cblxuLy8gUmVzZXQgdGhlIGdhbWVcbiQoJyNjYXJkUGlsZScpLmh0bWwoICcnICk7XG5cbi8vdG8gc2h1ZmZsZSB0aGUgY2FyZHMgc28gaXQgaXMgZGlmZmVyZW50IGVhY2ggdGltZSBmb3IgdGhlIHBsYXllci5cbmZ1bmN0aW9uIHNodWZmbGVBcnJheShhcnJheSkge1xuICAvLyBmaXNoZXIteWF0ZXMgc2h1ZmZsZVxuICBjb25zdCBuZXdBcnJheSA9IGFycmF5LnNsaWNlKDApO1xuICBuZXdBcnJheS5zb3J0KCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAtIDAuNTtcbiAgfSk7XG4gIHJldHVybiBuZXdBcnJheTtcbn1cblxuLy8gQ3JlYXRlIHRoZSBjYXJkIHNsb3RzXG5mdW5jdGlvbiBjYXJkU2xvdEFzc2lnbigpIHtcbiAgZm9yICggbGV0IGk9MDsgaTxzbG90cy5sZW5ndGg7IGkrKyApIHtcbiAgICAkKCc8ZGl2IC8+JywgeyB0ZXh0OiBzbG90c1tpXSwgJ2RhdGEtcG9zaXRpb24nOiBpICsgMSB9KS5hcHBlbmRUbygnI2NhcmRTbG90cycpXG4gICAgLmRyb3BwYWJsZSgge1xuICAgICAgYWNjZXB0OiAnI2NhcmRQaWxlIGRpdicsXG4gICAgICBob3ZlckNsYXNzOiAnaG92ZXJlZCcsXG4gICAgICBkcm9wOiBoYW5kbGVDYXJkRHJvcFxuICAgIH0gKTtcbiAgfVxufVxuXG4vLyBDcmVhdGUgdGhlIHBpbGUgb2Ygc2h1ZmZsZWQgY2FyZHNcbmZ1bmN0aW9uIGNhcmRBc3NpZ24oKXtcblxuICBmb3IgKCBsZXQgaT0wOyBpPHNodWZmbGVkTnVtYmVycy5sZW5ndGg7IGkrKyApIHtcbiAgICAkKCc8ZGl2IC8+JywgeyB0ZXh0OiBzaHVmZmxlZE51bWJlcnNbaV0sICdkYXRhLXBvc2l0aW9uJzogbnVtYmVycy5pbmRleE9mKHNodWZmbGVkTnVtYmVyc1tpXSkgKyAxIH0pLmF0dHIoICdpZCcsICdjYXJkJytpICkuYXBwZW5kVG8oICcjY2FyZFBpbGUnICkuZHJhZ2dhYmxlKCB7XG4gICAgICBjb250YWlubWVudDogJyNsZXZlbE9uZScsXG4gICAgICBzdGFjazogJyNjYXJkUGlsZSBkaXYnLFxuICAgICAgY3Vyc29yOiAnbW92ZScsXG4gICAgICByZXZlcnQ6IHRydWVcbiAgICB9ICk7XG4gIH1cbn1cbi8vZHJhZ2dpbmcgdGhlIGNhcmRzIHRvIHRoZSByaWdodCBzbG90LlxuZnVuY3Rpb24gaGFuZGxlQ2FyZERyb3AoIGV2ZW50LCB1aSApIHtcblxuICB2YXIgc2xvdE51bWJlciA9ICQodGhpcykuZGF0YSgncG9zaXRpb24nKTtcbiAgdmFyIGNhcmROdW1iZXIgPSB1aS5kcmFnZ2FibGUuZGF0YSgncG9zaXRpb24nKTtcbiAgY29uc29sZS5sb2coc2xvdE51bWJlciwgY2FyZE51bWJlcik7XG4gIC8vIElmIHRoZSBjYXJkIHdhcyBkcm9wcGVkIHRvIHRoZSBjb3JyZWN0IHNsb3QsY2hhbmdlIHRoZSBjYXJkIGNvbG91ciwgcG9zaXRpb24gaXQgZGlyZWN0bHlcbiAgLy8gb24gdG9wIG9mIHRoZSBzbG90LCBhbmQgcHJldmVudCBpdCBiZWluZyBkcmFnZ2VkIGFnYWluXG4gIGlmICggc2xvdE51bWJlciA9PT0gY2FyZE51bWJlciApIHtcbiAgICB1aS5kcmFnZ2FibGUuYWRkQ2xhc3MoICdjb3JyZWN0JyApO1xuICAgIHVpLmRyYWdnYWJsZS5kcmFnZ2FibGUoICdkaXNhYmxlJyApO1xuICAgICQodGhpcykuZHJvcHBhYmxlKCAnZGlzYWJsZScgKTtcbiAgICB1aS5kcmFnZ2FibGUucG9zaXRpb24oIHsgb2Y6ICQodGhpcyksIG15OiAnbGVmdCB0b3AnLCBhdDogJ2xlZnQgdG9wJyB9ICk7XG4gICAgdWkuZHJhZ2dhYmxlLmRyYWdnYWJsZSggJ29wdGlvbicsICdyZXZlcnQnLCBmYWxzZSApO1xuICAgIGNvcnJlY3RDYXJkcysrO1xuICAgIGNvbnNvbGUubG9nKGNvcnJlY3RDYXJkcyk7XG4gIH1cbiAgLy8gSWYgYWxsIHRoZSBjYXJkcyBoYXZlIGJlZW4gcGxhY2VkIGNvcnJlY3RseSBtb3ZlIG9udG8gbmV4dCByb3VuZCwgdW5sZXNzIGZpbmFsIHJvdW5kLCBkaXNwbGF5IHN1Y2Nlc3MgbWVzc2FnZS5cbiAgaWYgKGNvcnJlY3RDYXJkcyA9PT0gOCAmJiB0dXJuTnVtYmVyID09PSAxKXtcbiAgICBzbG90cyA9IHNsb3RzVHdvO1xuICAgIG51bWJlcnMgPSBudW1iZXJzVHdvO1xuICAgIHR1cm5OdW1iZXIrKztcbiAgICAkKCcjY2FyZFBpbGUnKS5odG1sKCAnJyApO1xuICAgICQoJyNjYXJkU2xvdHMnKS5odG1sKCAnJyApO1xuICAgIGxldmVsT25lUGxheSgpO1xuICAgIC8vdG8gdGFrZSBwbGF5ZXIgb250byB0aGUgM3JkIHJvdW5kLlxuICB9IGVsc2UgaWYgKGNvcnJlY3RDYXJkcyA9PT0gMTYgJiYgdHVybk51bWJlciA9PT0gMil7XG4gICAgc2xvdHMgPSBzbG90c1RocmVlO1xuICAgIG51bWJlcnMgPSBudW1iZXJzVGhyZWU7XG4gICAgdHVybk51bWJlcisrO1xuICAgICQoJyNjYXJkUGlsZScpLmh0bWwoICcnICk7XG4gICAgJCgnI2NhcmRTbG90cycpLmh0bWwoICcnICk7XG4gICAgbGV2ZWxPbmVQbGF5KCk7XG4gICAgLy90byBjb21wbGV0ZSBsZXZlbCAxXG4gIH0gZWxzZSBpZiAoIGNvcnJlY3RDYXJkcyA9PT0gMjQgJiYgdHVybk51bWJlciA9PT0gMykge1xuICAgIGxldmVsT25lRW5kID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcbiAgICBsZXZlbE9uZVNjb3JlID0gTWF0aC5yb3VuZCgoMTAwIC0gKChsZXZlbE9uZUVuZCAtIGxldmVsT25lU3RhcnQpLzEwMDApKS8xMCk7XG4gICAgY29uc29sZS5sb2cobGV2ZWxPbmVTY29yZSk7XG4gICAgJCgnI2xldmVsVHdvJykuc2hvdygpO1xuICAgICQoJyNsZXZlbE9uZScpLmhpZGUoKTtcbiAgICBjb25zb2xlLmxvZygnbGV2ZWx0d29yZXZlYWxlZCcpO1xuICAgIGxldmVsVHdvU3RhcnQgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xuICAgIGxldmVsVHdvUGxheSgpO1xuICB9XG59XG5cbi8vRU5EIE9GIExFVkVMIDEvLy8vLy9TVEFSVCBPRiBMRVZFTCAyLy8vLy9cbmZ1bmN0aW9uIGxldmVsVHdvUGxheSgpIHtcbiAgY29uc29sZS5sb2coJ2xldmVsVHdvUGxheScpO1xuICBjb25zb2xlLmxvZygkKCcudW5jbGFzc2lmaWVkUGFydGljbGUnKSk7XG4gICQoJy51bmNsYXNzaWZpZWRQYXJ0aWNsZScpLmRyYWdnYWJsZSh7XG4gICAgY29udGFpbm1lbnQ6ICdsZXZlbFR3bycsXG4gICAgcmV2ZXJ0OiB0cnVlXG4gIH0pO1xuXG4gICQoJyNtZXNvbnMnKS5kcm9wcGFibGUoe1xuICAgIGFjY2VwdDogJy5tZXNvbnMnLFxuICAgIGRyb3A6IGxldmVsVHdvRHJvcEV2ZW50XG5cbiAgfSk7XG4gICQoJyNiYXJ5b25zJykuZHJvcHBhYmxlKHtcbiAgICBhY2NlcHQ6ICcuYmFyeW9ucycsXG4gICAgZHJvcDogbGV2ZWxUd29Ecm9wRXZlbnRcbiAgfSk7XG4gICQoJyNsZXB0b24nKS5kcm9wcGFibGUoe1xuICAgIGFjY2VwdDogJy5sZXB0b25zJyxcbiAgICBkcm9wOiBsZXZlbFR3b0Ryb3BFdmVudFxuICB9KTtcbn1cblxuZnVuY3Rpb24gbGV2ZWxUd29Ecm9wRXZlbnQoIGV2ZW50LCB1aSApIHtcbiAgdmFyIHBhcnRpY2xlRGl2ID0gJCh0aGlzKS5kYXRhKCdwb3NpdGlvbicpO1xuICB2YXIgcGFydGljbGVDbGFzc2lmaWNhdGlvbiA9IHVpLmRyYWdnYWJsZS5kYXRhKCdwb3NpdGlvbicpO1xuICBpZiAocGFydGljbGVEaXYgPT09IHBhcnRpY2xlQ2xhc3NpZmljYXRpb24pe1xuICAgIHVpLmRyYWdnYWJsZS5hZGRDbGFzcyggJ2NvcnJlY3QnICk7XG4gICAgdWkuZHJhZ2dhYmxlLmRyYWdnYWJsZSggJ29wdGlvbicsICdyZXZlcnQnLCBmYWxzZSApO1xuICAgIGNvcnJlY3RDbGFzc2lmaWNhdGlvbiArKztcblxuICAgIGlmICggY29ycmVjdENsYXNzaWZpY2F0aW9uID09PSAxMCkge1xuICAgICAgbGV2ZWxUd29FbmQgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xuICAgICAgbGV2ZWxUd29TY29yZSA9IE1hdGgucm91bmQoKDEwMCAtICgobGV2ZWxUd29FbmQgLSBsZXZlbFR3b1N0YXJ0KS8xMDAwKSkvMTApO1xuICAgICAgY29uc29sZS5sb2cobGV2ZWxUd29TY29yZSk7XG4gICAgICBjb25zb2xlLmxvZygnTGV2ZWwgVGhyZWUnKTtcbiAgICAgIC8vUmV2ZWFsIGxldmVsIHRocmVlIGFuZCBoaWRlIGxldmVsIHR3by5cbiAgICAgICQoJyNsZXZlbFRocmVlJykuc2hvdyg1MDApO1xuICAgICAgJCgnI2xldmVsVHdvJykuaGlkZSgpO1xuXG4gICAgICBsZXZlbFRocmVlUGxheSgpO1xuICAgICAgYnV0dG9uQ2xpY2soKTtcbiAgICB9XG4gIH1cbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9sZXZlbCAzLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuZnVuY3Rpb24gbGV2ZWxUaHJlZVBsYXkgKCl7XG4gIGNvbnNvbGUubG9nKCdzdGFydCBvZiBsZXZlbCAzJyk7XG4gIC8vIGZvciAobGV0IGkgPSAwOyBpPHF1ZXN0aW9ucy5sZW5ndGg7IGkrKyl7XG4gIC8vdG8gZ2VuZXJhdGUgdGhlIHF1ZXN0aW9uIGZvciBlYWNoIHJvdW5kXG4gIGNvbnN0IGNob3NlblF1ZXN0aW9uID0gcXVlc3Rpb25zW3JvdW5kXS5xdWVzdGlvbjtcbiAgY29uc3QgYW5zd2VyQSA9IHF1ZXN0aW9uc1tyb3VuZF0ub3B0aW9uc1swXTtcbiAgY29uc3QgYW5zd2VyQiA9IHF1ZXN0aW9uc1tyb3VuZF0ub3B0aW9uc1sxXTtcbiAgY29uc3QgYW5zd2VyQyA9IHF1ZXN0aW9uc1tyb3VuZF0ub3B0aW9uc1syXTtcbiAgYWN0dWFsQW5zd2VyID0gcXVlc3Rpb25zW3JvdW5kXS5hbnN3ZXI7XG4gIC8vdG8gcHJpbnQgdGhlIHF1ZXN0aW9ucyBhbmQgdGhlIGJ1dHRvbnNcbiAgJCgnZGl2LnF1ZXN0aW9ucycpLmh0bWwoY2hvc2VuUXVlc3Rpb24pO1xuICAkKCdidXR0b24uYScpLmh0bWwoYW5zd2VyQSk7XG4gICQoJ2J1dHRvbi5iJykuaHRtbChhbnN3ZXJCKTtcbiAgJCgnYnV0dG9uLmMnKS5odG1sKGFuc3dlckMpO1xufVxuXG5cbmZ1bmN0aW9uIGJ1dHRvbkNsaWNrKCl7XG4gICQoJy5yb3VuZFRocmVlIGJ1dHRvbicpLmNsaWNrKChlKSA9PiB7XG4gICAgY29uc3QgJGJ1dHRvbiA9ICQoZS50YXJnZXQpO1xuICAgIGNvbnN0IGFuc3dlciA9ICRidXR0b24uYXR0cignY2xhc3MnKTtcblxuICAgIGlmIChhbnN3ZXIgPT09IGFjdHVhbEFuc3dlcil7XG4gICAgICBsZXZlbFRocmVlU2NvcmUrKztcbiAgICB9XG4gICAgaWYocm91bmQgPD0gMykge1xuICAgICAgcm91bmQrKztcbiAgICAgIGxldmVsVGhyZWVQbGF5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdyZXN1bHRzJyk7XG5cbiAgICAgIC8vYXNzaWduaW5nIGNvbG91cnMgdG8gZGl2cyBmb3IgdGhlIHJlc3VsdHNcblxuICAgICAgJCggJ2Rpdi5mZWVkYmFja09uZSBwJyApLmh0bWwobGV2ZWxPbmVTY29yZSk7XG4gICAgICBpZiAobGV2ZWxPbmVTY29yZSA+IDQpe1xuICAgICAgICAkKCcuZmVlZGJhY2tPbmUnKS5hZGRDbGFzcygnZ29vZCcpO1xuICAgICAgfSBpZiAobGV2ZWxPbmVTY29yZSA9PT0gMyB8fCBsZXZlbE9uZVNjb3JlID09PSA0KXtcbiAgICAgICAgJCgnLmZlZWRiYWNrT25lJykuYWRkQ2xhc3MoJ2F2ZXJhZ2UnKTtcbiAgICAgIH0gaWYobGV2ZWxPbmVTY29yZSA8IDMpe1xuICAgICAgICAkKCcuZmVlZGJhY2tPbmUnKS5hZGRDbGFzcygnYmFkJyk7XG4gICAgICB9XG4gICAgICAkKCAnZGl2LmZlZWRiYWNrVHdvIHAnICkuaHRtbChsZXZlbFR3b1Njb3JlKTtcbiAgICAgIGlmIChsZXZlbFR3b1Njb3JlID4gNil7XG4gICAgICAgICQoJy5mZWVkYmFja1R3bycpLmFkZENsYXNzKCdnb29kJyk7XG4gICAgICB9IGlmIChsZXZlbFR3b1Njb3JlID09PSA1IHx8IGxldmVsVHdvU2NvcmUgPT09IDYpe1xuICAgICAgICAkKCcuZmVlZGJhY2tUd28nKS5hZGRDbGFzcygnYXZlcmFnZScpO1xuICAgICAgfSBpZiAobGV2ZWxUd29TY29yZSA8IDUpe1xuICAgICAgICAkKCcuZmVlZGJhY2tUd28nKS5hZGRDbGFzcygnYmFkJyk7XG4gICAgICB9XG4gICAgICAkKCAnZGl2LmZlZWRiYWNrVGhyZWUgcCcgKS5odG1sKGxldmVsVGhyZWVTY29yZSk7XG4gICAgICBpZiAobGV2ZWxUaHJlZVNjb3JlID4gNCl7XG4gICAgICAgICQoJy5mZWVkYmFja1RocmVlJykuYWRkQ2xhc3MoJ2dvb2QnKTtcbiAgICAgIH0gaWYgKGxldmVsVGhyZWVTY29yZSA9PT0gMyB8fCBsZXZlbFRocmVlU2NvcmUgPT09IDQpe1xuICAgICAgICAkKCcuZmVlZGJhY2tUaHJlZScpLmFkZENsYXNzKCdhdmVyYWdlJyk7XG4gICAgICB9IGlmIChsZXZlbFRocmVlU2NvcmUgPCAzKXtcbiAgICAgICAgJCgnLmZlZWRiYWNrVGhyZWUnKS5hZGRDbGFzcygnYmFkJyk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZygnc3R1ZGVudCBmZWVkYmFjayBsb2FkaW5nJyk7XG4gICAgICAkKCcjc3R1ZGVudEZlZWRiYWNrJykuc2hvdygpLmFuaW1hdGUoIHtcbiAgICAgICAgb3BhY2l0eTogMVxuICAgICAgfSApO1xuXG4gICAgfVxuICB9KTtcbn1cbiJdfQ==
