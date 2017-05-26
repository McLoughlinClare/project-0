#### Installation and setup

After the title, you should add a section on how to build and run the code. For project one, you might say:

- Download or clone the repo
- `npm i` to install dependencies
- `gulp` to compile the source code and open in browser

> **Note**: You'll need to have `gulp-cli` installed globally
> `npm i -g gulp-cli`
> 
> 

#### Game description

The purpose of this game to help A-level physics students get to grips with the basics of particle physics, covering the basics which students often struggle with but there is not enough time for teachers to go over and over in lessons. The game consits of a basic matching game for the symbols that appear in the topic, a drag and drop excercise for the sorting the properties of different types of particles and finally a definition quiz. The game will return a score for each task and will rate the students ability using a basic traffic light system for each task. Ideal for the student to print off and stick in their books to show progress throughout the topic. 

#### Technologies used


- HTML 5
- SCSS
- JavaScript ES6
- jQuery 3.10
- Gulp
- NPM
- Git & github

### challenges faced:

#####Design
many student resources are often quite childsh, however the purpose of these games and tasks are designed to act as a bridge from school to university, I wanted the tasks to have a grown up, modern and sleek feel to it, but also for the tasks to be approachable and user friendly for a teenager. I did this by using inspiration pictures of CERN in the background, with the future plan of having each different topic having background based on famous scientific landmarks based on that topic. I also opted to use a sans serif font, similar to the ones often used by textbooks and keeping some curved borders, again similar to many leading resources in education. To make the design more sleek and grown up I used muted colour tones and removed curved borders from the main divs.

#####Drag and Drop
I wanted to ensure that each time the student played it would be slight different to ensure that they were not just memorising answers. for this reason I took most questions out of an object and placed them in arrays, shuffled one array, but keeping the answers in the same place, this ensured that the sorting questions will be in a different order each time. 

#####Updating
to make it as easy as possible for the tasks to be updated in the future, the code has been designed to generate the card pile in the game, meaning only the arrays at the top of the game will have to be updated as the curriculum changes. 

#####Scoring
to ensure that students didn't think they had got an answer right when it was wrong, the drag and drop games will only accept right answers, incorrect answers will fall back to their orginal place. for thisreason the first two tasks have their scores calculated based on how long it takes the student to answers, the faster the student is at answering the more confident they are in answering. Therefore for the first two tasks the student's score is calculated by timing how long it takes the student to complete the whole task by using the timestamp method.

### Furture improvements.

I would like to include the following future improvements to this code:

- More levels and tasks covering other areas of A-Level physics.
- A feature that takes into account how many answers the students has already got correct, as well as how long it is taking the student to complete, from there it will customise the students next task based on ability, understanding and speed.
- A tracking feature for both teachers and students, the student feature will allow the student to see what progress they have made over the year, the teacher's tracker will produce a report for the whole class, highlighting students that need extra support and stretching as well as topics which the whole class is struggling in, the feature will also allow teachers to log any interventions that have taken place and will be able to easily print off the report ready for an OFSTED inspection.