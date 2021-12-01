import react, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
function Paginate() {
    const [item,setitem] = useState([]);
    const handlepageclick = (data) =>{
console.log(data.selected);
    }
    return (
        <div>
            this is sujith
            <ReactPaginate previousLabel={'<<'}
                nextLabel={'>>'}
                breakLabel={'...'}
                pageCount={'15'}
                marginPagesDisplayed={3}
                pageRangeDisplayed={6}
                onPageChange={handlepageclick}
                containerClassName = {'pagination justify-content-center'}
                pageClassName = {'page-item'}
                pageLinkClassName = {'page-link'}
                previousClassName = {'page-item'}
                previousLinkClassName = {'page-link'}
                nextClassName = {'page-item'}
                nextLinkClassName = {'page-link'}
                breakClassName = {'page-item'}
                breakLinkClassName = {'page-link'}
                activeClassName = {'active'}
            />
        </div>

    );


}

export default Paginate;