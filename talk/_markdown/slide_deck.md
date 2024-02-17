
## Welcome

:::{.columns}  
::::{.column width=59%}

- Please grab a pencil/pen and paper.  (Reflection afterwards)
- Please go to github for code
  - Download [the repo](https://github.com/ejboettcher/gemcityML-No-CodeAI)

::::  
::::{.column width=39%}

![github](./img/qrcode_github.com.png)


::::  
:::

## ML with Teachable Machines

### First

Let's get in the right mindset.

- We are all learners and we are all teachers.
    - please, ask and give help as needed
- Everyone here is valued and respected
- Got Stuck:
   - Break it up and try again
- This is an intro (e.g. Taste / sample of a technical skills)
   - Want to build a more powerful app or dig deeper
        - Go to [Tensorflow website](https://codelabs.developers.google.com/tensorflowjs-transfer-learning-teachable-machine#0)



## About Me

Evelyn J. Boettcher

:::{.columns}
::::{.column width=45%}

![Evelyn Boettcher](./img/Boettcher_C17.jpeg)

::::
::::{.column width=5%}
::::
::::{.column width=49%}
 
- Mom
- Loves to sew and cook
- I speak one language well and that is python!
- Trained Physicist  ( I have a Master's degree)
- I like to make things
   - Patents 
   - IoT devices in running my house 
- Member of GemCity.TECH and Google Women Techmaker Ambassador

::::
:::


## Today's Goal

:::{.columns}
::::{.column width=49%}

- Train a **model** to classify hand gestures
  - Learn what a classifier is
- Use **conditional statements** to turn those classes into and emoji
- Build a Web application

::::
::::{.column width=49%}

![demo](./img/demo.png)
![demo](./img/conditional.png)

::::
:::

---

### Demo  

<br>  

Let's check it out.  

<br>

:::{.columns}
::::{.column width=59%}

- [Final Site](https://ejboettcher.github.io/gemcityML-No-CodeAI/application_demo/index.html): Web app
- [Demo Code](https://github.com/ejboettcher/gemcityML-No-CodeAI/tree/main/docs/application_demo): Code that runs web app
- [Student Code](https://github.com/ejboettcher/gemcityML-No-CodeAI/tree/main/docs/student_application_starter): Student Starter code


### Copy Code

All code is located on ejboettcher's github site.  

<br>  

https://github.com/ejboettcher/gemcityML-No-CodeAI  
<br>  


Student code is located in this folder:

- docs/student_application_starter  


::::
::::{.column width=39%}

![github](./img/qrcode_github.com.png)


::::
:::

## Classifications and Models:

We are going to build a model that classifies between two (or more) classes.  
<br>  

### Classification

A category into which something is put.  
<br>

#### Model

Tries to predict the correct label of a given input data.  
The model is  trained using the training data, and then it is evaluated on test data.



## Classification

:::{.columns}
::::{.column width=59%}

Your task is to group monkeys into two classes:

- **Class_1**: Biting Monkey
- **Class_2**: Non-Biting Monkeys  

<br>

Materials: Each group gets one set of [blue monkey](./data/monkey_cards.pdf) carts

<br>  
<br>

### Classification: Challenge

* Develop a rule to define: Biting and NonBiting
* Separate your codes by that rule
* Repeat until all of your cards can follow your rule.

::::
::::{.column width=39%}

![](./img/biting_monkey.jpg)

Image from [Huffington Post](https://www.huffpost.com/entry/baby-monkey-misses-mother_n_99700/amp).

::::
:::


:::{.columns}
::::{.column width=25%}

::::
::::{.column width=49%}
 

| **Class_1**: Biting | **Class_2**: Non Biting |
|:----     |:----  |
|  card c   |  card d  |
|  card a  | card b   |
|  ...  |  ...  |
 
::::
::::{.column width=24%}

::::

:::

---

### Classification: Wrap up

* What Rule did you use to determine which **class** the Monkey belongs to?

* Does your model hold up?

:::{.columns}
::::{.column width=59%}

![Visual](./img/bite_nonbite_monkey.png)


- **Class_1**= Biting Monkey
- **Class_2**= Non-Biting Monkeys



::::
::::{.column width=39%}

![Rule](./img/bite_rule_node.png)

::::
:::

---

<br>

### Classification: Share Out

**Model**: The set of rules and steps to make a prediction

What is your group's **model** for classifying monkeys?

- **Class_1**: Biting Monkey
- **Class_2**: Non-Biting Monkeys  
  
<br>  
<hr>
<br>

### Classification: Man vs Machine

In this monkey example, we (human) could infer the **model** (set of rules). Software Engineering is when a human makes a rule that the machine follows.  


Most Machine learning classifiers, the "rules" of the **model** are unknown to us.  We only get hte output of the machine assigned classes.  Machine learning is when the machine creates the rules for the machine to follow.  

## Machine Learning

Video by OxfordSparks:

{{< video https://www.youtube.com/watch?v=f_uwKZIAeM0 >}}

## Break

Before we get to building our machine learning model,
lets take a break.

- Stand up
- Stretch
- Walk Around
- Get some water

## Building a ML Model

There are three basic steps to building a model  

:::{.columns}

::::{.column width=49%}


- Train the model
- Export the model
- Use the model
- Forth Step: Repeat  

<br>


 
### Why a forth step

Your model, app etc will not work the first time. 
::::
::::{.column width=49%}

![computer_fire](./img/computer_on_fire.png)
::::

:::
---

### Train the Model


:::{.columns}
::::{.column width=49%}
- Google ["Teachable Machine"](https://teachablemachine.withgoogle.com/)
  - Click **Get Started**
  - Click **Image Project**  (standard model)
- Rename `Class_1`: Thumbs Up
- Add Image Samples by, clicking Webcam
- Put **only your hand** in the webcam
    - Make a **thumbs up** sign
    - Click record
    - repeat, with hand in **new** parts of screen
- Repeat with a new class: Thumbs Down
- Click **Train Model**
- Test the accuracy of your model: Record more images if needed
::::
::::{.column width=49%}

![Teachable Machine](./img/Teachable_splashpage.png)

::::
:::

---

### Export the Model

- In Teachable Machine, click **Export Model**
- Then click Upload my model
- click Copy
- Leave tab open (may need to retrain)

---

### Use the Model

- In a new tab, go to 
    - [Student Code](https://github.com/ejboettcher/gemcityML-No-CodeAI/tree/main/docs/student_application_starter)
    - Download *student_application_starter*
    - OR *fork* code
- Open `my_model.js` using any IDE.  Github has an online IDE
    - Popular IDES
        - VS-Code
        - CodePen
        - Github 
- Update the URL in the `my_model.js`  (line 5) 
- Run and test your app  

<br>
<hr>  
<br>

#### Running and Testing

WOW, this is a hard step.  

- We can edit and run it in Github (fork code).
- [Codepen.io](https://codepen.io/pen/)
    - Let's use Codepen.io
- Or run it on our computer
    - ```python -m http.server```
        - must use localhost:8000  

---

### Stretch Goals

<br>  

| Level | Goal  |
|:--    |:--------- |
| **Mild**  | Add a third class to your model | 
| **Hot**   | Add another `else if` to the my_model.js |
| **Spicy** | The application can not handle when there is no gestures. Can you fix that within the application or model |
|**Insanity** | Update the css to make it look nice |


## Stretch Goals: 
### Conditional Statements 

`if` this is *true* then, `else` do this.

<br>

if **you are in 9th grade**  (the condition)  

<br>

- Raise your hand

**else**  
<br>

- Fold your hands on your desk

<br>

All computer programs have the ability to do an if/else (conditional) statements.

## Javascript Syntax

We will be using a computer language called `Javascript`.


**Syntax** is the rules that control the structure of the symbols, punctuation, and words of a programming language.  
<br>  
<hr>
<br>  

### Single condition: syntax (if/else)

What structure do you see.

```javascript
if (condition){
    \\ Do this
} else {
    \\ Do this
}
```

---

### Multiple condition: 
#### Syntax (if/else if / else)

:::{.columns}
::::{.column width=49%}

```javascript
if (condition){
    \\ Do this action
}else if (condition){
    \\ Do this action 2
} else {
    \\ Do this action 3
}

```

::::
::::{.column width=49%}

<br>

With more than one condition (checking for true), use `else if`.

::::
:::

<br> 

#### Google is your friend

When stuck, google.  Stack overflow is your best friend

- Include language: javescript
- What you are trying to do: if statement

Example: `javescript if statement`


## Student's ML Gesture Demo

- Show your working app
- Show us the code
- Explain your process

### Next Steps

- What you want to do next?
- How could you use a teachable machine in your home or school
    - Teacher's 3rd eye app: bad hand gesture detector?
    - Crowd engagement
    - Porch pirate detector
- What steps and obstacle would you have to master.

### Learn more

- [Coding Train](https://thecodingtrain.com/tracks/ml5js-beginners-guide): for more Javascript Machine Learning projects
- [AI4All](https://ai-4-all.org/)free AI programs for US-based  high school and college students



## Acknowledgements

* AI Unplugged: Monkey cards
* Google Women Techmakers

Workshop is based on 

* [Nicki Anselmo WTM workshop for CS 2023](https://docs.google.com/presentation/d/1utfeQZ3c7e5pZBAiz_FoNOwf5UhHRwSLmiRNtk7IAqE/edit?resourcekey=0-0dTtFB9sPOpUlazCgFpmfQ#slide=id.gf9e14153cd_0_9)