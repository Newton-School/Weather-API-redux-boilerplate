import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setCity,
  selectCity,
  selectTodayWeather,
  weatherSearch,
  selectError,
  selectLoading
} from './weatherSlice';
import { Alert, Card, ListGroup, Spinner } from 'react-bootstrap'


export function Weather() {
  const city = useSelector(selectCity);
  const loading = useSelector(selectLoading);

  const searchError = useSelector(selectError)
  const todayWeather = useSelector(selectTodayWeather);
  const dispatch = useDispatch();



  return (
    <div className="m-5">
      <div><label>
        Pick your favorite flavor:
          <select value={city} onChange={(e) => dispatch(setCity(e.target.value))}>
          <option value="mumbai">Mumbai</option>
          <option value="chennai">Chennai</option>
          <option value="delhi">Delhi</option>
          <option value="kolkata">Kolkata</option>
          <option value="unnlm">unnlm</option>

        </select>
      </label>

        <button onClick={() => { console.log('1'); dispatch(weatherSearch(city)) }}>
          Search
      </button>
        <div>
          {searchError ? <Alert variant="warning">{searchError}</Alert> : null}
        </div>
      </div>
      <div>
        {!loading ?
          <div className="col offset-3 col-6">
            {
              todayWeather ? <Card>
                <Card.Body>
                  <Card.Title>{`Weather of the city `}</Card.Title>  <ListGroup variant="flush">{Object.keys(todayWeather).map((key) => <ListGroup.Item key={key} > <strong>{key} </strong> {todayWeather[key]}</ListGroup.Item>)}</ListGroup></Card.Body>
              </Card> : null}
          </div> :
          <div className="col offset-3 col-6"><Spinner animation="border" role="status">
          </Spinner>  Loading...</div>
        }
      </div>
    </div >
  );
}
