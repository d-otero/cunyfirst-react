import React from 'react';
import './AllCards.scss';
import CardName from './Card/CardName';
import CardSmall from './Card/CardSmall';
import courses from './courses';
import coursePlanner from './coursePlanner';
import holds from './holds';
import todo from './todo';

function CardMaster(props) {
    return (
      <div className='card__master'>
        {props.children}
      </div>
    )
  }

export default class AllCards extends React.Component {
    constructor(props) {
        super(props) 
        this.cardName = props.cardName;
      } 

    
    render() {
        return (
            <div className="card__container">
              <CardMaster>
                  <CardName cardName={`Courses: Spring 2019`} />
                  <Courses />
            </CardMaster>

              <CardMaster>
                  <CardName cardName={`Course Planner`}/>
                  <CoursePlanner />
            </CardMaster>
          
            
            {/* <CardMaster>
                    <CardName cardName={`To-Do`}/>
                    <Holds />
            </CardMaster>
            
            <CardMaster>
                    <CardName cardName={`To-Do`}/>
                    <Holds />
            </CardMaster> */}

            <CardMaster>
                    <CardName cardName={`To-Do`}/>
                    <Holds />
            </CardMaster>
            
            <CardMaster>
                    <CardName cardName={`Holds`}/>
                    <ToDo />
            </CardMaster>

            
            </div>
        )
    }
}



function Courses() {
    return courses.map((course) => <CardSmall key={course.id} className={course.className} heading={course.heading} primary={course.time} secondary={course.building} cta="CTA"/>)
}
  
function CoursePlanner() {
    return coursePlanner.map((course) => <CardSmall key={course.id} className={course.className} heading={course.heading} primary={course.time} secondary={course.building} cta="CTA"/>)
  }
  
function Holds() {
  return holds.map((hold) => <CardSmall key={hold.id} className={hold.className} heading={hold.heading} primary={hold.hold} cta="CTA"/>)
}

function ToDo() {
  return todo.map((hold) => <CardSmall key={hold.id} className={hold.className} heading={hold.heading} primary={hold.hold} cta="CTA"/>)
}