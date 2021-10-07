import React from 'react';
import PostListItem from '../post-list-item'; 
import './post-list.css'; 

const PostList = ({posts}) =>{

    const elements = posts.map((item)=>{
        const {id, ...itemProps} = item; 
        return(
            <li key = {id} className ='list-group-item'>

                {/* stari standard, metod  1   */}
                {/* <PostListItem 
                label = {item.label} 
                important = {item.important} />  */}

                {/* novi standard, metod  2   */}
                <PostListItem {...itemProps} /> 

            </li>
        )
    })

    return(
            // important, po defaultu = true // 
        <ul className='app-list list-group'>
            {elements}
        </ul>
    )
}

export default PostList; 