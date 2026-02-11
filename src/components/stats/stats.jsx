import "./stats.css";
import StatsCard from "./StatsCard";


function Stats({ stats }) {
  return (
    <>
      <div className="stats-container">
        <StatsCard text="TOTAL STUDENTS" number={stats.total} />
        <StatsCard text="ONLINE NOW" number={stats.online} />
        <StatsCard text="HONOR ROLL" number={stats.honrol} />
        <StatsCard text="AVG. GRADE" number={stats.averge} />
      </div>
    </>
  );
}

export default Stats;
