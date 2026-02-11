import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", calls: 52, booked: 4 },
  { day: "Tue", calls: 47, booked: 3 },
  { day: "Wed", calls: 61, booked: 5 },
  { day: "Thu", calls: 55, booked: 4 },
  { day: "Fri", calls: 59, booked: 6 },
  { day: "Sat", calls: 43, booked: 1 },
  { day: "Sun", calls: 46, booked: 2 },
];

const OvalDot = (props: any) => {
  // Here we are receiving the props and destructuring the props.
  const { cx, cy, fillColor, strokeColor } = props;
  return (
    <ellipse
      cx={cx} // horizontal pos
      cy={cy} // Vertical pos
      rx={5} // Width
      ry={4} // Height
      fill={fillColor} // Color used
      stroke={strokeColor} // Outline
      strokeWidth={2} // Thickness
    />
  );
};

export default function MyLast7DaysChart() {
  return (
    <div className="w-full h-[240px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ left: -25, bottom: 0, right: 10, top: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="calls"
            stroke="#9B2972"
            strokeWidth={2}
            dot={<OvalDot fillColor="#9B2972" strokeColor="#9B2972" />}
            // Here OvalDot is being called for every dot and some props are internally passed to the component.
          />
          <Line
            type="monotone"
            dataKey="booked"
            stroke="#00A78F"
            strokeWidth={2}
            dot={<OvalDot fillColor="#00A78F" strokeColor="#00A78F" />}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
