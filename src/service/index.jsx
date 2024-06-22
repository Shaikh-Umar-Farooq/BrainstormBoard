export const upvote=(id)=>{
    const votes=localStorage.getItem('votes')?
    JSON.parse(localStorage.getItem('votes'))
    :{
        upvote:[],
        downvote:[]
    }

    if(votes.upvote.indexOf(id)!==-1)
    {
        return false;
    }
    votes.upvote.push(id);
    const downvotes=votes.downvote?.filter((item)=>item!=id);

    votes.downvote=downvotes;
    localStorage.setItem('votes',JSON.stringify(votes));
    return true;
}

export const downvote=(id)=>{
    const votes=localStorage.getItem('votes')?
    JSON.parse(localStorage.getItem('votes'))
    :{
        upvote:[],
        downvote:[]
    }

    if(votes.downvote.indexOf(id)!==-1)
    {
        return false;
    }
    votes.downvote.push(id);
    const upvotes=votes.upvote?.filter((item)=>item!=id);

    votes.upvote=upvotes;
    localStorage.setItem('votes',JSON.stringify(votes));
    return true;
}

export const checkisalreadyupvoted=(id)=>{
    const votes=JSON.parse(localStorage.getItem('votes'))
    return votes.upvote.find(item=>item==id);
}
export const checkisalreadydownvoted=(id)=>{
    const votes=JSON.parse(localStorage.getItem('votes'))
    return votes.downvote.find(item=>item==id);
}
