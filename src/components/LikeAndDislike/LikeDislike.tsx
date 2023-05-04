import React, { useState } from 'react';
import likeImg from "../styles/like_btn_v2.png";

import dontLike from "../styles/dislike_btn_v2.png"
export default function Like(){
  const [like, setLike] = useState(false);

  return(
    <div>
 <button style={{margin: 0, padding: 0}}><img src={likeImg} alt='' style={{width: '50px', height: '50px', padding: 0, border: 'none', cursor: 'pointer', margin: 0}} />
 </button>
 <button style={{margin: 0, padding: 0}}><img src={dontLike} alt='' style={{width: '50px', height: '50px', padding: 0, border: 'none', cursor: 'pointer', margin: 0}} />
 </button>

 </div>
  )
}