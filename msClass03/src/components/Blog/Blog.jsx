import PropTypes from 'prop-types';
import Bookmarks from './../Bookmarks/Bookmarks';
import { CiBookmark } from "react-icons/ci";


const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const { title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img src={cover} className='w-full mb-8' alt={`Cover picture of the title ${title}`} />
            <div className="flex justify-between mb-4">
                <div className="flex">
                    <img className="w-14" src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button className='ml-2 text-2xl text-red-600' onClick={() => handleAddToBookmark(blog)}><CiBookmark /></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
            <button onClick={handleMarkAsRead()} className='text-purple-800 font-bold underline'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}


export default Blog;