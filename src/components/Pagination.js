import { Pagination } from "flowbite-react";

export function Pages({ totalPages, setCurrentPage, currentPage }) {
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="my-4 flex justify-center overflow-x-auto md:my-8">
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        showIcons
        nextLabel=""
        previousLabel=""
      />
    </div>
  );
}
