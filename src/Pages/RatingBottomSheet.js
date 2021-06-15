import React, { Fragment, useEffect, useState } from 'react';
import Axios from 'axios';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import RatingPageNew from './RatingPageNew';
import RatingPage from './RatingPage';
// const value = 5

export default function RatingBottomSheet({ setShowRatingModal, type, id }) {

  const [questionLength, setQuestionLength] = useState(0);
  const [answerLength, setAnswerLength] = useState(0);

  return (
    <Fragment>
      <div
        onClick={() => { setShowRatingModal(false) }}
        style={{
          height: '100vh',
          width: '100vw',
          backgroundColor: '#22222244',
          position: 'fixed',
          left: 0,
          top: 0,
          zIndex: 150,
          transition: 0.5
        }}></div>
      <div style={{
        height: 'auto',
        width: '100vw',
        backgroundColor: 'white',
        position: 'fixed',
        left: 0,
        bottom: 0,
        zIndex: 200
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p style={{color:'#219a53', marginLeft:15}}>Rating</p>
          <p onClick={() => { setShowRatingModal(false) }} style={{ padding: '0px 10px', color: '#219a53' }}>x</p>
        </div>
        <div style={{ margin: '5% 35%' }}>
          <CircularProgressbarWithChildren value={answerLength} maxValue={questionLength} strokeWidth={2}
            styles={buildStyles({
              pathColor: '#219A53'
            })}>
            <img src={require('../assets/review@3x.png')} style={{ width: '60%', height: '60%' }}></img>
          </CircularProgressbarWithChildren>
        </div>
        <RatingPageNew type={type} id={id} setShowRatingModal={setShowRatingModal}
          setQuestionLength={setQuestionLength}
          setAnswerLength={setAnswerLength}
        />
      </div>
    </Fragment>
  )
}