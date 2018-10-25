UPDATE profile SET
batch_id = $1,
match = $2
WHERE pair_id = $3;