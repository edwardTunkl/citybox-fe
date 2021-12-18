import React, { useState } from 'react'
import '../styling/search.css'
import { Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { searchItems, setQuery } from '../redux/actions'
import { useNavigate } from 'react-router'

export default function Search() {
 const dispatch = useDispatch()
 const navigate = useNavigate();


  return (
    <div className="search-field mt-5 ml-5">
       <Form>
          <Form.Control
            size="lg"
            type="text"
            placeholder="Search here... "
            id="smallsearch"
            onChange={(e) => {
              dispatch(setQuery(e.target.value));
              dispatch(searchItems(e.target.value));
            }}
            onClick={() => navigate("/")}
          />
        </Form>
    </div>
  )
}
