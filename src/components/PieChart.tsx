import styled from "styled-components";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { roundToDp } from "../app/lib/formatting";

ChartJS.register(ArcElement, Tooltip, Legend);

interface ChartProps {
  width?: string;
}

const StyledPieChart = styled.div`
  position: relative;
  display: flex;
  width: ${(props: ChartProps) => props.width || "30rem;"};

  /* canvas {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  } */
`;

interface Props {
  labels: string[];
  data: number[];
  width?: string;
}

const PieChart = ({ labels, data, width }: Props) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: "Token breakdown",
        data,
        backgroundColor: ["#F8F8F8", "#85B6FF", "#FFD234", "#D99BFF"],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
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
