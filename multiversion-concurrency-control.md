# multiversion-concurrency-control

> Löst das Problem des Konkurrierenden Zugriffs ohne „Locks“

- Daten sind „Immutable“: Schreibzugriffe erzeugen neue Version.

1. **Lesen**: funktioniert immer - eventuell bekomme ich eine „alte“ Version
1. **Schreiben**: Eine Transaktion kennt die dafür gelesene Version des Objekts. Ist diese nicht mehr aktuell wird die
   Transaktion abgebrochen.
