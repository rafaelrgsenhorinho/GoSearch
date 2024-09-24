import React from 'react';
import {Routes, Route, Navigate } from 'react-router-dom';
import {Results} from './Results';

export const Routing = () => {
  return (
    <div className='p-4 mb-2'>
      <Routes>
        <Route exact path="/" element={<Navigate to="/search" replace />} />
        <Route exact path="/search" element={<Results />} />
        <Route exact path="/images" element={<Results />} />
      </Routes>
    </div>
  )
}
