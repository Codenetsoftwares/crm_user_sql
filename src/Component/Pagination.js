import React, { useEffect } from "react";

const Pagination = ({ handlePage, page, totalPage, totalData, lastPageReminder, perPagePagination }) => {
    let startIndex = Math.min((page - 1) * perPagePagination + 1);
    let endIndex = Math.min(page * perPagePagination, totalData);

    let arr = [];
    const handleAdvancepage = () => {
        let rem, pageNumber = 5;
        for (let i = 1; i <= pageNumber; i++) {
            arr.push(i);
        }
        if (totalPage % 5 === 0) {
            pageNumber = pageNumber + 5;
        }
        else {
            rem = totalPage % 5;
            pageNumber = pageNumber + rem;
        }
        return arr
    }

    // useEffect(() => { handleAdvancepage() }, [])
    // handleAdvancepage()

    console.log(arr)
    return (
        <div className="text-center">
            <h4>
                Showing {startIndex} to {endIndex} of {totalData} entries
            </h4>
            <div className="d-flex justify-content-center">
                <span className={`m-1 `}>
                    <button
                        className={`btn btn-sm btn-primary ${page === 1 ? "disabled" : ""}`}
                        onClick={() => {
                            handlePage(1);
                        }}
                    >
                        First
                    </button>
                </span>
                <span className={`m-1 `}>
                    <button
                        className={`btn btn-sm btn-primary ${page === 1 ? "disabled" : ""}`}
                        onClick={() => {
                            page > 1 && handlePage(page - 1);
                        }}
                    >
                        Previous
                    </button>
                </span>


                {(page === 1 || page === totalPage) ? (
                    <>
                        {page === 1 ? (
                            <>
                                <span className={`m-1 `}>
                                    <button
                                        className={`btn btn-sm btn-primary `}
                                        onClick={() => {
                                            handlePage(page);
                                        }}
                                    >
                                        {page}
                                    </button>
                                </span>
                                <span className={`m-1 `}>
                                    <button
                                        className={`btn btn-sm btn-primary ${(page) === totalPage ? "disabled" : ""}`}
                                        onClick={() => {
                                            handlePage(page + 1);
                                        }}
                                    >
                                        {page + 1}
                                    </button>
                                </span>
                                <span >....</span>
                            </>
                        ) : (
                            <>
                                <span>....</span>
                                <span className={`m-1 `}>
                                    <button
                                        className={`btn btn-sm btn-primary `}
                                        onClick={() => {
                                            handlePage(totalPage - 1);
                                        }}
                                    >
                                        {totalPage - 1}
                                    </button>
                                </span>
                                <span className={`m-1 `}>
                                    <button
                                        className={`btn btn-sm btn-primary`}
                                        onClick={() => {
                                            handlePage(totalPage);
                                        }}
                                    >
                                        {totalPage}
                                    </button>
                                </span>
                            </>
                        )}
                    </>
                ) : (
                    <>
                        {(page === 2 || page === (totalPage - 1)) ? (
                            <>
                                {page === 2 ? (
                                    <>
                                        <span className={`m-1 `}>
                                            <button
                                                className={`btn btn-sm btn-primary`}
                                                onClick={() => {
                                                    handlePage(page - 1);
                                                }}
                                            >
                                                {page - 1}
                                            </button>
                                        </span>
                                        <span className={`m-1 `}>
                                            <button
                                                className={`btn btn-sm btn-primary`}
                                                onClick={() => {
                                                    handlePage(page);
                                                }}
                                            >
                                                {page}
                                            </button>
                                        </span>
                                        <span className={`m-1 `}>
                                            <button
                                                className={`btn btn-sm btn-primary ${(page) === totalPage ? "disabled" : ""}`}
                                                onClick={() => {
                                                    handlePage(page + 1);
                                                }}
                                            >
                                                {page + 1}
                                            </button>
                                        </span>
                                        <span className={`m-1 `}>....</span></>
                                ) : (
                                    <><span className={`m-1 `}>....</span>
                                        <span className={`m-1 `}>
                                            <button
                                                className={`btn btn-sm btn-primary`}
                                                onClick={() => {
                                                    handlePage(page - 1);
                                                }}
                                            >
                                                {page - 1}
                                            </button>
                                        </span>
                                        <span className={`m-1 `}>
                                            <button
                                                className={`btn btn-sm btn-primary`}
                                                onClick={() => {
                                                    handlePage(page);
                                                }}
                                            >
                                                {page}
                                            </button>
                                        </span>
                                        <span className={`m-1 `}>
                                            <button
                                                className={`btn btn-sm btn-primary `}
                                                onClick={() => {
                                                    handlePage(page + 1);
                                                }}
                                            >
                                                {page + 1}
                                            </button>
                                        </span></>)}
                            </>
                        ) : (
                            <>
                                <span className={`m-1 `}>....</span>
                                <span className={`m-1 `}>
                                    <button
                                        className={`btn btn-sm btn-primary`}
                                        onClick={() => {
                                            handlePage(page - 1);
                                        }}
                                    >
                                        {page - 1}
                                    </button>
                                </span>
                                <span className={`m-1 `}>
                                    <button
                                        className={`btn btn-sm btn-primary`}
                                        onClick={() => {
                                            handlePage(page);
                                        }}
                                    >
                                        {page}
                                    </button>
                                </span>
                                <span className={`m-1 `}>
                                    <button
                                        className={`btn btn-sm btn-primary ${(page) === totalPage ? "disabled" : ""}`}
                                        onClick={() => {
                                            handlePage(page + 1);
                                        }}
                                    >
                                        {page + 1}
                                    </button>
                                </span>
                                <span className={`m-1 `}>....</span>
                            </>
                        )}
                    </>
                )}
                <span className={`m-1 `}>
                    <button
                        className={`btn btn-sm btn-primary ${page === totalPage ? "disabled" : ""}`}
                        onClick={() => {
                            handlePage(page + 1);
                        }}
                    >
                        Next
                    </button>
                </span>
                <span className={`m-1 `}>
                    <button
                        className={`btn btn-sm btn-primary ${page === totalPage ? "disabled" : ""}`}
                        onClick={() => {
                            handlePage(totalPage);
                        }}
                    >
                        Last
                    </button>
                </span>
            </div>
        </div >
    );
};

export default Pagination;
