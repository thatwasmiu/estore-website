import { Pagination } from "react-bootstrap";

const TablePagination = ({ page, changePage }) => {
    const handlePagingClick = (e) => {
        changePage(e.currentTarget.getAttribute('value'))
    }
    return (
        <div 
        // style={{ display: "flex", justifyContent: "center" }} 
        className="m-4">
            <Pagination>
                <Pagination.First value={-2} onClick={handlePagingClick} />
                <Pagination.Prev value={-1} onClick={handlePagingClick}/>
                <Pagination.Item className="bg-info text-white" >{page}</Pagination.Item>
                <Pagination.Next value={1} onClick={handlePagingClick}/>
                <Pagination.Last value={2} onClick={handlePagingClick}/>
            </Pagination>
        </div>
    )
}

export default TablePagination;