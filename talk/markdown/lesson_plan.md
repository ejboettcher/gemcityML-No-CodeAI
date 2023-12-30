## Discover Computer Science: Teachable Machine Workshop

A No / Low Code workshop where students will learn about machine learning (ML) 
and **build** their own ML application.  

* Training the AI/ML model is a NO code exercise.  
* Creating a working web application is a *low* code exercise.  
  * Students will modify a working application for their needs.

### Targeted Grades

4th through 12th

This mainly targets to middle school to elementary.  But there is no age limit on this workshop.

### Slide Deck is located here.

To Do

### Duration

60-90 minutes

### Outcomes / Learning Objectives

* Students will learn about classification 
* How classifications is used in Machine learning (ML)
* How to create their own ml algorithm 
* Create their own application
* Be introduced to computer science.


#### Students will: 

* Explain that machine learning is when computers detect patterns 
* Make their own rules (a model) for describing those patterns 
* Train a machine learning model using Teachable Machine 
* Use conditional statements

<hr>

### Prep

| Item                                            | Qty |
|:------------------------------------------------|:---|
| [Monkey Carts Printed](./data/monkey_class.pdf) | 1 set per group |
| laptop with web camera                          | 1 per group |
| Internet                                        |  |
| Pen and Paper | 1 per student |



## Lesson

Outline:

* Classes and Models (No computers, Need monkey cards)
* Finished Application Demo
* Walk through Teachable machines
* Student build their own application (two classes)
* (stretch) Students build three class application
* (stretch) Students build a nicer application

### Opening (15 min)

**HOOK**  
Show finished application

Ask: How does that work? 

Walk through what a class is.

Give students a set of the **green** monkey cards (from AI Unplugged). Have teams divide their chart paper
into 2: Biting and Non Biting.

Training data (blue paper):

- biting: 1, 2, 3, 4
- non- biting: 5-20
Have them decide which characteristics are for biting monkeys. 

Then show them the test data and see
how well their model did.

Test data (green paper)

- Biting: 22, 23, 24
- Non-biting: 21, 25 - 40


[AI Unplugged](https://www.aiunplugged.org/monkey_game.pdf) has more example in this [paper](./data/monkey_paper.pdf)

### ML Explained (2.5 min)

Overview Video on Machine Learning (~ 2 minutes)

[YouTube](https://www.youtube.com/watch?v=f_uwKZIAeM0)
(very simple explanation)

### Train Model (10 min)

Train Model with Teachable Machines.

* Demo how to train a model on Teachable Machine
* Give students 6-7 minutes to train their own. 
  * Have students go to [Teachable Machine](https://teachablemachine.withgoogle.com/)
  * Click *Get Started* and start an image classification
  * Let students create two class classification for any school acceptable hand jester.
    * Keep the images simple
    * name your classes something descriptive: Cat / Dog
    * Ask how you could account for differences: skin color, jewelry, nail color.

### Run Models (10min)

* Create an exportable link.
  * Show students how to upload their model to a server, copy the url and paste it in the `my_app.js` (line
34) 
* Show students how to add an image to the first “if” condition. (on line 70)
  * Use Wikipedia images search
* (stretch) Ask how the Javascript syntax is different than the Python Syntax


### Closing

* Have each group Demo their application
* Student Refplation: 
  * How could you use ML application in your school, home, car?
  * What would you have to consider when training a model?
* Celebrate: You created a working ML models!  
* Follow-up Resources:
  * [AI Unplugged](https://www.aiunplugged.org/monkey_game.pdf)
  * AI for ALl summer programs
  * [The Code Train](https://thecodingtrain.com/)
  * [Google Tutorial](https://codelabs.developers.google.com/tensorflowjs-transfer-learning-teachable-machine#6)