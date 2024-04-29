import { memo, useMemo, useState } from "react";
import styles from "./Pagination.module.scss";

export const Pagination = ({
  page,
  totalPages,
  onPageChange,
}: {
  page: number;
  totalPages: number;
  onPageChange: (val: number) => void;
}) => {
  const [activePage, setActivePage] = useState(page);

  const nextPage = () => {
    if (activePage < totalPages) {
      setActivePage(activePage + 1);
      onPageChange(activePage + 1);
    }
  };

  const prevPage = () => {
    if (activePage > 1) {
      setActivePage(activePage - 1);
      onPageChange(activePage - 1);
    }
  };
  const pageNumbers = useMemo(() => {
    const numbers = [];
    const startPage = Math.max(activePage - 1, 1);
    const endPage = Math.min(activePage + 3, totalPages);

    for (let i = startPage; i <= endPage; i++) {
      numbers.push(i);
    }

    return numbers;
  }, [activePage, totalPages]);
  const handlePageChange = (pageNumber: number) => {
    setActivePage(pageNumber);
    onPageChange(pageNumber);
  };

  return (
    <div className={styles.paginationWrapper}>
      {activePage > 1 ? (
        <button className={styles.paginateButton} onClick={prevPage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            style={{ transform: "rotate(180deg)" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      ) : (
        ""
      )}
      {pageNumbers.map((pageNumber) => (
        <PageItem
          key={pageNumber}
          pageNumber={pageNumber}
          activePage={activePage}
          onPageChange={handlePageChange}
        />
      ))}
      <button className={styles.paginateButton} onClick={nextPage}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
    </div>
  );
};

const PageItem = memo(
  ({
    pageNumber,
    activePage,
    onPageChange,
  }: {
    pageNumber: number;
    activePage: number;
    onPageChange: (val: number) => void;
  }) => {
    const handlePageChange = () => {
      onPageChange(pageNumber);
    };

    return (
      <button
        className={`${styles.paginateButton} ${
          activePage === pageNumber ? styles.active : ""
        }`}
        onClick={handlePageChange}
      >
        {pageNumber}
      </button>
    );
  }
);
