SELECT teachers.name, cohort.name, COUNT(*) AS total_assistances
FROM assistance_requests
JOIN teachers ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts as cohort ON students.cohort_id = cohort.id 
WHERE cohort.name = 'JUL02'
GROUP BY teachers.name, cohort.name
ORDER BY teachers.name;