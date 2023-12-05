import React from 'react';
import { ReviewData } from '../types';
import { Typography } from '../../../components/Typography';
import { Button } from '../../../components/Elements';

interface ReviewFormProps {
  data: ReviewData;
}

export const ReviewForm: React.FC<ReviewFormProps> = ({ data: { username, phone, country } }) => {
  return (
    <div className="review-page">
      <ul className="review-list mb-6">
        <li>
          <Typography variant="p">Username:</Typography>
          <Typography variant="h6" elementProps={{ className: 'text-white text-align-right' }}>{username}</Typography>
        </li>
        <li>
          <Typography variant="p">Phone:</Typography>
          <Typography variant="h6" elementProps={{ className: 'text-white text-align-right' }}>{phone}</Typography>
        </li>
        <li>
          <Typography variant="p">Country:</Typography>
          <Typography variant="h6" elementProps={{ className: 'text-white text-align-right' }}>{country}</Typography>
        </li>
      </ul>

      <Button size="large" type="submit" variant='secondary' width='full'>
        Complete
      </Button>
    </div>
  );
};