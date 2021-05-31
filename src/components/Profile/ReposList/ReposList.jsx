import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ReactPaginate from "react-paginate";
import ReposItem from './ReposItem/ReposItem';
import './RepoList.css';

const PER_PAGE = 4;
const PREV_ARROW =  <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className = 'prev' fillRule="evenodd" clipRule="evenodd" d="M3.41436 6.00008L7.70726 1.70718L6.29304 0.292969L0.585938 6.00008L6.29304 11.7072L7.70726 10.293L3.41436 6.00008Z" fill="#808080"/>
                    </svg>

const NEXT_ARROW =  <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className = 'next' d="M1 1L6 6L1 11" stroke="#808080" strokeWidth="2"/>
                    </svg>

const ReposList = () => {

    const [currentPage, setCurrentPage] = useState(0);
    const [data, setData] = useState([]);
    const repos = useSelector(state => state.repos.items);

    const handlePageClick = ({ selected: selectedPage }) => {
        setCurrentPage(selectedPage);
    };
    const offset = currentPage * PER_PAGE;
    const pageCount = Math.ceil(data.length / PER_PAGE);

    useEffect(() => setData(repos), [repos])

    return (
        <div className = 'reposList'>
            <div className = 'content'>
                <span>{`Repositories (${repos.length})`}</span>
                <div className = 'list'>{data.slice(offset, offset + PER_PAGE).map(repo => <ReposItem key = {repo.id} repo = {repo} />)}</div>
            </div>
            <ReactPaginate
                previousLabel={PREV_ARROW}
                nextLabel={NEXT_ARROW}
                breakLabel={'...'}
                breakClassName={'break'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
            />
        </div>
    )
}

export default ReposList