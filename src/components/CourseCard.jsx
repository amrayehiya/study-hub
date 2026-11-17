
export default function CourseCard({ code, title, credits, level, completed }) {
  return (
    <article className="card">
      <h3>{title}</h3>
      <span className="code">{code}</span>
      <p className="meta">
        Credits: {credits} | Level: {level}
      </p>

      <span className={completed ? 'badge done' : 'badge todo'}>
        {completed ? 'Completed' : 'In progress'}
      </span>
    </article>
  )
}
