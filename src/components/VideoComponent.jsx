const VideoComponent = () => {
  const movies = Array.from(
    { length: 10 },
    (_, index) => `Movie Sample ${index + 1}`
  );

  // 랜덤 날짜 생성 함수
  const getRandomDate = () => {
    const start = new Date(2024, 0, 1);
    const end = new Date(2024, 11, 31);
    const date = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
    return date.toLocaleDateString(); // 날짜 형식 변환
  };

  return (
    <div className="VideoCP-container1">
      <h2 className="title">Video List</h2> {/* 제목 추가 */}
      <table className="movie-table">
        <thead>
          <tr>
            <th>No .</th>
            <th>Video Title</th>
            <th>Created Date</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td className="movie-title1">{movie}</td>
              <td>{getRandomDate()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <style jsx>{`
        .VideoCP-container1 {
          display: flex;
          flex-direction: column; /* 세로로 배치 */
          justify-content: center;
          align-items: center;
          height: 100vh; /* 화면 높이를 100%로 설정 */
        }
        .title {
          margin-bottom: 10px; /* 제목과 테이블 간격 조정 */
          font-size: 30px; /* 제목 크기 */
          font-color: white;
        }
        .movie-table {
          border-collapse: collapse;
          width: 80%; /* 테이블 너비 설정 */
          text-align: left;
          background-color: rgba(255, 255, 255, 0.9); /* 배경색 */
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        th,
        td {
          padding: 15px;
          border-bottom: 1px solid #ddd; /* 하단 테두리 */
        }
        th {
          background-color: #f4f4f4; /* 헤더 배경색 */
          font-weight: bold;
        }
        .movie-title1 {
          text-decoration: underline; /* 제목에 밑줄 추가 */
          color: black; /* 제목 색상 */
        }
      `}</style>
    </div>
  );
};

export default VideoComponent;
