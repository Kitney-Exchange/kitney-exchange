UPDATE matched SET
finished = true
WHERE batch_id = $1;