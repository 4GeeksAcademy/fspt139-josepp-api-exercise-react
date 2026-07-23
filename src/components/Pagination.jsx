export const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {

    const handlePrev = (e) => {
        e.preventDefault();
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = (e) => {
        e.preventDefault();
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePageClick = (e, pageNumber) => {
        e.preventDefault();
        setCurrentPage(pageNumber);
    }

    const maxVisiblePages = 6;
    let startPage = 1;
    let endPage = totalPages;

    // MARCO DE APGINAS ACTIVAS
    if (totalPages > maxVisiblePages) {
        if (currentPage <= 3) {
            startPage = 1;
            endPage = maxVisiblePages;
        }         
        else if (currentPage + 2 >= totalPages) {
            startPage = totalPages - maxVisiblePages + 1;
            endPage = totalPages;
        }         
        else {
            startPage = currentPage - 2;
            endPage = currentPage + 3;
        }
    }
    
    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

	return (
		<div className="m-auto d-flex justify-content-center">
			<ul className="pagination justify-content-center">
                
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>                    
                    <button className="page-link" onClick={(e) => handlePageClick(e, 1)}>« </button>
                </li>
				<li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={handlePrev}>Anterior</button>
                </li>
				
                {/* BUCLE DEL MARCO ACTIVO */}
                {pageNumbers.map(number => (
                    <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                        <button
                            className="page-link" 
                            onClick={(e) => handlePageClick(e, number)}
                        >
                            {number}
                        </button>
                    </li>
                ))}
				
          
				<li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={handleNext}>Siguiente</button>
                </li>                
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={(e) => handlePageClick(e, totalPages)}> »</button>
                </li>

			</ul>
		</div>
	);
};