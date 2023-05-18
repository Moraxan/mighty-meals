import './ProfilePage.css';
import { useState, useEffect, useMemo } from "react";
import Card from '../../components/RecipeCard/Card';
import { RecipeFrontST } from '../../components/Interface/Interface';
import { BackButton } from '../RecipePage/BackButton';
import CommentForm from '../../components/Comment/CommentForm';



export const ProfilePage = () => {




  return (
    <div className="profilepage-container">
      <div className="back-btn">
        <BackButton />
      </div>
      <div className="profile-header">
        Profile
      </div>
      <div className="grid-container">
        <div className="likedrecipes">
          <div className="profile-header">
            These are your liked recipes!
          </div>
        </div>
      </div>
    </div> 
    
  );

}

