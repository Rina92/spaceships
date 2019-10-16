import React from 'react' ;
import { ReactComponent as Linkphoto}from './linkphoto.svg' ;

const Card = ({badge, name, type, d, details, id, link}) => {
     var date = d.substring(5,7)+'/'+d.substring(8,10)+'/'+d.substring(0,4);
     if (details ==null){
       details = 'no details'
     }

    return (
      <div>
        <div className="dt dt--fixed allaround">
            <div className="dt-row ">
              <div className=' fl w-10 pa2'>
                <img src= {badge} style={{width: 25, height: 25 }} ></img>
              </div>
              <div className=' fl w-10 pa2  small'>{name}</div>
              <div className='fl w-10 pa2  small'>{type}</div>
              <div className='fl w-10 pa2 small'> { date}</div>
              <div className='fl w-40 pa1  small ' >
                {details}
              </div>
              <div className='fl w-10 pa2 '>{id}</div>
              <div className='fl w-10 pa2 '>
                <a href = {link} target ='_blank'>
                  <Linkphoto  className ='linkphoto'/>
                </a>
              </div>
            </div>
           </div>
          <br></br>
         
      </div>
          
    );
}
export default Card;