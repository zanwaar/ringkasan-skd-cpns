import React from "react";
import styled from "styled-components";

// Data dummy untuk contoh
interface RankingData {
  name: string;
  score: number;
  duration: string;
}

const dummyData: RankingData[] = [
  { name: "7E4A2B69Fxxx", score: 100, duration: "40s" },
  { name: "68E7A3224xxx", score: 100, duration: "45s" },
  { name: "A7B1F62D2xxx", score: 100, duration: "50s" },
  { name: "B31C78F42xxx", score: 100, duration: "50s" },
  { name: "D32A71F98xxx", score: 100, duration: "55s" },
];

const TableContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: var(--background);
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  min-width: 600px;
`;

const TableHeader = styled.th`
  background-color: var(--header-background);
  color: var(--text-color);
  padding: 10px;
  text-align: left;
  border-bottom: 2px solid var(--border-color);
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: var(--row-background);
  }

  &:hover {
    background-color: var(--row-hover);
  }
`;

const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid var(--border-color);
  text-align: center;
`;

const Title = styled.h2`
  text-align: center;
  color: var(--text-color);
  margin-bottom: 20px;
`;

const RankingList: React.FC = () => {
  return (
      <Table>
        <thead>
          <tr>
            <TableHeader>No</TableHeader>
            <TableHeader>ID Funpice</TableHeader>
            <TableHeader>Nilai</TableHeader>
            <TableHeader>Durasi Waktu</TableHeader>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((data, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{data.name}</TableCell>
              <TableCell>{data.score}</TableCell>
              <TableCell>{data.duration}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
  );
};

export default RankingList;
