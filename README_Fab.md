Login with these credentials:

{
"username": "Xavier Galmed",
"email": "xgalactica@yahoo.com",
"uuid": "my9txxqlhcuticbrq445akdt"
}

Or use Postman to create new users and login with them.

```
curl --location 'https://api.staging.last3lier.xyz/auth' ^
--form 'username="Xavier Galmed"' ^
--form 'email="xgalactica@yahoo.com"' ^
--form 'password="plopinette"'
```

If using the Virtual Box, you may need to launch the DB from the a windows repo (not sure)
