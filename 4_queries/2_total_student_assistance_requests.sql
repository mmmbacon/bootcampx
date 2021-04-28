SELECT name, COUNT(*) AS total_assistances 
FROM assistance_requests
JOIN students ON student_id = students.cohort_id
WHERE students.name = 'Elliot Dickinson'
GROUP BY students.name;