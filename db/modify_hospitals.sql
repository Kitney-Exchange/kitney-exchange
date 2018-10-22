UPDATE hospital SET
hopsital_name = $1,
hospital_phone = $2,
hospital_address = $3,
lat = $4,
long = $5,
WHERE hospital_id = $6;