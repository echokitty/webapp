import styled from "styled-components";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { roundToDp } from "../app/lib/formatting";

ChartJS.register(ArcElement, Tooltip, Legend);

const StyledPieChart = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 20rem;

  canvas {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

interface Props {
  labels: string[];
  data: number[];
}

const PieChart = ({ labels, data }: Props) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: "Token breakdown",
        data,
        backgroundColor: ["red", "pink", "blue", "green"],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "right" as any,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            return `${roundToDp(context.raw, 2).toLocaleString()} ${
              context.label
            }`;
          },
        },
      },
    },
  };

  return (
    <StyledPieChart>
      <Pie data={chartData} options={options} />
    </StyledPieChart>
  );
};

export default PieChart;
