import React from 'react';
import { CirclePlus, CircleMinus } from 'lucide-react';

const FaqCard = ({ question, answer, isActive, onToggle }) => {
  return (
    <div className='border-b-[1px] border-black mt-2 p-3'>
      <div className='flex justify-between cursor-pointer' onClick={onToggle}>
        <h3 className='font-bold'>{question}</h3>
        <button onClick={onToggle}>
          {isActive ? <CircleMinus /> : <CirclePlus />}
        </button>
      </div>
      {isActive && (
        <div className='visible mt-2 cursor-pointer' onClick={onToggle}>
          {answer}
        </div>
      )}
    </div>
  );
};

export default FaqCard;
