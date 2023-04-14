export const formatNumber = (x) =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const forrmatMonth = (dateString) => {
  const dateObj = new Date(dateString);

  const month = dateObj.getMonth("default", { month: "short" }) + 1;
  const year = dateObj.getFullYear();

  // Format chuỗi theo dạng "thg 4 2023"
  return `thg ${month} ${year}`;
};

// Hàm format chuỗi ngày tháng
export const formatDateString = (dateString) => {
  const dateObj = new Date(dateString);

  const day = dateObj.getDate();
  const month = dateObj.getMonth("default", { month: "short" }) + 1;
  const year = dateObj.getFullYear();
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();

  // Format chuỗi theo dạng "9 thg 4 2023 11:35"
  return `${day} thg ${month} ${year} ${hours}:${minutes}`;
};
