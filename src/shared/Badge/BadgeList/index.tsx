import { IBadgeList } from '@shared/Badge/badge.types';
import React from 'react';
import Badge from '@shared/Badge';

const Index: React.FC<IBadgeList> = ({ badges }) => {

  return (
    <div className="text-lg font-normal text-white mb-4">

      {badges.map((badge, index) => (
        <div className={`flex items-center ${index===badges.length ? '' :'mb-2'}`}>
          <Badge key={index} number={badge.number} boldText={badge.boldText} defaultText={badge.defaultText} />
        </div>
          ))}
        </div>
        );
      };


export default Index