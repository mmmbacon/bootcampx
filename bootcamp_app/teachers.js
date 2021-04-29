const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohort = `%${process.argv[2]}%`;

const queryString = `
SELECT teachers.name AS teacher_name, cohort.name as cohort_name
FROM assistance_requests
JOIN teachers ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts as cohort ON students.cohort_id = cohort.id 
WHERE cohort.name LIKE $1
GROUP BY teachers.name, cohort.name
ORDER BY teachers.name;
`;

const parameters = [cohort];

pool.query(queryString, parameters)
  .then(res => {
    res.rows.forEach(data => {
      console.log(`${data.cohort_name}: ${data.teacher_name}`);
    });
  });