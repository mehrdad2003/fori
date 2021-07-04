import React from 'react'
import {social} from '../data/data'
const Social = () => {
    return (
        <div className="social">
              {social.map((item)=>{
                  return <div key={item.id}>
                      <a href={item.url}>
                          {item.icon}
                      </a>
                  </div>
              })}
          </div>
    )
}

export default Social
