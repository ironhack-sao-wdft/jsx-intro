const students = [
  "Anderson",
  "Alexandre",
  "Rafael",
  "Vagner",
  "Kamila",
  "Wagner",
];

function StudentList() {
  return (
    <div>
      <h2>Nossa turma: </h2>

      <ul>
        {students.map((student, index) => {
          const isEven = index % 2 === 0;

          return (
            <li className={isEven ? "even" : ""}>
              {student}
              {isEven ? <span>&#10003;</span> : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default StudentList;
