import React from 'react'
import * as S from './styled'
function Profile() {
    return (
          <S.Wrapper>
        
              
        <S.WrapperImage src="https://avatars.githubusercontent.com/u/49686035?v=4" 
        alt="Avatar user"/>
        
      
            <div>
            <h1 >Lucas Fernandes Ramos</h1>
            <h3>user-name</h3>        
            <span>Lucas</span>
            </div>

            <S.WrapperStatusCount>   
        <div>
          <h4>followers</h4>
          <span>2</span>
        </div>
        <div>
          <h4>starreds</h4>
          <span>2</span>
        </div>
        <div>
          <h4>followings</h4>
          <span>2</span>
        </div>
        </S.WrapperStatusCount>
       <div>Usuario</div>  
       <div>Repositorios</div> 
       <div>Starreds</div> 
       </S.Wrapper>

    )
}

export default Profile
