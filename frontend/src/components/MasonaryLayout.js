import React from 'react';
import Masonry from 'react-masonry-css';
import Pin from './Pin';

const breakpointColumnsObj = {
  default: 4,
  3000: 6,
  2000: 5,
  1200: 3,
  1000: 2,
  500: 1,
};//``.S
//ofofrudeboy..galanightthisSMACHINEEIS SD FREEZING

 const MasonryLayout = ({ pins }) => (
   <Masonry className="flex animate-slide-fwd" breakpointCols={breakpointColumnsObj}>
     {pins?.map((pin) => <Pin key={pin._id} pin={pin} className="w-max" />)}
   </Masonry>
);

export default MasonryLayout;







//  CREATE TRIGGER updateaccount
//      before
//      insert
//      on account
//      FOR EACH ROW
//      BEGIN
//      DECLARE amount INT default 0;
//      DECLARE tAmount INT default 0;
//      DECLARE tTYPE varchar(12);
//      SET tTYPE = (SELECT tType from transaction);
//      SET tAmount = (SELECT tAmount from transaction);
//      IF(tTYPE = 'deposit' ) THEN
//      SET new.amount =tAmount + new.amount;
//      ELSE
//      SET new.amount = tAmount - new.amount;
//      END
    