UPDATE hospitals SET
hopsital_name = $1,
hospital_phone = $2,
hospital_address = $3
WHERE hospital_id = $4;