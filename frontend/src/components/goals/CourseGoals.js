import React from 'react';

import './CourseGoals.css';
import Card from '../UI/Card';
import GoalItem from './GoalItem';
import FA from 'react-fontawesome';

function CourseGoals(props) {
  const hasNoGoals = !props.goals || props.goals.length === 0;

  return (
    <section id='course-goals'>
      <Card>
        <h2>Твоите цели</h2>
        {hasNoGoals && <h2>Не се пронајдени цели. почни да додаваш!</h2>}
        <ul>
          {props.goals.map((goal) => (
            <div style={{display: 'flex'}}>
            <GoalItem
              key={goal.id}
              id={goal.id}
              text={goal.text}
            />
            <FA onClick={() => props.onDeleteGoal(goal.id)} name="trash" size="lg"/>
            </div>
          ))}
        </ul>
      </Card>
    </section>
  );
}

export default CourseGoals;
