// utils/pagination.js
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useRef, useEffect } from "react";

/**
 * Generates an array of pagination items with smart ellipsis placement
 * @param {number} currentPage - Current active page
 * @param {number} totalPages - Total number of pages
 * @param {number} maxVisible - Maximum number of visible page buttons (default: 7)
 * @returns {Array} Array of page numbers and ellipsis indicators
 */
export const generatePaginationItems = (
  currentPage,
  totalPages,
  maxVisible = 7
) => {
  // If total pages is small, show all
  if (totalPages <= maxVisible) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const items = [];
  const sidePages = Math.floor((maxVisible - 3) / 2); // Reserve space for first, last, and ellipsis

  // Always include first page
  items.push(1);

  // Calculate the range of middle pages to show
  let start = Math.max(2, currentPage - sidePages);
  let end = Math.min(totalPages - 1, currentPage + sidePages);

  // Adjust range if we're near the beginning
  if (currentPage <= sidePages + 2) {
    end = Math.min(totalPages - 1, maxVisible - 2);
  }

  // Adjust range if we're near the end
  if (currentPage >= totalPages - sidePages - 1) {
    start = Math.max(2, totalPages - maxVisible + 3);
  }

  // Add left ellipsis if there's a gap
  if (start > 2) {
    items.push("ellipsis-left");
  }

  // Add middle page numbers
  for (let i = start; i <= end; i++) {
    items.push(i);
  }

  // Add right ellipsis if there's a gap
  if (end < totalPages - 1) {
    items.push("ellipsis-right");
  }

  // Always include last page (if more than 1 page total)
  if (totalPages > 1) {
    items.push(totalPages);
  }

  return items;
};

/**
 * Custom hook for managing URL-based pagination
 * @param {Object} options - Configuration options
 * @param {boolean} options.replace - Use router.replace instead of router.push (default: true)
 * @param {boolean} options.scroll - Enable scroll behavior on navigation (default: false)
 * @returns {Object} Pagination management functions
 */
export const usePaginationWithURL = (options = {}) => {
  const { replace = true, scroll = false } = options;
  const router = useRouter();
  const searchParams = useSearchParams();

  /**
   * Updates the current page in the URL
   * @param {number} newPage - The page number to navigate to
   */
  const updatePage = useCallback(
    (newPage) => {
      const params = new URLSearchParams(searchParams.toString());

      if (newPage === 1) {
        // Remove page param for page 1 to keep URLs clean
        params.delete("page");
      } else {
        params.set("page", newPage.toString());
      }

      const newUrl = `?${params.toString()}`;

      if (replace) {
        router.replace(newUrl, { scroll });
      } else {
        router.push(newUrl, { scroll });
      }
    },
    [router, searchParams, replace, scroll]
  );

  /**
   * Gets the current page number from URL params
   * @returns {number} Current page number (defaults to 1)
   */
  const getCurrentPage = useCallback(() => {
    return parseInt(searchParams.get("page") || "1", 10);
  }, [searchParams]);

  /**
   * Checks if a specific page is the current page
   * @param {number} page - Page number to check
   * @returns {boolean} True if the page is current
   */
  const isCurrentPage = useCallback(
    (page) => {
      return page === getCurrentPage();
    },
    [getCurrentPage]
  );

  /**
   * Gets pagination metadata
   * @param {number} totalPages - Total number of pages
   * @returns {Object} Pagination metadata
   */
  const getPaginationMeta = useCallback(
    (totalPages) => {
      const current = getCurrentPage();
      return {
        currentPage: current,
        totalPages,
        hasPrevious: current > 1,
        hasNext: current < totalPages,
        isFirstPage: current === 1,
        isLastPage: current === totalPages,
      };
    },
    [getCurrentPage]
  );

  return {
    updatePage,
    getCurrentPage,
    isCurrentPage,
    getPaginationMeta,
  };
};

/**
 * Calculates pagination info for displaying result ranges
 * @param {number} currentPage - Current page number
 * @param {number} itemsPerPage - Number of items per page
 * @param {number} totalItems - Total number of items
 * @returns {Object} Pagination calculation results
 */
export const calculatePaginationInfo = (
  currentPage,
  itemsPerPage,
  totalItems
) => {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return {
    startItem,
    endItem,
    totalItems,
    totalPages,
    itemsPerPage,
    currentPage,
    hasItems: totalItems > 0,
    isMultiPage: totalPages > 1,
  };
};

/**
 * Hook for managing pagination state with automatic filter reset
 * @param {Array} filterDependencies - Array of filter values that should reset pagination
 * @returns {Object} Enhanced pagination management
 */
export const usePaginationWithFilters = (filterDependencies = []) => {
  const paginationUtils = usePaginationWithURL();
  const { updatePage, getCurrentPage } = paginationUtils;

  // Use ref to track previous filter values to prevent infinite loops
  const prevFiltersRef = useRef();

  // Reset to page 1 when filters change
  useEffect(() => {
    const currentFilters = JSON.stringify(filterDependencies);
    const prevFilters = prevFiltersRef.current;

    // Only reset if filters actually changed and we're not on page 1
    if (prevFilters && prevFilters !== currentFilters && getCurrentPage() > 1) {
      updatePage(1);
    }

    prevFiltersRef.current = currentFilters;
  }, filterDependencies);

  return {
    ...paginationUtils,
    /**
     * Safe page change that validates the target page
     * @param {number} targetPage - Page to navigate to
     * @param {number} maxPage - Maximum allowed page
     */
    safeUpdatePage: (targetPage, maxPage) => {
      const validPage = Math.max(1, Math.min(targetPage, maxPage));
      if (validPage !== getCurrentPage()) {
        updatePage(validPage);
      }
    },
  };
};

// Example usage patterns and configurations
export const PAGINATION_CONFIGS = {
  // Standard desktop pagination
  desktop: {
    maxVisible: 7,
    itemsPerPage: 6,
  },
  // Mobile-friendly pagination
  mobile: {
    maxVisible: 5,
    itemsPerPage: 6,
  },
  // Large dataset pagination
  enterprise: {
    maxVisible: 9,
    itemsPerPage: 25,
  },
  // Compact pagination for small spaces
  compact: {
    maxVisible: 3,
    itemsPerPage: 10,
  },
};

/**
 * Generates SEO-friendly pagination URLs
 * @param {string} baseUrl - Base URL for pagination
 * @param {number} page - Target page number
 * @param {URLSearchParams} searchParams - Current search parameters
 * @returns {string} Generated URL
 */
export const generatePaginationUrl = (baseUrl, page, searchParams) => {
  const params = new URLSearchParams(searchParams.toString());

  if (page === 1) {
    params.delete("page");
  } else {
    params.set("page", page.toString());
  }

  const queryString = params.toString();
  return queryString ? `${baseUrl}?${queryString}` : baseUrl;
};
