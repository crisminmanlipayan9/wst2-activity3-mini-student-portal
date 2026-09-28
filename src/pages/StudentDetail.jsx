import { useParams, useNavigate, Link } from "react-router-dom";
import { yearLabel } from "../data/students.js";

// Shows ONE student, using the id in the URL (/students/:id).
export default function StudentDetail({ students }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const student = students.find((s) => s.id === id);

  if (!student) {
    return (
      <section>
        <h1>Student not found</h1>
        <p className="lead">
          There is no student with the ID <code>{id}</code>.
        </p>
        <div className="actions">
          <Link to="/students" className="btn btn-primary">Back to students</Link>
        </div>
      </section>
    );
  }

  return (
    <section>
      <h1>Student details</h1>

      <div className="profile">
        <h2>{student.fullName}</h2>
        <dl>
          <dt>Student ID</dt>
          <dd className="id">{student.id}</dd>
          <dt>Email</dt>
          <dd>{student.email}</dd>
          <dt>Course</dt>
          <dd>{student.course}</dd>
          <dt>Year level</dt>
          <dd>{yearLabel(student.yearLevel)}</dd>
        </dl>
        <button className="btn" onClick={() => navigate("/students")}>
          Back to students
        </button>
      </div>
    </section>
  );
}
