import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const SingleNews = ({ singleNews }) => {
    const { details, image_url, author, others_info, rating, title, total_view, _id } = singleNews;
    return (
        <div className='my-3'>
            <div className='flex h-20 bg-[#F3F3F3] my-4  items-center gap-5'>
                <img className='w-10 h-10 ml-2 rounded-full' src={author.img} alt="" />
                <div >
                    <p>{author.name}</p>
                    <p>{author.published_date}</p>
                </div>
            </div>
            <h1>{title}</h1>
            <img src={image_url} alt="" />
            {
                details.length > 200 ? <p>{details.slice(0, 200)}<Link to={`/news/${_id}`} className='text-lg font-semibold text-blue-500'>Read More .....</Link></p>
                    : <p>{details}</p>
            }
        </div>
    );
};
SingleNews.propTypes = {
    singleNews: PropTypes.object,
}
export default SingleNews;