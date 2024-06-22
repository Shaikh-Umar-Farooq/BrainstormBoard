import { ThumbsDown, ThumbsUp } from 'lucide-react'
import React from 'react'
import { db } from '../../../../utils'
import { Ideas } from '../../../../utils/schema'
import { eq } from 'drizzle-orm'
import { checkisalreadyupvoted,checkisalreadydownvoted, downvote, upvote } from '../../../service'

function IdeaItem({ idea, reFreshData }) {



    const upVoteHandler = async () => {

        if (upvote(idea.id)) {
            const result = await db.update(Ideas)
                .set(
                    {
                        vote: idea.vote + 1
                    }
                )
                .where(eq(Ideas.id, idea.id))
                .returning({ id: Ideas.id });

            if (result) {
                reFreshData();
                console.log('upvoted');
            }
        }
    }
    const downVoteHandler = async () => {
        if (downvote(idea.id)) {

            const result = await db.update(Ideas)
                .set(
                    {
                        vote: idea.vote - 1
                    }
                )
                .where(eq(Ideas.id, idea.id))
                .returning({ id: Ideas.id });

            if (result) {
                reFreshData();
                console.log('downvoted');
            }
        }
    }

    return (
        <div className='my-4'>
            <div className='  p-5 border shadow-sm rounded-lg'>
                <div className='flex justify-between  items-center pb-4'>
                    <h2>{idea?.content}</h2>
                    <div className='flex  flex-col justify-center items-center ml-2'>
                        <div onClick={() => upVoteHandler()} className={`hover:bg-gray-200 rounded-lg p-2 cursor-pointer ${checkisalreadyupvoted(idea.id) && 'bg-gray-200'}`}> <ThumbsUp /></div>

                        <h2 className='font-bold text-lg' >{idea.vote}</h2>
                        <div onClick={() => downVoteHandler()}  className={`hover:bg-gray-200 rounded-lg p-2 cursor-pointer ${checkisalreadydownvoted(idea.id) && 'bg-gray-200'}`}><ThumbsDown /> </div>
                    </div>
                </div>
                <hr />
                <h4 className='font-thin text-xs pt-2'>By @{idea.username}  </h4>
            </div>

        </div>
    )
}

export default IdeaItem