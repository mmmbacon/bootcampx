SELECT teachers.name AS teacher_name, COUNT(*) AS total_assistance_requests
FROM assistance_requests
JOIN teachers
ON teacher_id = teachers.id
WHERE teachers.name = 'Waylon Boehm'
GROUP BY teachers.name;

