const rows = [
  {
    label: "Ownership",
    values: ["Changing priorities", "Project-based", "Lack of ownership"],
  },
  {
    label: "Website Expertise",
    values: ["Limited", "Template-driven", "Unreliable"],
  },
  {
    label: "Execution Speed",
    values: ["Slow at scale", "Hard to move fast", "Inconsistent"],
  },
  {
    label: "Costing",
    values: ["High to maintain", "Expensive to retain", "Cheap but risky"],
  },
];

const columns = ["In-house teams", "Agencies", "Freelancers"];

const OptionsSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center leading-tight tracking-tight">
          There's no true{" "}
          <span className="text-gradient">full-stack website growth partner</span>{" "}
          as of today
        </h2>

        <div className="mt-16 md:mt-20 overflow-x-auto">
          <table className="w-full border-collapse" style={{ fontSize: '1.06rem' }}>
            <thead className="bg-card">
              <tr className="border-b border-border/50">
                <th className="text-left font-medium text-foreground py-6 pl-6 pr-4">Key Limitations</th>
                {columns.map((col) => (
                  <th
                    key={col}
                    className="text-center font-medium text-muted-foreground py-6 px-4 min-w-[160px]"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-card">
              {rows.map((row, i) => (
                <tr
                  key={row.label}
                  className={i < rows.length - 1 ? "border-b border-border/50" : ""}
                >
                  <td className="py-6 pr-4 font-medium text-foreground pl-6">
                    {row.label}
                  </td>
                  {row.values.map((val, j) => (
                    <td
                      key={j}
                      className="py-6 px-4 text-center text-muted-foreground"
                    >
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-muted-foreground mt-12 md:mt-16 text-lg md:text-xl lg:text-2xl">
          Each option solves part of the problem, none solve it fully
        </p>
      </div>
    </section>
  );
};

export default OptionsSection;
