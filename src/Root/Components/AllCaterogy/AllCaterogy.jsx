import PropTypes from 'prop-types';

const AllCategory = ({ allCategory }) => {
    console.log(allCategory)
    return (
        <div>
            <h1 className="font-semibold text-xl mb-3">All Category</h1>
            <h1 className="h-14 flex items-center justify-center font-semibold text-xl bg-[#E7E7E7]">National News</h1>
            {
                allCategory?.map(category => <p key={category.id} className="my-8 text-[#9F9F9F] text-xl font-medium">{category.name}</p>)

            }
        </div >
    );
};

AllCategory.propTypes = {
    allCategory: PropTypes.object,
}

export default AllCategory;