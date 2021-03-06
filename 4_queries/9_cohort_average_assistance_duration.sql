SELECT AVG(sums.total_duration) AS sum
FROM (
  SELECT cohorts.name, SUM(completed_at - started_at) AS total_duration
  FROM assistance_requests
  JOIN students ON students.id = assistance_requests.student_id
  JOIN cohorts ON cohorts.id = cohort_id
  GROUP BY cohorts.name
  ORDER BY total_duration
) AS sums
