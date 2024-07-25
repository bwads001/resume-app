export default function WorkWrapper() {
  return (
    <WorkExperience company="" end="" experience="" position="" start="" />
  );
}

export function WorkExperience({
  start,
  end,
  company,
  position,
  experience,
}: {
  start: string;
  end: string;
  company: string;
  position: string;
  experience: string;
}) {
  return (
    <div>
      <div>
        <span>
          {start} - {end}
        </span>
      </div>
      <div>
        <h3>{position}</h3>
        <h5>{company}</h5>
        <span>{experience}</span>
      </div>
    </div>
  );
}
