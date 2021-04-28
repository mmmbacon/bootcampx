const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohort = process.argv[2];

pool.query(`
SELECT teachers.name AS teacher_name, cohort.name as cohort_name
FROM assistance_requests
JOIN teachers ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts as cohort ON students.cohort_id = cohort.id 
WHERE cohort.name LIKE '%${cohort}%'
GROUP BY teachers.name, cohort.name
ORDER BY teachers.name;
`)
  .then(res => {
    res.rows.forEach(data => {
      console.log(`${data.cohort_name}: ${data.teacher_name}`);
    });
  });