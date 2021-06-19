# datenabhängigkeiten

1. Flow Dependency (read after write): `a=1; b=a; c=b;`
2. Anti Dependency (write after read): `a=1; b=a+1; a=2;`
3. Output Dependency (write after write)
